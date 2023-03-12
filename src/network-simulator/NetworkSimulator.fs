// taidalab Version 3.3.3
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
    let main = """
        <form id="inputArea" class="iro-input-area" autocomplete="off">
            <span class="display-order-1 input-area-iro-shorter">
                <span class="iro-input-wrapper">
                    <label for="intervalInput">Source IPv4:<input type="text" id="sourceInput" class="number-input display-order-1 consolas"></label>
                </span>
                <span class="iro-input-wrapper">
                    <label for="limitInput">Destination IPv4:<input type="text" id="destinationInput" class="number-input display-order-1 consolas"></label>
                </span>
            </span>
            <span class="display-order-2">
                <button type="button" id="submitButton" class="submit-button d2b-button">ping</button>
            </span>
        </form>
        <form>
            <button type="button" id="addClientButton" class="submit-button d2b-button display-order-3">add a client</button>
            <button type="button" id="addRouterButton" class="submit-button d2b-button display-order-4">add a router</button>
            <button type="button" id="addHubButton" class="submit-button d2b-button display-order-5">add a Hub</button>
            <button type="button" id="addLANCableButton" class="submit-button d2b-button display-order-6">add a LAN cable</button>
        </form>
        <div id="errorArea" class="error-area warning"></div>
        <div id="outputArea" class="output-area"></div>
        <div id="playArea" class="play-area"></div>
        """
    
    let onMouseMove (elm: Browser.Types.HTMLElement) (svg: Browser.Types.HTMLElement) (event: Browser.Types.Event) =
        let event = event :?> Browser.Types.MouseEvent
        let top = (event.clientY - svg.getBoundingClientRect().height / 2.)
        let left = (event.clientX - svg.getBoundingClientRect().width / 2.)
        let styleString = sprintf "top: %fpx; left: %fpx;" top left
        elm.setAttribute("style", styleString)
    
    let setMouseMoveEvent (x: Browser.Types.HTMLElement) : unit =
        let svg = document.getElementById(x.id + "Svg")
        svg.ondragstart <- fun _ -> false
        let onMouseMove' = onMouseMove x svg
        svg.onmousedown <- fun _ ->
            document.addEventListener("mousemove", onMouseMove')
            svg.onmouseup <- fun _ ->
                //printfn "mouse up!"
                document.removeEventListener("mousemove", onMouseMove')
    
    let resetTitleOnNameChange (x: Browser.Types.HTMLElement) : unit =
        let nameElement = document.getElementById (x.id + "Name")
        nameElement.addEventListener("blur", (fun _ ->
            let titleElement = document.getElementById (x.id + "Title")
            titleElement.textContent <- nameElement.innerText))
    
    let setToQuitEditOnEnter (x: Browser.Types.HTMLElement) : unit =
        x.children
        |> (fun x -> JS.Constructors.Array?from(x))
        |> Array.filter (fun (x: Browser.Types.HTMLElement) -> x.contentEditable = "true")
        |> Array.iter (fun x -> 
            x.onkeydown <- (fun event ->
                if event.key = "Enter" || event.key = "Escape" then x.blur()))

    let updatePoints point1 point2 newPoint =
        (point1, point2)
        |> Tuple.map (Point.distance newPoint)
        |> fun (f1, f2) ->
            if f1 <= f2 then
                let shiftedPoint = point2 |> Point.shift (newPoint.X - point1.X) (newPoint.Y - point1.Y)
                (point1, shiftedPoint)
            else
                (point1, newPoint)
    
    let resizeCable (container: Browser.Types.HTMLElement) (svg: Browser.Types.HTMLElement) (polyline: Browser.Types.HTMLElement) (event: Browser.Types.Event) : unit =
        let event = event :?> Browser.Types.MouseEvent

        // Getting current end points of the cable.
        let point1, point2 =
            polyline.getAttribute("points")
            |> fun x -> x.Split([|' '|])
            |> Array.map Point.ofString
            |> fun xs -> Array.head xs, Array.last xs
        //printfn "point1:\t%O" point1
        //printfn "point2:\t%O" point2

        // Getting the `playArea` element, which contains the cable.
        let playArea = document.getElementById "playArea"
        //printfn "event.clientX: %f" event.clientX
        //printfn "event.clientY: %f" event.clientY
        //printfn "playArea.clientLeft: %f" playArea.clientLeft
        //printfn "playArea.clientTop: %f" playArea.clientTop

        let style = container.getAttribute("style")
        let styleLeft =
            style
            |> Regex.match' """left: (\d+\.?\d+)px;"""
            |> fun m -> (m.Groups.Item 1).Value
            |> float
        let styleTop =
            style
            |> Regex.match' """top: (\d+\.?\d+)px;"""
            |> fun m -> (m.Groups.Item 1).Value
            |> float

        // Building the new end points with the cursor position.
        let updatedPoints =
            Point.ofFloats (event.clientX - styleLeft) (event.clientY - styleTop)
            |> updatePoints point1 point2
        
        //updatedPoints |> (fun (p1, p2) -> printfn "updatedPoints:\t(%O), (%O)" p1 p2)

        // Building the new cable area.
        let updatedArea = updatedPoints ||> Area.ofPoints |> Area.expand (5. * 2.) (5. * 2.)
        //printfn "updatedArea:\t%O" updatedArea

        updatedPoints
        |> fun (p1, p2) -> $"%f{p1.X},%f{p1.Y} %f{p2.X},%f{p2.Y}"
        |> fun x -> polyline.setAttribute("points", x)

//        updatedArea
//        |> fun x -> $"top: %f{x.X}; left: %f{x.Y};"
//        |> fun x -> container.setAttribute("style", x)

        updatedArea
        |> fun x -> $"0 0 %f{x.Width} %f{x.Height}"
        |> fun x -> svg.setAttribute("viewBox", x)
        
        svg.setAttribute("width", $"%f{updatedArea.Width}px")
        svg.setAttribute("height", $"%f{updatedArea.Height}px")
//        svg.setAttribute("style", "background-color: red;")
    
    let setMouseMoveEventCable (container: Browser.Types.HTMLElement) : unit =
        let cable = Cable.ofHTMLElement container
        match cable with
        | None -> ()
        | Some cable' ->
            let svg = document.getElementById(container.id + "Svg")
            svg.ondragstart <- fun _ -> false
            svg.onmousedown <- fun event ->
                let playArea = document.getElementById "playArea"
                //printfn "playArea (offsetLeft: %f, offsetTop: %f)" playArea.offsetLeft playArea.offsetTop
                //printfn "clicked at (offsetX: %f, offset.Y: %f)" event.offsetX event.offsetY
                //printfn "clicked at (clientX: %f, clientt.Y: %f)" event.clientX event.clientY
                //printfn "cable.Points: %s" cable'.Points
                let point1, point2 =
//                    cable'.Points
                    document.getElementById(container.id)
                    |> Cable.ofHTMLElement
                    |> fun x ->
                        match x with
                        | None -> None, None
                        | Some x ->
                            x.Points
                            |> fun x -> x.Split([|' '|])
                            |> Array.map Point.ofString
                            |> fun xs -> Some (Array.head xs), Some (Array.last xs)
                let cursorPoint = Point.ofFloats event.offsetX event.offsetY
                let minDistance =
                    [point1; point2]
                    |> fun xs ->
                        match xs with
                        | var when xs |> List.forall Option.isSome ->
                            xs
                            |> List.map (Option.map (Point.distance cursorPoint))
                            |> List.min
                            |> (fun x -> Option.get x)
                //printfn "distance: %f" minDistance
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
    
    let init () =
        let playArea = document.getElementById "playArea"
        let playAreaRect = playArea.getBoundingClientRect()

        let devices =
            [
                Client <| Client.create "device1" "Client (1)" "10.0.0.1" "255.255.255.0" { Area.X = 0.; Y = 0.; Width = 100.; Height = 100. } { Point.X = 0. + playAreaRect.left; Y = 100. + playAreaRect.top }
                Client <| Client.create "device2" "Client (2)" "10.0.0.2" "255.255.255.0" { Area.X = 0.; Y = 0.; Width = 100.; Height = 100. } { Point.X = 150. + playAreaRect.left; Y = 100. + playAreaRect.top }
                Router <| Router.create "device3" "Router (1)" "10.0.0.3" "255.255.255.0" { Area.X = 0.; Y = 0.; Width = 100.; Height = 35. } { Point.X = 300. + playAreaRect.left; Y = 100. + playAreaRect.top }
                Client <| Client.create "device4" "Client (3)" "10.0.0.18" "255.255.255.240" { Area.X = 0.; Y = 0.; Width = 100.; Height = 100. } { Point.X = 450. + playAreaRect.left; Y = 100. + playAreaRect.top }
                Router <| Router.create "device5" "Router (2)" "10.0.0.17" "255.255.255.240" { Area.X = 0.; Y = 0.; Width = 100.; Height = 35. } { Point.X = 600. + playAreaRect.left; Y = 100. + playAreaRect.top }
                Client <| Client.create "device6" "Client (4)" "10.0.0.19" "255.255.255.240" { Area.X = 0.; Y = 0.; Width = 100.; Height = 100. } { Point.X = 750. + playAreaRect.left; Y = 100. + playAreaRect.top }
                Hub <| Hub.create "device7" "Hub (1)" { Area.X = 0.; Y = 0.; Width = 100.; Height = 35. } { Point.X = 900. + playAreaRect.left; Y = 100. + playAreaRect.top }
            ]
        
        devices
        |> List.map Device.toHTMLElement
        |> List.map (fun x -> document.getElementById("playArea").appendChild(x))
        |> ignore

        let cables =
            [
                Cable.create "lancable1" Kind.LANCable "LAN cable (1)" "5,5 195,95" { Area.X = 0.; Y = 0.; Width = 200.; Height = 100. } { Point.X = 0. + playAreaRect.left; Y = 0. + playAreaRect.top }
                Cable.create "lancable2" Kind.LANCable "LAN cable (2)" "5,5 195,95" { Area.X = 0.; Y = 0.; Width = 200.; Height = 100. } { Point.X = 200. + playAreaRect.left; Y = 0. + playAreaRect.top }
                Cable.create "lancable3" Kind.LANCable "LAN cable (3)" "5,2 195,2" { Area.X = 0.; Y = 0.; Width = 200.; Height = 5. } { Point.X = 400. + playAreaRect.left; Y = 0. + playAreaRect.top }
                Cable.create "lancable4" Kind.LANCable "LAN cable (4)" "2,5 2,95" { Area.X = 0.; Y = 0.; Width = 5.; Height = 100. } { Point.X = 600. + playAreaRect.left; Y = 0. + playAreaRect.top }
            ]
        
        cables
        |> List.map Cable.toHTMLElement
        |> List.map (fun x -> document.getElementById("playArea").appendChild(x))
        |> ignore
        
        let deviceElements =
            devices
            |> List.filter (fun x -> Device.isClient x || Device.isRouter x || Device.isHub x)
            |> List.map (fun x ->
                match x with
                | Client d -> d.Id
                | Router d -> d.Id
                | Hub d -> d.Id)
            |> List.map document.getElementById
        
        deviceElements
        |> List.iter
            (fun x ->
                setMouseMoveEvent x
                resetTitleOnNameChange x
                setToQuitEditOnEnter x)

        cables
        |> List.map (fun x -> x.Id)
        |> List.map document.getElementById
        |> List.iter setMouseMoveEventCable

        let submitButton = document.getElementById("submitButton") :?> Browser.Types.HTMLButtonElement
        submitButton.onclick <- fun _ ->
            let devices' =
                document.getElementById("playArea").getElementsByClassName("device-container")
                |> (fun x -> JS.Constructors.Array?from(x))
                |> Array.toList
                |> List.map Device.ofHTMLElement
                |> List.filter Option.isSome
                |> List.map (fun (Some (x: Device)) -> x)
            
            //devices' |> List.length |> printfn "%d devices."
            //devices' |> List.iter (fun x -> printfn "%s, %s" x.Name (x.IPv4.ToString()))

            let lanCables' =
                document.getElementById("playArea").getElementsByClassName("cable-container")
                |> (fun x -> JS.Constructors.Array?from(x))
                |> Array.toList
                |> List.map Cable.ofHTMLElement
                |> List.filter Option.isSome
                |> List.map (fun (Some (x: Cable)) -> x)
            
            //lanCables' |> List.length |> printfn "%d cables."
            //lanCables' |> List.iter (fun x -> printfn "%s" x.Name)

            let errorArea = document.getElementById "errorArea" :?> Browser.Types.HTMLDivElement
            let outputArea = document.getElementById "outputArea" :?> Browser.Types.HTMLDivElement
            let sourceInput = document.getElementById("sourceInput") :?> Browser.Types.HTMLInputElement

            errorArea.innerText<- ""
            outputArea.innerText<- ""

            let source =
                devices'
                |> List.filter (fun x -> Device.isClient x || Device.isRouter x)
                |> List.tryFind (Device.hasIPv4 sourceInput.value)
            //source.Name |> printfn "Source: %s"

            match source with
            | None ->
                errorArea.innerText<- sprintf "Input source IPv4."
                sourceInput.focus()
            | Some source' ->
                let sourceArea = (fun x -> match x with | Client d -> d.Area | Router d -> d.Area) source'
                let sourceName = (fun x -> match x with | Client d -> d.Name | Router d -> d.Name) source'
                let lanCablesWithSource =
                    lanCables'
                    |> List.filter (fun (x: Cable) -> x.Area |> Area.isOver 0. sourceArea)
                match lanCablesWithSource with
                | [] -> errorArea.innerText <- sprintf "%s is connected to no lan cable." sourceName
                | _ ->
                    let destinationInput = document.getElementById("destinationInput") :?> Browser.Types.HTMLInputElement
                    match destinationInput.value with
                    | "" ->
                        errorArea.innerText<- sprintf "Input destination IPv4."
                        destinationInput.focus()
                    | _ ->
                        let destinationIPv4 = destinationInput.value |> IPv4.ofDotDecimal
                        ping lanCables' devices' source' 10 destinationIPv4
                        |> sprintf "%s> ping %s -> %b" sourceName (destinationIPv4.ToString())
                        |> (fun x -> outputArea.innerText <- x)
        
        let addRouterButton = document.getElementById("addRouterButton") :?> Browser.Types.HTMLButtonElement
        addRouterButton.onclick <- fun _ ->
            let playArea = document.getElementById "playArea"
            let playAreaRect = playArea.getBoundingClientRect()
   
            let deviceCount =
                playArea.getElementsByClassName("device-container")
                |> (fun x -> JS.Constructors.Array?from(x))
                |> Array.length
            
            let nextNumber = deviceCount + 1
            let id = sprintf $"device%d{nextNumber}"
            nextNumber
            |> (fun n ->
                Router.create
                    id
                    (sprintf $"Router (%d{n})")
                    "10.0.0.1"
                    "255.255.255.0"
                    { Area.X = 0.; Y = 0.; Width = 100.; Height = 35. }
                    { Point.X = 0. + playAreaRect.left; Y = 0. + playAreaRect.top })
            |> Router.toHTMLElement
            |> (fun x -> playArea.appendChild(x))
            |> ignore

            document.getElementById id
            |> setMouseMoveEvent
            
            document.getElementById id
            |> resetTitleOnNameChange

            document.getElementById id
            |> setToQuitEditOnEnter
        
        let addClientButton = document.getElementById("addClientButton") :?> Browser.Types.HTMLButtonElement
        addClientButton.onclick <- fun _ ->
            let playArea = document.getElementById "playArea"
            let playAreaRect = playArea.getBoundingClientRect()
   
            let deviceCount =
                playArea.getElementsByClassName("device-container")
                |> (fun x -> JS.Constructors.Array?from(x))
                |> Array.length
            
            let nextNumber = deviceCount + 1
            let id = sprintf $"device%d{nextNumber}"
            nextNumber
            |> (fun n ->
                Client.create
                    id
                    (sprintf $"Client (%d{n})")
                    "10.0.0.1"
                    "255.255.255.0"
                    { Area.X = 0.; Y = 0.; Width = 100.; Height = 100. }
                    { Point.X = 0. + playAreaRect.left; Y = 0. + playAreaRect.top })
            |> Client.toHTMLElement
            |> (fun x -> playArea.appendChild(x))
            |> ignore

            document.getElementById id
            |> setMouseMoveEvent
            
            document.getElementById id
            |> resetTitleOnNameChange

            document.getElementById id
            |> setToQuitEditOnEnter
        
        let addHubButton = document.getElementById("addHubButton") :?> Browser.Types.HTMLButtonElement
        addHubButton.onclick <- fun _ ->
            let playArea = document.getElementById "playArea"
            let playAreaRect = playArea.getBoundingClientRect()
   
            let deviceCount =
                playArea.getElementsByClassName("device-container")
                |> (fun x -> JS.Constructors.Array?from(x))
                |> Array.length
            
            let nextNumber = deviceCount + 1
            let id = sprintf $"device%d{nextNumber}"
            nextNumber
            |> (fun n ->
                Hub.create
                    id
                    (sprintf $"Hub (%d{n})")
                    { Area.X = 0.; Y = 0.; Width = 100.; Height = 35. }
                    { Point.X = 0. + playAreaRect.left; Y = 0. + playAreaRect.top })
            |> Hub.toHTMLElement
            |> (fun x -> playArea.appendChild(x))
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
   
            let cableCount =
                playArea.getElementsByClassName("cable-container")
                |> (fun x -> JS.Constructors.Array?from(x))
                |> Array.length
            
            let nextNumber = cableCount + 1
            let id = sprintf $"cable%d{nextNumber}"
            nextNumber
            |> (fun n ->
                Cable.create
                    id
                    Kind.LANCable
                    (sprintf $"LAN cable (%d{n})")
                    "5,5 195,95"
                    { Area.X = 0.; Y = 0.; Width = 200.; Height = 100. }
                    { Point.X = 0. + playAreaRect.left; Y = 0. + playAreaRect.top })
            |> Cable.toHTMLElement
            |> (fun x -> playArea.appendChild(x))
            |> ignore

            document.getElementById id
            |> setMouseMoveEventCable