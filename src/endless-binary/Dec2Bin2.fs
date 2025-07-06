// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2025 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom
open Taidalab.Number
open Taidalab.EndlessBinary
open Fermata.RadixConversion

module EndlessBinary =
    module Dec2Bin2 =
        let help =
            """
            10進数から2進数への変換をエンドレスで練習できます。<br>
            出題範囲は n (0&le;n&le;255) です。<br>
            ヒントはありませんので、慣れてからどうぞ。
            """

        let hint _ = ""

        let question lastAnswers : int =
            newNumber (fun _ -> getRandomBetween 0 255) (fun n -> List.contains n lastAnswers = false)

        let additional _ : unit = ()

        let exec' (lastNumbers: int list) (question': Dec) (answer: Bin) : unit =
            Dec2Bin1.exec question hint newErrorMessageBin additional 10 2 10 lastNumbers question' answer

        let init () =
            document.title <- "10進数→2進数 (2) - taidalab"

            let header = document.querySelector "header"
            header.innerHTML <- Content.Common.header
            header.className <- "dec2bin"

            (document.getElementById "hamburgerButton").onclick <-
                (fun _ ->
                    (document.querySelector "aside").classList.toggle "flagged" |> ignore
                    (document.getElementById "barrier").classList.toggle "flagged" |> ignore
                    (document.querySelector "main").classList.toggle "flagged" |> ignore)

            (document.getElementById "barrier").onclick <-
                (fun _ ->
                    (document.querySelector "aside").classList.remove "flagged" |> ignore
                    (document.getElementById "barrier").classList.remove "flagged" |> ignore
                    (document.querySelector "main").classList.remove "flagged" |> ignore)

            (document.querySelector "#headerTitle").innerHTML <-
                """<h1>10進数→2進数 (2) - <span translate="no">taidalab</span></h1>"""

            (document.querySelector "main").innerHTML <- EndlessBinary.Course.main help "help-color dec2bin"
            (document.querySelector "#submitButton").className <- "dec2bin"
            (document.querySelector "#questionArea").innerHTML <- Content.Common.question

            Dec2Bin1.init' question hint additional 10 2 exec' EndlessBinary.keyboardshortcut
