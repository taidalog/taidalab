// taidalab Version 4.4.4
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
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
                <summary>ヒント: </summary>
                <p class="history-indented">
                    2<sup>n</sup> の数を2進法で表現するには、1 の後に 0 を n 個続けます。<br>
                    %d{answer}<sub>(10)</sub> は 2<sup>%d{indexNumber}</sup> なので、1 の後ろに 0 を %d{indexNumber} 個つけます。
                </p>
            </details>"""

        let question lastAnswers : int =
            newNumber (fun _ -> getRandomBetween 0 7 |> pown 2) (fun n -> List.contains n lastAnswers = false)

        let additional number : unit = ()

        let init () =
            Dec2Bin1.init'
                question
                hint
                Bin.validate
                Bin.toDec
                (padWithZero 8 >> colorLeadingZero)
                additional
                10
                2
                4
                Dec2Bin1.checkAnswer
