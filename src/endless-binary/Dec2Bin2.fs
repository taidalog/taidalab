// taidalab Version 4.6.2
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
