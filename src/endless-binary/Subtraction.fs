﻿// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2025 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System
open Browser.Dom
open Browser.Types
open Taidalab.Number
open Taidalab.Text
open Taidalab.EndlessBinary
open Fermata.RadixConversion

module EndlessBinary =
    module Subtraction =
        let help =
            """
            2進数同士の引き算をエンドレスで練習できます。<br>
            出題範囲は m, n (2 &le; m + n &le; 255) で、繰り下がりもあります。<br>
            ヒント付きなので、考え方も身に付けられます。
            """

        let newNumbersSub () =
            let number1 = getRandomBetween 1 255

            let number2 =
                newNumber (fun _ -> getRandomBetween 1 255) (fun n -> (n <> number1) && ((n &&& number1) <> 0))

            if number1 > number2 then
                (number1, number2)
            else
                (number2, number1)


        let newHintSub () =
            let hint =
                """
                <details><summary><h2>ヒント:</h2></summary>
                    <p class="history-indented">
                        10進数の筆算と同じように、右端から上下の数で引き算をします。<br><br>
                        0<sub>(2)</sub> - 0<sub>(2)</sub> = 0<sub>(2)</sub><br>
                        1<sub>(2)</sub> - 1<sub>(2)</sub> = 0<sub>(2)</sub><br>
                        1<sub>(2)</sub> - 0<sub>(2)</sub> = 1<sub>(2)</sub><br><br>
                        0<sub>(2)</sub> - 1<sub>(2)</sub> をする時は、<br>
                        ひとつ左の桁から1を2つもらってきます。<br>
                    </p>
                </details>"""

            hint


        let rec checkAnswer (answer: int) (num1: int) (num2: int) (last_answers: int list) =
            // Getting the user input.
            let numberInput = document.getElementById "numberInput" :?> HTMLInputElement
            let input = numberInput.value |> escapeHtml

            numberInput.focus ()

            let sourceRadix = 2

            match Bin.validate input with
            | Bin.Invalid e ->
                let intToBinExpr (x: int) =
                    x
                    |> Dec.Valid
                    |> Dec.toBin
                    |> function
                        | Bin.Valid v -> v
                        | Bin.Invalid _ -> ""
                // Making an error message.
                newErrorMessageBin
                    $"%s{intToBinExpr num1}<sub>(%d{sourceRadix})</sub> - %s{intToBinExpr num2}<sub>(%d{sourceRadix})</sub>"
                    input
                    e
                |> fun x -> (document.getElementById "errorArea").innerHTML <- x
            | Bin.Valid v ->
                (document.getElementById "errorArea").innerHTML <- ""
                // Converting the input in order to use in the history message.
                let binaryDigit = 8
                let taggedBin: string = v |> Fermata.String.padLeft binaryDigit ' ' |> escapeSpace

                let decDigit = 3
                let dec: Dec = Bin.Valid v |> Bin.toDec

                match dec with
                | Dec.Invalid _ -> ()
                | Dec.Valid dec ->
                    let spacePaddedDec =
                        dec |> string |> Fermata.String.padLeft decDigit ' ' |> escapeSpace

                    // Making a new history and updating the history with the new one.
                    let destinationRadix = 10
                    let outputArea = document.getElementById "outputArea"

                    let historyMessage =
                        newHistory (dec = answer) taggedBin sourceRadix spacePaddedDec destinationRadix
                        |> (fun x -> concatinateStrings "<br>" [ x; outputArea.innerHTML ])

                    outputArea.innerHTML <- historyMessage

                    if dec = answer then
                        // Making the next question.
                        let (number1, number2) =
                            newNumber (fun _ -> newNumbersSub ()) (fun (n1, n2) ->
                                List.contains n1 last_answers = false && List.contains n2 last_answers = false)

                        setColumnAddition number1 number2

                        let nextHint = newHintSub ()
                        (document.getElementById "hintArea").innerHTML <- nextHint

                        numberInput.value <- ""

                        // Updating `lastAnswers`.
                        // These numbers will not be used for the next question.
                        let answersToKeep = Math.Min(20, List.length last_answers + 1)
                        let lastAnswers = ([ number1; number2 ] @ last_answers).[0 .. (answersToKeep - 1)]

                        // Setting the next answer to the check button.
                        (document.getElementById "submitButton").onclick <-
                            (fun e ->
                                e.preventDefault ()
                                checkAnswer (number1 - number2) number1 number2 lastAnswers)

                        (document.getElementById "inputArea").onsubmit <-
                            (fun e ->
                                e.preventDefault ()
                                checkAnswer (number1 - number2) number1 number2 lastAnswers)

        let init () =
            // Initialization.
            document.title <- "減算 - taidalab"

            let header = document.querySelector "header"
            header.innerHTML <- Content.Common.header
            header.className <- "subtraction"

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
                """<span>減算 - </span><span translate="no">taidalab</span>"""

            (document.querySelector "main").innerHTML <- EndlessBinary.Course.main help "help-color subtraction"
            (document.querySelector "#submitButton").className <- "subtraction"
            (document.querySelector "#questionArea").innerHTML <- Content.Common.columnAdditionFormat

            let sourceRadix = 2
            let destinationRadix = 2
            let hint = newHintSub ()

            (document.getElementById "numberInput").className <- "question-number"
            (document.getElementById "operator").innerText <- "-)"
            (document.getElementById "firstRowSrcRadix").innerText <- sprintf "(%d)" sourceRadix
            (document.getElementById "secondRowSrcRadix").innerText <- sprintf "(%d)" sourceRadix
            (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
            (document.getElementById "hintArea").innerHTML <- hint

            let (number1, number2) = newNumbersSub ()
            setColumnAddition number1 number2

            (document.getElementById "submitButton").onclick <-
                (fun e ->
                    e.preventDefault ()
                    checkAnswer (number1 - number2) number1 number2 [ number1; number2 ])

            (document.getElementById "inputArea").onsubmit <-
                (fun e ->
                    e.preventDefault ()
                    checkAnswer (number1 - number2) number1 number2 [ number1; number2 ])

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

            document.onkeydown <- (fun (e: KeyboardEvent) -> EndlessBinary.keyboardshortcut e)
