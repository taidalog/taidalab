// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2025 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab.EndlessBinary

open Browser.Dom
open Taidalab
open Taidalab.Number
open Taidalab.EndlessBinary.Course
open Fermata.RadixConversion

module Bin2Dec2 =
    let help =
        """
        2進数から10進数への変換をエンドレスで練習できます。<br>
        出題範囲は n (0&le;n&le;255) です。<br>
        ヒントはありませんので、慣れてからどうぞ。
        """

    let question (lastAnswers: int list) : int =
        newNumber (fun _ -> getRandomBetween 0 255) (fun n -> List.contains n lastAnswers = false)

    let exec' (lastNumbers: int list) (answer: int) : unit =
        exec
            Dec.validate
            Bin2Dec1.error
            id
            Bin2Dec1.history'
            question
            (fun x -> splitBinaryStringBy 4 (Dec x |> Dec.toBin))
            id
            (fun _ -> "")
            (fun _ -> ())
            4
            lastNumbers
            answer

    let init () : unit =
        document.title <- "2進数→10進数 (2) - taidalab"

        let header = document.querySelector "header"
        header.innerHTML <- Content.Common.header
        header.className <- "bin2dec"

        (document.getElementById "hamburgerButton").onclick <-
            (fun _ ->
                (document.querySelector "nav").classList.toggle "flagged" |> ignore
                (document.getElementById "barrier").classList.toggle "flagged" |> ignore
                (document.querySelector "main").classList.toggle "flagged" |> ignore)

        (document.getElementById "barrier").onclick <-
            (fun _ ->
                (document.querySelector "nav").classList.remove "flagged" |> ignore
                (document.getElementById "barrier").classList.remove "flagged" |> ignore
                (document.querySelector "main").classList.remove "flagged" |> ignore)

        (document.querySelector "#headerTitle").innerHTML <-
            """<span>2進数→10進数 (2) - </span><span translate="no">taidalab</span>"""

        (document.querySelector "main").innerHTML <- EndlessBinary.Course.main help "help-color bin2dec"
        (document.querySelector "#submitButton").className <- "bin2dec"
        (document.querySelector "#questionArea").innerHTML <- Content.Common.question

        Bin2Dec1.init' question (fun _ -> "") (fun _ -> ()) exec' Course.keyboardshortcut
