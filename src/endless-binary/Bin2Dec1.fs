﻿// taidalab Version 4.1.0
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
open Taidalab.Tuple
open Taidalab.EndlessBinary
open Fermata
open Fermata.RadixConversion

module EndlessBinary =
    module Bin2Dec1 =
        let help = """
            2<sup>n</sup> (0&le;n&le;7) の2進数から10進数への変換をエンドレスで練習できます。<br>
            ヒント付きなので、考え方も身に付けられます。
            """

        let writeAdditionFormula binaryString =
            binaryString
            |> Seq.toList
            |> List.mapi (fun i c -> sprintf """(%c * 2<sup>%d</sup>)""" c (String.length binaryString - i - 1))
            |> String.concat " + "
        
        let tableComponents binaryString =
            binaryString
            |> Seq.toList
            |> List.mapi (fun i c -> (c, i, (String.length binaryString) - i))
            |> List.map (fun (c, i, r) -> 
                sprintf """<span class="hint-table-digit">%d</span>""" r,
                sprintf """<span class="hint-table-digit green large">%c</span>""" c,
                sprintf """<span class="hint-table-digit palegreen">%d<sup>%d</sup></span>""" 2 (r - 1))

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
                a b c

        let hintTable binaryString =
            binaryString
            |> tableComponents
            |> List.fold (fun x y -> applyToTuples3 (fun a1 a2 -> sprintf"%s%s" a1 a2) x y) ("", "", "")
            |> newHintTable
        
        let hint binaryString =
            let formula = writeAdditionFormula binaryString
            let table = hintTable binaryString
            $"""
            <details><summary>ヒント:</summary>
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
                <p class="history-indented hint-bgcolor-gray">
                    &nbsp;&nbsp;%s{formula}<br>
                    = %d{Bin.toDec binaryString}<sub>(10)</sub>
                </p>
            </details>
            """
        
        let rec checkAnswer answer (question : string) (last_answers : int list) =
            // Getting the user input.
            let numberInput = document.getElementById "numberInput" :?> HTMLInputElement
            let input = numberInput.value |> escapeHtml
            let dec: Result<int,Errors.Errors> = input |> Dec.validate
            //printfn "input: %s" input

            numberInput.focus()
            
            match dec with
            | Error (error: Errors.Errors) ->
                // Making an error message.
                //let questionWithoutSpace = question.Replace(" ", "")
                (document.getElementById "errorArea").innerHTML <- newErrorMessageDec question input error
            | Ok (dec: int) ->
                (document.getElementById "errorArea").innerHTML <- ""
                //let inputValueAsInt = int input
                
                // Converting the input in order to use in the history message.
                let digit = 3
                let spacePaddedInputValue = // input |> Fermata.String.padLeft digit ' ' |> escapeSpace
                    dec
                    |> string
                    |> Fermata.String.padLeft digit ' '
                    |> escapeSpace
                
                let sourceRadix = 2
                let bin = Dec.toBin dec //inputValueAsInt
                let binaryDigit = 8
                let taggedBin = bin |> padWithZero binaryDigit |> colorLeadingZero

                // Making a new history and updating the history with the new one.
                let destinationRadix = 10
                let outputArea = document.getElementById "outputArea"
                let historyMessage =
                    newHistory (dec = answer) spacePaddedInputValue destinationRadix taggedBin sourceRadix
                    |> (fun x -> concatinateStrings "<br>" [x; outputArea.innerHTML])
                //printfn "%A" historyMessage
                outputArea.innerHTML <- historyMessage
                
                if dec = answer then
                    // Making the next question.
                    //printfn "%A" last_answers

                    let nextNumber =
                        newNumber
                            (fun _ -> getRandomBetween 0 7 |> double |> (fun x -> Math.Pow(2.0, x)) |> int)
                            (fun n -> List.contains n last_answers = false)
                    //printfn "%d" nextNumber

                    let nextBin = Dec.toBin nextNumber
                    let splitBin = splitBinaryStringBy 4 nextBin
                    //printfn "%s" nextBin
                    //printfn "%s" splitBin
                    
                    (document.getElementById "questionSpan").innerText <- splitBin
                    (document.getElementById "hintArea").innerHTML <- hint nextBin
                    numberInput.value <- ""

                    // Updating `lastAnswers`.
                    // These numbers will not be used for the next question.
                    let answersToKeep = Math.Min(4, List.length last_answers + 1)
                    let lastAnswers = (nextNumber :: last_answers).[0..(answersToKeep - 1)]

                    // Setting the next answer to the check button.
                    (document.getElementById "submitButton").onclick <- (fun _ ->
                        checkAnswer nextNumber splitBin lastAnswers
                        false)
                    (document.getElementById "inputArea").onsubmit <- (fun _ ->
                        checkAnswer nextNumber splitBin lastAnswers
                        false)


        let init  () =
            // Initialization.
            let initIndexNumber = getRandomBetween 0 7
            let initNumber = Math.Pow(2.0, double initIndexNumber) |> int
            let initBin = Dec.toBin initNumber
            let splitBin = splitBinaryStringBy 4 initBin
            //printfn "%A" initIndexNumber
            //printfn "%A" initNumber
            //printfn "%A" initBin
            //printfn "%A" splitBin

            let sourceRadix = 2
            let destinationRadix = 10

            (document.getElementById "questionSpan").innerText <- splitBin
            (document.getElementById "srcRadix").innerText <- sprintf "(%d)" sourceRadix
            (document.getElementById "dstRadix").innerText <- string destinationRadix
            (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
            (document.getElementById "hintArea").innerHTML <- hint initBin
            (document.getElementById "submitButton").onclick <- (fun _ ->
                checkAnswer initNumber splitBin [initNumber]
                false)
            (document.getElementById "inputArea").onsubmit <- (fun _ ->
                checkAnswer initNumber splitBin [initNumber]
                false)
            
            (document.getElementById "helpButton").onclick <- (fun _ ->
                ["helpWindow"; "helpBarrier"]
                |> List.iter (fun x -> (document.getElementById x).classList.toggle "active" |> ignore))
            
            (document.getElementById "helpBarrier").onclick <- (fun _ ->
                ["helpWindow"; "helpBarrier"]
                |> List.iter (fun x -> (document.getElementById x).classList.remove "active" |> ignore))
