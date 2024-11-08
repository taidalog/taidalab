// taidalab Version 5.0.1
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2024 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom
open Browser.Types
open Fermata

[<StructuredFormatDisplay("{DisplayText}")>]
type Hub =
    { Id: string
      Name: string
      Area: Area
      Position: Point }

    member this.DisplayText = this.ToString()

    override this.ToString() =
        sprintf "Id = %s; Name = %s; Area = %O; Position = %O" this.Id this.Name this.Area this.Position

module Hub =
    let create id name area position : Hub =
        { Hub.Id = id
          Hub.Name = name
          Hub.Area = area
          Hub.Position = position }

    let ofHTMLElement (elm: HTMLElement) : Hub =
        let id = elm.id

        let name = document.getElementById(id + "Name").innerText

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

        create id name area position

    let toHTMLElement (hub: Hub) : HTMLElement =
        let container = document.createElement ("div")
        container.id <- hub.Id
        container.className <- "device device-container device-note"
        container.setAttribute ("style", $"top: %f{hub.Position.Y}px; left: %f{hub.Position.X}px;")

        let svg = document.createElementNS ("http://www.w3.org/2000/svg", "svg")
        svg.id <- $"%s{hub.Id}Svg"
        svg.classList.add ("device-image")
        svg.setAttribute ("width", "100")
        svg.setAttribute ("height", "35")

        let g = document.createElementNS ("http://www.w3.org/2000/svg", "g")

        let title = document.createElementNS ("http://www.w3.org/2000/svg", "title")
        title.id <- $"%s{hub.Id}Title"
        title.textContent <- $"%s{hub.Name}"

        let path1 = document.createElementNS ("http://www.w3.org/2000/svg", "path")
        path1.setAttribute ("d", "m 50,0 l 50,0 l 0,35 l -100,0 l 0,-35 l 50,0 z")
        path1.setAttribute ("fill", "#ffffff")
        path1.setAttribute ("stroke", "#000000")
        path1.setAttribute ("stroke-width", "5")

        let path2 = document.createElementNS ("http://www.w3.org/2000/svg", "path")
        path2.setAttribute ("d", "m 20,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z")
        path2.setAttribute ("fill", "#000000")
        path2.setAttribute ("stroke", "#000000")

        let path3 = document.createElementNS ("http://www.w3.org/2000/svg", "path")
        path3.setAttribute ("d", "m 40,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z")
        path3.setAttribute ("fill", "#000000")
        path3.setAttribute ("stroke", "#000000")

        let path4 = document.createElementNS ("http://www.w3.org/2000/svg", "path")
        path4.setAttribute ("d", "m 60,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z")
        path4.setAttribute ("fill", "#000000")
        path4.setAttribute ("stroke", "#000000")

        let path5 = document.createElementNS ("http://www.w3.org/2000/svg", "path")
        path5.setAttribute ("d", "m 80,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z")
        path5.setAttribute ("fill", "#000000")
        path5.setAttribute ("stroke", "#000000")

        g.appendChild (title) |> ignore
        g.appendChild (path1) |> ignore
        g.appendChild (path2) |> ignore
        g.appendChild (path3) |> ignore
        g.appendChild (path4) |> ignore
        g.appendChild (path5) |> ignore

        svg.appendChild (g) |> ignore

        let br1 = document.createElement ("br")

        let spanName = document.createElement ("span")
        spanName.id <- $"%s{hub.Id}Name"
        spanName.className <- "device-prop"
        spanName.contentEditable <- "true"
        spanName.textContent <- $"%s{hub.Name}"

        let spanKind = document.createElement ("span")
        spanKind.id <- $"%s{hub.Id}Kind"
        spanKind.className <- "no-display"
        spanKind.textContent <- "Hub"

        container.appendChild (svg) |> ignore
        container.appendChild (br1) |> ignore
        container.appendChild (spanName) |> ignore
        container.appendChild (spanKind) |> ignore

        container
