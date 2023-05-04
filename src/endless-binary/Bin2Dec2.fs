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
    module Bin2Dec2 =
        let help = """
            2進数から10進数への変換をエンドレスで練習できます。<br>
            出題範囲は n (0&le;n&le;255) です。<br>
            ヒントはありませんので、慣れてからどうぞ。
            """

        let rec checkAnswer answer (question : string) last_answers =
            // Getting the user input.
            let numberInput = document.getElementById "numberInput" :?> Browser.Types.HTMLInputElement
            let input = numberInput.value |> escapeHtml
            let dec: Result<int,Errors.Errors> = input |> Validators.validateDec
            printfn "input: %s" input
            
            numberInput.focus()

            match dec with
            | Error (error: Errors.Errors) ->
                // Making an error message.
                //let questionWithoutSpace = question.Replace(" ", "")
                (document.getElementById "errorArea").innerHTML <- newErrorMessageDec question input error
            | Ok (dec: int) ->                
                (document.getElementById "errorArea").innerHTML <- ""
                //let inputValueAsInt = int inputValue
                //printfn "inputValueAsInt: %d" inputValueAsInt

                // Converting the input in order to use in the history message.
                let digit = 3
                let spacePaddedInputValue = dec |> string |> Fermata.String.padLeft digit ' ' |> escapeSpace
                printfn "spacePaddedInputValue: %s" spacePaddedInputValue

                let sourceRadix = 2
                let bin = Dec.toBin dec
                let binaryDigit = 8
                let taggedBin = bin |> padWithZero binaryDigit |> colorLeadingZero
                printfn "inputValue -> binary: %s" bin

                // Making a new history and updating the history with the new one.
                let destinationRadix = 10
                let outputArea = document.getElementById("outputArea")
                let historyMessage =
                    newHistory (dec = answer) spacePaddedInputValue destinationRadix taggedBin sourceRadix
                    |> (fun x -> concatinateStrings "<br>" [x; outputArea.innerHTML])
                //printfn "historyMessage: %s" historyMessage
                outputArea.innerHTML <- historyMessage
                
                if dec = answer then
                    // Making the next question.
                    printfn "last_answers: %A" last_answers
                    
                    let nextNumber =
                        newNumber
                            (fun _ -> getRandomBetween 0 255)
                            (fun n -> List.contains n last_answers = false)
                    printfn "nextNumber: %d" nextNumber

                    let nextBin = Dec.toBin nextNumber
                    let splitBin = splitBinaryStringBy 4 nextBin
                    printfn "nextBin: %s" nextBin
                    printfn "splitBin: %s" splitBin
                    
                    (document.getElementById "questionSpan").innerText <- splitBin

                    numberInput.value <- ""

                    // Updating `lastAnswers`.
                    // These numbers will not be used for the next question.
                    let answersToKeep = Math.Min(10, List.length last_answers + 1)
                    let lastAnswers = (nextNumber :: last_answers).[0..(answersToKeep - 1)]

                    // Setting the next answer to the check button.
                    (document.getElementById "submitButton").onclick <- (fun _ ->
                        checkAnswer nextNumber splitBin lastAnswers
                        false)
                    (document.getElementById "inputArea").onsubmit <- (fun _ ->
                        checkAnswer nextNumber splitBin lastAnswers
                        false)


        let init () =
            // Initialization.
            let initNumber = getRandomBetween 0 255
            let initBin = Dec.toBin initNumber
            let splitBin = splitBinaryStringBy 4 initBin
            printfn "initNumber %d" initNumber
            printfn "initBin %s" initBin
            printfn "splitBin %s" splitBin
            
            let sourceRadix = 2
            let destinationRadix = 10
            
            (document.getElementById "questionSpan").innerText <- splitBin
            (document.getElementById "srcRadix").innerText <- sprintf "(%d)" sourceRadix
            (document.getElementById "dstRadix").innerText <- string destinationRadix
            (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
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
