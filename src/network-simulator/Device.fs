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
                <span id="%s{device.Id}Name" class="" contentEditable="true">%s{device.Name}</span><br>
                IPv4: <span id="%s{device.Id}IPv4" class="" contentEditable="true">%s{device.IPv4.ToString()}</span><br>
                SubnetMask: <span id="%s{device.Id}SubnetMask" class="" contentEditable="true">%s{device.SubnetMask.ToString()}</span>
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
              <span id="%s{device.Id}Name" class="" contentEditable="true">%s{device.Name}</span><br>
              IPv4: <span id="%s{device.Id}IPv4" class="" contentEditable="true">%s{device.IPv4.ToString()}</span><br>
              SubnetMask: <span id="%s{device.Id}SubnetMask" class="" contentEditable="true">%s{device.SubnetMask.ToString()}</span>
              <span id="%s{device.Id}Kind" class="no-display">%s{device.Kind |> string}</span>
            </div>
            """
        | _ -> ""
    
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