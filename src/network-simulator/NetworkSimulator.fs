// taidalab Version 4.0.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom
open Fable.Core
open Fable.Core.JsInterop
open Taidalab.TCPIP
open Fermata

module NetworkSimulator =
    let help = """
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
            <span class="material-symbols-outlined symbols18">add_circle</span>マークのボタンをクリックすると、デバイスやケーブルを追加できます。
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

    let main = $"""
        <form id="inputArea" class="iro-input-area" autocomplete="off">
            <span class="display-order-1 input-area-iro-shorter">
                <span class="iro-input-wrapper">
                    <label for="intervalInput">送信元 IPv4:<input type="text" id="sourceInput" class="number-input display-order-1 consolas"></label>
                </span>
                <span class="iro-input-wrapper">
                    <label for="limitInput">送信先 IPv4:<input type="text" id="destinationInput" class="number-input display-order-1 consolas"></label>
                </span>
            </span>
            <span class="display-order-2">
                <button type="submit" id="submitButton" class="submit-button">ping</button>
            </span>
            <span id="helpButton" class="material-symbols-outlined help-button display-order-3">
                help
            </span>
        </form>
        <form>
            <button type="button" id="addClientButton" class="submit-button submit-button-gray display-order-3">
                <span class="icon-vertical-center">
                    <span class="material-symbols-outlined symbols18">add_circle</span>
                    クライアント
                </span>
            </button>
            <button type="button" id="addRouterButton" class="submit-button submit-button-gray display-order-4">
                <span class="icon-vertical-center">
                    <span class="material-symbols-outlined symbols18">add_circle</span>
                    ルータ
                </span>
            </button>
            <button type="button" id="addHubButton" class="submit-button submit-button-gray display-order-5">
                <span class="icon-vertical-center">
                    <span class="material-symbols-outlined symbols18">add_circle</span>
                    ハブ
                </span>
            </button>
            <button type="button" id="addLANCableButton" class="submit-button submit-button-gray display-order-6">
                <span class="icon-vertical-center">
                    <span class="material-symbols-outlined symbols18">add_circle</span>
                    LANケーブル
                </span>
            </button>
        </form>
        <div id="errorArea" class="error-area warning"></div>
        <div id="outputArea" class="output-area"></div>
        <div id="playArea" class="play-area"></div>
        <div id="helpWindow" class="help-window">
            %s{help}
            <p class="help-color-nws">このヘルプメッセージはクリックで消えます。</p>
        </div>
        """
    
    let onMouseMove (container: Browser.Types.HTMLElement) (svg: Browser.Types.HTMLElement) (event: Browser.Types.Event) : unit =
        let event = event :?> Browser.Types.MouseEvent
        let top = (event.pageY - svg.getBoundingClientRect().height / 2.)
        let left = (event.pageX - svg.getBoundingClientRect().width / 2.)
        let styleString = sprintf "top: %fpx; left: %fpx;" top left
        container.setAttribute("style", styleString)
    
    let setMouseMoveEvent (container: Browser.Types.HTMLElement) : unit =
        let svg = document.getElementById(container.id + "Svg")
        svg.ondragstart <- fun _ -> false
        let onMouseMove' = onMouseMove container svg
        svg.onmousedown <- fun _ ->
            document.addEventListener("mousemove", onMouseMove')
            svg.onmouseup <- fun _ ->
                //printfn "mouse up!"
                document.removeEventListener("mousemove", onMouseMove')
    
    let resetTitleOnNameChange (container: Browser.Types.HTMLElement) : unit =
        let nameElement = document.getElementById (container.id + "Name")
        nameElement.addEventListener("blur", (fun _ ->
            let titleElement = document.getElementById (container.id + "Title")
            titleElement.textContent <- nameElement.innerText))
    
    let setToQuitEditOnEnter (container: Browser.Types.HTMLElement) : unit =
        container.children
        |> (fun x -> JS.Constructors.Array?from(x))
        |> Array.filter (fun (x: Browser.Types.HTMLElement) -> x.contentEditable = "true")
        |> Array.iter (fun x -> 
            x.onkeydown <- (fun event ->
                if event.key = "Enter" || event.key = "Escape" then x.blur()))
    
    let setIPv4Validation (container: Browser.Types.HTMLElement) : unit =
        ["IPv4"; "SubnetMask"]
        |> List.map (fun x -> x, document.getElementById (container.id + x))
        |> List.iter (fun (identifier, elm) ->
            elm.addEventListener("blur", (fun _ ->
            elm.innerText
            |> IPv4.validate
            |> fun x ->
                let errorArea = document.getElementById "errorArea"
                errorArea.innerText <- ""
                match x with
                | Ok _ -> ()
                | Error e ->
                    let name = document.getElementById(container.id + "Name").innerText
                    match e with
                    | Errors.Empty -> errorArea.innerText <- $"%s{name} の %s{identifier} を入力してください。"
                    | Errors.WrongFormat -> errorArea.innerText <- $"%s{name} の %s{identifier} の形式が正しくありません。"
                    | Errors.OutOfRange -> errorArea.innerText <- $"%s{name} の %s{identifier} の数値の範囲が正しくありません。"
                    JS.setTimeout (fun _ -> elm.focus()) 0 |> ignore)))

    let updatePoints (point1: Point) (point2: Point) (newPoint: Point) : (Point * Point) =
        (point1, point2)
        |> Tuple.map (Point.distance newPoint)
        |> fun (f1, f2) ->
            if f1 <= f2 then
                (point1, point2 |> Point.shift (newPoint.X - point1.X) (newPoint.Y - point1.Y))
            else
                (point1, newPoint)
    
    let touchedAndUntouched (point1: Point) (point2: Point) (newPoint: Point) : (Point * Point) =
        (point1, point2)
        |> Tuple.map (Point.distance newPoint)
        |> fun (d1, d2) ->
            if d1 <= d2 then
                (point1, point2)
            else
                (point2, point1)

//    let inline (|Positive|Negative|Zero|) (n: ^a) =
//        if n > LanguagePrimitives.GenericZero<'a> then Positive
//        else if n < LanguagePrimitives.GenericZero<'a> then Negative
//        else Zero
    
    let resizeCable (container: Browser.Types.HTMLElement) (svg: Browser.Types.HTMLElement) (polyline: Browser.Types.HTMLElement) (event: Browser.Types.Event) : unit =
        let event = event :?> Browser.Types.MouseEvent

        // Getting current end points of the cable.
        let point1, point2 =
            polyline.getAttribute("points")
            |> String.split ' '
            |> List.map Point.ofString
            |> fun xs -> List.head xs, List.last xs
        
        let cursorPoint = Point.ofFloats (event.pageX - container.offsetLeft) (event.pageY - container.offsetTop)
//        printfn "point1:\t%O" point1
//        printfn "point2:\t%O" point2
//        printfn "cursorPoint:\t%O" cursorPoint

        let touchedPoint, untouchedPoint = cursorPoint |> touchedAndUntouched point1 point2
//        printfn "touchedPoint:\t%O" touchedPoint
//        printfn "untouchedPoint:\t%O" untouchedPoint

        let xMoving = cursorPoint.X - touchedPoint.X
        let yMoving = cursorPoint.Y - touchedPoint.Y
//        printfn "xMoving:\t%f, yMoving:\t%f" xMoving yMoving

        let touchedPointPosition = touchedPoint |> Point.relativePosition untouchedPoint
        
        // Building the new end points with the cursor position.
        let updatedPoints =
            match touchedPointPosition with
            | Directions.Up ->
//                printfn "touchedPointRelativePosition:\tUp" |> ignore
                touchedPoint, untouchedPoint |> Point.shift -xMoving -yMoving
            | Directions.Down ->
//                printfn "touchedPointRelativePosition:\tDown" |> ignore
                cursorPoint |> updatePoints untouchedPoint touchedPoint
            | Directions.Left ->
//                printfn "touchedPointRelativePosition:\tLeft" |> ignore
                touchedPoint, untouchedPoint |> Point.shift -xMoving -yMoving
            | Directions.Right ->
//                printfn "touchedPointRelativePosition:\tRight" |> ignore
                cursorPoint |> updatePoints untouchedPoint touchedPoint
            | var when var = (Directions.Up ||| Directions.Left) ->
//                printfn "touchedPointRelativePosition:\tUpLeft" |> ignore
                touchedPoint, untouchedPoint |> Point.shift -xMoving -yMoving
            | var when var = (Directions.Up ||| Directions.Right) ->
//                printfn "touchedPointRelativePosition:\tUpRight" |> ignore
                untouchedPoint |> Point.shift 0. -yMoving, touchedPoint |> Point.shift xMoving 0.
            | var when var = (Directions.Down ||| Directions.Left) ->
//                printfn "touchedPointRelativePosition:\tDownLeft" |> ignore
                touchedPoint |> Point.shift 0. yMoving, untouchedPoint |> Point.shift -xMoving 0.
            | var when var = (Directions.Down ||| Directions.Right) ->
//                printfn "touchedPointRelativePosition:\tDownRight" |> ignore
                cursorPoint |> updatePoints untouchedPoint touchedPoint
            | _ ->
//                printfn "touchedPointRelativePosition:\t_" |> ignore
                cursorPoint |> updatePoints untouchedPoint touchedPoint
        
//        printfn "updatedPoints:\t(%O), (%O)" <|| updatedPoints
        
        let xGap = updatedPoints |> Tuple.map (fun x -> x.X) |> System.Math.Min |> fun x -> 5. - x
        let yGap = updatedPoints |> Tuple.map (fun x -> x.Y) |> System.Math.Min |> fun x -> 5. - x
//        printfn "xGap:\t%f, yGap:\t%f" xGap yGap

        // Updating the cable points.
        updatedPoints
        |> Tuple.map (Point.shift xGap yGap)
        |> fun (p1, p2) -> $"%f{p1.X},%f{p1.Y} %f{p2.X},%f{p2.Y}"
        |> fun x -> polyline.setAttribute("points", x)

//        printfn "container.offsetTop:\t%f, container.offsetLeft:\t%f" container.offsetTop container.offsetLeft

        let updatedArea = updatedPoints |> Tuple.map (Point.shift xGap yGap) ||> Area.ofPoints |> Area.expand (5. * 2.) (5. * 2.)
        svg.setAttribute("viewBox", $"0 0 %f{updatedArea.Width} %f{updatedArea.Height}")
        svg.setAttribute("width", $"%f{updatedArea.Width}px")
        svg.setAttribute("height", $"%f{updatedArea.Height}px")
//        svg.setAttribute("style", "background-color: red;")

//        printfn "updatedArea:\t%O" <| updatedArea

        // Shifting the cable container.
        match touchedPointPosition with
        | Directions.Up ->
            container.setAttribute("style", $"top: %f{container.offsetTop + yMoving}px; left: %f{container.offsetLeft + xMoving}px;")
        //| Directions.Down ->
        | Directions.Left ->
            container.setAttribute("style", $"top: %f{container.offsetTop + yMoving}px; left: %f{container.offsetLeft + xMoving}px;")
        //| Directions.Right ->
        | var when var = (Directions.Up ||| Directions.Left) ->
            container.setAttribute("style", $"top: %f{container.offsetTop + yMoving}px; left: %f{container.offsetLeft + xMoving}px;")
        | var when var = (Directions.Up ||| Directions.Right) ->
            container.setAttribute("style", $"top: %f{container.offsetTop + yMoving}px; left: %f{container.offsetLeft}px;")
        | var when var = (Directions.Down ||| Directions.Left) ->
            container.setAttribute("style", $"top: %f{container.offsetTop}px; left: %f{container.offsetLeft + xMoving}px;")
        //| var when var = (Directions.Down ||| Directions.Right) ->
        | _ -> ()
        
        let touchedPointPosition' = updatedPoints ||> Point.relativePosition
//        printfn "touchedPointPosition':\t%O" touchedPointPosition'

        // Resizing and shifting the cable container.
        match touchedPointPosition' with
        | Directions.Up ->
            svg.setAttribute("width", $"%f{updatedArea.Width + -xMoving}px")
            svg.setAttribute("height", $"%f{updatedArea.Height + -yMoving}px")
            container.setAttribute("style", $"top: %f{container.offsetTop + yMoving}px; left: %f{container.offsetLeft + xMoving}px;")
        //| Directions.Down ->
        | Directions.Left ->
            svg.setAttribute("width", $"%f{updatedArea.Width + -xMoving}px")
            svg.setAttribute("height", $"%f{updatedArea.Height + -yMoving}px")
            container.setAttribute("style", $"top: %f{container.offsetTop + yMoving}px; left: %f{container.offsetLeft + xMoving}px;")
        //| Directions.Right ->
        | var when var = (Directions.Up ||| Directions.Left) ->
            svg.setAttribute("width", $"%f{updatedArea.Width + -xMoving}px")
            svg.setAttribute("height", $"%f{updatedArea.Height + -yMoving}px")
            container.setAttribute("style", $"top: %f{container.offsetTop + yMoving}px; left: %f{container.offsetLeft + xMoving}px;")
        //| var when var = (Directions.Up ||| Directions.Right) ->
        //| var when var = (Directions.Down ||| Directions.Left) ->
        //| var when var = (Directions.Down ||| Directions.Right) ->
        | _ -> ()
//        printfn ""
    
    let setMouseMoveEventCable (container: Browser.Types.HTMLElement) : unit =
        let cable = Cable.ofHTMLElement container
        match cable with
        | None -> ()
        | Some cable' ->
            let svg = document.getElementById(container.id + "Svg")
            svg.ondragstart <- fun _ -> false
            svg.onmousedown <- fun event ->
                let point1, point2 =
                    document.getElementById(container.id)
                    |> Cable.ofHTMLElement
                    |> fun x ->
                        match x with
                        | None -> None, None
                        | Some x ->
                            x.Points
                            |> fun xs -> Some (List.head xs), Some (List.last xs)
                let cursorPoint = Point.ofFloats event.offsetX event.offsetY
                let minDistance =
                    [point1; point2]
                    |> List.filter Option.isSome
                    |> List.map Option.get
                    |> List.map (Point.distance cursorPoint)
                    |> List.min
                let onMouseMove' =
                    if minDistance < 5. then
                        let polyline = document.getElementById(container.id + "Polyline")
                        resizeCable container svg polyline
                    else
                        onMouseMove container svg
                document.addEventListener("mousemove", onMouseMove')
                svg.onmouseup <- fun _ ->
                    //printfn "mouse up!"
                    document.removeEventListener("mousemove", onMouseMove')
    
    let removeOnRightClick (container: Browser.Types.HTMLElement) : unit =
        //container.oncontextmenu <- fun event ->
        container.oncontextmenu <- fun event ->
            event.preventDefault()
            document.getElementById("playArea").removeChild(container)
    
    let init () =
        (document.getElementById "helpButton").onclick <- (fun _ ->
            (document.getElementById "helpWindow").classList.toggle "active" |> ignore)
        
        (document.getElementById "helpWindow").onclick <- (fun _ ->
            (document.getElementById "helpWindow").classList.remove "active" |> ignore)
        
        let playArea = document.getElementById "playArea"
        let playAreaRect = playArea.getBoundingClientRect()

        let devices =
            [
                Client <| Client.create "device1" "クライアント(1)" "10.0.0.1" "255.255.255.0" { Area.X = 0.; Y = 0.; Width = 100.; Height = 100. } { Point.X = 0. + playAreaRect.left; Y = 100. + playAreaRect.top }
                Client <| Client.create "device2" "クライアント(2)" "10.0.0.2" "255.255.255.0" { Area.X = 0.; Y = 0.; Width = 100.; Height = 100. } { Point.X = 150. + playAreaRect.left; Y = 100. + playAreaRect.top }
                Router <| Router.create "device3" "ルータ(1)" "10.0.0.254" "255.255.255.0" { Area.X = 0.; Y = 0.; Width = 100.; Height = 35. } { Point.X = 300. + playAreaRect.left; Y = 100. + playAreaRect.top }
                Client <| Client.create "device4" "クライアント(3)" "10.0.1.18" "255.255.255.240" { Area.X = 0.; Y = 0.; Width = 100.; Height = 100. } { Point.X = 450. + playAreaRect.left; Y = 100. + playAreaRect.top }
                Client <| Client.create "device5" "クライアント(4)" "10.0.1.19" "255.255.255.240" { Area.X = 0.; Y = 0.; Width = 100.; Height = 100. } { Point.X = 600. + playAreaRect.left; Y = 100. + playAreaRect.top }
                Router <| Router.create "device6" "ルータ(2)" "10.0.1.30" "255.255.255.240" { Area.X = 0.; Y = 0.; Width = 100.; Height = 35. } { Point.X = 750. + playAreaRect.left; Y = 100. + playAreaRect.top }
                Hub <| Hub.create "device7" "ハブ(1)" { Area.X = 0.; Y = 0.; Width = 100.; Height = 35. } { Point.X = 900. + playAreaRect.left; Y = 100. + playAreaRect.top }
            ]
        
        devices
        |> List.map Device.toHTMLElement
        |> List.map (fun x -> document.getElementById("playArea").appendChild(x))
        |> ignore

        let cables =
            [
                Cable.create "lancable1" Kind.LANCable "LANケーブル(1)" ("5,5 195,45" |> String.split ' ' |> List.map Point.ofString) { Area.X = 0.; Y = 0.; Width = 200.; Height = 50. } { Point.X = 100. + playAreaRect.left; Y = 30. + playAreaRect.top }
                Cable.create "lancable2" Kind.LANCable "LANケーブル(2)" ("5,5 195,45" |> String.split ' ' |> List.map Point.ofString) { Area.X = 0.; Y = 0.; Width = 200.; Height = 50. } { Point.X = 300. + playAreaRect.left; Y = 30. + playAreaRect.top }
                Cable.create "lancable3" Kind.LANCable "LANケーブル(3)" ("5,5 195,45" |> String.split ' ' |> List.map Point.ofString) { Area.X = 0.; Y = 0.; Width = 200.; Height = 50. } { Point.X = 500. + playAreaRect.left; Y = 30. + playAreaRect.top }
                Cable.create "lancable4" Kind.LANCable "LANケーブル(4)" ("5,5 195,45" |> String.split ' ' |> List.map Point.ofString) { Area.X = 0.; Y = 0.; Width = 200.; Height = 50. } { Point.X = 700. + playAreaRect.left; Y = 30. + playAreaRect.top }
            ]
        
        cables
        |> List.map Cable.toHTMLElement
        |> List.map (fun x -> document.getElementById("playArea").appendChild(x))
        |> ignore
        
        devices
        |> List.map Device.id
        |> List.map document.getElementById
        |> List.iter
            (fun x ->
                setMouseMoveEvent x
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
            setMouseMoveEventCable x
            removeOnRightClick x)

        let submitButton = document.getElementById("submitButton") :?> Browser.Types.HTMLButtonElement
        submitButton.onclick <- fun _ ->
            let devices' =
                document.getElementById("playArea").getElementsByClassName("device-container")
                |> (fun x -> JS.Constructors.Array?from(x))
                |> Array.toList
                |> List.map Device.ofHTMLElement
                |> List.filter Option.isSome
                |> List.map Option.get
            
            //devices' |> List.length |> printfn "%d devices."
            //devices' |> List.iter (fun x -> printfn "%s, %s" x.Name (x.IPv4.ToString()))

            let lanCables' =
                document.getElementById("playArea").getElementsByClassName("cable-container")
                |> (fun x -> JS.Constructors.Array?from(x))
                |> Array.toList
                |> List.map Cable.ofHTMLElement
                |> List.filter Option.isSome
                |> List.map Option.get
            
            //lanCables' |> List.length |> printfn "%d cables."
            //lanCables' |> List.iter (fun x -> printfn "%s" x.Name)

            let errorArea = document.getElementById "errorArea" :?> Browser.Types.HTMLDivElement
            let outputArea = document.getElementById "outputArea" :?> Browser.Types.HTMLDivElement
            errorArea.innerText <- ""
            outputArea.innerText <- ""

            let sourceInput = document.getElementById "sourceInput" :?> Browser.Types.HTMLInputElement
            let destinationInput = document.getElementById "destinationInput" :?> Browser.Types.HTMLInputElement
            let sourceIPv4 = IPv4.validate sourceInput.value
            let destinationIPv4 = IPv4.validate destinationInput.value

            match sourceIPv4 with
            | Error e ->
                match e with
                | Errors.Empty -> errorArea.innerText <- "送信元 IPv4 を入力してください。"
                | Errors.WrongFormat -> errorArea.innerText <- "送信元 IPv4 の形式が正しくありません。"
                | Errors.OutOfRange -> errorArea.innerText <- "送信元 IPv4 の数値の範囲が正しくありません。"
                sourceInput.focus()
            | Ok sourceIPv4 ->
                match destinationIPv4 with
                | Error e ->
                    match e with
                    | Errors.Empty -> errorArea.innerText <- "送信先 IPv4 を入力してください。"
                    | Errors.WrongFormat -> errorArea.innerText <- "送信先 IPv4 の形式が正しくありません。"
                    | Errors.OutOfRange -> errorArea.innerText <- "送信先 IPv4 の数値の範囲が正しくありません。"
                    destinationInput.focus()
                | Ok destinationIPv4 ->
                    let source =
                        devices'
                        |> List.filter (fun d -> Device.isClient d || Device.isRouter d)
                        |> List.tryFind (Device.hasIPv4 sourceIPv4)
                    match source with
                    | None ->
                        errorArea.innerText <- sprintf "IPv4 %s を持つデバイスが見つかりません。" (sourceIPv4.ToString())
                        sourceInput.focus()
                    | Some source ->
                        let lanCablesWithSource =
                            lanCables'
                            |> List.filter (Cable.connectedTo source)
                        match lanCablesWithSource with
                        | [] -> errorArea.innerText <- sprintf "%s [%s] はLANケーブルに繋がっていません。" (Device.name source) (sourceIPv4.ToString())
                        | _ ->
                            sprintf """<span class="history-lightgray">%s [%s] -> %s 接続中…""" (Device.name source) (sourceIPv4.ToString()) (destinationIPv4.ToString())
                            |> fun x -> outputArea.innerHTML <- x
                            ping lanCables' devices' 128 destinationIPv4 source
                            |> fun b -> if b then ("history-correct", "通信成功！") else ("history-wrong", "通信失敗…")
                            |> fun (className, success) -> sprintf """<span class="%s">%s [%s] -> %s %s""" className (Device.name source) (sourceIPv4.ToString()) (destinationIPv4.ToString()) success
                            |> fun x -> outputArea.innerHTML <- x
                            match document.activeElement.id with
                            | "sourceInput" -> sourceInput.focus()
                            | "destinationInput" -> destinationInput.focus()
                            | _ -> ()
            false
        
        let addClientButton = document.getElementById("addClientButton") :?> Browser.Types.HTMLButtonElement
        addClientButton.onclick <- fun _ ->
            let playArea = document.getElementById "playArea"
            let playAreaRect = playArea.getBoundingClientRect()

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
                    { Area.X = 0.; Y = 0.; Width = 100.; Height = 100. }
                    { Point.X = 0. + playAreaRect.left; Y = 0. + playAreaRect.top })
            |> Client.toHTMLElement
            |> (fun x -> playArea.insertBefore(x, firstCable))
            |> ignore

            document.getElementById id
            |> setMouseMoveEvent
            
            document.getElementById id
            |> resetTitleOnNameChange

            document.getElementById id
            |> setToQuitEditOnEnter

            document.getElementById id
            |> setIPv4Validation
        
        let addRouterButton = document.getElementById("addRouterButton") :?> Browser.Types.HTMLButtonElement
        addRouterButton.onclick <- fun _ ->
            let playArea = document.getElementById "playArea"
            let playAreaRect = playArea.getBoundingClientRect()

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
                    { Area.X = 0.; Y = 0.; Width = 100.; Height = 35. }
                    { Point.X = 0. + playAreaRect.left; Y = 0. + playAreaRect.top })
            |> Router.toHTMLElement
            |> (fun x -> playArea.insertBefore(x, firstCable))
            |> ignore

            document.getElementById id
            |> setMouseMoveEvent
            
            document.getElementById id
            |> resetTitleOnNameChange

            document.getElementById id
            |> setToQuitEditOnEnter

            document.getElementById id
            |> setIPv4Validation
        
        let addHubButton = document.getElementById("addHubButton") :?> Browser.Types.HTMLButtonElement
        addHubButton.onclick <- fun _ ->
            let playArea = document.getElementById "playArea"
            let playAreaRect = playArea.getBoundingClientRect()

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
                    { Area.X = 0.; Y = 0.; Width = 100.; Height = 35. }
                    { Point.X = 0. + playAreaRect.left; Y = 0. + playAreaRect.top })
            |> Hub.toHTMLElement
            |> (fun x -> playArea.insertBefore(x, firstCable))
            |> ignore

            document.getElementById id
            |> setMouseMoveEvent
            
            document.getElementById id
            |> resetTitleOnNameChange

            document.getElementById id
            |> setToQuitEditOnEnter
        
        let addLANCableButton = document.getElementById("addLANCableButton") :?> Browser.Types.HTMLButtonElement
        addLANCableButton.onclick <- fun _ ->
            let playArea = document.getElementById "playArea"
            let playAreaRect = playArea.getBoundingClientRect()
   
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
                    { Area.X = 0.; Y = 0.; Width = 200.; Height = 50. }
                    { Point.X = 0. + playAreaRect.left; Y = 0. + playAreaRect.top })
            |> Cable.toHTMLElement
            |> (fun x -> playArea.appendChild(x))
            |> ignore

            document.getElementById id
            |> (fun x ->
                setMouseMoveEventCable x
                removeOnRightClick x)