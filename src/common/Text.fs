// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2025 taidalog
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
