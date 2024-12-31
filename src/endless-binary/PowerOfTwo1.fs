// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2024 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System
open Browser.Dom
open Taidalab.Number
open Taidalab.EndlessBinary
open Fermata.RadixConversion

module EndlessBinary =
    module PowerOfTwo1 =
        let help =
            """
            2<sup>n</sup> (0&le;n&le;7) の10進数から2進数への変換をエンドレスで練習できます。<br>
            2<sup>n</sup> の2進数を覚えると10進数からの変換を早く行えるので、まずはこのコースから始めてみてください。<br>
            ヒント付きなので、考え方も身に付けられます。
            """

        let hint answer =
            let indexNumber = Math.Log(double answer, 2.0) |> int

            $"""
            <details>
                <summary><h2>ヒント:</h2></summary>
                <p class="history-indented">
                    2<sup>n</sup> の数を2進法で表現するには、1 の後に 0 を n 個続けます。<br>
                    %d{answer}<sub>(10)</sub> は 2<sup>%d{indexNumber}</sup> なので、1 の後ろに 0 を %d{indexNumber} 個つけます。
                </p>
            </details>"""

        let question lastAnswers : int =
            newNumber (fun _ -> getRandomBetween 0 7 |> pown 2) (fun n -> List.contains n lastAnswers = false)

        let additional _ : unit = ()

        let exec' (lastNumbers: int list) (question': Dec) (answer: Bin) : unit =
            Dec2Bin1.exec question hint newErrorMessageBin additional 10 2 4 lastNumbers question' answer

        let init () =
            document.title <- "2のn乗 - taidalab"

            let header = document.querySelector "header"
            header.innerHTML <- Content.Common.header
            header.className <- "power-of-two"

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
                """<h1>2のn乗 - <span translate="no">taidalab</span></h1>"""

            (document.querySelector "main").innerHTML <- EndlessBinary.Course.main help "help-color power-of-two"
            (document.querySelector "#submitButton").className <- "submit-button display-order-3 power-of-two"
            (document.querySelector "#questionArea").innerHTML <- Content.Common.question

            Dec2Bin1.init' question hint additional 10 2 exec' EndlessBinary.keyboardshortcut
