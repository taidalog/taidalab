﻿// taidalab Version 1.6.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System
open Browser.Dom
open Taidalab.Common

module Bin2Dec1 =

    let writeAdditionFormula binary_string =
        let mutable result = ""
        let mutable tmp = ""

        for i in 0..(String.length binary_string - 1) do
            tmp <- String.Format("(2<sup>{0}</sup> * {1})", string ((String.length binary_string - 1 - i)), binary_string.[i])
            if result = "" then
                result <- tmp
            else
                result <- result + " + " + tmp
        result
    
    let rec checkAnswer answer (question : string) (last_answers : int list) (hint_format : string) =
        // Getting the user input.
        let numberInput = document.getElementById "numberInput" :?> Browser.Types.HTMLInputElement
        let inputValue = escapeHtml numberInput.value
        printfn "inputValue: %s" inputValue

        numberInput.focus()

        // Making an error message.
        let questionWithoutSpace = question.Replace(" ", "")
        let errorMessage = newErrorMessageDec questionWithoutSpace inputValue
        (document.getElementById "errorArea").innerHTML <- errorMessage
        
        // Exits when the input was invalid.
        if errorMessage <> "" then
            ()
        else
            let inputValueAsInt = int inputValue
            
            // Converting the input in order to use in the history message.
            let digit = 3
            let spacePaddedInputValue = inputValue |> padStart " " digit |> escapeSpace
            
            let sourceRadix = 2
            let bin = toBinary inputValueAsInt
            
            // Making a new history and updating the history with the new one.
            let destinationRadix = 10
            let outputArea = document.getElementById "outputArea"
            let historyMessage =
                newHistory (inputValueAsInt = answer) spacePaddedInputValue destinationRadix bin sourceRadix
                |> (fun x -> concatinateStrings "<br>" x outputArea.innerHTML)
            printfn "%A" historyMessage
            outputArea.innerHTML <- historyMessage
            
            if inputValueAsInt = answer then
                // Making the next question.
                let mutable nextIndexNumber = 0
                let mutable nextNumber = last_answers.[0]
                
                printfn "%A" last_answers
                while List.contains nextNumber last_answers do
                    nextIndexNumber <- getRandomBetween 0 7
                    nextNumber <- Math.Pow(2.0, double nextIndexNumber) |> int
                    printfn "%d" nextNumber
                    printfn "%d" nextIndexNumber
                    printfn "%b" (List.contains nextNumber last_answers)

                let nextBin = toBinary nextNumber
                let splitBin = splitBinaryStringBy 4 nextBin
                printfn "%s" nextBin
                printfn "%s" splitBin
                
                (document.getElementById "questionSpan").innerText <- splitBin
                
                let nextAddtionFormula = writeAdditionFormula nextBin
                let nextHint = String.Format(hint_format, nextBin, nextAddtionFormula)
                printfn "%s" nextHint
                
                (document.getElementById "hintArea").innerHTML <- nextHint
                numberInput.value <- ""

                // Updating `lastAnswers`.
                // These numbers will not be used for the next question.
                let answersToKeep = Math.Min(4, List.length last_answers + 1)
                let lastAnswers = (nextNumber :: last_answers).[0..(answersToKeep - 1)]

                // Setting the next answer to the check button.
                (document.getElementById "submitButton").onclick <- (fun _ -> checkAnswer nextNumber splitBin lastAnswers hint_format)


    let init  () =
        // Initialization.
        let initIndexNumber = getRandomBetween 0 7
        let initNumber = Math.Pow(2.0, double initIndexNumber) |> int
        let initBin = toBinary initNumber
        let splitBin = splitBinaryStringBy 4 initBin
        printfn "%A" initIndexNumber
        printfn "%A" initNumber
        printfn "%A" initBin
        printfn "%A" splitBin

        let addtionFormula = writeAdditionFormula initBin

        let hintFormat = """
            <details><summary>ヒント:</summary>
                <p class="history-indented">
                    10進数は、一番右の桁から<br>
                    1の位、10の位、100の位、1000の位...つまり、<br>
                    10<sup>0</sup>の位、10<sup>1</sup>の位、10<sup>2</sup>の位、10<sup>3</sup>の位...となっています。
                </p>
                <p class="history-indented">
                    同様に、2進数は一番右の桁から<br>
                    1の位、2の位、4の位、8の位...つまり、<br>
                    2<sup>0</sup>の位、2<sup>1</sup>の位、2<sup>2</sup>の位、2<sup>3</sup>の位...となっています。
                </p>
                <p class="history-indented">
                    ですので、{0}<sub>(2)</sub>を10進数に変換するには、以下のように計算します。<br>
                    {1}
                </p>
            </details>"""
        let hint = String.Format(hintFormat, initBin, addtionFormula)

        let sourceRadix = 2
        let destinationRadix = 10

        (document.getElementById "questionSpan").innerHTML <- splitBin
        (document.getElementById "srcRadix").innerHTML <- sprintf "(%d)" sourceRadix
        (document.getElementById "dstRadix").innerHTML <- string destinationRadix
        (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
        (document.getElementById "hintArea").innerHTML <- hint
        (document.getElementById "submitButton").onclick <- (fun _ -> checkAnswer initNumber splitBin [initNumber] hintFormat)