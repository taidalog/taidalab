// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2025 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

module Svg =
    type TextProp = TextProp of width: int * height: int * content: string

    type PathProp = PathProp of d: string * stroke: string * strokeWidth: int * fill: string * content: string

    type AnimateProp =
        | AnimateProp of
            attributeName: string *
            calcMode: string *
            fromState: string *
            toState: string *
            beginMs: int *
            durMs: int *
            repeatCount: string

    let frame (width: int) (height: int) (content: string) : string =
        $"""
        <?xml version="1.0" standalone="no"?>
        <svg width="%d{width}" height="%d{height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
            %s{content}
        </svg>
        """

    let text (x: int) (y: int) (opacity: float) (text: string) : string =
        $"""<text x="%d{x}" y="%d{y}" font-family="Courier New" font-size="20" opacity="%f{opacity}">%s{text}</text>"""

    let path
        (d: string)
        (stroke: string)
        (strokeWidth: int)
        (fill: string)
        (opacity: float)
        (animation: string)
        : string =
        $"""<path d="%s{d}" stroke="%s{stroke}" stroke-width=%d{strokeWidth} fill="%s{fill}" opacity="%f{opacity}">%s{animation}</path>"""

    let polyline (points: string) (stroke: string) (strokeWidth: int) (fill: string) (animation: string) : string =
        $"""<polylie points="%s{points}" stroke="%s{stroke}" stroke-width=%d{strokeWidth} fill="%s{fill}">%s{animation}</polyline>"""

    let animate
        (attributeName: string)
        (calcMode: string)
        (fromState: string)
        (toState: string)
        (beginMs: int)
        (durMs: int)
        (repeatCount: string)
        (fill: string)
        : string =
        $"""<animate attributeName="%s{attributeName}" calcMode="%s{calcMode}" from="%s{fromState}" to="%s{toState}" begin="%d{beginMs}ms" dur="%d{durMs}ms" repeatCount="%s{repeatCount}" fill="%s{fill}" />"""

    let animateOpacity (beginMs: int) (durMs: int) : string =
        animate "opacity" "linear" "0" "1" beginMs durMs "1" "freeze"

    let newArrow
        (x: float)
        (y: float)
        (width1: float)
        (height1: float)
        (width2: float)
        (height2: float)
        (beginMs: int)
        (stroke: string)
        (fill: string)
        : string =
        let d =
            $"M %f{x},%f{y} h %f{width1} v %f{height1} h -7 l 16,-20 16,20 h -7 v %f{height2} h %f{width2} Z"

        path d stroke 1 fill 0. (animateOpacity beginMs 500)

    open Browser.Dom
    open Browser.Types
    open Dom

    type SvgBuilder() =
        inherit ElementBuilder()

        [<CustomOperation("className")>]
        member _.SetClassName(acc: 'T :> SVGElement, x: string) : 'T =
            acc.setAttribute ("class", x)
            acc

        [<CustomOperation("fill")>]
        member _.SetFill(acc: 'T :> SVGElement, x: string) : 'T =
            acc.setAttribute ("fill", x)
            acc

        [<CustomOperation("stroke")>]
        member _.SetStroke(acc: 'T :> SVGElement, x: string) : 'T =
            acc.setAttribute ("stroke", x)
            acc

        [<CustomOperation("strokeWidth")>]
        member _.SetStrokeWidth(acc: 'T :> SVGElement, x: string) : 'T =
            acc.setAttribute ("strokeWidth", x)
            acc

        [<CustomOperation("strokeWidth")>]
        member _.SetStrokeWidth(acc: 'T :> SVGElement, x: int) : 'T =
            acc.setAttribute ("strokeWidth", string x)
            acc

        [<CustomOperation("strokeWidth")>]
        member _.SetStrokeWidth(acc: 'T :> SVGElement, x: float) : 'T =
            acc.setAttribute ("strokeWidth", string x)
            acc

    type AnimationBuilder() =
        inherit SvgBuilder()

    type AnimateBuilder() =
        inherit AnimationBuilder()

        member _.Yield(_) : Element =
            document.createElementNS ("http://www.w3.org/2000/svg", "animate")

        member _.Zero() : Element =
            document.createElementNS ("http://www.w3.org/2000/svg", "animate")

        [<CustomOperation("attributeName")>]
        member _.SetAttributeName(acc: Element, x: string) : Element =
            acc.setAttribute ("attributeName", x)
            acc

        [<CustomOperation("calcMode")>]
        member _.SetCalcMode(acc: Element, x: string) : Element =
            acc.setAttribute ("calcMode", x)
            acc

        [<CustomOperation("from")>]
        member _.SetFrom(acc: Element, x: int) : Element =
            acc.setAttribute ("from", string x)
            acc

        [<CustomOperation("from")>]
        member _.SetFrom(acc: Element, x: float) : Element =
            acc.setAttribute ("from", string x)
            acc

        [<CustomOperation("from")>]
        member _.SetFrom(acc: Element, x: string) : Element =
            acc.setAttribute ("from", x)
            acc

        [<CustomOperation("to'")>]
        member _.SetTo(acc: Element, x: int) : Element =
            acc.setAttribute ("to", string x)
            acc

        [<CustomOperation("to'")>]
        member _.SetTo(acc: Element, x: float) : Element =
            acc.setAttribute ("to", string x)
            acc

        [<CustomOperation("to'")>]
        member _.SetTo(acc: Element, x: string) : Element =
            acc.setAttribute ("to", x)
            acc

        [<CustomOperation("by")>]
        member _.SetBy(acc: Element, x: int) : Element =
            acc.setAttribute ("by", string x)
            acc

        [<CustomOperation("by")>]
        member _.SetBy(acc: Element, x: float) : Element =
            acc.setAttribute ("by", string x)
            acc

        [<CustomOperation("by")>]
        member _.SetBy(acc: Element, x: string) : Element =
            acc.setAttribute ("by", x)
            acc

        [<CustomOperation("begin'")>]
        member _.SetBegin(acc: Element, x: int) : Element =
            acc.setAttribute ("begin", $"%d{x}ms")
            acc

        [<CustomOperation("begin'")>]
        member _.SetBegin(acc: Element, x: float) : Element =
            acc.setAttribute ("begin", $"%f{x}ms")
            acc

        [<CustomOperation("begin'")>]
        member _.SetBegin(acc: Element, x: string) : Element =
            acc.setAttribute ("begin", x)
            acc

        [<CustomOperation("dur")>]
        member _.SetDur(acc: Element, x: int) : Element =
            acc.setAttribute ("dur", $"%d{x}ms")
            acc

        [<CustomOperation("dur")>]
        member _.SetDur(acc: Element, x: float) : Element =
            acc.setAttribute ("dur", $"%f{x}ms")
            acc

        [<CustomOperation("dur")>]
        member _.SetDur(acc: Element, x: string) : Element =
            acc.setAttribute ("dur", x)
            acc

        [<CustomOperation("repeatCount")>]
        member _.SetRepeatCount(acc: Element, x: int) : Element =
            acc.setAttribute ("repeatCount", string x)
            acc

        [<CustomOperation("repeatCount")>]
        member _.SetRepeatCount(acc: Element, x: string) : Element =
            acc.setAttribute ("repeatCount", x)
            acc

        [<CustomOperation("fill")>]
        member _.SetFill(acc: Element, x: string) : Element =
            acc.setAttribute ("fill", x)
            acc

        [<CustomOperation("values")>]
        member _.SetValues(acc: Element, x: (int * int) list) : Element =
            x
            |> List.map (fun (p1, p2) -> $"%d{p1},%d{p2}")
            |> String.concat " "
            |> fun s -> acc.setAttribute ("values", s)

            acc

        [<CustomOperation("values")>]
        member _.SetValues(acc: Element, x: (float * float) list) : Element =
            x
            |> List.map (fun (p1, p2) -> $"%f{p1},%f{p2}")
            |> String.concat " "
            |> fun s -> acc.setAttribute ("values", s)

            acc

        [<CustomOperation("values")>]
        member _.SetValues(acc: Element, x: int list) : Element =
            x
            |> List.map string
            |> String.concat ";"
            |> fun s -> acc.setAttribute ("values", s)

            acc

        [<CustomOperation("values")>]
        member _.SetValues(acc: Element, x: float list) : Element =
            x
            |> List.map string
            |> String.concat ";"
            |> fun s -> acc.setAttribute ("values", s)

            acc

        [<CustomOperation("keyTimes")>]
        member _.SetKeyTimes(acc: Element, x: float list) : Element =
            x
            |> List.map string
            |> String.concat ";"
            |> fun s -> acc.setAttribute ("keyTimes", s)

            acc

        [<CustomOperation("keySprines")>]
        member _.SetKeySprines(acc: Element, x: (float * float) list) : Element =
            x
            |> List.map (fun (p1, p2) -> $"%f{p1},%f{p2}")
            |> String.concat ";"
            |> fun s -> acc.setAttribute ("keySprines", s)

            acc

    let animate': AnimateBuilder = AnimateBuilder()

    type SVGGraphicsBuilder() =
        inherit SvgBuilder()

    type SvgSvgBuilder() =
        inherit SVGGraphicsBuilder()

        member _.Yield(_) : SVGSVGElement =
            document.createElementNS ("http://www.w3.org/2000/svg", "svg") :?> SVGSVGElement

        member _.Zero() : SVGSVGElement =
            document.createElementNS ("http://www.w3.org/2000/svg", "svg") :?> SVGSVGElement

        [<CustomOperation("x")>]
        member _.SetX(acc: SVGSVGElement, x: int) : SVGSVGElement =
            acc.setAttribute ("x", string x)
            acc

        [<CustomOperation("x")>]
        member _.SetX(acc: SVGSVGElement, x: float) : SVGSVGElement =
            acc.setAttribute ("x", string x)
            acc

        [<CustomOperation("x")>]
        member _.SetX(acc: SVGSVGElement, x: string) : SVGSVGElement =
            acc.setAttribute ("x", x)
            acc

        [<CustomOperation("y")>]
        member _.SetY(acc: SVGSVGElement, x: int) : SVGSVGElement =
            acc.setAttribute ("y", string x)
            acc

        [<CustomOperation("y")>]
        member _.SetY(acc: SVGSVGElement, x: float) : SVGSVGElement =
            acc.setAttribute ("y", string x)
            acc

        [<CustomOperation("y")>]
        member _.SetY(acc: SVGSVGElement, x: string) : SVGSVGElement =
            acc.setAttribute ("y", x)
            acc

        [<CustomOperation("width")>]
        member _.SetWidth(acc: SVGSVGElement, x: int) : SVGSVGElement =
            acc.setAttribute ("width", string x)
            acc

        [<CustomOperation("width")>]
        member _.SetWidth(acc: SVGSVGElement, x: float) : SVGSVGElement =
            acc.setAttribute ("width", string x)
            acc

        [<CustomOperation("width")>]
        member _.SetWidth(acc: SVGSVGElement, x: string) : SVGSVGElement =
            acc.setAttribute ("width", x)
            acc

        [<CustomOperation("height")>]
        member _.SetHeight(acc: SVGSVGElement, x: int) : SVGSVGElement =
            acc.setAttribute ("height", string x)
            acc

        [<CustomOperation("height")>]
        member _.SetHeight(acc: SVGSVGElement, x: float) : SVGSVGElement =
            acc.setAttribute ("height", string x)
            acc

        [<CustomOperation("height")>]
        member _.SetHeight(acc: SVGSVGElement, x: string) : SVGSVGElement =
            acc.setAttribute ("height", x)
            acc

        [<CustomOperation("viewBox")>]
        member _.SetViewBox(acc: SVGSVGElement, x: int, y: int, width: int, height: int) : SVGSVGElement =
            acc.setAttribute ("viewBox", $"%d{x} %d{y} %d{width} %d{height}")
            acc

        [<CustomOperation("viewBox")>]
        member _.SetViewBox(acc: SVGSVGElement, x: float, y: float, width: float, height: float) : SVGSVGElement =
            acc.setAttribute ("viewBox", $"%f{x} %f{y} %f{width} %f{height}")
            acc

    let svg: SvgSvgBuilder = SvgSvgBuilder()

    type GBuilder() =
        inherit SVGGraphicsBuilder()

        member _.Yield(_) : SVGGElement =
            document.createElementNS ("http://www.w3.org/2000/svg", "g") :?> SVGGElement

        member _.Zero() : SVGGElement =
            document.createElementNS ("http://www.w3.org/2000/svg", "g") :?> SVGGElement

    let g: GBuilder = GBuilder()

    type SVGGeometryBuilder() =
        inherit SVGGraphicsBuilder()

    type PathBuilder() =
        inherit SVGGeometryBuilder()

        member _.Yield(_) : SVGPathElement =
            document.createElementNS ("http://www.w3.org/2000/svg", "path") :?> SVGPathElement

        member _.Zero() : SVGPathElement =
            document.createElementNS ("http://www.w3.org/2000/svg", "path") :?> SVGPathElement

        [<CustomOperation("d")>]
        member _.SetD(acc: SVGPathElement, x: string) : SVGPathElement =
            acc.setAttribute ("d", x)
            acc

    let path': PathBuilder = PathBuilder()

    type PolylineBuilder() =
        inherit SVGGeometryBuilder()

        member _.Yield(_) : SVGPolylineElement =
            document.createElementNS ("http://www.w3.org/2000/svg", "polyline") :?> SVGPolylineElement

        member _.Zero() : SVGPolylineElement =
            document.createElementNS ("http://www.w3.org/2000/svg", "polyline") :?> SVGPolylineElement

        [<CustomOperation("points")>]
        member _.SetPoints(acc: SVGPolylineElement, x: (int * int) list) : SVGPolylineElement =
            x
            |> List.map (fun (p1, p2) -> $"%d{p1},%d{p2}")
            |> String.concat " "
            |> fun s -> acc.setAttribute ("points", s)

            acc

        [<CustomOperation("points")>]
        member _.SetPoints(acc: SVGPolylineElement, x: (float * float) list) : SVGPolylineElement =
            x
            |> List.map (fun (p1, p2) -> $"%f{p1},%f{p2}")
            |> String.concat " "
            |> fun s -> acc.setAttribute ("points", s)

            acc

    let polyline': PolylineBuilder = PolylineBuilder()

    type SVGTextContentBuilder() =
        inherit SVGGraphicsBuilder()

    type SVGTextPositioningBuilder() =
        inherit SVGTextContentBuilder()

        [<CustomOperation("x")>]
        member _.SetX(acc: 'T :> SVGTextPositioningElement, x: int) : 'T =
            acc.setAttribute ("x", string x)
            acc

        [<CustomOperation("x")>]
        member _.SetX(acc: 'T :> SVGTextPositioningElement, x: float) : 'T =
            acc.setAttribute ("x", string x)
            acc

        [<CustomOperation("y")>]
        member _.SetY(acc: 'T :> SVGTextPositioningElement, x: int) : 'T =
            acc.setAttribute ("y", string x)
            acc

        [<CustomOperation("y")>]
        member _.SetY(acc: 'T :> SVGTextPositioningElement, x: float) : 'T =
            acc.setAttribute ("y", string x)
            acc

        [<CustomOperation("dx")>]
        member _.SetDx(acc: 'T :> SVGTextPositioningElement, x: int) : 'T =
            acc.setAttribute ("dx", string x)
            acc

        [<CustomOperation("dx")>]
        member _.SetDx(acc: 'T :> SVGTextPositioningElement, x: float) : 'T =
            acc.setAttribute ("dx", string x)
            acc

        [<CustomOperation("dy")>]
        member _.SetDy(acc: 'T :> SVGTextPositioningElement, x: int) : 'T =
            acc.setAttribute ("dy", string x)
            acc

        [<CustomOperation("dy")>]
        member _.SetDy(acc: 'T :> SVGTextPositioningElement, x: float) : 'T =
            acc.setAttribute ("dy", string x)
            acc

    type TextBuilder() =
        inherit SVGTextPositioningBuilder()

        member _.Yield(_) : SVGTextElement =
            document.createElementNS ("http://www.w3.org/2000/svg", "text") :?> SVGTextElement

        member _.Zero() : SVGTextElement =
            document.createElementNS ("http://www.w3.org/2000/svg", "text") :?> SVGTextElement

    let text': TextBuilder = TextBuilder()
