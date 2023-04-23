// taidalab Version 4.1.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System
open Fermata

module Text =
    open System.Text.RegularExpressions
    
    let concatinateStrings joint strings =
        strings
        |> List.filter (fun x -> (String.IsNullOrEmpty x) = false)
        |> String.concat joint
    
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
    
    let padWithZero binaryDigit text =
        Fermata.String.padLeft binaryDigit '0' text

    let colorLeadingZero str =
        let pattern = "(^0+)"
        let re = new Regex(pattern)
        let leadingZeros = re.Match(str)
        printfn "leadingZeros : %A" leadingZeros

        if leadingZeros.Success = false then
            str
        else
            re.Replace(str,"""<span class="zero-gray">$1</span>""")
