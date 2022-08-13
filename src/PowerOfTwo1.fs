// taidalab Version 1.6.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System
open Browser.Dom
open Taidalab.Common

module PowerOfTwo1 =

    let rec checkAnswer answer hint_format (last_answers : int list) =
        // Getting the user input.
        let numberInput = document.getElementById "numberInput" :?> Browser.Types.HTMLInputElement
        let userInput = escapeHtml numberInput.value
        printfn "userInput: %s" userInput

        numberInput.focus()

        // Making an error message.
        let errorMessage = newErrorMessageBin answer userInput
        (document.getElementById "errorArea").innerHTML <- errorMessage
        
        // Exits when the input was invalid.
        if errorMessage <> "" then
            ()
        else
            
            // Converting the input in order to use in the history message.
            let binaryDigit = 8
            let taggedBin = userInput  |> padWithZero binaryDigit |> colorLeadingZero
            printfn "taggedBin: %s" taggedBin
            
            let destinationRadix = 2
            let userInputToDec = toDecimal userInput
            printfn "userInputToDec: %d" userInputToDec
            
            let decimalDigit = 3
            let spacePaddedDec = userInputToDec |> string |> padStart " " decimalDigit |> escapeSpace
            
            // Making a new history and updating the history with the new one.
            let sourceRadix = 10
            let outputArea = document.getElementById "outputArea"
            let historyMessage =
                newHistory (userInputToDec = int answer) taggedBin destinationRadix spacePaddedDec sourceRadix
                |> (fun x -> concatinateStrings "<br>" x outputArea.innerHTML)
            printfn "historyMessage: %s" historyMessage
            outputArea.innerHTML <- historyMessage
            
            if userInputToDec = int answer then
                // Making the next question.
                let mutable nextIndexNumber = getRandomBetween 0 7
                let mutable nextAnswer = Math.Pow(2.0, double nextIndexNumber) |> int

                printfn "last_answers: %A" last_answers
                while List.contains nextAnswer last_answers do
                    nextIndexNumber <- getRandomBetween 0 7
                    nextAnswer <- Math.Pow(2.0, double nextIndexNumber) |> int
                    printfn "nextAnswer: %d" nextAnswer
                    printfn "List.contains nextAnswer last_answers: %b" (List.contains nextAnswer last_answers)
                
                let nextHint = String.Format(hint_format, nextAnswer, nextIndexNumber)
                //printfn "nextHint: %s" nextHint
                
                (document.getElementById "questionSpan").innerText <- string nextAnswer
                (document.getElementById "hintArea").innerHTML <- nextHint
                numberInput.value <- ""

                // Updating `lastAnswers`.
                // These numbers will not be used for the next question.
                let answersToKeep = Math.Min(4, List.length last_answers + 1)
                let lastAnswers = (nextAnswer :: last_answers).[0..(answersToKeep - 1)]

                // Setting the next answer to the check button.
                (document.getElementById "submitButton").onclick <- (fun _ ->
                    checkAnswer (string nextAnswer) hint_format lastAnswers
                    false)


    let init () =
        // Initialization.
        let initIndexNumber = getRandomBetween 0 7
        let initAnswer = Math.Pow(2.0, double initIndexNumber) |> int

        let hintFormat = """
            <details>
                <summary>ヒント: </summary>
                <p class="history-indented">
                    {0}<sub>(10)</sub> = 2<sup>{1}</sup><br>
                    10進法で2<sup>n</sup>になる数は、<br>
                    2進法では1の後ろに0をn個つけます。
                </p>
            </details>"""
        let hint = String.Format(hintFormat, initAnswer, initIndexNumber)

        let sourceRadix = 10
        let destinationRadix = 2

        (document.getElementById "questionSpan").innerHTML <- string initAnswer
        (document.getElementById "srcRadix").innerHTML <- sprintf "(%d)" sourceRadix
        (document.getElementById "dstRadix").innerHTML <- string destinationRadix
        (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
        (document.getElementById "hintArea").innerHTML <- hint
        (document.getElementById "submitButton").onclick <- (fun _ ->
            checkAnswer (string initAnswer) hintFormat [initAnswer]
            false)
