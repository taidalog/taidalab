// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2024 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System
open Browser.Dom
open Browser.Types
open Fable.Core
open Fable.Core.JsInterop
open Taidalab.TCPIP
open Fermata

module NetworkSimulator =
    let help =
        """
        <p>
            IP アドレスを用いた通信の簡単なシミュレーションができます。<br>
            「クライアント」や「ルータ」、「ハブ」といったデバイスをマウスでドラッグして配置したり、<br>
            「LAN ケーブル」を伸ばしてデバイス同士を接続したりして通信させることができます。
        </p>
        <p>
            LAN ケーブルの端にカーソルを合わせてドラッグすると、長さや角度を調節できます。<br>
            あまり速く動かすと位置がズレます。ゆっくり動かしてください。<br>
            LAN ケーブルの端がデバイスに重なっていると「繋がっている」と認識します。<br>
        </p>
        <p>
            デバイス同士が LAN ケーブルで繋がっている状態で、「送信元 IPv4」と「送信先 IPv4」を入力して<br>
            「ping」ボタンをクリックすると、通信が成功したかどうかが表示されます。<br>
            通信に失敗した場合は、デバイス同士の接続の仕方を変えてみたり、<br>
            クライアントやルータの IP アドレスをクリックして設定しなおしたりしてください。
        </p>
        <p>
            <span class="material-symbols-outlined symbols18" translate="no">add_circle</span>マークのボタンをクリックすると、デバイスやケーブルを追加できます。
        </p>
        <p>
            デバイスやケーブルをドラッグで動かした後、カーソルから離れなくなった場合は、<br>
            それぞれ以下のようにしてください。<br>
            <ul>
                <li>デバイス→もう一度クリックする</li>
                <li>ケーブル→右クリックする（ケーブルを削除できます）</li>
            </ul>
        </p>
    """

    let main =
        $"""
        <form id="inputArea" class="network-simulator input-area" autocomplete="off">
            <span class="display-order-1 network-simulator shorter">
                <span class="network-simulator input-wrapper">
                    <label for="sourceInput">
                        送信元 IPv4:
                    </label>
                    <input type="text" id="sourceInput" class="number-input display-order-1 mono regular">
                </span>
                <span class="network-simulator input-wrapper">
                    <label for="destinationInput">
                        送信先 IPv4:
                    </label>
                    <input type="text" id="destinationInput" class="number-input display-order-1 mono regular">
                </span>
            </span>
            <span class="display-order-2">
                <button type="submit" id="submitButton" class="submit-button" translate="no">ping</button>
            </span>
        </form>
        <form>
            <button type="button" id="addClientButton" class="submit-button gray display-order-3">
                <span class="icon-vertical-center">
                    <span class="material-symbols-outlined symbols18" translate="no">add_circle</span>
                    クライアント
                </span>
            </button>
            <button type="button" id="addRouterButton" class="submit-button gray display-order-4">
                <span class="icon-vertical-center">
                    <span class="material-symbols-outlined symbols18" translate="no">add_circle</span>
                    ルータ
                </span>
            </button>
            <button type="button" id="addHubButton" class="submit-button gray display-order-5">
                <span class="icon-vertical-center">
                    <span class="material-symbols-outlined symbols18" translate="no">add_circle</span>
                    ハブ
                </span>
            </button>
            <button type="button" id="addLANCableButton" class="submit-button gray display-order-6">
                <span class="icon-vertical-center">
                    <span class="material-symbols-outlined symbols18" translate="no">add_circle</span>
                    LANケーブル
                </span>
            </button>
        </form>
        <div id="errorArea" class="error-area warning"></div>
        <div id="outputArea" class="output-area"></div>
        <div id="playArea" class="play-area"></div>
        <div id="helpWindow" class="help-window">
            <div class="help-close-outer">
                <span id="helpClose" class="material-symbols-outlined help-close network-simulator" translate="no">
                    close
                </span>
            </div>
            %s{help}
        </div>
        """

    let resetTitleOnNameChange (container: HTMLElement) : unit =
        let nameElement = document.getElementById (container.id + "Name")

        nameElement.addEventListener (
            "blur",
            (fun _ ->
                let titleElement = document.getElementById (container.id + "Title")
                titleElement.textContent <- nameElement.innerText)
        )

    let setToQuitEditOnEnter (container: HTMLElement) : unit =
        container.children
        |> (fun x -> JS.Constructors.Array?from(x))
        |> Array.filter (fun (x: HTMLElement) -> x.contentEditable = "true")
        |> Array.iter (fun x ->
            x.onkeydown <-
                (fun event ->
                    if event.key = "Enter" || event.key = "Escape" then
                        x.blur ()))

    let setIPv4Validation (container: HTMLElement) : unit =
        [ "IPv4"; "SubnetMask" ]
        |> List.map (fun x -> x, document.getElementById (container.id + x))
        |> List.iter (fun (identifier, elm) ->
            elm.addEventListener (
                "blur",
                (fun _ ->
                    let ipv4Expression = elm.innerText

                    ipv4Expression
                    |> IPv4.validate
                    |> fun x ->
                        let errorArea = document.getElementById "errorArea"
                        errorArea.innerText <- ""

                        match x with
                        | Ok _ -> ()
                        | Error e ->
                            let name = document.getElementById(container.id + "Name").innerText

                            let validateRangeAll =
                                (String.split '.' >> List.map int >> List.forall (fun x -> x >= 0 && x <= 255))

                            if String.IsNullOrEmpty ipv4Expression then
                                $"%s{name} の %s{identifier} を入力してください。"
                            else if String.IsNullOrWhiteSpace ipv4Expression then
                                $"%s{name} の %s{identifier} を入力してください。"
                            else if Regex.isMatch "^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$" ipv4Expression |> not then
                                $"%s{name} の %s{identifier} の形式が正しくありません。"
                            else if validateRangeAll ipv4Expression |> not then
                                $"%s{name} の %s{identifier} の数値の範囲が正しくありません。"
                            else
                                "不明なエラーです。"
                            |> fun x -> errorArea.innerText <- x

                            // match e with
                            // | :? System.ArgumentOutOfRangeException ->
                            //     errorArea.innerText <- $"%s{name} の %s{identifier} の数値の範囲が正しくありません。"
                            // | :? System.ArgumentNullException
                            // | :? System.ArgumentException ->
                            //     errorArea.innerText <- $"%s{name} の %s{identifier} を入力してください。"
                            // | :? System.FormatException ->
                            //     errorArea.innerText <- $"%s{name} の %s{identifier} の形式が正しくありません。"
                            // | _ -> errorArea.innerText <- "不明なエラーです。"

                            JS.setTimeout (fun _ -> elm.focus ()) 0 |> ignore)
            ))

    let removeOnRightClick (container: HTMLElement) : unit =
        container.oncontextmenu <-
            fun event ->
                event.preventDefault ()
                document.getElementById("playArea").removeChild (container) |> ignore

    let newHistory source sourceIPv4 destinationIPv4 connected =
        let historyClassName, historyIcon, historyMessage =
            if connected then
                "history history-correct",
                """<span class="material-symbols-outlined history-correct" translate="no">check_circle</span>""",
                "通信成功！"
            else
                "history history-wrong",
                """<span class="material-symbols-outlined history-wrong" translate="no">error</span>""",
                "通信失敗…"

        $"""
        <div class="history-container %s{historyClassName}"">
            %s{historyIcon}<span class ="%s{historyClassName}">%s{Device.name source} [%s{sourceIPv4.ToString()}] -> %s{destinationIPv4.ToString()} %s{historyMessage}</span>
        </div>
        """

    let keyboardshortcut (e: KeyboardEvent) =

        match document.activeElement.id with
        | "sourceInput"
        | "destinationInput" as x ->
            match e.key with
            | "Escape" -> (document.getElementById x).blur ()
            | _ -> ()
        | _ ->
            let isHelpWindowActive =
                (document.getElementById "helpWindow").classList
                |> (fun x -> JS.Constructors.Array?from(x))
                |> Array.contains "active"

            match e.key with
            | "\\" ->
                let inputs =
                    [ "sourceInput"; "destinationInput" ]
                    |> List.map (fun x -> document.getElementById x :?> HTMLInputElement)

                if not isHelpWindowActive then
                    inputs
                    |> List.tryFind (fun x -> x.value = "")
                    |> Option.defaultValue (List.head inputs)
                    |> fun x -> x.focus ()

                    e.preventDefault ()
            | "?" ->
                [ "helpWindow"; "helpBarrier" ]
                |> List.iter (fun x -> (document.getElementById x).classList.toggle "active" |> ignore)
            | "Escape" ->

                if isHelpWindowActive then
                    [ "helpWindow"; "helpBarrier" ]
                    |> List.iter (fun x -> (document.getElementById x).classList.remove "active" |> ignore)
            | _ -> ()

    let init () =
        document.title <- "ネットワークシミュレータ - taidalab"

        let header = document.querySelector "header"
        header.innerHTML <- Content.Common.header
        header.className <- "network-simulator"

        (document.getElementById "hamburgerButton").onclick <-
            (fun _ ->
                (document.querySelector "aside").classList.toggle "flagged" |> ignore
                (document.getElementById "barrier").classList.toggle "flagged" |> ignore
                (document.querySelector "main").classList.toggle "flagged" |> ignore)

        (document.getElementById "barrier").onclick <-
            (fun _ ->
                (document.querySelector "aside").classList.remove "flagged" |> ignore
                (document.getElementById "barrier").classList.remove "flagged" |> ignore
                (document.querySelector "main").classList.remove "flagged" |> ignore)

        (document.querySelector "#headerTitle").innerHTML <-
            """<h1>ネットワークシミュレータ - <span translate="no">taidalab</span></h1>"""

        (document.querySelector "main").innerHTML <- main
        (document.querySelector "#submitButton").className <- "submit-button network-simulator"

        (document.getElementById "helpButton").onclick <-
            (fun _ ->
                [ "helpWindow"; "helpBarrier" ]
                |> List.iter (fun x -> (document.getElementById x).classList.toggle "active" |> ignore))

        (document.getElementById "helpBarrier").onclick <-
            (fun _ ->
                [ "helpWindow"; "helpBarrier" ]
                |> List.iter (fun x -> (document.getElementById x).classList.remove "active" |> ignore))

        (document.getElementById "helpClose").onclick <-
            (fun _ ->
                [ "helpWindow"; "helpBarrier" ]
                |> List.iter (fun x -> (document.getElementById x).classList.remove "active" |> ignore))

        let playArea = document.getElementById "playArea"
        let playAreaRect = playArea.getBoundingClientRect ()

        let devices =
            [ Client
              <| Client.create
                  "device1"
                  "クライアント(1)"
                  "10.0.0.1"
                  "255.255.255.0"
                  { Area.X = 0.
                    Y = 0.
                    Width = 100.
                    Height = 100. }
                  { Point.X = 0. + playAreaRect.left
                    Y = 100. + playAreaRect.top }
              Client
              <| Client.create
                  "device2"
                  "クライアント(2)"
                  "10.0.0.2"
                  "255.255.255.0"
                  { Area.X = 0.
                    Y = 0.
                    Width = 100.
                    Height = 100. }
                  { Point.X = 150. + playAreaRect.left
                    Y = 100. + playAreaRect.top }
              Router
              <| Router.create
                  "device3"
                  "ルータ(1)"
                  "10.0.0.254"
                  "255.255.255.0"
                  { Area.X = 0.
                    Y = 0.
                    Width = 100.
                    Height = 35. }
                  { Point.X = 300. + playAreaRect.left
                    Y = 100. + playAreaRect.top }
              Client
              <| Client.create
                  "device4"
                  "クライアント(3)"
                  "10.0.1.18"
                  "255.255.255.240"
                  { Area.X = 0.
                    Y = 0.
                    Width = 100.
                    Height = 100. }
                  { Point.X = 450. + playAreaRect.left
                    Y = 100. + playAreaRect.top }
              Client
              <| Client.create
                  "device5"
                  "クライアント(4)"
                  "10.0.1.19"
                  "255.255.255.240"
                  { Area.X = 0.
                    Y = 0.
                    Width = 100.
                    Height = 100. }
                  { Point.X = 600. + playAreaRect.left
                    Y = 100. + playAreaRect.top }
              Router
              <| Router.create
                  "device6"
                  "ルータ(2)"
                  "10.0.1.30"
                  "255.255.255.240"
                  { Area.X = 0.
                    Y = 0.
                    Width = 100.
                    Height = 35. }
                  { Point.X = 750. + playAreaRect.left
                    Y = 100. + playAreaRect.top }
              Hub
              <| Hub.create
                  "device7"
                  "ハブ(1)"
                  { Area.X = 0.
                    Y = 0.
                    Width = 100.
                    Height = 35. }
                  { Point.X = 900. + playAreaRect.left
                    Y = 100. + playAreaRect.top } ]

        devices
        |> List.map Device.toHTMLElement
        |> List.map (fun x -> document.getElementById("playArea").appendChild (x))
        |> ignore

        let cables =
            [ 1..4 ]
            |> List.map (fun x ->
                Cable.create
                    $"lancable%d{x}"
                    Kind.LANCable
                    $"LANケーブル(%d{x})"
                    ("5,5 195,45" |> String.split ' ' |> List.map Point.ofString)
                    { Area.X = 0.
                      Y = 0.
                      Width = playArea.clientWidth
                      Height = playArea.clientHeight }
                    { Point.X = float (x - 1) * 250. + playArea.offsetLeft
                      Y = playArea.offsetTop })

        cables
        |> List.map Cable.toHTMLElement
        |> List.map (fun x -> document.getElementById("playArea").appendChild (x))
        |> ignore

        devices
        |> List.map Device.id
        |> List.map document.getElementById
        |> List.iter (fun x ->
            Device.setMouseMoveEvent x
            resetTitleOnNameChange x
            setToQuitEditOnEnter x)

        devices
        |> List.filter (fun x -> Device.isClient x || Device.isRouter x)
        |> List.map Device.id
        |> List.map document.getElementById
        |> List.iter setIPv4Validation

        cables
        |> List.map (fun x -> x.Id)
        |> List.map document.getElementById
        |> List.iter (fun x ->
            Cable.setMouseMoveEvent x
            removeOnRightClick x)

        let submitButton = document.getElementById ("submitButton") :?> HTMLButtonElement

        submitButton.onclick <-
            fun e ->
                e.preventDefault ()

                let devices' =
                    document.getElementById("playArea").getElementsByClassName ("device-container")
                    |> (fun x -> JS.Constructors.Array?from(x))
                    |> Array.toList
                    |> List.map Device.ofHTMLElement
                    |> List.filter Option.isSome
                    |> List.map Option.get

                let lanCables' =
                    document.getElementById("playArea").getElementsByClassName ("cable-container")
                    |> (fun x -> JS.Constructors.Array?from(x))
                    |> Array.toList
                    |> List.map Cable.ofHTMLElement
                    |> List.filter Option.isSome
                    |> List.map Option.get

                let errorArea = document.getElementById "errorArea" :?> HTMLDivElement
                let outputArea = document.getElementById "outputArea" :?> HTMLDivElement
                errorArea.innerText <- ""
                outputArea.innerText <- ""

                let sourceInput = document.getElementById "sourceInput" :?> HTMLInputElement

                let destinationInput =
                    document.getElementById "destinationInput" :?> HTMLInputElement

                let sourceIPv4 = IPv4.validate sourceInput.value
                let destinationIPv4 = IPv4.validate destinationInput.value

                match sourceIPv4 with
                | Error e ->
                    let validateRangeAll =
                        (String.split '.' >> List.map int >> List.forall (fun x -> x >= 0 && x <= 255))

                    if String.IsNullOrEmpty sourceInput.value then
                        "送信元 IPv4 を入力してください。"
                    else if String.IsNullOrWhiteSpace sourceInput.value then
                        "送信元 IPv4 を入力してください。"
                    else if Regex.isMatch "^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$" sourceInput.value |> not then
                        "送信元 IPv4 の形式が正しくありません。"
                    else if validateRangeAll sourceInput.value |> not then
                        "送信元 IPv4 の数値の範囲が正しくありません。"
                    else
                        "不明なエラーです。"
                    |> fun x -> errorArea.innerText <- x
                    // match e with
                    // | :? System.ArgumentOutOfRangeException -> errorArea.innerText <- "送信元 IPv4 の数値の範囲が正しくありません。"
                    // | :? System.ArgumentNullException -> errorArea.innerText <- "送信元 IPv4 を入力してください。"
                    // | :? System.ArgumentException
                    // | :? System.FormatException -> errorArea.innerText <- "送信元 IPv4 の形式が正しくありません。"
                    // | _ -> errorArea.innerText <- "不明なエラーです。"

                    sourceInput.focus ()
                | Ok sourceIPv4 ->
                    match destinationIPv4 with
                    | Error e ->
                        let validateRangeAll =
                            (String.split '.' >> List.map int >> List.forall (fun x -> x >= 0 && x <= 255))

                        if String.IsNullOrEmpty destinationInput.value then
                            "送信先 IPv4 を入力してください。"
                        else if String.IsNullOrWhiteSpace destinationInput.value then
                            "送信先 IPv4 を入力してください。"
                        else if
                            Regex.isMatch "^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$" destinationInput.value
                            |> not
                        then
                            "送信先 IPv4 の形式が正しくありません。"
                        else if validateRangeAll destinationInput.value |> not then
                            "送信先 IPv4 の数値の範囲が正しくありません。"
                        else
                            "不明なエラーです。"
                        |> fun x -> errorArea.innerText <- x
                        // match e with
                        // | :? System.ArgumentOutOfRangeException -> errorArea.innerText <- "送信先 IPv4 の数値の範囲が正しくありません。"
                        // | :? System.ArgumentNullException -> errorArea.innerText <- "送信先 IPv4 を入力してください。"
                        // | :? System.ArgumentException
                        // | :? System.FormatException -> errorArea.innerText <- "送信先 IPv4 の形式が正しくありません。"
                        // | _ -> errorArea.innerText <- "不明なエラーです。"

                        destinationInput.focus ()
                    | Ok destinationIPv4 ->
                        let source =
                            devices'
                            |> List.filter (fun d -> Device.isClient d || Device.isRouter d)
                            |> List.tryFind (Device.hasIPv4 sourceIPv4)

                        match source with
                        | None ->
                            errorArea.innerText <- sprintf "IPv4 %s を持つデバイスが見つかりません。" (sourceIPv4.ToString())
                            sourceInput.focus ()
                        | Some source ->
                            let lanCablesWithSource = lanCables' |> List.filter (Cable.connectedTo source)

                            match lanCablesWithSource with
                            | [] ->
                                errorArea.innerText <-
                                    sprintf "%s [%s] はLANケーブルに繋がっていません。" (Device.name source) (sourceIPv4.ToString())
                            | _ ->
                                sprintf
                                    """<span class="history history-lightgray">%s [%s] -> %s 接続中…"""
                                    (Device.name source)
                                    (sourceIPv4.ToString())
                                    (destinationIPv4.ToString())
                                |> fun x -> outputArea.innerHTML <- x

                                ping lanCables' devices' 128 destinationIPv4 source
                                |> newHistory source sourceIPv4 destinationIPv4
                                |> fun x -> outputArea.innerHTML <- x



                                match document.activeElement.id with
                                | "sourceInput" -> sourceInput.focus ()
                                | "destinationInput" -> destinationInput.focus ()
                                | _ -> ()

        let addClientButton =
            document.getElementById ("addClientButton") :?> HTMLButtonElement

        addClientButton.onclick <-
            fun _ ->
                let playArea = document.getElementById "playArea"
                let playAreaRect = playArea.getBoundingClientRect ()

                let firstCable = playArea.getElementsByClassName("cable-container").item 0

                let clientCount =
                    playArea.getElementsByClassName "device-container"
                    |> (fun x -> JS.Constructors.Array?from(x))
                    |> Array.toList
                    |> List.map Device.ofHTMLElement
                    |> List.filter Option.isSome
                    |> List.map Option.get
                    |> List.filter Device.isClient
                    |> List.length

                let nextNumber = clientCount + 1
                let id = $"client%d{nextNumber}"

                nextNumber
                |> (fun n ->
                    Client.create
                        id
                        $"クライアント(%d{n})"
                        "10.0.0.1"
                        "255.255.255.0"
                        { Area.X = 0.
                          Y = 0.
                          Width = 100.
                          Height = 100. }
                        { Point.X = 0. + playAreaRect.left
                          Y = 0. + playAreaRect.top })
                |> Client.toHTMLElement
                |> (fun x -> playArea.insertBefore (x, firstCable))
                |> ignore

                document.getElementById id |> Device.setMouseMoveEvent

                document.getElementById id |> resetTitleOnNameChange

                document.getElementById id |> setToQuitEditOnEnter

                document.getElementById id |> setIPv4Validation

        let addRouterButton =
            document.getElementById ("addRouterButton") :?> HTMLButtonElement

        addRouterButton.onclick <-
            fun _ ->
                let playArea = document.getElementById "playArea"
                let playAreaRect = playArea.getBoundingClientRect ()

                let firstCable = playArea.getElementsByClassName("cable-container").item 0

                let routerCount =
                    playArea.getElementsByClassName "device-container"
                    |> (fun x -> JS.Constructors.Array?from(x))
                    |> Array.toList
                    |> List.map Device.ofHTMLElement
                    |> List.filter Option.isSome
                    |> List.map Option.get
                    |> List.filter Device.isRouter
                    |> List.length

                let nextNumber = routerCount + 1
                let id = $"router%d{routerCount + 1}"

                routerCount
                |> (fun n ->
                    Router.create
                        id
                        $"ルータ(%d{n + 1})"
                        $"10.0.{n}.254"
                        "255.255.255.0"
                        { Area.X = 0.
                          Y = 0.
                          Width = 100.
                          Height = 35. }
                        { Point.X = 0. + playAreaRect.left
                          Y = 0. + playAreaRect.top })
                |> Router.toHTMLElement
                |> (fun x -> playArea.insertBefore (x, firstCable))
                |> ignore

                document.getElementById id |> Device.setMouseMoveEvent

                document.getElementById id |> resetTitleOnNameChange

                document.getElementById id |> setToQuitEditOnEnter

                document.getElementById id |> setIPv4Validation

        let addHubButton = document.getElementById ("addHubButton") :?> HTMLButtonElement

        addHubButton.onclick <-
            fun _ ->
                let playArea = document.getElementById "playArea"
                let playAreaRect = playArea.getBoundingClientRect ()

                let firstCable = playArea.getElementsByClassName("cable-container").item 0

                let hubCount =
                    playArea.getElementsByClassName "device-container"
                    |> (fun x -> JS.Constructors.Array?from(x))
                    |> Array.toList
                    |> List.map Device.ofHTMLElement
                    |> List.filter Option.isSome
                    |> List.map Option.get
                    |> List.filter Device.isHub
                    |> List.length

                let nextNumber = hubCount + 1
                let id = $"hub%d{nextNumber}"

                nextNumber
                |> (fun n ->
                    Hub.create
                        id
                        $"ハブ(%d{n})"
                        { Area.X = 0.
                          Y = 0.
                          Width = 100.
                          Height = 35. }
                        { Point.X = 0. + playAreaRect.left
                          Y = 0. + playAreaRect.top })
                |> Hub.toHTMLElement
                |> (fun x -> playArea.insertBefore (x, firstCable))
                |> ignore

                document.getElementById id |> Device.setMouseMoveEvent

                document.getElementById id |> resetTitleOnNameChange

                document.getElementById id |> setToQuitEditOnEnter

        let addLANCableButton =
            document.getElementById ("addLANCableButton") :?> HTMLButtonElement

        addLANCableButton.onclick <-
            fun _ ->
                let playArea = document.getElementById "playArea"
                let cableCount = playArea.getElementsByClassName("cable-container").length
                let nextNumber = cableCount + 1
                let id = $"cable%d{nextNumber}"

                nextNumber
                |> (fun n ->
                    Cable.create
                        id
                        Kind.LANCable
                        $"LANケーブル(%d{n})"
                        ("5,5 195,45" |> String.split ' ' |> List.map Point.ofString)
                        { Area.X = 0.
                          Y = 0.
                          Width = playArea.clientWidth
                          Height = playArea.clientHeight }
                        { Point.X = playArea.offsetLeft
                          Y = playArea.offsetTop })
                |> Cable.toHTMLElement
                |> (fun x -> playArea.appendChild (x))
                |> ignore

                document.getElementById id
                |> (fun x ->
                    Cable.setMouseMoveEvent x
                    removeOnRightClick x)

        document.onkeydown <- (fun (e: KeyboardEvent) -> keyboardshortcut e)
