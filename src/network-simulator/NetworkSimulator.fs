// taidalab Version 3.3.3
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom
open Fable.Core
open Fable.Core.JsInterop

module NetworkSimulator =
    let main = """
        <form id="inputArea" class="iro-input-area" autocomplete="off">
            <span class="display-order-1 input-area-iro-shorter">
                <span class="iro-input-wrapper">
                    <label for="intervalInput">Source:<input type="text" id="sourceInput" class="number-input display-order-1 consolas"></label>
                </span>
                <span class="iro-input-wrapper">
                    <label for="limitInput">Destination:<input type="text" id="destinationInput" class="number-input display-order-1 consolas"></label>
                </span>
            </span>
            <span class="display-order-2">
                <button type="button" id="submitButton" class="submit-button d2b-button">確認</button>
            </span>
        </form>
        <div id="errorArea" class="error-area"></div>
        <div id="outputArea" class="output-area"></div>
        <div id="playArea" class="play-area"></div>
        """

    let isOver offset (elm1: Browser.Types.HTMLElement) (elm2: Browser.Types.HTMLElement): bool =
        let rect1 = elm1.getBoundingClientRect()
        let rect2 = elm2.getBoundingClientRect()

        printfn "DEBUG %s: %f %f %f %f" elm1.id rect1.left rect1.top rect1.width rect1.height
        printfn "DEBUG %s: %f %f %f %f" elm2.id rect2.left rect2.top rect2.width rect2.height

        let topLeft =
            rect2.left >= rect1.left - offset &&
            rect2.left <= rect1.left + rect1.width + offset &&
            rect2.top >= rect1.top - offset &&
            rect2.top <= rect1.top + rect1.height + offset
        
        let topRight =
            rect2.left + rect2.width >= rect1.left - offset &&
            rect2.left + rect2.width <= rect1.left + rect1.width + offset &&
            rect2.top >= rect1.top - offset &&
            rect2.top <= rect1.top + rect1.height + offset
        
        let bottomLeft =
            rect2.left >= rect1.left - offset &&
            rect2.left <= rect1.left + rect1.width + offset &&
            rect2.top + rect2.height >= rect1.top - offset &&
            rect2.top + rect2.height <= rect1.top + rect1.height + offset
        
        let bottomRight =
            rect2.left + rect2.width >= rect1.left - offset &&
            rect2.left + rect2.width <= rect1.left + rect1.width + offset &&
            rect2.top + rect2.height >= rect1.top - offset &&
            rect2.top + rect2.height <= rect1.top + rect1.height + offset
        
        topLeft || topRight || bottomLeft || bottomRight


    let getNetNeighbors (cables: Browser.Types.HTMLElement list) (devices: Browser.Types.HTMLElement list) (source: Browser.Types.HTMLElement) : Browser.Types.HTMLElement list =
        cables
        |> List.collect
            (fun x ->
                devices
                |> List.filter (fun d -> d.id <> source.id && isOver 0. x d))

    let init () =
        document.getElementById("playArea").innerHTML <- """
            <div id="device001" class="device device-note">
              <svg id="device001img" class="device-image" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <title>Client (1)</title>
                  <path d="m 20,10 l 60,0 l 0,45 l -60,0 l 0,-45 z" fill="none" stroke-width="5" stroke="#000"/>
                  <path d="m 20,60 l -15,30 l 90,0 l -15,-30" stroke="#000" fill="#fff" stroke-width="5"/>
                  <path d="m 28,65 l  -8,16 l 60,0 l  -8,-16  z" stroke="#000" fill="#000" stroke-width="5"/>
                  <text fill="#000000" stroke="#000" stroke-width="0" x="23.40522" y="19.58995" font-size="6" font-family="Noto Sans JP" text-anchor="start" xml:space="preserve">PS C:\&gt;_</text>
                  <line fill="none" stroke="#fff" x1="20" y1="69" x2="80" y2="69"/>
                  <line fill="none" stroke="#fff" x1="15" y1="76" x2="85" y2="76"/>
                  <line fill="none" stroke="#fff" x1="36.60287" y1="60" x2="29.42583" y2="85"/>
                  <line fill="none" stroke="#fff" x1="46.60287" y1="60" x2="45.42583" y2="85"/>
                  <line fill="none" stroke="#fff" x1="55.60287" y1="60" x2="60.42583" y2="85"/>
                  <line fill="none" stroke="#fff" x1="65.5083" y1="60" x2="72.68534" y2="85"/>
                </g>
              </svg>
              <br>
              Client (1)<br>
              IPv4: 10.0.0.1<br>
              Subnetmask: 255.255.255.0
              <span id="device001Name" class="no-display">Client (1)</span>
              <span id="device001IPv4" class="no-display">10.0.0.1</span>
              <span id="device001Kind" class="no-display">Client</span>
              <span id="device001Subnetmask" class="no-display">255.255.255.0</span>
            </div>
            
            <div id="device002" class="device device-note">
              <svg id="device002img" class="device-image" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <title>Client (2)</title>
                  <path d="m 20,10 l 60,0 l 0,45 l -60,0 l 0,-45 z" fill="none" stroke-width="5" stroke="#000"/>
                  <path d="m 20,60 l -15,30 l 90,0 l -15,-30" stroke="#000" fill="#fff" stroke-width="5"/>
                  <path d="m 28,65 l  -8,16 l 60,0 l  -8,-16  z" stroke="#000" fill="#000" stroke-width="5"/>
                  <text fill="#000000" stroke="#000" stroke-width="0" x="23.40522" y="19.58995" font-size="6" font-family="Noto Sans JP" text-anchor="start" xml:space="preserve">PS C:\&gt;_</text>
                  <line fill="none" stroke="#fff" x1="20" y1="69" x2="80" y2="69"/>
                  <line fill="none" stroke="#fff" x1="15" y1="76" x2="85" y2="76"/>
                  <line fill="none" stroke="#fff" x1="36.60287" y1="60" x2="29.42583" y2="85"/>
                  <line fill="none" stroke="#fff" x1="46.60287" y1="60" x2="45.42583" y2="85"/>
                  <line fill="none" stroke="#fff" x1="55.60287" y1="60" x2="60.42583" y2="85"/>
                  <line fill="none" stroke="#fff" x1="65.5083" y1="60" x2="72.68534" y2="85"/>
                </g>
              </svg>
              <br>
              Client (2)<br>
              IPv4: 10.0.0.2<br>
              Subnetmask: 255.255.255.0
              <span id="device002Name" class="no-display">Client (2)</span>
              <span id="device002IPv4" class="no-display">10.0.0.2</span>
              <span id="device002Kind" class="no-display">Client</span>
              <span id="device002Subnetmask" class="no-display">255.255.255.0</span>
            </div>
            
            <div id="device003" class="device device-note">
              <svg id="device005img" class="device-image" width="100" height="35" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <title>Router (1)</title>
                  <path d="m 50,0 l 50,0 l 0,35 l -100,0 l 0,-35 l 50,0 z" stroke="#000000" fill="#000000"/>
                  <path d="m 20,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z" stroke="#000000" fill="#ffffff"/>
                  <path d="m 40,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z" stroke="#000000" fill="#ffffff"/>
                  <path d="m 60,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z" stroke="#000000" fill="#ffffff"/>
                  <path d="m 80,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z" stroke="#000000" fill="#ffffff"/>
                </g>
              </svg>
              <br>
              Router (1)<br>
              IPv4: 10.0.0.3<br>
              Subnetmask: 255.255.255.0
              <span id="device003Name" class="no-display">Router (1)</span>
              <span id="device003IPv4" class="no-display">10.0.0.3</span>
              <span id="device003Kind" class="no-display">Router</span>
              <span id="device003Subnetmask" class="no-display">255.255.255.0</span>
            </div>
            
            <div id="device004" class="device device-note">
              <svg id="device004img" class="device-image" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <title>Client (3)</title>
                  <path d="m 20,10 l 60,0 l 0,45 l -60,0 l 0,-45 z" fill="none" stroke-width="5" stroke="#000"/>
                  <path d="m 20,60 l -15,30 l 90,0 l -15,-30" stroke="#000" fill="#fff" stroke-width="5"/>
                  <path d="m 28,65 l  -8,16 l 60,0 l  -8,-16  z" stroke="#000" fill="#000" stroke-width="5"/>
                  <text fill="#000000" stroke="#000" stroke-width="0" x="23.40522" y="19.58995" font-size="6" font-family="Noto Sans JP" text-anchor="start" xml:space="preserve">PS C:\&gt;_</text>
                  <line fill="none" stroke="#fff" x1="20" y1="69" x2="80" y2="69"/>
                  <line fill="none" stroke="#fff" x1="15" y1="76" x2="85" y2="76"/>
                  <line fill="none" stroke="#fff" x1="36.60287" y1="60" x2="29.42583" y2="85"/>
                  <line fill="none" stroke="#fff" x1="46.60287" y1="60" x2="45.42583" y2="85"/>
                  <line fill="none" stroke="#fff" x1="55.60287" y1="60" x2="60.42583" y2="85"/>
                  <line fill="none" stroke="#fff" x1="65.5083" y1="60" x2="72.68534" y2="85"/>
                </g>
              </svg>
              <br>
              Client (3)<br>
              IPv4: 10.0.0.18<br>
              Subnetmask: 255.255.255.240
              <span id="device004Name" class="no-display">Client (3)</span>
              <span id="device004IPv4" class="no-display">10.0.0.18</span>
              <span id="device004Kind" class="no-display">Client</span>
              <span id="device004Subnetmask" class="no-display">255.255.255.240</span>
            </div>
            
            <div id="device005" class="device device-note">
              <svg id="device005img" class="device-image" width="100" height="35" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <title>Router (2)</title>
                  <path d="m 50,0 l 50,0 l 0,35 l -100,0 l 0,-35 l 50,0 z" stroke="#000000" fill="#000000"/>
                  <path d="m 20,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z" stroke="#000000" fill="#ffffff"/>
                  <path d="m 40,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z" stroke="#000000" fill="#ffffff"/>
                  <path d="m 60,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z" stroke="#000000" fill="#ffffff"/>
                  <path d="m 80,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z" stroke="#000000" fill="#ffffff"/>
                </g>
              </svg>
              <br>
              Router (2)<br>
              IPv4: 10.0.0.17<br>
              Subnetmask: 255.255.255.240
              <span id="device005Name" class="no-display">Router (2)</span>
              <span id="device005IPv4" class="no-display">10.0.0.17</span>
              <span id="device005Kind" class="no-display">Router</span>
              <span id="device005Subnetmask" class="no-display">255.255.255.240</span>
            </div>
            
            <div id="device006" class="device device-note">
              <svg id="device006img" class="device-image" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <title>Client (4)</title>
                  <path d="m 20,10 l 60,0 l 0,45 l -60,0 l 0,-45 z" fill="none" stroke-width="5" stroke="#000"/>
                  <path d="m 20,60 l -15,30 l 90,0 l -15,-30" stroke="#000" fill="#fff" stroke-width="5"/>
                  <path d="m 28,65 l  -8,16 l 60,0 l  -8,-16  z" stroke="#000" fill="#000" stroke-width="5"/>
                  <text fill="#000000" stroke="#000" stroke-width="0" x="23.40522" y="19.58995" font-size="6" font-family="Noto Sans JP" text-anchor="start" xml:space="preserve">PS C:\&gt;_</text>
                  <line fill="none" stroke="#fff" x1="20" y1="69" x2="80" y2="69"/>
                  <line fill="none" stroke="#fff" x1="15" y1="76" x2="85" y2="76"/>
                  <line fill="none" stroke="#fff" x1="36.60287" y1="60" x2="29.42583" y2="85"/>
                  <line fill="none" stroke="#fff" x1="46.60287" y1="60" x2="45.42583" y2="85"/>
                  <line fill="none" stroke="#fff" x1="55.60287" y1="60" x2="60.42583" y2="85"/>
                  <line fill="none" stroke="#fff" x1="65.5083" y1="60" x2="72.68534" y2="85"/>
                </g>
              </svg>
              <br>
              Client (4)<br>
              IPv4: 10.0.0.19<br>
              Subnetmask: 255.255.255.240
              <span id="device006Name" class="no-display">Client (4)</span>
              <span id="device006IPv4" class="no-display">10.0.0.19</span>
              <span id="device006Kind" class="no-display">Client</span>
              <span id="device006Subnetmask" class="no-display">255.255.255.240</span>
            </div>
                
            <div id="lancable001" class="device lan-cable">
              <svg id="lancable001img" class="device lan-cable" viewBox="0 0 200 100" width="200px" height="100px" xmlns="http://www.w3.org/2000/svg">
                <polyline stroke="#00aeda" stroke-width="5" fill="none" points="5,95 195,5"/>
              </svg>
            </div>

            <div id="lancable002" class="device lan-cable">
              <svg id="lancable002img" class="device lan-cable" viewBox="0 0 200 100" width="200px" height="100px" xmlns="http://www.w3.org/2000/svg">
                <polyline stroke="#00aeda" stroke-width="5" fill="none" points="5,5 195,95"/>
              </svg>
            </div>
            
            <div id="lancable003" class="device lan-cable">
              <svg id="lancable003img" class="device lan-cable" viewBox="0 0 200 5" width="200px" height="5px" xmlns="http://www.w3.org/2000/svg">
                <polyline stroke="#00aeda" stroke-width="5" fill="none" points="5,2 195,2"/>
              </svg>
            </div>
            
            <div id="lancable004" class="device lan-cable">
              <svg id="lancable004img" class="device lan-cable" viewBox="0 0 5 100" width="5px" height="100px" xmlns="http://www.w3.org/2000/svg">
                <polyline stroke="#00aeda" stroke-width="5" fill="none" points="2,5 2,95"/>
              </svg>
            </div>"""
        
        let lanCables, devices =
            document.getElementById("playArea").getElementsByTagName("svg")
            |> (fun x -> JS.Constructors.Array?from(x))
            |> Array.toList
            |> List.partition (fun (x: Browser.Types.HTMLElement) -> x.classList.contains "lan-cable")
        
        (devices, lanCables)
        ||> List.append
        |> List.iter (fun x ->
            x.ondragstart <- fun _ -> false
            x.onmousedown <- fun _ ->
                //printfn "mouse down!"
                let onMouseMove (event: Browser.Types.Event) =
                    //printfn "mouse move!"
                    let event = event :?> Browser.Types.MouseEvent
                    let top = (event.clientY - x.getBoundingClientRect().height / 2.)
                    let left = (event.clientX - x.getBoundingClientRect().width / 2.)
                    let styleString = sprintf "%s: %fpx; %s: %fpx;" "top" top "left" left
                    x.parentElement.setAttribute("style", styleString)
                document.addEventListener("mousemove", onMouseMove)
                x.onmouseup <- fun _ ->
                    //printfn "mouse up!"
                    document.removeEventListener("mousemove", onMouseMove))
        
        let source = document.getElementById("device001img")

        let submitButton = document.getElementById("submitButton") :?> Browser.Types.HTMLButtonElement
        submitButton.onclick <- fun _ ->
            

            let lanCablesConnectedToClient001 =
                lanCables
                |> List.filter (fun x -> x |> isOver 0. source)
            
            let outputArea = document.getElementById "outputArea" :?> Browser.Types.HTMLDivElement

            match lanCablesConnectedToClient001 with
            | [] -> outputArea.innerText <- "Client (1) is connected to no lan cable."
            | _ ->
                lanCablesConnectedToClient001
                |> List.map (fun x -> sprintf "Client (1) is connected to %s" x.id)
                |> String.concat "<br>"
                |> (fun x -> outputArea.innerHTML <- x)
                |> ignore
            
            let neighbors: Browser.Types.HTMLElement list =
                getNetNeighbors lanCablesConnectedToClient001 devices source

            neighbors
            |> List.iter
                (fun x ->
                    x.parentElement.innerText
                    |> fun x -> x.Split([|'\n'|])
                    |> Array.filter (fun ss -> ss <> "")
                    |> Array.item 0
                    |> (fun x -> printfn "Client (1) -> %s" x))