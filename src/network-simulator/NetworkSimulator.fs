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
    
    let init () =
        let playArea = document.getElementById "playArea"
        let playAreaRect = playArea.getBoundingClientRect()

        let devices =
            [
                Device.create "device001" Kind.Client "Client (1)" "10.0.0.1" "255.255.255.0" { Area.X = 0.; Y = 0.; Width = 200.; Height = 100. } { Point.X = 0. + playAreaRect.left; Y = 100. + playAreaRect.top }
                Device.create "device002" Kind.Client "Client (2)" "10.0.0.2" "255.255.255.0" { Area.X = 0.; Y = 0.; Width = 200.; Height = 100. } { Point.X = 150. + playAreaRect.left; Y = 100. + playAreaRect.top }
                Device.create "device003" Kind.Router "Router (1)" "10.0.0.3" "255.255.255.0" { Area.X = 0.; Y = 0.; Width = 200.; Height = 100. } { Point.X = 300. + playAreaRect.left; Y = 100. + playAreaRect.top }
                Device.create "device004" Kind.Client "Client (3)" "10.0.0.18" "255.255.255.240" { Area.X = 0.; Y = 0.; Width = 200.; Height = 100. } { Point.X = 450. + playAreaRect.left; Y = 100. + playAreaRect.top }
                Device.create "device005" Kind.Router "Router (2)" "10.0.0.17" "255.255.255.240" { Area.X = 0.; Y = 0.; Width = 200.; Height = 100. } { Point.X = 600. + playAreaRect.left; Y = 100. + playAreaRect.top }
                Device.create "device006" Kind.Client "Client (4)" "10.0.0.19" "255.255.255.240" { Area.X = 0.; Y = 0.; Width = 200.; Height = 100. } { Point.X = 750. + playAreaRect.left; Y = 100. + playAreaRect.top }
            ]
        
        let deviceElements =
            devices
            |> List.map Device.toElement
            |> String.concat ""

        let cables =
            [
                Cable.create "lancable001" Kind.LANCable "LAN cable (1)" "5,95 195,5" { Area.X = 0.; Y = 0.; Width = 200.; Height = 100. } { Point.X = 0. + playAreaRect.left; Y = 0. + playAreaRect.top }
                Cable.create "lancable002" Kind.LANCable "LAN cable (2)" "5,5 195,95" { Area.X = 0.; Y = 0.; Width = 200.; Height = 100. } { Point.X = 200. + playAreaRect.left; Y = 0. + playAreaRect.top }
                Cable.create "lancable003" Kind.LANCable "LAN cable (3)" "5,2 195,2" { Area.X = 0.; Y = 0.; Width = 200.; Height = 5. } { Point.X = 400. + playAreaRect.left; Y = 0. + playAreaRect.top }
                Cable.create "lancable004" Kind.LANCable "LAN cable (4)" "2,5 2,95" { Area.X = 0.; Y = 0.; Width = 5.; Height = 100. } { Point.X = 600. + playAreaRect.left; Y = 0. + playAreaRect.top }
            ]
        
        let cableElements =
            cables
            |> List.map Cable.toElement
            |> String.concat ""
        
        document.getElementById("playArea").innerHTML <- deviceElements + cableElements
        
        let onMouseMove (elm: Browser.Types.HTMLElement) (svg: Browser.Types.HTMLElement) (event: Browser.Types.Event) =
            let event = event :?> Browser.Types.MouseEvent
            let top = (event.clientY - svg.getBoundingClientRect().height / 2.)
            let left = (event.clientX - svg.getBoundingClientRect().width / 2.)
            let styleString = sprintf "top: %fpx; left: %fpx;" top left
            elm.setAttribute("style", styleString)
        
        List.append
            (devices |> List.map (fun x -> x.Id))
            (cables |> List.map (fun x -> x.Id))
        |> List.map document.getElementById
        |> List.iter (fun x ->
            let svg = document.getElementById(x.id + "Svg")
            svg.ondragstart <- fun _ -> false
            let onMouseMove' = onMouseMove x svg
            svg.onmousedown <- fun _ ->
                document.addEventListener("mousemove", onMouseMove')
                svg.onmouseup <- fun _ ->
                    printfn "mouse up!"
                    document.removeEventListener("mousemove", onMouseMove'))
        
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