﻿// taidalab Version 1.6.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System
open Browser.Dom
open Taidalab.Common

module Dec2Bin2 =

    let rec checkAnswer answer (last_answers : int list) =
        // Getting the user input.
        let numberInput = document.getElementById "numberInput" :?> Browser.Types.HTMLInputElement
        let bin = escapeHtml numberInput.value
        printfn "bin: %s" bin
        
        numberInput.focus()
        
        // Making an error message.
        let errorMessage = newErrorMessageBin (string answer) bin
        (document.getElementById "errorArea").innerHTML <- errorMessage
        
        // Exits when the input was invalid.
        if errorMessage <> "" then
            ()
        else
            
            // Converting the input in order to use in the history message.
            let binaryDigit = 8
            let destinationRadix = 2
            let taggedBin = bin |> padWithZero binaryDigit |> colorLeadingZero
            let dec = toDecimal bin
            printfn "taggedBin: %s" taggedBin
            printfn "dec: %d" dec
            
            let decimalDigit = 3
            let spacePaddedDec = dec |> string |> padStart " " decimalDigit |> escapeSpace
            
            // Making a new history and updating the history with the new one.
            let sourceRadix = 10
            let outputArea = document.getElementById "outputArea"
            let historyMessage =
                newHistory (dec = answer) taggedBin destinationRadix spacePaddedDec sourceRadix
                |> (fun x-> concatinateStrings "<br>" x outputArea.innerHTML)
            // printfn "historyMessage: %s" historyMessage
            outputArea.innerHTML <- historyMessage
            
            if dec = answer then
                // Making the next question.
                let mutable nextNumber = getRandomBetween 0 255

                printfn "last_answers: %A" last_answers
                while List.contains nextNumber last_answers do
                    nextNumber <- getRandomBetween 0 255
                    printfn "nextNumber: %d" nextNumber
                    printfn "List.contains nextNumber last_answers: %b" (List.contains nextNumber last_answers)

                (document.getElementById "questionSpan").innerText <- string nextNumber
                numberInput.value <- ""

                // Updating `lastAnswers`.
                // These numbers will not be used for the next question.
                let answersToKeep = Math.Min(10, List.length last_answers + 1)
                let lastAnswers = (nextNumber :: last_answers).[0..(answersToKeep - 1)]

                // Setting the next answer to the check button.
                (document.getElementById "submitButton").onclick <- (fun _ -> checkAnswer nextNumber lastAnswers)


    let init () =
        // Initialization.
        let initNumber = getRandomBetween 0 255
        let sourceRadix = 10
        let destinationRadix = 2
        
        (document.getElementById "questionSpan").innerHTML <- string initNumber
        (document.getElementById "srcRadix").innerHTML <- sprintf "(%d)" sourceRadix
        (document.getElementById "dstRadix").innerHTML <- string destinationRadix
        (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
        (document.getElementById "submitButton").onclick <- (fun _ -> checkAnswer initNumber [initNumber])