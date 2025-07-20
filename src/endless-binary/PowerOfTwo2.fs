// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2025 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System
open Browser.Dom
open Taidalab.Number
open Taidalab.EndlessBinary
open Fermata.RadixConversion

module EndlessBinary =
    module PowerOfTwo2 =
        let help =
            """
            2<sup>n</sup> - 1 (0&le;n&le;7) の10進数から2進数への変換をエンドレスで練習できます。<br>
            2<sup>n</sup> - 1 の2進数を通して、2進数の繰り上がりや繰り下がりを覚えられます。<br>
            ヒント付きなので、考え方も身に付けられます。
            """

        let hint number =
            let indexNumber = Math.Log(double (number + 1), 2.) |> int

            $"""
            <details>
                <summary><h2>ヒント:</h2></summary>
                <p class="history-indented">
                    %d{number}<sub>(10)</sub> という数は、以下のように表すことができます。
                </p>
                <p class="history-indented hint-bgcolor-gray mono">
                    &nbsp;&nbsp;%d{number}<sub>(10)</sub><br>
                    = %d{number + 1}<sub>(10)</sub> - 1<sub>(10)</sub><br>
                    = 2<sup>%d{indexNumber}</sup><sub>(10)</sub> - 1<sub>(10)</sub>
                </p>
                <p class="history-indented">
                    2<sup>n</sup> の数を2進法で表現するには、1 の後に 0 を n 個続けます。<br>
                    一方、2<sup>n</sup>-1 の数を2進法で表現するには、1 を n 個続けます。<br>
                    %d{number}<sub>(10)</sub> は 2<sup>%d{indexNumber}</sup> - 1 なので、1 を %d{indexNumber} 個続けます。
                </p>
            </details>"""

        let question lastAnswers : int =
            newNumber (fun _ -> getRandomBetween 0 8 |> pown 2 |> (+) -1) (fun n -> List.contains n lastAnswers = false)

        let additional _ : unit = ()

        let exec' (lastNumbers: int list) (answer: int) : unit =
            exec question hint newErrorMessageBin Dec2Bin1.history additional 4 lastNumbers answer

        let init () =
            document.title <- "2のn乗-1 - taidalab"

            let header = document.querySelector "header"
            header.innerHTML <- Content.Common.header
            header.className <- "power-of-two"

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
                """<span>2のn乗-1 - </span><span translate="no">taidalab</span>"""

            (document.querySelector "main").innerHTML <- EndlessBinary.Course.main help "help-color power-of-two"
            (document.querySelector "#submitButton").className <- "power-of-two"
            (document.querySelector "#questionArea").innerHTML <- Content.Common.question

            Dec2Bin1.init' question hint additional 10 2 exec' EndlessBinary.keyboardshortcut
