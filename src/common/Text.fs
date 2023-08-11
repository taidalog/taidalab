// taidalab Version 4.4.2
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System
open Fermata

module Text =
    let concatinateStrings joint strings =
        strings |> List.filter (String.IsNullOrEmpty >> not) |> String.concat joint

    let replaceWithPairs (pairs: (string * string) list) (original: string) =
        (original, pairs)
        ||> List.fold (fun original (oldString, newString) -> original.Replace(oldString, newString))

    let escapeHtml input =
        let replacements =
            [ ("&", "&amp;")
              ("<", "&lt;")
              (">", "&gt;")
              ("\"", "&quot;")
              ("'", "&#39;") ]

        replaceWithPairs replacements input

    let escapeSpace (input: string) = input.Replace(" ", "&nbsp;")

    let padWithZero binaryDigit text =
        Fermata.String.padLeft binaryDigit '0' text

    let colorLeadingZero str =
        str
        |> (String.rev >> String.tail >> String.rev)
        |> String.splitWith ((<>) '0')
        |> fun (left, right) -> $"""<span class="zero-gray">%s{left}</span>%s{right}"""
        |> fun x -> x + (str |> String.last)
