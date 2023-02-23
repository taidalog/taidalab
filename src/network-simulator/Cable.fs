// taidalab Version 3.3.3
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom
open Fable.Core
open Fable.Core.JsInterop

type Cable =
    { Id : string
      Kind : Kind
      Area : Area
      Name : string
      Points : string }

module Cable =
    let create id kind area name points : Cable =
        { Cable.Id = id
          Cable.Kind = kind
          Cable.Area = area
          Cable.Name = name
          Cable.Points = points }
    
    let toElement (cable: Cable) : string =
        $"""
        <div id="%s{cable.Id}" class="device cable-container lan-cable">
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
        
        match kind with
        | Some x -> Some (create id x area name points)
        | None -> None