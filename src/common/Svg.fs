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
