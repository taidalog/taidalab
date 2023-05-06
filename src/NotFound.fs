// taidalab Version 4.2.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom
open Browser.Types
open Taidalab.Text
open Taidalab.EndlessBinary
open Fermata
open Fermata.RadixConversion

module NotFound =

    let rec checkAnswer answer =
        // Getting the user input.
        let numberInput = document.getElementById "numberInput" :?> HTMLInputElement
        let input = numberInput.value |> escapeHtml
        let bin: Result<string,Errors.Errors> = input |> Bin.validate
        //printfn "%A" bin
        
        numberInput.focus()

        match bin with
        | Error (error: Errors.Errors) ->
            // Making an error message.
            (document.getElementById "errorArea").innerHTML <- newErrorMessageBin answer input error
        | Ok (bin: string) ->
            (document.getElementById "errorArea").innerHTML <- ""
            // Converting the input in order to use in the history message.
            let binaryDigit = 9
            let destinationRadix = 2
            let taggedBin = padWithZero binaryDigit bin |> colorLeadingZero
            let dec = Bin.toDec bin
            //printfn "%s" taggedBin
            //printfn "%d" dec
            
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
            //printfn "%s" historyMessage
            outputArea.innerHTML <- historyMessage
            
            if dec <> int answer then
                ()
            else
                // Redirecting to the home.
                ("/", Taidalab.Home.main, (fun _ -> ())) |||> InitObject.create |> Page.replace


    let init ()  =
        // Initialization.
        //printfn "Initialization starts."

        let initNumber = 404
        let sourceRadix = 10
        let destinationRadix = 2

        (document.getElementById "questionSpan").innerText <- string initNumber
        (document.getElementById "srcRadix").innerText <- sprintf "(%d)" sourceRadix
        (document.getElementById "dstRadix").innerText <- string destinationRadix
        (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
        (document.getElementById "submitButton").onclick <- (fun _ ->
            checkAnswer (string initNumber)
            false)
        (document.getElementById "inputArea").onsubmit <- (fun _ ->
            checkAnswer (string initNumber)
            false)
        
        //printfn "Initialization ends."
