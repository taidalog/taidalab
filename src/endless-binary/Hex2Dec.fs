// taidalab Version 3.1.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System
open Browser.Dom
open Taidalab.Common

module Hex2Dec =

    let writeAdditionFormulaHex (hex : seq<char>) =
        hex
        |> Seq.toList
        |> List.rev
        |> List.mapi (fun i c -> sprintf """(16<sup>%d</sup> * %d)""" i (c |> string |> hexToDecimal))
        |> List.rev
        |> String.concat " + "
    
    let rec checkAnswer answer (question : string) (last_answers : int list) (hint_format : string) =
        // Getting the user input.
        let numberInput = document.getElementById "numberInput" :?> Browser.Types.HTMLInputElement
        let inputValue = escapeHtml numberInput.value
        printfn "inputValue: %s" inputValue

        numberInput.focus()

        // Making an error message.
        let errorMessage = newErrorMessageDec question inputValue
        (document.getElementById "errorArea").innerHTML <- errorMessage
        
        // Exits when the input was invalid.
        if errorMessage <> "" then
            ()
        else
            let inputValueAsInt = int inputValue
            printfn "inputValueAsInt: %d" inputValueAsInt

            // Converting the input in order to use in the history message.
            let digit = 3
            let spacePaddedInputValue = inputValue |> padStart " " digit |> escapeSpace
            
            let sourceRadix = 16
            let hex = toHex inputValueAsInt
            let hexDigit = 2
            let taggedHex = padWithZero hexDigit hex |> colorLeadingZero

            // Making a new history and updating the history with the new one.
            let destinationRadix = 10
            let outputArea = document.getElementById "outputArea"
            let historyMessage =
                newHistory (inputValueAsInt = answer) spacePaddedInputValue destinationRadix taggedHex sourceRadix
                |> (fun x -> concatinateStrings "<br>" x outputArea.innerHTML)
            printfn "%A" historyMessage
            outputArea.innerHTML <- historyMessage
            
            if inputValueAsInt = answer then
                // Making the next question.
                printfn "%A" last_answers

                let nextNumber =
                    newNumber
                        (fun _ -> getRandomBetween 0 255)
                        (fun n -> List.contains n last_answers = false)
                printfn "%d" nextNumber

                let nextHex = toHex nextNumber
                printfn "%s" nextHex
                                
                (document.getElementById "questionSpan").innerText <- nextHex
                
                let nextAddtionFormula = writeAdditionFormulaHex nextHex
                let nextHint = String.Format(hint_format, nextHex, nextAddtionFormula)
                printfn "%s" nextHint
                
                (document.getElementById "hintArea").innerHTML <- nextHint
                numberInput.value <- ""

                // Updating `lastAnswers`.
                // These numbers will not be used for the next question.
                let answersToKeep = Math.Min(10, List.length last_answers + 1)
                let lastAnswers = (nextNumber :: last_answers).[0..(answersToKeep - 1)]

                // Setting the next answer to the check button.
                (document.getElementById "submitButton").onclick <- (fun _ ->
                    checkAnswer nextNumber nextHex lastAnswers hint_format
                    false)
                (document.getElementById "inputArea").onsubmit <- (fun _ ->
                    checkAnswer nextNumber nextHex lastAnswers hint_format
                    false)


    let init  () =
        // Initialization.
        let initNumber = getRandomBetween 0 255
        let initHex = toHex initNumber
        printfn "%A" initNumber
        printfn "%A" initHex

        let addtionFormula = writeAdditionFormulaHex initHex

        let hintFormat = """
            <details><summary>ヒント:</summary>
                <p class="history-indented">
                    10進数は、一番右の桁から<br>
                    1の位、10の位、100の位、1000の位...つまり、<br>
                    10<sup>0</sup>の位、10<sup>1</sup>の位、10<sup>2</sup>の位、10<sup>3</sup>の位...となっています。
                </p>
                <p class="history-indented">
                    同様に、16進数は一番右の桁から<br>
                    1の位、16の位、256の位...つまり、<br>
                    16<sup>0</sup>の位、16<sup>1</sup>の位、16<sup>2</sup>の位...となっています。
                </p>
                <p class="history-indented">
                    16進数にA~Fのアルファベットがある場合は、それぞれ10~15の10進数を表しています。
                </p>
                <p class="history-indented">
                    ですので、{0}<sub>(16)</sub>を10進数に変換するには、以下のように計算します。<br>
                    {1}
                </p>
            </details>"""
        let hint = String.Format(hintFormat, initHex, addtionFormula)

        let sourceRadix = 16
        let destinationRadix = 10

        (document.getElementById "questionSpan").innerText <- initHex
        (document.getElementById "srcRadix").innerText <- sprintf "(%d)" sourceRadix
        (document.getElementById "dstRadix").innerText <- string destinationRadix
        (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
        (document.getElementById "hintArea").innerHTML <- hint
        (document.getElementById "submitButton").onclick <- (fun _ ->
            checkAnswer initNumber initHex [initNumber] hintFormat
            false)
        (document.getElementById "inputArea").onsubmit <- (fun _ ->
            checkAnswer initNumber initHex [initNumber] hintFormat
            false)
