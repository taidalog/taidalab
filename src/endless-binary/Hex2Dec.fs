// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2025 taidalog
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
            |> Seq.rev
            |> Seq.map string
            |> Seq.mapi (fun i c ->
                $"""(%d{c
                        |> Hex.validate
                        |> Hex.toDec
                        |> function
                            | Dec.Valid v -> v
                            | Dec.Invalid _ -> -1} * 16<sup>%d{i}</sup>)""")
            |> Seq.rev
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
            let hex' =
                hex
                |> function
                    | Hex.Valid v -> v
                    | Hex.Invalid _ -> "-1"

            let dec =
                hex
                |> Hex.toDec
                |> function
                    | Dec.Valid v -> v
                    | Dec.Invalid _ -> -1

            $"""<details>
                <summary><h2>ヒント:</h2></summary>
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
                    %s{hex'}<sub>(16)</sub>の場合、以下のように計算します。<br>
                    ※ 16進数にA~Fのアルファベットがある場合は、それぞれ10<sub>(10)</sub>~15<sub>(10)</sub>を表しています。
                </p>
                <p class="history-indented hint-bgcolor-gray mono">
                    &nbsp;&nbsp;%s{formula}<br>
                    = %d{dec}
                </p>
            </details>"""

        let question (digit: int) (lastAnswers: int list) : int =
            newNumber (fun _ -> getRandomBetween 0 (pown 2 digit - 1)) (fun n -> List.contains n lastAnswers = false)

        let history (correct: bool) (input: int) : string =
            match input |> Dec.Valid |> Dec.toHex with
            | Hex.Invalid _ -> ""
            | Hex.Valid v ->
                let leftSide = input |> string |> Fermata.String.padLeft 3 ' ' |> escapeSpace
                let rightSide = v |> string |> Fermata.String.padLeft 2 ' ' |> escapeSpace
                newHistory correct leftSide 10 rightSide 16

        let rec checkAnswer
            (questionGenerator: int list -> int)
            (errorGenerator: string -> string -> exn -> string)
            (numbersToKeep: int)
            (lastAnswers: int list)
            (answer: int)
            : unit =
            // Getting the user input.
            let numberInput = document.getElementById "numberInput" :?> HTMLInputElement
            let input: string = numberInput.value |> escapeHtml
            let dec: Dec = input |> Dec.validate

            numberInput.focus ()

            match dec with
            | Dec.Invalid e ->
                // Making an error message.
                let q =
                    match Dec.Valid answer |> Dec.toHex with
                    | Hex.Invalid _ -> ""
                    | Hex.Valid v -> v

                (document.getElementById "errorArea").innerHTML <- errorGenerator q input e
            | Dec.Valid v ->
                (document.getElementById "errorArea").innerHTML <- ""

                // Making a new history and updating the history with the new one.
                let outputArea = document.getElementById "outputArea"

                let historyMessage =
                    history (v = answer) v
                    |> (fun x -> concatinateStrings "<br>" [ x; outputArea.innerHTML ])

                outputArea.innerHTML <- historyMessage

                if v = answer then
                    // Making the next question.
                    let nextNumber: int =
                        newNumber (fun _ -> getRandomBetween 0 255) (fun n -> List.contains n lastAnswers = false)

                    let nextHex = nextNumber |> Dec.Valid |> Dec.toHex

                    match nextHex with
                    | Hex.Invalid _ -> ()
                    | Hex.Valid v ->
                        (document.getElementById "questionSpan").innerText <- v

                        let nextAddtionFormula = writeAdditionFormulaHex v
                        let nextHint = hintFormat nextHex nextAddtionFormula (hintTable v)
                        (document.getElementById "hintArea").innerHTML <- nextHint
                        numberInput.value <- ""

                        // Updating `lastAnswers`.
                        // These numbers will not be used for the next question.
                        let lastNumbers = (nextNumber :: lastAnswers) |> List.truncate numbersToKeep

                        // Setting the next answer to the check button.
                        let f =
                            fun (e: Event) ->
                                e.preventDefault ()
                                checkAnswer questionGenerator errorGenerator numbersToKeep lastAnswers nextNumber

                        (document.getElementById "submitButton").onclick <- f
                        (document.getElementById "inputArea").onsubmit <- f

        let init () =
            // Initialization.
            document.title <- "16進数→10進数 - taidalab"

            let header = document.querySelector "header"
            header.innerHTML <- Content.Common.header
            header.className <- "hex2dec"

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
                """<span>16進数→10進数 - </span><span translate="no">taidalab</span>"""

            (document.querySelector "main").innerHTML <- EndlessBinary.Course.main help "help-color hex2dec"
            (document.querySelector "#submitButton").className <- "hex2dec"
            (document.querySelector "#questionArea").innerHTML <- Content.Common.question

            let initNumber = getRandomBetween 0 255
            let initHex = initNumber |> Dec.Valid |> Dec.toHex

            match initHex with
            | Hex.Invalid _ -> ()
            | Hex.Valid v ->
                let addtionFormula = writeAdditionFormulaHex v
                let hint = hintFormat initHex addtionFormula (hintTable v)

                let sourceRadix = 16
                let destinationRadix = 10

                (document.getElementById "questionSpan").innerText <- v
                (document.getElementById "srcRadix").innerText <- sprintf "(%d)" sourceRadix
                (document.getElementById "dstRadix").innerText <- string destinationRadix
                (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
                (document.getElementById "hintArea").innerHTML <- hint

                let f =
                    fun (e: Event) ->
                        e.preventDefault ()
                        checkAnswer (question 8) newErrorMessageDec 10 [ initNumber ] initNumber

                (document.getElementById "submitButton").onclick <- f
                (document.getElementById "inputArea").onsubmit <- f

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
