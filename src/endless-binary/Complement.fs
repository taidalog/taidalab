// taidalab Version 4.1.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System
open Browser.Dom
open Taidalab.Number
open Taidalab.Text
open Taidalab.EndlessBinary
open Fermata
open Fermata.RadixConversion

module EndlessBinary =
    module Complement =
        let help = """
            2進数の補数（2の補数）を求める練習ができます。<br>
            出題範囲は n (1 &le; n &le; 15) です。<br>
            ヒント付きなので、考え方も身に付けられます。
            """

        let question = """4ビットの2進数 <span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> の補数は？"""
        
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
                else if Bin.isValid inputValue = false then
                    sprintf """<span class="warning">'%s' は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>""" inputValue
                else
                    ""

            (document.getElementById "errorArea").innerHTML <- errorMessage
            
            // Exits when the input was invalid.
            if errorMessage <> "" then
                ()
            else

                let inputValueAsInt = Bin.toDec inputValue
                
                let historyClassName =
                    if inputValueAsInt = answer then
                        "history-correct"
                    else
                        "history-wrong"
                
                // Converting the input in order to use in the history message.
                let digit = 4
                let taggedInputValue = inputValue |> padWithZero digit |> colorLeadingZero
                let sourceRadix = 2
                let bin = Dec.toBin inputValueAsInt
                
                // Making a new history and updating the history with the new one.
                let destinationRadix = 10
                let outputArea = document.getElementById "outputArea"
                let historyMessage =
                    sprintf """<span class ="%s">%s<sub>(%d)</sub></span>""" historyClassName taggedInputValue sourceRadix
                    |> (fun x -> concatinateStrings "<br>" [x; outputArea.innerHTML])
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
                    let nextBin = nextNumber |> Dec.toBin |> Fermata.String.padLeft 4 '0'
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
            let initBin = initNumber |> Dec.toBin |> Fermata.String.padLeft 4 '0'
            printfn "initNumber: %A" initNumber
            printfn "initAnswer: %A" initAnswer
            printfn "initBin: %A" initBin

            let reversedBin = initBin |> String.collect (fun c -> if c = '1' then "0" else "1")
            printfn "reversedBin: %A" reversedBin

            let hintFormat = """
                <details><summary>ヒント:</summary>
                    <p class="history-indented">
                        ある2進数に足すと桁が1つ上がる、最も小さい数のことを、<br>
                        元の2進数に対する<span style="background-color: #95c9fe;">「2の補数」</span>と呼びます。
                    </p>
                    <p class="history-indented">
                        たとえば、4ビットの2進数 1010<sub>(2)</sub> に 0110<sub>(2)</sub></span> を足すと<br>
                        1桁上がって5ビットの2進数 10000<sub>(2)</sub> になります。<br>
                        この 0110<sub>(2)</sub> を、元の 1010<sub>(2)</sub> に対する2の補数と呼びます。<br>
                    </p>
                    <p class="history-indented">
                        2の補数は、<span style="background-color: #95c9fe;">2進数の負の数を表すのに使われます。</sub></span><br>
                        1010<sub>(2)</sub> (=10<sub>(10)</sub>) の2の補数 0110<sub>(2)</sub> は-10<sub>(10)</sub> を表します。
                    </p>
                    <p class="history-indented">
                        2の補数を求めるには、元の2進数の各ビットの<br>
                        <span style="background-color: #95c9fe;">0 と 1 を反転させた数に 1 を足します。</span><br>
                        今回の問題で説明すると、<br>
                        {0}<sub>(2)</sub> の 0 と 1 を反転させると<br>
                        {1}<sub>(2)</sub> になります。これに 1 を足したものが<br>
                        {0}<sub>(2)</sub> の2の補数です。
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
            
            (document.getElementById "helpButton").onclick <- (fun _ ->
                ["helpWindow"; "helpBarrier"]
                |> List.iter (fun x -> (document.getElementById x).classList.toggle "active" |> ignore))
            
            (document.getElementById "helpBarrier").onclick <- (fun _ ->
                ["helpWindow"; "helpBarrier"]
                |> List.iter (fun x -> (document.getElementById x).classList.remove "active" |> ignore))
