﻿// taidalab Version 5.0.0
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
open Taidalab.Tuple
open Taidalab.EndlessBinary
open Fermata
open Fermata.RadixConversion

module EndlessBinary =
    module Bin2Dec1 =
        let help =
            """
            2進数から10進数への変換をエンドレスで練習できます。<br>
            出題範囲は n (0&le;n&le;255) で、2の累乗の数同士の和になっています。<br>
            ヒント付きなので、考え方も身に付けられます。
            """

        let newNumberWithOneOrTwoOne () : int =
            let generator () : (int * int) =
                let generator' () : int =
                    // Generates a number that is zero, or that is power of two and less than 255.
                    getRandomBetween 0 8
                    |> pown 2
                    |> Dec.toBin
                    |> String.padLeft 9 '0'
                    |> String.tail
                    |> Bin.toDec

                generator' (), generator' ()

            let tester (x, y) : bool = x <> y
            newNumber generator tester ||> (+)

        let writeAdditionFormula binaryString =
            binaryString
            |> Seq.toList
            |> List.mapi (fun i c -> sprintf """(%c * 2<sup>%d</sup>)""" c (String.length binaryString - i - 1))
            |> String.concat " + "

        let tableComponents binaryString =
            binaryString
            |> Seq.toList
            |> List.mapi (fun i c ->
                $"""<span class="bin2dec hint-table-digit">%d{(String.length binaryString) - i}</span>""",
                $"""<span class="bin2dec hint-table-digit green large">%c{c}</span>""",
                $"""<span class="bin2dec hint-table-digit gray">%d{2}<sup>%d{(String.length binaryString) - i - 1}</sup></span>""")

        let newHintTable (a, b, c) =
            sprintf
                """
                <div class="hint-table" style="padding-left: 2rem;">
                    <div class="hint-table-row">
                        %s
                        <div class="hint-table-container">
                            <span class="middle">桁目</span>
                        </div>
                    </div>
                    <div class="hint-table-row">
                        %s
                        <div class="hint-table-container">
                            <span class="middle">ビット</span>
                        </div>
                    </div>
                    <div class="hint-table-row">
                        %s
                        <div class="hint-table-container">
                            <span class="middle">重み</span>
                        </div>
                    </div>
                </div>
                """
                a
                b
                c

        let hintTable binaryString =
            binaryString
            |> tableComponents
            |> List.fold (fun x y -> applyToTuples3 (fun a1 a2 -> sprintf "%s%s" a1 a2) x y) ("", "", "")
            |> newHintTable

        let hint binaryString =
            let formula = writeAdditionFormula binaryString
            let table = hintTable binaryString

            $"""
            <details><summary><h2>ヒント:</h2></summary>
                <p class="history-indented">
                    10進法で表現した数は、一番右の桁から<br>
                    1の位、10の位、100の位、1000の位...となっています。<br>
                    これを「10<sup>n</sup>の位」の形で表すと、<br>
                    10<sup>0</sup>の位、10<sup>1</sup>の位、10<sup>2</sup>の位、10<sup>3</sup>の位...となります。<br>
                </p>
                <p class="history-indented">
                    同様に、2進法で表現した数は、一番右の桁から<br>
                    1の位、2の位、4の位、8の位...となっています。<br>
                    これを「2<sup>n</sup>の位」の形で表すと、<br>
                    2<sup>0</sup>の位、2<sup>1</sup>の位、2<sup>2</sup>の位、2<sup>3</sup>の位...となります。
                </p>
                <p class="history-indented">
                    この 10<sup>0</sup>、10<sup>1</sup>、10<sup>2</sup>、10<sup>3</sup>...や 2<sup>0</sup>、2<sup>1</sup>、2<sup>2</sup>、2<sup>3</sup>...という数を、その桁の「重み」と呼びます。<br>
                </p>
                <p class="history-indented">
                    %s{table}
                </p>
                <p class="history-indented">
                    2進法で表現した数を10進法で表現しなおすには、それぞれの桁の数と重みをかけ算し、それを合計します。<br>
                    %s{binaryString}<sub>(2)</sub> の場合、以下のように計算します。
                </p>
                <p class="history-indented hint-bgcolor-gray mono regular">
                    &nbsp;&nbsp;%s{formula}<br>
                    = %d{Bin.toDec binaryString}<sub>(10)</sub>
                </p>
            </details>
            """

        let question' lastAnswers : int =
            newNumber newNumberWithOneOrTwoOne (fun n -> List.contains n lastAnswers = false)

        let additional number : unit = ()

        let rec checkAnswer
            (questionGenerator: 'c list -> 'c)
            (hintGenerator: 'a -> 'b)
            (additional: 'c -> unit)
            (answer: string)
            (question: string)
            (last_answers: int list)
            =
            // Getting the user input.
            let numberInput = document.getElementById "numberInput" :?> HTMLInputElement
            let input = numberInput.value |> escapeHtml
            let dec: Result<int, Errors.Errors> = input |> Dec.validate

            numberInput.focus ()

            match dec with
            | Error(error: Errors.Errors) ->
                // Making an error message.
                (document.getElementById "errorArea").innerHTML <- newErrorMessageDec question input error
            | Ok(dec: int) ->
                (document.getElementById "errorArea").innerHTML <- ""

                // Converting the input in order to use in the history message.
                let digit = 3

                let spacePaddedInputValue =
                    dec |> string |> Fermata.String.padLeft digit ' ' |> escapeSpace

                let sourceRadix = 2
                let bin = Dec.toBin dec
                let binaryDigit = 8
                let taggedBin = bin |> padWithZero binaryDigit |> colorLeadingZero

                // Making a new history and updating the history with the new one.
                let destinationRadix = 10
                let outputArea = document.getElementById "outputArea"

                let historyMessage =
                    newHistory (dec = int answer) spacePaddedInputValue destinationRadix taggedBin sourceRadix
                    |> (fun x -> concatinateStrings "<br>" [ x; outputArea.innerHTML ])

                outputArea.innerHTML <- historyMessage

                if dec = int answer then
                    // Making the next question.
                    let nextNumber = questionGenerator last_answers
                    let nextBin = Dec.toBin nextNumber
                    let splitBin = splitBinaryStringBy 4 nextBin
                    (document.getElementById "questionSpan").innerText <- splitBin
                    (document.getElementById "hintArea").innerHTML <- hintGenerator nextBin
                    numberInput.value <- ""

                    // Updating `lastAnswers`.
                    // These numbers will not be used for the next question.
                    let answersToKeep = Math.Min(4, List.length last_answers + 1)
                    let lastAnswers = (nextNumber :: last_answers).[0 .. (answersToKeep - 1)]

                    // Setting the next answer to the check button.
                    (document.getElementById "submitButton").onclick <-
                        (fun e ->
                            e.preventDefault ()

                            checkAnswer
                                questionGenerator
                                hintGenerator
                                additional
                                (string nextNumber)
                                splitBin
                                lastAnswers)

                    (document.getElementById "inputArea").onsubmit <-
                        (fun e ->
                            e.preventDefault ()

                            checkAnswer
                                questionGenerator
                                hintGenerator
                                additional
                                (string nextNumber)
                                splitBin
                                lastAnswers)


        let init'
            (questionGenerator: 'c list -> 'c)
            (hintGenerator: 'a -> 'b)
            (additional: 'c -> unit)
            (keyboardshortcutSetter: KeyboardEvent -> unit)
            checker
            : unit =
            // Initialization.
            let initNumber = questionGenerator []
            let initBin = Dec.toBin initNumber
            let splitBin = splitBinaryStringBy 4 initBin
            let sourceRadix = 2
            let destinationRadix = 10

            (document.getElementById "questionSpan").innerText <- splitBin
            (document.getElementById "srcRadix").innerText <- sprintf "(%d)" sourceRadix
            (document.getElementById "dstRadix").innerText <- string destinationRadix
            (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
            (document.getElementById "hintArea").innerHTML <- hintGenerator initBin

            (document.getElementById "submitButton").onclick <-
                (fun e ->
                    e.preventDefault ()
                    checker questionGenerator hintGenerator additional (string initNumber) splitBin [ initNumber ])

            (document.getElementById "inputArea").onsubmit <-
                (fun e ->
                    e.preventDefault ()
                    checker questionGenerator hintGenerator additional (string initNumber) splitBin [ initNumber ])

            (document.getElementById "helpButton").onclick <-
                (fun _ ->
                    [ "helpWindow"; "helpBarrier" ]
                    |> List.iter (fun x -> (document.getElementById x).classList.toggle "active" |> ignore))

            (document.getElementById "helpBarrier").onclick <-
                (fun _ ->
                    [ "helpWindow"; "helpBarrier" ]
                    |> List.iter (fun x -> (document.getElementById x).classList.remove "active" |> ignore))

            (document.getElementById "helpClose").onclick <-
                (fun _ ->
                    [ "helpWindow"; "helpBarrier" ]
                    |> List.iter (fun x -> (document.getElementById x).classList.remove "active" |> ignore))

            document.onkeydown <- (fun (e: KeyboardEvent) -> keyboardshortcutSetter e)

        let init () =
            document.title <- "2進数→10進数 (1) - taidalab"

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
                """<h1>2進数→10進数 (1) - <span translate="no">taidalab</span></h1>"""

            (document.querySelector "main").innerHTML <- EndlessBinary.Course.main help "help-color bin2dec"
            (document.querySelector "#submitButton").className <- "submit-button display-order-3 bin2dec"
            (document.querySelector "#questionArea").innerHTML <- Content.Common.question

            init' question' hint additional EndlessBinary.keyboardshortcut checkAnswer
