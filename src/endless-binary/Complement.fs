// taidalab Version 3.3.1
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System
open Browser.Dom
open Taidalab.Number
open Taidalab.Text
open Taidalab.EndlessBinary

module EndlessBinary =
    module Complement =

        let rec checkAnswer (question : string) answer (last_answers : int list) (hint_format : string) =
            // Getting the user input.
            let numberInput = document.getElementById "numberInput" :?> Browser.Types.HTMLInputElement
            let inputValue = escapeHtml numberInput.value
            printfn "inputValue: %s" inputValue

            numberInput.focus()
            
            // Making an error message.
            let errorMessage =
                if inputValue = "" then
                    let questionWithoutSpace = question.Replace(" ", "")
                    sprintf """<span class="warning">%s の補数を、2進法表記で入力してください。</span>""" questionWithoutSpace
                else if testBinaryString inputValue = false then
                    sprintf """<span class="warning">'%s' は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>""" inputValue
                else
                    ""

            (document.getElementById "errorArea").innerHTML <- errorMessage
            
            // Exits when the input was invalid.
            if errorMessage <> "" then
                ()
            else

                let inputValueAsInt = toDecimal inputValue
                
                let historyClassName =
                    if inputValueAsInt = answer then
                        "history-correct"
                    else
                        "history-wrong"
                
                // Converting the input in order to use in the history message.
                let digit = 4
                let taggedInputValue = inputValue |> padWithZero digit |> colorLeadingZero
                let sourceRadix = 2
                let bin = toBinary inputValueAsInt
                
                // Making a new history and updating the history with the new one.
                let destinationRadix = 10
                let outputArea = document.getElementById "outputArea"
                let historyMessage =
                    sprintf """<span class ="%s">%s<sub>(%d)</sub></span>""" historyClassName taggedInputValue sourceRadix
                    |> (fun x -> concatinateStrings "<br>" x outputArea.innerHTML)
                outputArea.innerHTML <- historyMessage
                //printfn "historyMessage: %s" historyMessage
                
                if inputValueAsInt = answer then
                    // Making the next question.
                    printfn "last_answers: %A" last_answers
                    
                    let nextNumber =
                        newNumber
                            (fun _ -> getRandomBetween 1 15)
                            (fun n -> List.contains n last_answers = false)
                    printfn "nextNumber: %A" nextNumber

                    let nextAnswer = 16 - nextNumber
                    let nextBin = nextNumber |> toBinary |> padStart "0" 4
                    printfn "nextAnswer: %A" nextAnswer
                    printfn "nextBin: %A" nextBin
                    
                    (document.getElementById "questionSpan").innerText <- nextBin
                    
                    let reversedBin = nextBin |> String.collect (fun c -> if c = '1' then "0" else "1")
                    printfn "reversedBin: %s" reversedBin

                    let nextHint = String.Format(hint_format, nextBin, reversedBin)
                    (document.getElementById "hintArea").innerHTML <- nextHint
                    // printfn "nextHint: %s" nextHint
                    
                    numberInput.value <- ""

                    // Updating `lastAnswers`.
                    // These numbers will not be used for the next question.
                    let answersToKeep = Math.Min(8, List.length last_answers + 1)
                    let lastAnswers = (nextNumber :: last_answers).[0..(answersToKeep - 1)]

                    // Setting the next answer to the check button.
                    (document.getElementById "submitButton").onclick <- (fun _ ->
                        checkAnswer nextBin nextAnswer lastAnswers hint_format
                        false)
                    (document.getElementById "inputArea").onsubmit <- (fun _ ->
                        checkAnswer nextBin nextAnswer lastAnswers hint_format
                        false)


        let init () =
            // Initialization.
            let sourceRadix = 2
            let destinationRadix = 2

            let initNumber = getRandomBetween 1 15
            let initAnswer = 16 - initNumber
            let initBin = initNumber |> toBinary |> padStart "0" 4
            printfn "initNumber: %A" initNumber
            printfn "initAnswer: %A" initAnswer
            printfn "initBin: %A" initBin

            let reversedBin = initBin |> String.collect (fun c -> if c = '1' then "0" else "1")
            printfn "reversedBin: %A" reversedBin

            let hintFormat = """
                <details><summary>ヒント:</summary>
                    <p class="history-indented">2進数の補数（2の補数）は、
                        ある2進数の 0 と 1 を反転させて１を足したものです。<br>
                        {0} の 0 と 1 を反転させると<br>
                        {1} になります。<br>
                        これに 1 を足したものが {0} の補数（2の補数）です。
                    </p>
                </details>"""
            let hint = String.Format(hintFormat, initBin, reversedBin)

            (document.getElementById "questionSpan").innerText <- initBin
            (document.getElementById "srcRadix").innerText <- sprintf "(%d)" sourceRadix
            (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
            (document.getElementById "hintArea").innerHTML <- hint
            (document.getElementById "submitButton").onclick <- (fun _ ->
                checkAnswer initBin initAnswer [initNumber] hintFormat
                false)
            (document.getElementById "inputArea").onsubmit <- (fun _ ->
                checkAnswer initBin initAnswer [initNumber] hintFormat
                false)
