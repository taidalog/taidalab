// taidalab Version 4.4.4
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
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

    let frame width height content =
        sprintf
            """
            <?xml version="1.0" standalone="no"?>
            <svg width="%d" height="%d" version="1.1" xmlns="http://www.w3.org/2000/svg">
                %s
            </svg>
            """
            width
            height
            content

    let text x y opacity text =
        sprintf
            """<text x="%d" y="%d" font-family="Courier New" font-size="20" opacity="%f">%s</text>"""
            x
            y
            opacity
            text

    let path d stroke strokeWidth fill opacity animation =
        sprintf
            """<path d="%s" stroke="%s" stroke-width=%d fill="%s" opacity="%f">%s</path>"""
            d
            stroke
            strokeWidth
            fill
            opacity
            animation

    let polyline points stroke strokeWidth fill animation =
        sprintf
            """<polylie points="%s" stroke="%s" stroke-width=%d fill="%s">%s</polyline>"""
            points
            stroke
            strokeWidth
            fill
            animation

    let animate attributeName calcMode fromState toState beginMs durMs repeatCount fill =
        sprintf
            """<animate attributeName="%s" calcMode="%s" from="%s" to="%s" begin="%dms" dur="%dms" repeatCount="%s" fill="%s" />"""
            attributeName
            calcMode
            fromState
            toState
            beginMs
            durMs
            repeatCount
            fill

    let animateOpacity beginMs durMs =
        animate "opacity" "linear" "0" "1" beginMs durMs "1" "freeze"

    let newArrow x y width1 height1 width2 height2 beginMs stroke fill =
        let d =
            sprintf "M %f,%f h %f v %f h -7 l 16,-20 16,20 h -7 v %f h %f Z" x y width1 height1 height2 width2

        path d stroke 1 fill 0. (animateOpacity beginMs 500)
