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
open Taidalab.Tuple
open Taidalab.EndlessBinary

module EndlessBinary =
    module Hex2Dec =

        let writeAdditionFormulaHex (hex : seq<char>) =
            hex
            |> Seq.toList
            |> List.rev
            |> List.mapi (fun i c -> sprintf """(%d * 16<sup>%d</sup>)""" (c |> string |> Hex.ToDec)i)
            |> List.rev
            |> String.concat " + "
        
        let tableComponentsHex hex =
            hex
            |> Seq.toList
            |> List.mapi (fun i c -> (c, (hex |> String.length) - i))
            |> List.map (fun (c, n) -> 
                sprintf """<span class="hint-table-digit">%d</span>""" n,
                sprintf """<span class="hint-table-digit green-h2d large">%c</span>""" c,
                sprintf """<span class="hint-table-digit palegreen">%d<sup>%d</sup></span>""" 16 (n - 1))
        
        let newHintTable (a, b, c) =
            sprintf
                """
                <div class="hint-table">
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
                a b c
        
        let hintTable hex =
            hex
            |> tableComponentsHex
            |> List.fold (fun x y ->
                applyToTuples3 (fun a1 a2 -> sprintf"%s%s" a1 a2) x y) ("", "", "")
            |> newHintTable
        
        let hintFormat hex formula table =
            sprintf
                """<details><summary>ヒント:</summary>
                    <p class="history-indented">
                        10進数は、一番右の桁から<br>
                        1の位、10の位、100の位、1000の位...となっています。<br>
                        これを「10<sup>n</sup>の位」の形で表すと、<br>
                        10<sup>0</sup>の位、10<sup>1</sup>の位、10<sup>2</sup>の位、10<sup>3</sup>の位...となります。<br>
                    </p>
                    <p class="history-indented">
                        同様に、16進数は一番右の桁から<br>
                        1の位、16の位、256の位...となっています。<br>
                        これを「16<sup>n</sup>の位」の形で表すと、<br>
                        16<sup>0</sup>の位、16<sup>1</sup>の位、16<sup>2</sup>の位...となります。
                    </p>
                    <p class="history-indented">
                        この 10<sup>0</sup>、10<sup>1</sup>、10<sup>2</sup>、10<sup>3</sup>...や 16<sup>0</sup>、16<sup>1</sup>、16<sup>2</sup>...という数を、その桁の「重み」と呼びます。<br>
                        16進数を10進数に変換するには、それぞれの桁の数と重みをかけ算し、それを合計します。<br>
                        ですので、%s<sub>(16)</sub>を10進数に変換するには、以下のように計算します。<br>
                        ※ 16進数にA~Fのアルファベットがある場合は、それぞれ10<sub>(10)</sub>~15<sub>(10)</sub>を表しています。<br>
                        %s
                        <br>
                        %s
                    </p>
                </details>"""
                hex formula table
        
        let rec checkAnswer answer (question : string) (last_answers : int list) =
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
                let hex = Dec.toHex inputValueAsInt
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

                    let nextHex = Dec.toHex nextNumber
                    printfn "%s" nextHex
                                    
                    (document.getElementById "questionSpan").innerText <- nextHex
                    
                    let nextAddtionFormula = writeAdditionFormulaHex nextHex
                    let nextHint = hintFormat nextHex nextAddtionFormula (hintTable nextHex)
                    printfn "%s" nextHint
                    
                    (document.getElementById "hintArea").innerHTML <- nextHint
                    numberInput.value <- ""

                    // Updating `lastAnswers`.
                    // These numbers will not be used for the next question.
                    let answersToKeep = Math.Min(10, List.length last_answers + 1)
                    let lastAnswers = (nextNumber :: last_answers).[0..(answersToKeep - 1)]

                    // Setting the next answer to the check button.
                    (document.getElementById "submitButton").onclick <- (fun _ ->
                        checkAnswer nextNumber nextHex lastAnswers
                        false)
                    (document.getElementById "inputArea").onsubmit <- (fun _ ->
                        checkAnswer nextNumber nextHex lastAnswers
                        false)


        let init  () =
            // Initialization.
            let initNumber = getRandomBetween 0 255
            let initHex = Dec.toHex initNumber
            printfn "%A" initNumber
            printfn "%A" initHex

            let addtionFormula = writeAdditionFormulaHex initHex

            let hint = hintFormat initHex addtionFormula (hintTable initHex)

            let sourceRadix = 16
            let destinationRadix = 10

            (document.getElementById "questionSpan").innerText <- initHex
            (document.getElementById "srcRadix").innerText <- sprintf "(%d)" sourceRadix
            (document.getElementById "dstRadix").innerText <- string destinationRadix
            (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
            (document.getElementById "hintArea").innerHTML <- hint
            (document.getElementById "submitButton").onclick <- (fun _ ->
                checkAnswer initNumber initHex [initNumber]
                false)
            (document.getElementById "inputArea").onsubmit <- (fun _ ->
                checkAnswer initNumber initHex [initNumber]
                false)
