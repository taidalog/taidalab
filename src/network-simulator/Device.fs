// taidalab Version 3.3.3
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom
open Fermata

type Device =
    { Id : string
      Kind : Kind
      Name : string
      IPv4 : IPv4
      SubnetMask : IPv4
      NetworkAddress : IPv4
      Area : Area
      Position : Point }

module Device =
    let create id kind name ipv4 subnetMask area position : Device =
        let ipv4 = IPv4.ofDotDecimal ipv4
        let subnetMask = IPv4.ofDotDecimal subnetMask
        let networkAddress = IPv4.getSubnet subnetMask ipv4

        { Device.Id = id
          Device.Kind = kind
          Device.Name = name
          Device.IPv4 = ipv4
          Device.SubnetMask = subnetMask
          Device.NetworkAddress =  networkAddress
          Device.Area = area
          Device.Position = position }

    let toElement (device: Device) : string =
        match device.Kind with
        | Kind.Client ->
            $"""
            <div id="%s{device.Id}" class="device device-container device-note" style="top: %f{device.Position.Y}px; left: %f{device.Position.X}px;">
                <svg id="%s{device.Id}Svg" class="device-image" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <g>
                    <title id="%s{device.Id}Title">%s{device.Name}</title>
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
                <span id="%s{device.Id}Name" class="device-prop" contentEditable="true">%s{device.Name}</span><br>
                <span id="%s{device.Id}IPv4" class="device-prop device-prop-ipv4" contentEditable="true">%s{device.IPv4.ToString()}</span><br>
                <span id="%s{device.Id}SubnetMask" class="device-prop device-prop-subnetmask" contentEditable="true">%s{device.SubnetMask.ToString()}</span>
                <span id="%s{device.Id}Kind" class="no-display">%s{device.Kind |> string}</span>
            </div>"""
        | Kind.Router ->
            $"""
            <div id="%s{device.Id}" class="device device-container device-note" style="top: %f{device.Position.Y}px; left: %f{device.Position.X}px;">
              <svg id="%s{device.Id}Svg" class="device-image" width="100" height="35" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <title id="%s{device.Id}Title">%s{device.Name}</title>
                  <path d="m 50,0 l 50,0 l 0,35 l -100,0 l 0,-35 l 50,0 z" stroke="#000000" fill="#000000"/>
                  <path d="m 20,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z" stroke="#000000" fill="#ffffff"/>
                  <path d="m 40,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z" stroke="#000000" fill="#ffffff"/>
                  <path d="m 60,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z" stroke="#000000" fill="#ffffff"/>
                  <path d="m 80,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z" stroke="#000000" fill="#ffffff"/>
                </g>
              </svg>
              <br>
              <span id="%s{device.Id}Name" class="device-prop" contentEditable="true">%s{device.Name}</span><br>
              <span id="%s{device.Id}IPv4" class="device-prop device-prop-ipv4" contentEditable="true">%s{device.IPv4.ToString()}</span><br>
              <span id="%s{device.Id}SubnetMask" class="device-prop device-prop-subnetmask" contentEditable="true">%s{device.SubnetMask.ToString()}</span>
              <span id="%s{device.Id}Kind" class="no-display">%s{device.Kind |> string}</span>
            </div>
            """
        | _ -> ""
    
    let toHTMLElement (device: Device) : Browser.Types.HTMLElement =
        let container = document.createElement("div")
        container.id <- device.Id
        container.className <- "device device-container device-note"
        container.setAttribute("style", $"top: %f{device.Position.Y}px; left: %f{device.Position.X}px;")
        printfn "%f" device.Position.X
        printfn "%f" device.Position.Y

        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        svg.id <- $"%s{device.Id}Svg"
        svg.classList.add("device-image")
        svg.setAttribute("width", "100")
        svg.setAttribute("height", "100")

        let g = document.createElementNS("http://www.w3.org/2000/svg", "g")

        let title = document.createElementNS("http://www.w3.org/2000/svg", "title")
        title.id <- $"%s{device.Id}Title"
        title.textContent <- $"%s{device.Name}"

        let path1 = document.createElementNS("http://www.w3.org/2000/svg", "path")
        path1.setAttribute("d", "m 20,10 l 60,0 l 0,45 l -60,0 l 0,-45 z")
        path1.setAttribute("fill", "none")
        path1.setAttribute("stroke", "#000")
        path1.setAttribute("stroke-width", "5")

        let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path")
        path2.setAttribute("d", "m 20,60 l -15,30 l 90,0 l -15,-30")
        path2.setAttribute("fill", "#fff")
        path2.setAttribute("stroke", "#000")
        path2.setAttribute("stroke-width", "5")

        let path3 = document.createElementNS("http://www.w3.org/2000/svg", "path")
        path3.setAttribute("d", "m 28,65 l  -8,16 l 60,0 l  -8,-16  z")
        path3.setAttribute("fill", "#000")
        path3.setAttribute("stroke", "#000")
        path3.setAttribute("stroke-width", "5")

        let text = document.createElementNS("http://www.w3.org/2000/svg", "text")
        text.setAttribute("fill", "#000000")
        text.setAttribute("stroke", "#000")
        text.setAttribute("stroke-width", "0")
        text.setAttribute("x", "23.40522")
        text.setAttribute("y", "19.58995")
        text.setAttribute("font-size", "6")
        text.setAttribute("font-family", "Noto Sans JP")
        text.setAttribute("text-anchor", "start")
        text.setAttribute("xml:space", "preserve")
        text.textContent <- "PS C:\\>_"

        let line1 = document.createElementNS("http://www.w3.org/2000/svg", "line")
        line1.setAttribute("fill", "none")
        line1.setAttribute("stroke", "#fff")
        line1.setAttribute("x1", "20")
        line1.setAttribute("y1", "69")
        line1.setAttribute("x2", "80")
        line1.setAttribute("y2", "69")

        let line2 = document.createElementNS("http://www.w3.org/2000/svg", "line")
        line2.setAttribute("fill", "none")
        line2.setAttribute("stroke", "#fff")
        line2.setAttribute("x1", "15")
        line2.setAttribute("y1", "76")
        line2.setAttribute("x2", "85")
        line2.setAttribute("y2", "76")
        
        let line3 = document.createElementNS("http://www.w3.org/2000/svg", "line")
        line3.setAttribute("fill", "none")
        line3.setAttribute("stroke", "#fff")
        line3.setAttribute("x1", "36.60287")
        line3.setAttribute("y1", "60")
        line3.setAttribute("x2", "29.42583")
        line3.setAttribute("y2", "85")
        
        let line4 = document.createElementNS("http://www.w3.org/2000/svg", "line")
        line4.setAttribute("fill", "none")
        line4.setAttribute("stroke", "#fff")
        line4.setAttribute("x1", "46.60287")
        line4.setAttribute("y1", "60")
        line4.setAttribute("x2", "45.42583")
        line4.setAttribute("y2", "85")
        
        let line5 = document.createElementNS("http://www.w3.org/2000/svg", "line")
        line5.setAttribute("fill", "none")
        line5.setAttribute("stroke", "#fff")
        line5.setAttribute("x1", "55.60287")
        line5.setAttribute("y1", "60")
        line5.setAttribute("x2", "60.42583")
        line5.setAttribute("y2", "85")
        
        let line6 = document.createElementNS("http://www.w3.org/2000/svg", "line")
        line6.setAttribute("fill", "none")
        line6.setAttribute("stroke", "#fff")
        line6.setAttribute("x1", "65.5083")
        line6.setAttribute("y1", "60")
        line6.setAttribute("x2", "72.68534")
        line6.setAttribute("y2", "85")

        g.appendChild(title) |> ignore
        g.appendChild(path1) |> ignore
        g.appendChild(path2) |> ignore
        g.appendChild(path3) |> ignore
        g.appendChild(text) |> ignore
        g.appendChild(line1) |> ignore
        g.appendChild(line2) |> ignore
        g.appendChild(line3) |> ignore
        g.appendChild(line4) |> ignore
        g.appendChild(line5) |> ignore
        g.appendChild(line6) |> ignore

        svg.appendChild(g) |> ignore

        let br1 = document.createElement("br")

        let spanName = document.createElement("span")
        spanName.id <- $"%s{device.Id}Name"
        spanName.className <- "device-prop"
        spanName.contentEditable <- "true"
        spanName.textContent <- $"%s{device.Name}"

        let br2 = document.createElement("br")
        
        let spanIPv4 = document.createElement("span")
        spanIPv4.id <- $"%s{device.Id}IPv4"
        spanIPv4.className <- "device-prop device-prop-ipv4"
        spanIPv4.contentEditable <- "true"
        spanIPv4.textContent <- $"%s{device.IPv4.ToString()}"

        let br3 = document.createElement("br")

        let spanSubnetMask = document.createElement("span")
        spanSubnetMask.id <- $"%s{device.Id}SubnetMask"
        spanSubnetMask.className <- "device-prop device-prop-subnetmask"
        spanSubnetMask.contentEditable <- "true"
        spanSubnetMask.textContent <- $"%s{device.SubnetMask.ToString()}"

        let spanKind = document.createElement("span")
        spanKind.id <- $"%s{device.Id}Kind"
        spanKind.className <- "no-display"
        spanKind.textContent <- $"%s{device.Kind |> string}"
        
        container.appendChild(svg) |> ignore
        container.appendChild(br1) |> ignore
        container.appendChild(spanName) |> ignore
        container.appendChild(br2) |> ignore
        container.appendChild(spanIPv4) |> ignore
        container.appendChild(br3) |> ignore
        container.appendChild(spanSubnetMask) |> ignore
        container.appendChild(spanKind) |> ignore

        container
    
    let ofHTMLElement (elm: Browser.Types.HTMLElement) : Device option =
        let id = elm.id
        
        let name = document.getElementById(id + "Name").innerText
        
        let ipv4 = document.getElementById(id + "IPv4").innerText
        
        let subnetMask = document.getElementById(id + "SubnetMask").innerText
        
        let kind =
            document.getElementById(id + "Kind").innerText
            |> Kind.ofString
        
        let area =
            let svg = document.getElementById(id + "Svg")
            let rect = svg.getBoundingClientRect()
            Area.ofFloats rect.left rect.top rect.width rect.height
        
        let position =
            let x =
                elm.getAttribute("style")
                |> Regex.match' """left: (\d+\.?\d+)px;"""
                |> fun m -> (m.Groups.Item 1).Value
                |> float
            let y =
                elm.getAttribute("style")
                |> Regex.match' """top: (\d+\.?\d+)px;"""
                |> fun m -> (m.Groups.Item 1).Value
                |> float
            Point.ofFloats x y

        match kind with
        | Some (x: Kind) -> Some (create id x name ipv4 subnetMask area position)
        | None -> None