// taidalab
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
            Area.ofFloats rect.left rect.top (rect.width - 20.) (rect.height - 20.)

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
        container.className <- "device device-container device-note hub"
        container.setAttribute ("style", $"top: %f{hub.Position.Y}px; left: %f{hub.Position.X}px;")

        let svg = document.createElementNS ("http://www.w3.org/2000/svg", "svg")
        svg.id <- $"%s{hub.Id}Svg"
        svg.classList.add ("device-image")

        svg.setAttribute (
            "viewBox",
            $"%f{hub.Area.X} %f{hub.Area.Y} %f{hub.Area.Width + 20.} %f{hub.Area.Height + 20.}"
        )

        svg.setAttribute ("width", $"%f{hub.Area.Width + 20.}")
        svg.setAttribute ("height", $"%f{hub.Area.Height + 20.}")

        let g = document.createElementNS ("http://www.w3.org/2000/svg", "g")

        let title = document.createElementNS ("http://www.w3.org/2000/svg", "title")
        title.id <- $"%s{hub.Id}Title"
        title.textContent <- $"%s{hub.Name}"

        let path1 = document.createElementNS ("http://www.w3.org/2000/svg", "path")
        path1.setAttribute ("d", "m 60,10 h 50 V 45 H 10 V 10 Z")

        let path2 = document.createElementNS ("http://www.w3.org/2000/svg", "path")

        path2.setAttribute (
            "d",
            "M 28 22.5 L 28 25.5 L 25 25.5 L 25 32.5 L 35 32.5 L 35 25.5 L 32 25.5 L 32 22.5 L 28 22.5 z M 48 22.5 L 48 25.5 L 45 25.5 L 45 32.5 L 55 32.5 L 55 25.5 L 52 25.5 L 52 22.5 L 48 22.5 z M 68 22.5 L 68 25.5 L 65 25.5 L 65 32.5 L 75 32.5 L 75 25.5 L 72 25.5 L 72 22.5 L 68 22.5 z M 88 22.5 L 88 25.5 L 85 25.5 L 85 32.5 L 95 32.5 L 95 25.5 L 92 25.5 L 92 22.5 L 88 22.5 z"
        )

        path2.classList.add "inner"

        g.appendChild (title) |> ignore
        g.appendChild (path1) |> ignore
        g.appendChild (path2) |> ignore
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
