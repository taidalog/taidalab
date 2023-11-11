// taidalab Version 4.4.4
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
    module Hex2Dec =
        let help =
            """
            16進数から10進数への変換をエンドレスで練習できます。<br>
            出題範囲は n (0&le;n&le;255) です。<br>
            ヒント付きなので、考え方も身に付けられます。
            """

        let writeAdditionFormulaHex (hex: seq<char>) =
            hex
            |> Seq.toList
            |> List.rev
            |> List.mapi (fun i c -> sprintf """(%d * 16<sup>%d</sup>)""" (c |> string |> Hex.toDec) i)
            |> List.rev
            |> String.concat " + "

        let tableComponentsHex hex =
            hex
            |> Seq.toList
            |> List.mapi (fun i c ->
                $"""<span class="hex2dec hint-table-digit">%d{(hex |> String.length) - i}</span>""",
                $"""<span class="hex2dec hint-table-digit green large">%c{c}</span>""",
                $"""<span class="hex2dec hint-table-digit gray">%d{16}<sup>%d{(hex |> String.length) - i - 1}</sup></span>""")

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
                            <span class="middle">数</span>
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
                a
                b
                c

        let hintTable hex =
            hex
            |> tableComponentsHex
            |> List.fold (fun x y -> applyToTuples3 (fun a1 a2 -> sprintf "%s%s" a1 a2) x y) ("", "", "")
            |> newHintTable

        let hintFormat hex formula table =
            $"""<details>
                <summary>ヒント:</summary>
                <p class="history-indented">
                    10進法で表現した数は、一番右の桁から<br>
                    1の位、10の位、100の位、1000の位...となっています。<br>
                    これを「10<sup>n</sup>の位」の形で表すと、<br>
                    10<sup>0</sup>の位、10<sup>1</sup>の位、10<sup>2</sup>の位、10<sup>3</sup>の位...となります。
                </p>
                <p class="history-indented">
                    同様に、16進法で表現した数は、一番右の桁から<br>
                    1の位、16の位、256の位...となっています。<br>
                    これを「16<sup>n</sup>の位」の形で表すと、<br>
                    16<sup>0</sup>の位、16<sup>1</sup>の位、16<sup>2</sup>の位...となります。
                </p>
                <p class="history-indented">
                    この 10<sup>0</sup>、10<sup>1</sup>、10<sup>2</sup>、10<sup>3</sup>...や 16<sup>0</sup>、16<sup>1</sup>、16<sup>2</sup>...という数を、その桁の「重み」と呼びます。
                </p>
                <p class="history-indented">
                    %s{table}
                </p>
                <p class="history-indented">
                    16進法で表現した数を10進法で表現しなおすには、それぞれの桁の数と重みをかけ算し、それを合計します。<br>
                    %s{hex}<sub>(16)</sub>の場合、以下のように計算します。<br>
                    ※ 16進数にA~Fのアルファベットがある場合は、それぞれ10<sub>(10)</sub>~15<sub>(10)</sub>を表しています。
                </p>
                <p class="history-indented hint-bgcolor-gray mono regular">
                    &nbsp;&nbsp;%s{formula}<br>
                    = %d{hex |> Hex.toDec}
                </p>
            </details>"""

        let rec checkAnswer answer (question: string) (last_answers: int list) =
            // Getting the user input.
            let numberInput = document.getElementById "numberInput" :?> HTMLInputElement
            let input = numberInput.value |> escapeHtml
            let dec: Result<int, Errors.Errors> = input |> Dec.validate

            numberInput.focus ()

            match dec with
            | Error(error: Errors.Errors) ->
                // Making an error message.
                (document.getElementById "errorArea").innerHTML <- newErrorMessageDec question input error
            | Ok(dec: int) ->
                (document.getElementById "errorArea").innerHTML <- ""

                // Converting the input in order to use in the history message.
                let digit = 3

                let spacePaddedInputValue =
                    dec |> string |> Fermata.String.padLeft digit ' ' |> escapeSpace

                let sourceRadix = 16
                let hex = Dec.toHex dec
                let hexDigit = 2
                let taggedHex = padWithZero hexDigit hex |> colorLeadingZero

                // Making a new history and updating the history with the new one.
                let destinationRadix = 10
                let outputArea = document.getElementById "outputArea"

                let historyMessage =
                    newHistory (dec = answer) spacePaddedInputValue destinationRadix taggedHex sourceRadix
                    |> (fun x -> concatinateStrings "<br>" [ x; outputArea.innerHTML ])

                outputArea.innerHTML <- historyMessage

                if dec = answer then
                    // Making the next question.
                    let nextNumber =
                        newNumber (fun _ -> getRandomBetween 0 255) (fun n -> List.contains n last_answers = false)

                    let nextHex = Dec.toHex nextNumber
                    (document.getElementById "questionSpan").innerText <- nextHex

                    let nextAddtionFormula = writeAdditionFormulaHex nextHex
                    let nextHint = hintFormat nextHex nextAddtionFormula (hintTable nextHex)
                    (document.getElementById "hintArea").innerHTML <- nextHint
                    numberInput.value <- ""

                    // Updating `lastAnswers`.
                    // These numbers will not be used for the next question.
                    let answersToKeep = Math.Min(10, List.length last_answers + 1)
                    let lastAnswers = (nextNumber :: last_answers).[0 .. (answersToKeep - 1)]

                    // Setting the next answer to the check button.
                    (document.getElementById "submitButton").onclick <-
                        (fun _ ->
                            checkAnswer nextNumber nextHex lastAnswers
                            false)

                    (document.getElementById "inputArea").onsubmit <-
                        (fun _ ->
                            checkAnswer nextNumber nextHex lastAnswers
                            false)


        let init () =
            // Initialization.
            let initNumber = getRandomBetween 0 255
            let initHex = Dec.toHex initNumber

            let addtionFormula = writeAdditionFormulaHex initHex
            let hint = hintFormat initHex addtionFormula (hintTable initHex)

            let sourceRadix = 16
            let destinationRadix = 10

            (document.getElementById "questionSpan").innerText <- initHex
            (document.getElementById "srcRadix").innerText <- sprintf "(%d)" sourceRadix
            (document.getElementById "dstRadix").innerText <- string destinationRadix
            (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
            (document.getElementById "hintArea").innerHTML <- hint

            (document.getElementById "submitButton").onclick <-
                (fun _ ->
                    checkAnswer initNumber initHex [ initNumber ]
                    false)

            (document.getElementById "inputArea").onsubmit <-
                (fun _ ->
                    checkAnswer initNumber initHex [ initNumber ]
                    false)

            (document.getElementById "helpButton").onclick <-
                (fun _ ->
                    [ "helpWindow"; "helpBarrier" ]
                    |> List.iter (fun x -> (document.getElementById x).classList.toggle "active" |> ignore))

            (document.getElementById "helpBarrier").onclick <-
                (fun _ ->
                    [ "helpWindow"; "helpBarrier" ]
                    |> List.iter (fun x -> (document.getElementById x).classList.remove "active" |> ignore))

            (document.getElementById "helpClose").onclick <-
                (fun _ ->
                    [ "helpWindow"; "helpBarrier" ]
                    |> List.iter (fun x -> (document.getElementById x).classList.remove "active" |> ignore))

            document.onkeydown <- (fun (e: KeyboardEvent) -> EndlessBinary.keyboardshortcut e)
