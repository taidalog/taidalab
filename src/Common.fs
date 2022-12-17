// taidalab Version 3.3.1
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System

module Number =
    let getRandomBetween min max =
        let rand = new Random()
        rand.Next(min, max + 1)

    let rec newNumber generator tester =
        let candidate = generator ()
        if tester candidate then
            candidate
        else
            newNumber generator tester

module Dec =
    let toBin (number: int) =
        System.Convert.ToString(number, 2)
    
    let toHex (number: int) =
        System.Convert.ToString(number, 16).ToUpper()
    
module Bin =
    let toDec (number: string) =
        System.Convert.ToInt32(number, 2)
    
module Hex =
    let ToDec (number: string) =
        System.Convert.ToInt32(number, 16)
    
module Text =
    open System.Text.RegularExpressions

    let regMatch pattern str =
        Regex.Match(str, pattern).Success
    
    let concatinateStrings joint fst snd =
        match (fst, snd) with
        | (f, s) when s = "" -> f
        | (f, s) when f = "" -> s
        | (f, s) when f = "" && s = "" -> ""
        | _-> sprintf "%s%s%s" fst joint snd
    
    let replaceWithPairs (pairs : (string * string) list) (original : string) =
        (original, pairs)
        ||> List.fold (fun original (oldString, newString) ->
            original.Replace(oldString, newString))
    
    let escapeHtml input =
        let replacements = [
            ("&", "&amp;")
            ("<", "&lt;")
            (">", "&gt;")
            ("\"", "&quot;")
            ("'", "&#39;")
        ]
        replaceWithPairs replacements input
    
    let escapeSpace (input : string) =
        input.Replace(" ", "&nbsp;")
    
    let padStart padString digit text =
        if digit <= (String.length text) then
            text
        else
            String.replicate (digit - (String.length text)) padString
            |> (fun x -> x + text)

    let padWithZero binaryDigit text =
        padStart "0" binaryDigit text

    let colorLeadingZero str =
        let pattern = "(^0+)"
        let re = new Regex(pattern)
        let leadingZeros = re.Match(str)
        printfn "leadingZeros : %A" leadingZeros

        if leadingZeros.Success = false then
            str
        else
            re.Replace(str,"""<span class="zero-grey">$1</span>""")

module Tuple =
    let applyToTuples3 f (a1, b1, c1) (a2, b2, c2) =
        f a1 a2, f b1 b2, f c1 c2

module EndlessBinary =
    open System.Text.RegularExpressions

    let testBinaryString input =
        let reCorrect = "^[01]+$"
        Regex.Match(input, reCorrect).Success

    let testDecimalString input =
        let reCorrect = "^[0-9]+$"
        Regex.Match(input, reCorrect).Success
    
    let testHexString input =
        let reCorrect = "^[0-9A-Fa-f]+$"
        Regex.Match(input, reCorrect).Success

    let newErrorMessageBin answer input =
        if input = "" then
            sprintf """<span class="warning">%s の2進法表記を入力してください。</span>""" answer
        else if testBinaryString input = false then
            sprintf """<span class="warning">'%s' は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>""" input
        else
            ""

    let newErrorMessageDec answer input =
        if input = "" then
            sprintf """<span class="warning">%s の10進法表記を入力してください。</span>""" answer
        else if testDecimalString input = false then
            sprintf """<span class="warning">'%s' は10進数ではありません。使えるのは半角の 0123456789 のみです。</span>""" input
        else
            ""
    
    let newErrorMessageHex answer input =
        if input = "" then
            sprintf """<span class="warning">%s の16進法表記を入力してください。</span>""" answer
        else if testHexString input = false then
            sprintf """<span class="warning">'%s' は16進数ではありません。使えるのは半角の 0123456789ABCDEF のみです。</span>""" input
        else
            ""

    let newHistory correct input destination_radix converted_input source_radix =
        let historyClassName =
            if correct then
                "history-correct"
            else
                "history-wrong"
        sprintf "<span class =\"%s\">%s<sub>(%d)</sub> = %s<sub>(%d)</sub></span>" historyClassName input destination_radix converted_input source_radix

    let splitBinaryStringBy digit str =
        let pattern = sprintf "([01])(?=([01]{%d})+(?![01]))" digit
        let regex = new Regex(pattern)
        regex.Replace(str, "$1 ")

    open Browser.Dom
    let setColumnAddition number1 number2 =
        let bin1 = Dec.toBin number1
        let bin2 = Dec.toBin number2
        printfn "%s" bin1
        printfn "%s" bin2

        for i in 1..8 do
            sprintf "firstRowDigit%d" i |> (fun x -> (document.getElementById x).innerText <- "")
            sprintf "secondRowDigit%d" i |> (fun x -> (document.getElementById x).innerText <- "")

        for i in 1..(String.length bin1) do
            sprintf "firstRowDigit%d" i |> (fun x -> (document.getElementById x).innerText <- string (bin1.[String.length bin1 - i]))

        for i in 1..(String.length bin2) do
            sprintf "secondRowDigit%d" i |> (fun x -> (document.getElementById x).innerText <- string (bin2.[String.length bin2 - i]))

    let delayMs index =
        index * 2500 - 500 |> abs
    
    let numOpt radix num =
        (Some radix, Some 1, Some num, None)
    
    let divRemOpt divisor divRem =
        match divRem |> List.rev with
        | [] -> [ (None, None, None, None) ]
        | h::t ->
            let inner_h =
                h |> (fun (x, y) -> (None, None, Some x, Some y))
            let inner_t =
                t |> List.map (fun (x, y) -> (Some divisor, Some 1, Some x, Some y))
            inner_h :: inner_t |> List.rev

module Svg =
    type TextProp =
        TextProp of width : int * height : int * content : string
    
    type PathProp =
        PathProp of d : string * stroke : string * strokeWidth : int * fill : string * content : string
    
    type AnimateProp =
        AnimateProp of attributeName : string * calcMode : string * fromState : string * toState : string * beginMs : int * durMs : int * repeatCount : string
    
    let frame width height content =
        sprintf
            """
            <?xml version="1.0" standalone="no"?>
            <svg width="%d" height="%d" version="1.1" xmlns="http://www.w3.org/2000/svg">
                %s
            </svg>
            """
            width height content

    let text x y opacity text =
        sprintf """<text x="%d" y="%d" font-family="Courier New" font-size="20" opacity="%f">%s</text>""" x y opacity text
    
    let path d stroke strokeWidth fill opacity animation  =
        sprintf """<path d="%s" stroke="%s" stroke-width=%d fill="%s" opacity="%f">%s</path>""" d stroke strokeWidth fill opacity animation
    
    let polyline points stroke strokeWidth fill animation =
        sprintf """<polylie points="%s" stroke="%s" stroke-width=%d fill="%s">%s</polyline>""" points stroke strokeWidth fill animation
    
    let animate attributeName calcMode fromState toState beginMs durMs repeatCount fill =
        sprintf """<animate attributeName="%s" calcMode="%s" from="%s" to="%s" begin="%dms" dur="%dms" repeatCount="%s" fill="%s" />""" attributeName calcMode fromState toState beginMs durMs repeatCount fill
    
    let animateOpacity beginMs durMs =
        animate "opacity" "linear" "0" "1" beginMs durMs "1" "freeze"
    
    let newArrow x y width1 height1 width2 height2 beginMs stroke fill=
        let d = sprintf "M %f,%f h %f v %f h -7 l 16,-20 16,20 h -7 v %f h %f Z" x y width1 height1 height2 width2
        path d stroke 1 fill 0. (animateOpacity beginMs 500)