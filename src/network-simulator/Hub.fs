// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2025 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom
open Browser.Types
open Fermata
open Taidalab.Html
open Taidalab.Svg

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
        let title' =
            title {
                id $"%s{hub.Id}Title"
                textContent hub.Name
            }

        let path1 = path { d "m 60,10 h 50 V 45 H 10 V 10 Z" }

        let path2 =
            path {
                d
                    "M 28 22.5 L 28 25.5 L 25 25.5 L 25 32.5 L 35 32.5 L 35 25.5 L 32 25.5 L 32 22.5 L 28 22.5 z M 48 22.5 L 48 25.5 L 45 25.5 L 45 32.5 L 55 32.5 L 55 25.5 L 52 25.5 L 52 22.5 L 48 22.5 z M 68 22.5 L 68 25.5 L 65 25.5 L 65 32.5 L 75 32.5 L 75 25.5 L 72 25.5 L 72 22.5 L 68 22.5 z M 88 22.5 L 88 25.5 L 85 25.5 L 85 32.5 L 95 32.5 L 95 25.5 L 92 25.5 L 92 22.5 L 88 22.5 z"

                className "inner"
            }

        let g' =
            g {
                appendChild title'
                appendChild path1
                appendChild path2
            }

        let svg' =
            svg {
                id $"%s{hub.Id}Svg"
                className "device-image"
                viewBox hub.Area.X hub.Area.Y (hub.Area.Width + 20.) (hub.Area.Height + 20.)
                width (hub.Area.Width + 20.)
                height (hub.Area.Height + 20.)
                appendChild g'
            }

        let spanName =
            span {
                id $"%s{hub.Id}Name"
                className "device-prop"
                contentEditable true
                textContent hub.Name
            }

        let spanKind =
            span {
                id $"%s{hub.Id}Kind"
                className "no-display"
                textContent "Hub"
            }

        div {
            id hub.Id
            className "device device-container device-note hub"
            setAttribute "style" $"top: %f{hub.Position.Y}px; left: %f{hub.Position.X}px;"
            appendChild svg'
            appendChild (br { () })
            appendChild spanName
            appendChild spanKind
        }
