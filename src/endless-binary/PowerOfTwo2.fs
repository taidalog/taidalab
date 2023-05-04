// taidalab Version 4.1.0
// https://github.com/taidalog/taidalab
// Copyright  c 2022-2023 taidalog
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
    module PowerOfTwo2 =
        let help = """
            2<sup>n</sup> - 1 (0&le;n&le;7) の10進数から2進数への変換をエンドレスで練習できます。<br>
            2<sup>n</sup> - 1 の2進数を通して、2進数の繰り上がりや繰り下がりを覚えられます。<br>
            ヒント付きなので、考え方も身に付けられます。
            """

        let rec checkAnswer answer hint_format (last_answers: int list) =
            // Getting the user input.
            let numberInput = document.getElementById "numberInput" :?> Browser.Types.HTMLInputElement
            let input = numberInput.value |> escapeHtml
            let bin: Result<string,Errors.Errors> = input |> Validators.validateBin
            printfn "bin: %A" bin

            numberInput.focus()

            match bin with
            | Error (error: Errors.Errors) ->
                // Making an error message.
                (document.getElementById "errorArea").innerHTML <- newErrorMessageBin answer input error
            | Ok (bin: string) ->
                (document.getElementById "errorArea").innerHTML <- ""
                // Converting the input in order to use in the history message.
                let binaryDigit = 8
                let taggedBin = bin |> padWithZero binaryDigit |> colorLeadingZero
                printfn "taggedBin: %s" taggedBin
                
                let destinationRadix = 2
                let dec = Bin.toDec bin
                printfn "dec: %d" dec
                
                let decimalDigit = 3
                let spacePaddedDec = dec |> string |> Fermata.String.padLeft decimalDigit ' ' |> escapeSpace
                
                // Making a new history and updating the history with the new one.
                let sourceRadix = 10
                let outputArea = document.getElementById "outputArea"
                let historyMessage =
                    newHistory (dec = int answer) taggedBin destinationRadix spacePaddedDec sourceRadix
                    |> (fun x -> concatinateStrings "<br>" [x; outputArea.innerHTML])
                //printfn "historyMessage: %s" historyMessage
                outputArea.innerHTML <- historyMessage
                
                if dec = int answer then
                    // Making the next question.
                    printfn "last_answers: %A" last_answers
                    
                    let nextIndexNumber =
                        newNumber
                            (fun _ -> getRandomBetween 0 8)
                            (fun n -> List.contains n last_answers = false)
                    let nextNumber = nextIndexNumber |> double |> (fun x -> Math.Pow(2.0, x)) |> int |> ((+) -1)
                    printfn "nextAnswer: %d" nextNumber

                    (document.getElementById "questionSpan").innerText <- string nextNumber
                    
                    let nextHint = String.Format(hint_format, nextNumber, (nextNumber + 1), nextIndexNumber)
                    (document.getElementById "hintArea").innerHTML <- nextHint
                    //printfn "nextHint: %s" nextHint

                    numberInput.value <- ""

                    // Updating `lastAnswers`.
                    // These numbers will not be used for the next question.
                    let answersToKeep = Math.Min(4, List.length last_answers + 1)
                    let lastAnswers = (nextIndexNumber :: last_answers).[0..(answersToKeep - 1)]

                    // Setting the next answer to the check button.
                    (document.getElementById "submitButton").onclick <- (fun _ ->
                        checkAnswer (string nextNumber) hint_format lastAnswers
                        false)
                    (document.getElementById "inputArea").onsubmit <- (fun _ ->
                        checkAnswer (string nextNumber) hint_format lastAnswers
                        false)


        let init () =
            // Initialization.
            let initIndexNumber = getRandomBetween 1 8
            let initNumber = (Math.Pow(2.0, (double initIndexNumber)) |> int) - 1
            let hintFormat = """<details><summary>ヒント: </summary><span class="history-indented">{0}<sub>(10)</sub> = {1}<sub>(10)</sub> - 1<sub>(10)</sub> = 2<sup>{2}</sup> - 1<sub>(10)</sub></span></details>"""
            let hint = String.Format(hintFormat, initNumber, (initNumber + 1), initIndexNumber)

            let sourceRadix = 10
            let destinationRadix = 2

            (document.getElementById "questionSpan").innerText <- string initNumber
            (document.getElementById "srcRadix").innerText <- sprintf "(%d)" sourceRadix
            (document.getElementById "dstRadix").innerText <- string destinationRadix
            (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
            (document.getElementById "hintArea").innerHTML <- hint
            (document.getElementById "submitButton").onclick <- (fun _ ->
                checkAnswer (string initNumber) hintFormat [initIndexNumber]
                false)
            (document.getElementById "inputArea").onsubmit <- (fun _ ->
                checkAnswer (string initNumber) hintFormat [initIndexNumber]
                false)
            
            (document.getElementById "helpButton").onclick <- (fun _ ->
                ["helpWindow"; "helpBarrier"]
                |> List.iter (fun x -> (document.getElementById x).classList.toggle "active" |> ignore))
            
            (document.getElementById "helpBarrier").onclick <- (fun _ ->
                ["helpWindow"; "helpBarrier"]
                |> List.iter (fun x -> (document.getElementById x).classList.remove "active" |> ignore))
