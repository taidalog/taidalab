// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2025 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom
open Browser.Types
open Taidalab.Text
open Taidalab.EndlessBinary
open Fermata.RadixConversion

module NotFound =

    let rec checkAnswer (answer: int) =
        // Getting the user input.
        let numberInput = document.getElementById "numberInput" :?> HTMLInputElement
        let input: string = numberInput.value |> escapeHtml
        let input': Result<Bin, exn> = input |> Bin.validate

        numberInput.focus ()

        match input' with
        | Error e ->
            // Making an error message.
            (document.getElementById "errorArea").innerHTML <- newErrorMessageBin (string answer) input e
        | Ok v ->
            (document.getElementById "errorArea").innerHTML <- ""

            let (Dec d) = Bin.toDec v

            // Making a new history and updating the history with the new one.
            let outputArea = document.getElementById "outputArea" :?> HTMLParagraphElement

            let historyMessage =
                let (Bin b) = v
                let taggedBin = b |> Fermata.String.padLeft 9 ' ' |> escapeSpace
                let spacePaddedDec = d |> string |> Fermata.String.padLeft 3 ' ' |> escapeSpace

                newHistory (d = answer) taggedBin 2 spacePaddedDec 10
                |> (fun x -> concatinateStrings "<br>" [ x; outputArea.innerHTML ])

            outputArea.innerHTML <- historyMessage

            if d <> answer then
                ()
            else
                window.history.replaceState (null, "", "http://localhost:8080/taidalab/")
                Home.init ()


    let init () =
        // Initialization.
        document.title <- "404: Page Not Found - taidalab"

        let header = document.querySelector "header"
        header.innerHTML <- Content.Common.headerNoHelp
        header.className <- "not-found"

        (document.getElementById "hamburgerButton").onclick <-
            (fun _ ->
                (document.querySelector "nav").classList.toggle "flagged" |> ignore
                (document.getElementById "barrier").classList.toggle "flagged" |> ignore
                (document.querySelector "main").classList.toggle "flagged" |> ignore)

        (document.getElementById "barrier").onclick <-
            (fun _ ->
                (document.querySelector "nav").classList.remove "flagged" |> ignore
                (document.getElementById "barrier").classList.remove "flagged" |> ignore
                (document.querySelector "main").classList.remove "flagged" |> ignore)

        (document.querySelector "#headerTitle").innerHTML <-
            """<span>404: Page Not Found - </span><span translate="no">taidalab</span>"""

        (document.querySelector "main").innerHTML <- EndlessBinary.Course.main404
        (document.querySelector "#submitButton").className <- "not-found"
        (document.querySelector "#questionArea").innerHTML <- Content.Common.question

        let initNumber = 404
        let sourceRadix = 10
        let destinationRadix = 2

        (document.getElementById "questionSpan").innerText <- string initNumber
        (document.getElementById "srcRadix").innerText <- sprintf "(%d)" sourceRadix
        (document.getElementById "dstRadix").innerText <- string destinationRadix
        (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix

        (document.getElementById "submitButton").onclick <-
            (fun e ->
                e.preventDefault ()
                checkAnswer initNumber)

        (document.getElementById "inputArea").onsubmit <-
            (fun e ->
                e.preventDefault ()
                checkAnswer initNumber)
