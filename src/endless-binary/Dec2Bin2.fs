// taidalab Version 4.2.0
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
open Taidalab.EndlessBinary
open Fermata
open Fermata.RadixConversion

module EndlessBinary =
    module Dec2Bin2 =
        let help = """
            10進数から2進数への変換をエンドレスで練習できます。<br>
            出題範囲は n (0&le;n&le;255) です。<br>
            ヒントはありませんので、慣れてからどうぞ。
            """
        
        let hint number = ""

        let question lastAnswers : int =
            newNumber
                (fun _ -> getRandomBetween 0 255)
                (fun n -> List.contains n lastAnswers = false)
        
        let additional number : unit = ()

        let rec checkAnswer (questionGenerator: 'c list -> 'c) (hintGenerator: 'a -> 'b) (additional: 'c -> unit) (answer: string) (last_answers : int list) =
            // Getting the user input.
            let numberInput = document.getElementById "numberInput" :?> HTMLInputElement
            let input = numberInput.value |> escapeHtml
            let bin: Result<string,Errors.Errors> = input |> Bin.validate
            //printfn "bin: %A" bin
            
            numberInput.focus()
            
            match bin with
            | Error (error: Errors.Errors) ->
                // Making an error message.
                (document.getElementById "errorArea").innerHTML <- newErrorMessageBin answer input error
            | Ok (bin: string) ->
                (document.getElementById "errorArea").innerHTML <- ""

                // Converting the input in order to use in the history message.
                let binaryDigit = 8
                let destinationRadix = 2
                let taggedBin = bin |> padWithZero binaryDigit |> colorLeadingZero
                let dec = Bin.toDec bin
                //printfn "taggedBin: %s" taggedBin
                //printfn "dec: %d" dec
                
                let decimalDigit = 3
                let spacePaddedDec =
                    dec
                    |> string
                    |> Fermata.String.padLeft decimalDigit ' '
                    |> escapeSpace
                
                // Making a new history and updating the history with the new one.
                let sourceRadix = 10
                let outputArea = document.getElementById "outputArea" :?> HTMLParagraphElement
                let historyMessage =
                    newHistory (dec = int answer) taggedBin destinationRadix spacePaddedDec sourceRadix
                    |> (fun x -> concatinateStrings "<br>" [x; outputArea.innerHTML])
                //printfn "historyMessage: %s" historyMessage
                outputArea.innerHTML <- historyMessage
                
                if dec <> int answer then
                    ()
                else
                    // Making the next question.
                    //printfn "last_answers: %A" last_answers

                    let nextNumber = questionGenerator last_answers
                    //printfn "nextNumber: %d" nextNumber

                    //let nextHint = hintGenerator

                    (document.getElementById "questionSpan").innerText <- string nextNumber
                    (document.getElementById "hintArea").innerHTML <- hintGenerator nextNumber
                    additional nextNumber
                    numberInput.value <- ""

                    // Updating `lastAnswers`.
                    // These numbers will not be used for the next question.
                    let answersToKeep = Math.Min(10, List.length last_answers + 1)
                    let lastAnswers = (nextNumber :: last_answers).[0..(answersToKeep - 1)]

                    // Setting the next answer to the check button.
                    (document.getElementById "submitButton").onclick <- (fun _ ->
                        checkAnswer questionGenerator hintGenerator additional (string nextNumber) lastAnswers
                        false)
                    (document.getElementById "inputArea").onsubmit <- (fun _ ->
                        checkAnswer questionGenerator hintGenerator additional (string nextNumber) lastAnswers
                        false)


        let init' (questionGenerator: 'c list -> 'c) (hintGenerator: 'a -> 'b) (additional: 'c -> unit) checker : unit =
            // Initialization.
            let initNumber = questionGenerator []
            let sourceRadix = 10
            let destinationRadix = 2
            
            (document.getElementById "questionSpan").innerText <- string initNumber
            (document.getElementById "srcRadix").innerText <- sprintf "(%d)" sourceRadix
            (document.getElementById "dstRadix").innerText <- string destinationRadix
            (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
            (document.getElementById "hintArea").innerHTML <- hintGenerator initNumber
            (document.getElementById "submitButton").onclick <- (fun _ ->
                checker question hint additional (string initNumber) [initNumber]
                false)
            (document.getElementById "inputArea").onsubmit <- (fun _ ->
                checker question hint additional (string initNumber) [initNumber]
                false)
            additional initNumber
            
            (document.getElementById "helpButton").onclick <- (fun _ ->
                ["helpWindow"; "helpBarrier"]
                |> List.iter (fun x -> (document.getElementById x).classList.toggle "active" |> ignore))
            
            (document.getElementById "helpBarrier").onclick <- (fun _ ->
                ["helpWindow"; "helpBarrier"]
                |> List.iter (fun x -> (document.getElementById x).classList.remove "active" |> ignore))
        
        let init () = init' question hint additional checkAnswer
