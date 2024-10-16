// taidalab Version 4.6.3
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2024 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

// open System
open Browser.Dom
// open Browser.Types
open Taidalab.Number
// open Taidalab.Text
open Taidalab.EndlessBinary
// open Fermata
// open Fermata.RadixConversion

module EndlessBinary =
    module Bin2Dec2 =
        let help =
            """
            2進数から10進数への変換をエンドレスで練習できます。<br>
            出題範囲は n (0&le;n&le;255) です。<br>
            ヒントはありませんので、慣れてからどうぞ。
            """

        let hint number = ""

        let question lastAnswers : int =
            newNumber (fun _ -> getRandomBetween 0 255) (fun n -> List.contains n lastAnswers = false)

        let additional number : unit = ()

        let init () =
            Bin2Dec1.init' question hint additional EndlessBinary.keyboardshortcut Bin2Dec1.checkAnswer

        let init'' () =
            document.title <- "2進数→10進数 (2) - taidalab"

            let header = document.querySelector "header"
            header.innerHTML <- Content.Common.header
            header.className <- "bin2dec"

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
                """<h1>2進数→10進数 (2) - <span translate="no">taidalab</span></h1>"""

            (document.querySelector "main").innerHTML <- EndlessBinary.Course.main help "help-color bin2dec"
            (document.querySelector "#submitButton").className <- "submit-button display-order-3 bin2dec"
            (document.querySelector "#questionArea").innerHTML <- Content.Common.question

            Bin2Dec1.init' question hint additional EndlessBinary.keyboardshortcut Bin2Dec1.checkAnswer
