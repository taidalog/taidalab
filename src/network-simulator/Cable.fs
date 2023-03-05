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

[<StructuredFormatDisplay("{DisplayText}")>]
type Cable =
    { Id : string
      Kind : Kind
      Name : string
      Points : string
      Area : Area
      Position : Point }
    member this.DisplayText = this.ToString()
    override this.ToString() =
        sprintf "Id = %s; Kind = %s; Name = %s; Points = %s; Area = %O; Posirion = %O"
            this.Id (string this.Kind) this.Name this.Points this.Area this.Position

module Cable =
    let create id kind name points area position : Cable =
        { Cable.Id = id
          Cable.Kind = kind
          Cable.Name = name
          Cable.Points = points
          Cable.Area = area
          Cable.Position = position }
    
    let toElement (cable: Cable) : string =
        $"""
        <div id="%s{cable.Id}" class="device cable-container lan-cable" style="top: %f{cable.Position.Y}px; left: %f{cable.Position.X}px;">
            <svg id="%s{cable.Id}Svg" class="device lan-cable" viewBox="%f{cable.Area.X} %f{cable.Area.Y} %f{cable.Area.Width} %f{cable.Area.Height}" width="%f{cable.Area.Width}px" height="%f{cable.Area.Height}px" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <title>%s{cable.Name}</title>
                    <polyline stroke="#00aeda" stroke-width="5" fill="none" points="%s{cable.Points}"/>
                </g>
            </svg>
            <span id="%s{cable.Id}Name" class="no-display">%s{cable.Name}</span>
            <span id="%s{cable.Id}Kind" class="no-display">%s{cable.Kind |> string}</span>
        </div>
        """
    
    let ofHTMLElement (elm: Browser.Types.HTMLElement) : Cable option=
        let id = elm.id
        
        let name = document.getElementById(id + "Name").innerText
        
        let kind =
            document.getElementById(id + "Kind").innerText
            |> Kind.ofString
        
        let area =
            let svg = document.getElementById(id + "Svg")
            let rect = svg.getBoundingClientRect()
            Area.ofFloats rect.left rect.top rect.width rect.height
        
        let points =
            elm.getElementsByTagName("polyline")
            |> fun x -> JS.Constructors.Array?from(x)
            |> Array.item 0
            |> fun (x: Browser.Types.HTMLElement) -> x.getAttribute("points")
        
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
        | Some x -> Some (create id x name points area position)
        | None -> None