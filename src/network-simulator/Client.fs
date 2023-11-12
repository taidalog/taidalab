// taidalab Version 4.5.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom
open Browser.Types
open Fermata

[<StructuredFormatDisplay("{DisplayText}")>]
type Client =
    { Id: string
      Name: string
      IPv4: IPv4
      SubnetMask: IPv4
      NetworkAddress: IPv4
      Area: Area
      Position: Point }

    member this.DisplayText = this.ToString()

    override this.ToString() =
        sprintf
            "Id = %s; Name = %s; IPv4 = %O; SubnetMask = %O; Area = %O; Position = %O"
            this.Id
            this.Name
            this.IPv4
            this.SubnetMask
            this.Area
            this.Position

module Client =
    let create id name ipv4 subnetMask area position : Client =
        let ipv4 = IPv4.ofDotDecimal ipv4
        let subnetMask = IPv4.ofDotDecimal subnetMask
        let networkAddress = IPv4.getSubnet subnetMask ipv4

        { Client.Id = id
          Client.Name = name
          Client.IPv4 = ipv4
          Client.SubnetMask = subnetMask
          Client.NetworkAddress = networkAddress
          Client.Area = area
          Client.Position = position }

    let ofHTMLElement (elm: HTMLElement) : Client =
        let id = elm.id

        let name = document.getElementById(id + "Name").innerText

        let ipv4 = document.getElementById(id + "IPv4").innerText

        let subnetMask = document.getElementById(id + "SubnetMask").innerText

        let area =
            let svg = document.getElementById (id + "Svg")
            let rect = svg.getBoundingClientRect ()
            Area.ofFloats rect.left rect.top rect.width rect.height

        let position =
            let x =
                elm.getAttribute ("style")
                |> Regex.match' """left: (\d+\.?\d+)px;"""
                |> fun m -> (m.Groups.Item 1).Value
                |> float

            let y =
                elm.getAttribute ("style")
                |> Regex.match' """top: (\d+\.?\d+)px;"""
                |> fun m -> (m.Groups.Item 1).Value
                |> float

            Point.ofFloats x y

        create id name ipv4 subnetMask area position

    let toHTMLElement (client: Client) : HTMLElement =
        let container = document.createElement ("div")
        container.id <- client.Id
        container.className <- "device device-container device-note"
        container.setAttribute ("style", $"top: %f{client.Position.Y}px; left: %f{client.Position.X}px;")

        let svg = document.createElementNS ("http://www.w3.org/2000/svg", "svg")
        svg.id <- $"%s{client.Id}Svg"
        svg.classList.add ("device-image")
        svg.setAttribute ("width", "100")
        svg.setAttribute ("height", "100")

        let g = document.createElementNS ("http://www.w3.org/2000/svg", "g")

        let title = document.createElementNS ("http://www.w3.org/2000/svg", "title")
        title.id <- $"%s{client.Id}Title"
        title.textContent <- $"%s{client.Name}"

        let path1 = document.createElementNS ("http://www.w3.org/2000/svg", "path")
        path1.setAttribute ("d", "m 20,10 l 60,0 l 0,45 l -60,0 l 0,-45 z")
        path1.setAttribute ("fill", "none")
        path1.setAttribute ("stroke", "#000")
        path1.setAttribute ("stroke-width", "5")

        let path2 = document.createElementNS ("http://www.w3.org/2000/svg", "path")
        path2.setAttribute ("d", "m 20,60 l -15,30 l 90,0 l -15,-30")
        path2.setAttribute ("fill", "none")
        path2.setAttribute ("stroke", "#000")
        path2.setAttribute ("stroke-width", "5")

        let path3 = document.createElementNS ("http://www.w3.org/2000/svg", "path")
        path3.setAttribute ("d", "m 25,63 l  -9,20 l 68,0 l  -9,-20  z")
        path3.setAttribute ("fill", "#000")
        path3.setAttribute ("stroke", "#000")
        path3.setAttribute ("stroke-width", "1")

        let text = document.createElementNS ("http://www.w3.org/2000/svg", "text")
        text.setAttribute ("fill", "#000000")
        text.setAttribute ("stroke", "#000")
        text.setAttribute ("stroke-width", "0")
        text.setAttribute ("x", "23.40522")
        text.setAttribute ("y", "19.58995")
        text.setAttribute ("font-size", "6")
        text.setAttribute ("font-family", "Noto Sans JP")
        text.setAttribute ("text-anchor", "start")
        text.setAttribute ("xml:space", "preserve")
        text.textContent <- "PS C:\\>_"

        let line1 = document.createElementNS ("http://www.w3.org/2000/svg", "line")
        line1.setAttribute ("fill", "none")
        line1.setAttribute ("stroke", "#fff")
        line1.setAttribute ("x1", "20.85")
        line1.setAttribute ("y1", "70")
        line1.setAttribute ("x2", "79.15")
        line1.setAttribute ("y2", "70")

        let line2 = document.createElementNS ("http://www.w3.org/2000/svg", "line")
        line2.setAttribute ("fill", "none")
        line2.setAttribute ("stroke", "#fff")
        line2.setAttribute ("x1", "17.7")
        line2.setAttribute ("y1", "77")
        line2.setAttribute ("x2", "82.3")
        line2.setAttribute ("y2", "77")

        let line3 = document.createElementNS ("http://www.w3.org/2000/svg", "line")
        line3.setAttribute ("fill", "none")
        line3.setAttribute ("stroke", "#fff")
        line3.setAttribute ("x1", "34.7")
        line3.setAttribute ("y1", "61.5")
        line3.setAttribute ("x2", "29.3")
        line3.setAttribute ("y2", "84.5")

        let line4 = document.createElementNS ("http://www.w3.org/2000/svg", "line")
        line4.setAttribute ("fill", "none")
        line4.setAttribute ("stroke", "#fff")
        line4.setAttribute ("x1", "44.9")
        line4.setAttribute ("y1", "61.5")
        line4.setAttribute ("x2", "43.1")
        line4.setAttribute ("y2", "84.5")

        let line5 = document.createElementNS ("http://www.w3.org/2000/svg", "line")
        line5.setAttribute ("fill", "none")
        line5.setAttribute ("stroke", "#fff")
        line5.setAttribute ("x1", "55.1")
        line5.setAttribute ("y1", "61.5")
        line5.setAttribute ("x2", "56.9")
        line5.setAttribute ("y2", "84.5")

        let line6 = document.createElementNS ("http://www.w3.org/2000/svg", "line")
        line6.setAttribute ("fill", "none")
        line6.setAttribute ("stroke", "#fff")
        line6.setAttribute ("x1", "65.3")
        line6.setAttribute ("y1", "61.5")
        line6.setAttribute ("x2", "70.7")
        line6.setAttribute ("y2", "84.5")

        g.appendChild (title) |> ignore
        g.appendChild (path1) |> ignore
        g.appendChild (path2) |> ignore
        g.appendChild (path3) |> ignore
        g.appendChild (text) |> ignore
        g.appendChild (line1) |> ignore
        g.appendChild (line2) |> ignore
        g.appendChild (line3) |> ignore
        g.appendChild (line4) |> ignore
        g.appendChild (line5) |> ignore
        g.appendChild (line6) |> ignore

        svg.appendChild (g) |> ignore

        let br1 = document.createElement ("br")

        let spanName = document.createElement ("span")
        spanName.id <- $"%s{client.Id}Name"
        spanName.className <- "device-prop"
        spanName.contentEditable <- "true"
        spanName.textContent <- $"%s{client.Name}"

        let br2 = document.createElement ("br")

        let spanIPv4 = document.createElement ("span")
        spanIPv4.id <- $"%s{client.Id}IPv4"
        spanIPv4.className <- "device-prop ipv4 mono"
        spanIPv4.contentEditable <- "true"
        spanIPv4.textContent <- $"%s{client.IPv4.ToString()}"

        let br3 = document.createElement ("br")

        let spanSubnetMask = document.createElement ("span")
        spanSubnetMask.id <- $"%s{client.Id}SubnetMask"
        spanSubnetMask.className <- "device-prop subnetmask mono"
        spanSubnetMask.contentEditable <- "true"
        spanSubnetMask.textContent <- $"%s{client.SubnetMask.ToString()}"

        let spanKind = document.createElement ("span")
        spanKind.id <- $"%s{client.Id}Kind"
        spanKind.className <- "no-display"
        spanKind.textContent <- "Client"

        container.appendChild (svg) |> ignore
        container.appendChild (br1) |> ignore
        container.appendChild (spanName) |> ignore
        container.appendChild (br2) |> ignore
        container.appendChild (spanIPv4) |> ignore
        container.appendChild (br3) |> ignore
        container.appendChild (spanSubnetMask) |> ignore
        container.appendChild (spanKind) |> ignore

        container
