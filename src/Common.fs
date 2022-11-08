// taidalab Version 3.0.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System
open System.Text.RegularExpressions
open Browser.Dom

module Common =
    let getRandomBetween min max =
        let rand = new Random()
        rand.Next(min, max + 1)

    let rec newNumber generator tester =
        let candidate = generator ()
        if tester candidate then
            candidate
        else
            newNumber generator tester
    
    let regMatch pattern str =
        Regex.Match(str, pattern).Success
    
    let testBinaryString input =
        let reCorrect = "^[01]+$"
        Regex.Match(input, reCorrect).Success

    let testDecimalString input =
        let reCorrect = "^[0-9]+$"
        Regex.Match(input, reCorrect).Success
    
    let testHexString input =
        let reCorrect = "^[0-9A-Fa-f]+$"
        Regex.Match(input, reCorrect).Success

    let toBinary (number: int) =
        System.Convert.ToString(number, 2)
    
    let toDecimal (number: string) =
        System.Convert.ToInt32(number, 2)
    
    let hexToDecimal (number: string) =
        System.Convert.ToInt32(number, 16)

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

    let setColumnAddition number1 number2 =
        let bin1 = toBinary number1
        let bin2 = toBinary number2
        printfn "%s" bin1
        printfn "%s" bin2

        for i in 1..8 do
            sprintf "firstRowDigit%d" i |> (fun x -> (document.getElementById x).innerText <- "")
            sprintf "secondRowDigit%d" i |> (fun x -> (document.getElementById x).innerText <- "")

        for i in 1..(String.length bin1) do
            sprintf "firstRowDigit%d" i |> (fun x -> (document.getElementById x).innerText <- string (bin1.[String.length bin1 - i]))

        for i in 1..(String.length bin2) do
            sprintf "secondRowDigit%d" i |> (fun x -> (document.getElementById x).innerText <- string (bin2.[String.length bin2 - i]))
