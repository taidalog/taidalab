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
type Cable =
    { Id: string
      Kind: Kind
      Name: string
      Points: Point list
      Area: Area
      Position: Point }

    member this.DisplayText = this.ToString()

    override this.ToString() =
        sprintf
            "Id = %s; Kind = %s; Name = %s; Points = %s; Area = %O; Posirion = %O"
            this.Id
            (string this.Kind)
            this.Name
            (this.Points |> List.map (fun x -> x.ToString()) |> String.concat " ")
            this.Area
            this.Position

module Cable =
    let create id kind name points area position : Cable =
        { Cable.Id = id
          Cable.Kind = kind
          Cable.Name = name
          Cable.Points = points
          Cable.Area = area
          Cable.Position = position }

    let ofHTMLElement (elm: HTMLElement) : Cable option =
        let id = elm.id

        let name = document.getElementById(id + "Name").innerText

        let kind = document.getElementById(id + "Kind").innerText |> Kind.ofString

        let area =
            let svg = document.getElementById (id + "Svg")
            let rect = svg.getBoundingClientRect ()
            Area.ofFloats rect.left rect.top rect.width rect.height

        let points =
            document.getElementById (id + "Polyline")
            |> fun (x: HTMLElement) -> x.getAttribute ("points")
            |> String.split ' '
            |> List.map Point.ofString

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

        match kind with
        | Some x -> Some(create id x name points area position)
        | None -> None

    let toHTMLElement (cable: Cable) : HTMLElement =
        let container = document.createElement ("div")
        container.id <- cable.Id
        container.className <- "device cable-container lan-cable"
        container.setAttribute ("style", $"top: %f{cable.Position.Y}px; left: %f{cable.Position.X}px;")

        let svg = document.createElementNS ("http://www.w3.org/2000/svg", "svg")
        svg.id <- $"%s{cable.Id}Svg"
        svg.classList.add ("device")
        svg.classList.add ("device")
        svg.setAttribute ("viewBox", $"%f{cable.Area.X} %f{cable.Area.Y} %f{cable.Area.Width} %f{cable.Area.Height}")
        svg.setAttribute ("width", $"%f{cable.Area.Width}px")
        svg.setAttribute ("height", $"%f{cable.Area.Height}px")

        let g = document.createElementNS ("http://www.w3.org/2000/svg", "g")

        let title = document.createElementNS ("http://www.w3.org/2000/svg", "title")
        title.id <- $"%s{cable.Id}Title"
        title.textContent <- $"%s{cable.Name}"

        let polyline = document.createElementNS ("http://www.w3.org/2000/svg", "polyline")
        polyline.id <- $"{cable.Id}Polyline"
        polyline.setAttribute ("points", $"""%s{cable.Points |> List.map Point.toCoordinate |> String.concat " "}""")

        g.appendChild (title) |> ignore
        g.appendChild (polyline) |> ignore

        svg.appendChild (g) |> ignore

        let br1 = document.createElement ("br")

        let spanName = document.createElement ("span")
        spanName.id <- $"%s{cable.Id}Name"
        spanName.className <- "no-display"
        spanName.textContent <- $"%s{cable.Name}"

        let br2 = document.createElement ("br")

        let spanKind = document.createElement ("span")
        spanKind.id <- $"%s{cable.Id}Kind"
        spanKind.className <- "no-display"
        spanKind.textContent <- $"%s{cable.Kind |> string}"

        container.appendChild (svg) |> ignore
        container.appendChild (br1) |> ignore
        container.appendChild (spanName) |> ignore
        container.appendChild (br2) |> ignore
        container.appendChild (spanKind) |> ignore

        container

    let connectedTo (device: Device) (cable: Cable) : bool =
        cable.Points
        |> List.map (Point.shift cable.Area.X cable.Area.Y)
        |> List.exists (Area.includesPoint (Device.area device))

    let updatePoints (point1: Point) (point2: Point) (newPoint: Point) : (Point * Point) =
        (point1, point2)
        |> Tuple.map (Point.distance newPoint)
        |> fun (f1, f2) ->
            if f1 <= f2 then
                (point1, point2 |> Point.shift (newPoint.X - point1.X) (newPoint.Y - point1.Y))
            else
                (point1, newPoint)

    let touchedAndUntouched (point1: Point) (point2: Point) (newPoint: Point) : (Point * Point) =
        (point1, point2)
        |> Tuple.map (Point.distance newPoint)
        |> fun (d1, d2) -> if d1 <= d2 then (point1, point2) else (point2, point1)

    let resizeCable (container: HTMLElement) (svg: HTMLElement) (polyline: HTMLElement) (event: Event) : unit =
        let event = event :?> MouseEvent

        // Getting current end points of the cable.
        let point1, point2 =
            polyline.getAttribute ("points")
            |> String.split ' '
            |> List.map Point.ofString
            |> fun xs -> List.head xs, List.last xs

        let cursorPoint =
            Point.ofFloats (event.pageX - container.offsetLeft) (event.pageY - container.offsetTop)

        let touchedPoint, untouchedPoint = cursorPoint |> touchedAndUntouched point1 point2

        let xMoving = cursorPoint.X - touchedPoint.X
        let yMoving = cursorPoint.Y - touchedPoint.Y

        let touchedPointPosition = touchedPoint |> Point.relativePosition untouchedPoint

        // Building the new end points with the cursor position.
        let updatedPoints =
            match touchedPointPosition with
            | Directions.Up -> touchedPoint, untouchedPoint |> Point.shift -xMoving -yMoving
            | Directions.Down -> cursorPoint |> updatePoints untouchedPoint touchedPoint
            | Directions.Left -> touchedPoint, untouchedPoint |> Point.shift -xMoving -yMoving
            | Directions.Right -> cursorPoint |> updatePoints untouchedPoint touchedPoint
            | var when var = (Directions.Up ||| Directions.Left) ->
                touchedPoint, untouchedPoint |> Point.shift -xMoving -yMoving
            | var when var = (Directions.Up ||| Directions.Right) ->
                untouchedPoint |> Point.shift 0. -yMoving, touchedPoint |> Point.shift xMoving 0.
            | var when var = (Directions.Down ||| Directions.Left) ->
                touchedPoint |> Point.shift 0. yMoving, untouchedPoint |> Point.shift -xMoving 0.
            | var when var = (Directions.Down ||| Directions.Right) ->
                cursorPoint |> updatePoints untouchedPoint touchedPoint
            | _ -> cursorPoint |> updatePoints untouchedPoint touchedPoint

        let xGap =
            updatedPoints
            |> Tuple.map (fun x -> x.X)
            |> System.Math.Min
            |> fun x -> 5. - x

        let yGap =
            updatedPoints
            |> Tuple.map (fun x -> x.Y)
            |> System.Math.Min
            |> fun x -> 5. - x

        // Updating the cable points.
        updatedPoints
        |> Tuple.map (Point.shift xGap yGap)
        |> fun (p1, p2) -> $"%f{p1.X},%f{p1.Y} %f{p2.X},%f{p2.Y}"
        |> fun x -> polyline.setAttribute ("points", x)

        let updatedArea =
            updatedPoints
            |> Tuple.map (Point.shift xGap yGap)
            ||> Area.ofPoints
            |> Area.expand (5. * 2.) (5. * 2.)

        svg.setAttribute ("viewBox", $"0 0 %f{updatedArea.Width} %f{updatedArea.Height}")
        svg.setAttribute ("width", $"%f{updatedArea.Width}px")
        svg.setAttribute ("height", $"%f{updatedArea.Height}px")
        //        svg.setAttribute("style", "background-color: red;")

        // Shifting the cable container.
        match touchedPointPosition with
        | Directions.Up ->
            container.setAttribute (
                "style",
                $"top: %f{container.offsetTop + yMoving}px; left: %f{container.offsetLeft + xMoving}px;"
            )
        //| Directions.Down ->
        | Directions.Left ->
            container.setAttribute (
                "style",
                $"top: %f{container.offsetTop + yMoving}px; left: %f{container.offsetLeft + xMoving}px;"
            )
        //| Directions.Right ->
        | var when var = (Directions.Up ||| Directions.Left) ->
            container.setAttribute (
                "style",
                $"top: %f{container.offsetTop + yMoving}px; left: %f{container.offsetLeft + xMoving}px;"
            )
        | var when var = (Directions.Up ||| Directions.Right) ->
            container.setAttribute (
                "style",
                $"top: %f{container.offsetTop + yMoving}px; left: %f{container.offsetLeft}px;"
            )
        | var when var = (Directions.Down ||| Directions.Left) ->
            container.setAttribute (
                "style",
                $"top: %f{container.offsetTop}px; left: %f{container.offsetLeft + xMoving}px;"
            )
        //| var when var = (Directions.Down ||| Directions.Right) ->
        | _ -> ()

        let touchedPointPosition' = updatedPoints ||> Point.relativePosition

        // Resizing and shifting the cable container.
        match touchedPointPosition' with
        | Directions.Up ->
            svg.setAttribute ("width", $"%f{updatedArea.Width + -xMoving}px")
            svg.setAttribute ("height", $"%f{updatedArea.Height + -yMoving}px")

            container.setAttribute (
                "style",
                $"top: %f{container.offsetTop + yMoving}px; left: %f{container.offsetLeft + xMoving}px;"
            )
        //| Directions.Down ->
        | Directions.Left ->
            svg.setAttribute ("width", $"%f{updatedArea.Width + -xMoving}px")
            svg.setAttribute ("height", $"%f{updatedArea.Height + -yMoving}px")

            container.setAttribute (
                "style",
                $"top: %f{container.offsetTop + yMoving}px; left: %f{container.offsetLeft + xMoving}px;"
            )
        //| Directions.Right ->
        | var when var = (Directions.Up ||| Directions.Left) ->
            svg.setAttribute ("width", $"%f{updatedArea.Width + -xMoving}px")
            svg.setAttribute ("height", $"%f{updatedArea.Height + -yMoving}px")

            container.setAttribute (
                "style",
                $"top: %f{container.offsetTop + yMoving}px; left: %f{container.offsetLeft + xMoving}px;"
            )
        //| var when var = (Directions.Up ||| Directions.Right) ->
        //| var when var = (Directions.Down ||| Directions.Left) ->
        //| var when var = (Directions.Down ||| Directions.Right) ->
        | _ -> ()

    let setMouseMoveEvent (container: HTMLElement) : unit =
        let cable = ofHTMLElement container

        match cable with
        | None -> ()
        | Some cable' ->
            let svg = document.getElementById (container.id + "Svg")
            svg.ondragstart <- fun e -> e.preventDefault ()

            svg.onmousedown <-
                fun event ->
                    let point1, point2 =
                        document.getElementById (container.id)
                        |> ofHTMLElement
                        |> fun x ->
                            match x with
                            | None -> None, None
                            | Some x -> x.Points |> fun xs -> Some(List.head xs), Some(List.last xs)

                    let cursorPoint = Point.ofFloats event.offsetX event.offsetY

                    let minDistance =
                        [ point1; point2 ]
                        |> List.filter Option.isSome
                        |> List.map Option.get
                        |> List.map (Point.distance cursorPoint)
                        |> List.min

                    let onMouseMove' =
                        if minDistance < 5. then
                            let polyline = document.getElementById (container.id + "Polyline")
                            resizeCable container svg polyline
                        else
                            Device.onMouseMove container svg

                    document.addEventListener ("mousemove", onMouseMove')

                    svg.onmouseup <- fun _ -> document.removeEventListener ("mousemove", onMouseMove')
