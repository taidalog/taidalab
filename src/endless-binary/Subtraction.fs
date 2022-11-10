// taidalab Version 3.2.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System
open Browser.Dom
open Taidalab.Common

module Subtraction =

    let newNumbersSub () =
        let number1 = getRandomBetween 1 255
        let number2 =
            newNumber
                (fun _ -> getRandomBetween 1 255)
                (fun n -> (n <> number1) && ((n &&& number1) <> 0))
        if number1 > number2 then
            (number1, number2)
        else
            (number2, number1)


    let newHintSub () =
        let hint = """
            <details><summary>ヒント: </summary>
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
    

    let rec checkAnswer answer num1 num2 (last_answers : int list) =
        // Getting the user input.
        let numberInput = document.getElementById "numberInput" :?> Browser.Types.HTMLInputElement
        let bin = escapeHtml numberInput.value
        printfn "bin: %s" bin
        
        numberInput.focus()

        let sourceRadix = 2
        
        // Making an error message.
        let errorMessage =
            if bin = "" then
                sprintf """<span class="warning">%s<small>(%d)</small> - %s<small>(%d)</small> の2進法表記を入力してください。</span>""" (toBinary num1) sourceRadix (toBinary num2) sourceRadix
            else if testBinaryString bin = false then
                sprintf """<span class="warning">'%s' は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>""" bin
            else
                ""

        (document.getElementById "errorArea").innerHTML <- errorMessage
        
        // Exits when the input was invalid.
        if errorMessage <> "" then
            ()
        else
            
            // Converting the input in order to use in the history message.
            let binaryDigit = 8
            let taggedBin = bin |> padWithZero binaryDigit |> colorLeadingZero
            printfn "taggedBin: %s" taggedBin

            let decDigit = 3
            let dec = toDecimal bin
            let spacePaddedDec = dec |> string |> padStart " " decDigit |> escapeSpace
            printfn "dec: %d" dec
            printfn "spacePaddedInputValue: %s" spacePaddedDec
            
            // Making a new history and updating the history with the new one.
            let destinationRadix = 10
            let outputArea = document.getElementById "outputArea"
            let historyMessage =
                newHistory (dec = answer) taggedBin sourceRadix spacePaddedDec destinationRadix
                |> (fun x -> concatinateStrings "<br>" x outputArea.innerHTML)
            // printfn "historyMessage: `n%s" historyMessage
            outputArea.innerHTML <- historyMessage
            
            if dec = answer then
                // Making the next question.
                let (number1, number2) =
                    newNumber
                        (fun _ -> newNumbersSub ())
                        (fun (n1, n2) ->
                            List.contains n1 last_answers = false && List.contains n2 last_answers = false)

                printfn "last_answers: %A" last_answers
                printfn "number1: %d" number1
                printfn "number1 |> toBinary: %s" (number1 |> toBinary)
                printfn "number2: %d" number2
                printfn "number2 |> toBinary: %s" (number2 |> toBinary)
                printfn "number1 - number2: %d" (number1 - number2)
                printfn "number1 - number2 |> toBinary: %s" (number1 - number2 |> toBinary)
                setColumnAddition number1 number2

                let nextHint = newHintSub ()
                (document.getElementById "hintArea").innerHTML <- nextHint
                // printfn "nextHint: `n%s" nextHint

                numberInput.value <- ""

                // Updating `lastAnswers`.
                // These numbers will not be used for the next question.
                let answersToKeep = Math.Min(20, List.length last_answers + 1)
                let lastAnswers = ([number1; number2] @ last_answers).[0..(answersToKeep - 1)]

                // Setting the next answer to the check button.
                (document.getElementById "submitButton").onclick <- (fun _ ->
                    checkAnswer (number1 - number2) number1 number2 lastAnswers
                    false)
                (document.getElementById "inputArea").onsubmit <- (fun _ ->
                    checkAnswer (number1 - number2) number1 number2 lastAnswers
                    false)


    let init () =
        // Initialization.
        let sourceRadix = 2
        let destinationRadix = 2
        let hint = newHintSub ()

        (document.getElementById "numberInput").className <- "number-input question-number eight-digit"
        (document.getElementById "operator").innerText <- "-)"
        (document.getElementById "firstRowSrcRadix").innerText <- sprintf "(%d)" sourceRadix
        (document.getElementById "secondRowSrcRadix").innerText <- sprintf "(%d)" sourceRadix
        (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
        (document.getElementById "hintArea").innerHTML <- hint

        let (number1, number2) = newNumbersSub ()
        printfn "number1: %d" number1
        printfn "number1 |> toBinary: %s" (number1 |> toBinary)
        printfn "number2: %d" number2
        printfn "number2 |> toBinary: %s" (number2 |> toBinary)
        printfn "number1 - number2: %d" (number1 - number2)
        printfn "number1 - number2 |> toBinary: %s" (number1 - number2 |> toBinary)
        setColumnAddition number1 number2

        (document.getElementById "submitButton").onclick <- (fun _ ->
            checkAnswer (number1 - number2) number1 number2 [number1; number2]
            false)
        (document.getElementById "inputArea").onsubmit <- (fun _ ->
            checkAnswer (number1 - number2) number1 number2 [number1; number2]
            false)
