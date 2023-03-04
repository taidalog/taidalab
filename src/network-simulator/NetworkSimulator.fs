// taidalab Version 3.3.3
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom
open Fable.Core
open Fable.Core.JsInterop
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
            <button type="button" id="addLANCableButton" class="submit-button d2b-button display-order-5">add a LAN cable</button>
        </form>
        <div id="errorArea" class="error-area warning"></div>
        <div id="outputArea" class="output-area"></div>
        <div id="playArea" class="play-area"></div>
        """

    let isOver (offset: float) (area1: Area) (area2: Area): bool =
        //printfn "DEBUG: area1 = left: %f top: %f width: %f height: %f" area1.X area1.Y area1.Width area1.Height
        //printfn "DEBUG: area2  = left: %f top: %f width: %f height: %f" area2.X area2.Y area2.Width area2.Height
        let topLeft =
            area2.X >= area1.X - offset &&
            area2.X <= area1.X + area1.Width + offset &&
            area2.Y >= area1.Y - offset &&
            area2.Y <= area1.Y + area1.Height + offset
        
        let topRight =
            area2.X + area2.Width >= area1.X - offset &&
            area2.X + area2.Width <= area1.X + area1.Width + offset &&
            area2.Y >= area1.Y - offset &&
            area2.Y <= area1.Y + area1.Height + offset
        
        let bottomLeft =
            area2.X >= area1.X - offset &&
            area2.X <= area1.X + area1.Width + offset &&
            area2.Y + area2.Height >= area1.Y - offset &&
            area2.Y + area2.Height <= area1.Y + area1.Height + offset
        
        let bottomRight =
            area2.X + area2.Width >= area1.X - offset &&
            area2.X + area2.Width <= area1.X + area1.Width + offset &&
            area2.Y + area2.Height >= area1.Y - offset &&
            area2.Y + area2.Height <= area1.Y + area1.Height + offset
        
        topLeft || topRight || bottomLeft || bottomRight
    
    let getNetNeighbors (cables: Cable list) (devices: Device list) (source: Device) : Device list =
        //cables |> List.length |> printfn "%d cables."
        //cables |> List.iter (fun x -> printfn "%s (%b)" x.Name (x.Area |> isOver 0. source.Area))
        let connectedCables =
            cables |> List.filter (fun c -> c.Area |> isOver 0. source.Area)
        //connectedCables |> List.iter (fun x -> printfn "getNetNeighbor': %s is connected to %s" source.Name x.Name)
        connectedCables
        |> List.collect
            (fun c ->
                //printfn "%s is connected to below:" c.Name
                devices
                |> List.filter (fun d ->
                    //printfn "%s (%b)" d.Name (isOver 0. d.Area c.Area && d.IPv4 <> source.IPv4)
                    isOver 0. d.Area c.Area &&
                    d.IPv4 <> source.IPv4
                    ))

    let rec ping (cables: Cable list) (devices: Device list) (source: Device) (ttl: int) (destinationIPv4: IPv4) : bool =
        let neighbors = getNetNeighbors cables devices source
        neighbors |> List.iter (fun x -> printfn "ping: %s is connected to %s" source.Name x.Name)
        
        let found = neighbors |> List.exists (fun x -> x.IPv4 = destinationIPv4)
        printfn "ping: destination IPv4 found = %b" found

        if found then
            true
        else if ttl = 0 then
            false
        else
            neighbors
            |> List.exists (fun x -> ping cables devices x (ttl - 1) destinationIPv4)
    
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
                printfn "mouse up!"
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
//                printfn "new, 2"
                (newPoint, point2)
            else
//                printfn "1, new"
                (point1, newPoint)
    
    let resizeCable (container: Browser.Types.HTMLElement) (svg: Browser.Types.HTMLElement) (polyline: Browser.Types.HTMLElement) (event: Browser.Types.Event) : unit =
        let event = event :?> Browser.Types.MouseEvent

        // Getting current end points of the cable.
        let point1, point2 =
            polyline.getAttribute("points")
            |> fun x -> x.Split([|' '|])
            |> Array.map Point.ofString
            |> fun xs -> Array.head xs, Array.last xs
        printfn "point1 = X: %f Y: %f" point1.X point1.Y
        printfn "point2 = X: %f Y: %f" point2.X point2.Y

        // Getting the `playArea` element, which contains the cable.
        let playArea = document.getElementById "playArea"
        printfn "event.clientX: %f" event.clientX
        printfn "event.clientY: %f" event.clientY
        printfn "playArea.clientLeft: %f" playArea.clientLeft
        printfn "playArea.clientTop: %f" playArea.clientTop

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
        
        updatedPoints |> (fun (p1, p2) -> printfn "updatedPoints: (%f, %f), (%f, %f)" p1.X p1.Y p2.X p2.Y)

        // Building the new cable area.
        let updatedArea = updatedPoints ||> Area.ofPoints |> Area.expand (5. * 2.) (5. * 2.)
        updatedArea |> (fun x -> printfn "updatedArea: X = %f, Y = %f, Width = %f, Height = %f)" x.X x.Y x.Width x.Height)

        updatedPoints
        |> fun (p1, p2) -> $"%f{p1.X},%f{p1.Y} %f{p2.X},%f{p2.Y}"
        |> fun x -> polyline.setAttribute("points", x)

//        updatedArea
//        |> fun x -> $"top: %f{x.X}; left: %f{x.Y};"
//        |> fun x -> container.setAttribute("style", x)

        updatedArea
        |> fun x -> $"0 0 %f{x.Width} %f{x.Height}"
        |> fun x -> svg.setAttribute("viewBox", x)
        svg.setAttribute("style", "background-color: red;")
        
        svg.setAttribute("width", $"%f{updatedArea.Width}px")
        svg.setAttribute("height", $"%f{updatedArea.Height}px")
    
    let setMouseMoveEventCable (container: Browser.Types.HTMLElement) : unit =
        let cable = Cable.ofHTMLElement container
        match cable with
        | None -> ()
        | Some cable' ->
            let svg = document.getElementById(container.id + "Svg")
            let polyline: Browser.Types.HTMLElement =
                container.getElementsByTagName "polyline"
                |> (fun x -> JS.Constructors.Array?from(x))
                |> Array.head
            svg.ondragstart <- fun _ -> false
            svg.onmousedown <- fun e ->
                let playArea = document.getElementById "playArea"
                printfn "playArea (offsetLeft: %f, offsetTop: %f)" playArea.offsetLeft playArea.offsetTop
                printfn "clicked at (offsetX: %f, offset.Y: %f)" e.offsetX e.offsetY
                printfn "clicked at (clientX: %f, clientt.Y: %f)" e.clientX e.clientY
                printfn "cable.Points: %A" cable'.Points
                let point1, point2 =
                    cable'.Points
                    |> fun x -> x.Split([|' '|])
                    |> Array.map Point.ofString
                    |> fun xs -> Array.head xs, Array.last xs
                let cursorPoint = Point.ofFloats e.offsetX e.offsetY
                let minDistance =
                    [point1; point2]
                    |> List.map (Point.distance cursorPoint)
                    |> List.min
                printfn "distance: %f" minDistance
                let onMouseMove' =
                    if minDistance < 5. then
                        resizeCable container svg polyline
                    else
                        onMouseMove container svg
                document.addEventListener("mousemove", onMouseMove')
                svg.onmouseup <- fun _ ->
                    printfn "mouse up!"
                    document.removeEventListener("mousemove", onMouseMove')
    
    let init () =
        let playArea = document.getElementById "playArea"
        let playAreaRect = playArea.getBoundingClientRect()

        let devices =
            [
                Device.create "device1" Kind.Client "Client (1)" "10.0.0.1" "255.255.255.0" { Area.X = 0.; Y = 0.; Width = 100.; Height = 100. } { Point.X = 0. + playAreaRect.left; Y = 100. + playAreaRect.top }
                Device.create "device2" Kind.Client "Client (2)" "10.0.0.2" "255.255.255.0" { Area.X = 0.; Y = 0.; Width = 100.; Height = 100. } { Point.X = 150. + playAreaRect.left; Y = 100. + playAreaRect.top }
                Device.create "device3" Kind.Router "Router (1)" "10.0.0.3" "255.255.255.0" { Area.X = 0.; Y = 0.; Width = 100.; Height = 35. } { Point.X = 300. + playAreaRect.left; Y = 100. + playAreaRect.top }
                Device.create "device4" Kind.Client "Client (3)" "10.0.0.18" "255.255.255.240" { Area.X = 0.; Y = 0.; Width = 100.; Height = 100. } { Point.X = 450. + playAreaRect.left; Y = 100. + playAreaRect.top }
                Device.create "device5" Kind.Router "Router (2)" "10.0.0.17" "255.255.255.240" { Area.X = 0.; Y = 0.; Width = 100.; Height = 35. } { Point.X = 600. + playAreaRect.left; Y = 100. + playAreaRect.top }
                Device.create "device6" Kind.Client "Client (4)" "10.0.0.19" "255.255.255.240" { Area.X = 0.; Y = 0.; Width = 100.; Height = 100. } { Point.X = 750. + playAreaRect.left; Y = 100. + playAreaRect.top }
            ]
        
        let deviceElements =
            devices
            |> List.map Device.toElement
            |> String.concat ""

        let cables =
            [
                Cable.create "lancable1" Kind.LANCable "LAN cable (1)" "5,95 195,5" { Area.X = 0.; Y = 0.; Width = 200.; Height = 100. } { Point.X = 0. + playAreaRect.left; Y = 0. + playAreaRect.top }
                Cable.create "lancable2" Kind.LANCable "LAN cable (2)" "5,5 195,95" { Area.X = 0.; Y = 0.; Width = 200.; Height = 100. } { Point.X = 200. + playAreaRect.left; Y = 0. + playAreaRect.top }
                Cable.create "lancable3" Kind.LANCable "LAN cable (3)" "5,2 195,2" { Area.X = 0.; Y = 0.; Width = 200.; Height = 5. } { Point.X = 400. + playAreaRect.left; Y = 0. + playAreaRect.top }
                Cable.create "lancable4" Kind.LANCable "LAN cable (4)" "2,5 2,95" { Area.X = 0.; Y = 0.; Width = 5.; Height = 100. } { Point.X = 600. + playAreaRect.left; Y = 0. + playAreaRect.top }
            ]
        
        let cableElements =
            cables
            |> List.map Cable.toElement
            |> String.concat ""
        
        document.getElementById("playArea").innerHTML <- deviceElements + cableElements
        
        devices
        |> List.map (fun x -> x.Id)
        |> List.map document.getElementById
        |> List.iter setMouseMoveEvent
        
        devices
        |> List.map (fun x -> document.getElementById x.Id)
        |> List.iter resetTitleOnNameChange
        
        devices
        |> List.map (fun x -> document.getElementById(x.Id))
        |> List.iter setToQuitEditOnEnter

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
                |> List.tryFind (fun x -> x.IPv4.ToString() = sourceInput.value)
            //source.Name |> printfn "Source: %s"

            match source with
            | None ->
                errorArea.innerText<- sprintf "Input source IPv4."
                sourceInput.focus()
            | Some source' ->
                let lanCablesWithSource =
                    lanCables'
                    |> List.filter (fun (x: Cable) -> x.Area |> isOver 0. source'.Area)
                match lanCablesWithSource with
                | [] -> errorArea.innerText <- sprintf "%s is connected to no lan cable." source'.Name
                | _ ->
                    let destinationInput = document.getElementById("destinationInput") :?> Browser.Types.HTMLInputElement
                    match destinationInput.value with
                    | "" ->
                        errorArea.innerText<- sprintf "Input destination IPv4."
                        destinationInput.focus()
                    | _ ->
                        let destinationIPv4 = destinationInput.value |> IPv4.ofDotDecimal
                        ping lanCables' devices' source' 10 destinationIPv4
                        |> sprintf "%s> ping %s -> %b" source'.Name (destinationIPv4.ToString())
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
                Device.create
                    id
                    Kind.Router
                    (sprintf $"Router (%d{n})")
                    "10.0.0.1"
                    "255.255.255.0"
                    { Area.X = 0.; Y = 0.; Width = 100.; Height = 35. }
                    { Point.X = 0. + playAreaRect.left; Y = 0. + playAreaRect.top })
            |> Device.toHTMLElement
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
                Device.create
                    id
                    Kind.Client
                    (sprintf $"Client (%d{n})")
                    "10.0.0.1"
                    "255.255.255.0"
                    { Area.X = 0.; Y = 0.; Width = 100.; Height = 100. }
                    { Point.X = 0. + playAreaRect.left; Y = 0. + playAreaRect.top })
            |> Device.toHTMLElement
            |> (fun x -> playArea.appendChild(x))
            |> ignore

            document.getElementById id
            |> setMouseMoveEvent
            
            document.getElementById id
            |> resetTitleOnNameChange

            document.getElementById id
            |> setToQuitEditOnEnter