// taidalab Version 4.6.3
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2024 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System
open Browser.Dom
open Browser.Types
open Taidalab.Number
open Taidalab.Text
open Taidalab.EndlessBinary
open Fermata
open Fermata.RadixConversion

module EndlessBinary =
    module Dec2Bin2 =
        let help =
            """
            10進数から2進数への変換をエンドレスで練習できます。<br>
            出題範囲は n (0&le;n&le;255) です。<br>
            ヒントはありませんので、慣れてからどうぞ。
            """

        let hint number = ""

        let question lastAnswers : int =
            newNumber (fun _ -> getRandomBetween 0 255) (fun n -> List.contains n lastAnswers = false)

        let additional number : unit = ()

        let init () =
            Dec2Bin1.init'
                question
                hint
                newErrorMessageBin
                Bin.validate
                Bin.toDec
                (padWithZero 8 >> colorLeadingZero)
                additional
                10
                2
                10
                EndlessBinary.keyboardshortcut
                Dec2Bin1.checkAnswer

        let init'' () =
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
            (document.querySelector "#submitButton").className <- "submit-button display-order-3 dec2bin"
            (document.querySelector "#questionArea").innerHTML <- Content.Common.question

            Dec2Bin1.init'
                question
                hint
                newErrorMessageBin
                Bin.validate
                Bin.toDec
                (padWithZero 8 >> colorLeadingZero)
                additional
                10
                2
                10
                EndlessBinary.keyboardshortcut
                Dec2Bin1.checkAnswer
