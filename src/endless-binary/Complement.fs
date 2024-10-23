// taidalab Version 4.6.3
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2024 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System
open Browser.Dom
open Browser.Types
open Taidalab.Number
open Taidalab.Text
open Fermata
open Fermata.RadixConversion

module EndlessBinary =
    module Complement =
        let help =
            """
            2進数の補数（2の補数）を求める練習ができます。<br>
            出題範囲は n (1 &le; n &le; 15) です。<br>
            ヒント付きなので、考え方も身に付けられます。
            """

        let question =
            """4ビットの2進数 <span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> の補数は？"""

        let hint bin reversedBin =
            $"""
            <details><summary><h2>ヒント:</h2></summary>
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
                    %s{bin}<sub>(2)</sub> の 0 と 1 を反転させると<br>
                    %s{reversedBin}<sub>(2)</sub> になります。これに 1 を足したものが<br>
                    %s{bin}<sub>(2)</sub> の2の補数です。
                </p>
            </details>"""

        let rec checkAnswer (question: string) (answer: int) (last_answers: int list) =
            // Getting the user input.
            let numberInput = document.getElementById "numberInput" :?> HTMLInputElement
            let input = numberInput.value |> escapeHtml
            numberInput.focus ()

            match Bin.validate input with
            | Bin.Invalid e ->
                // Making an error message.
                match e.GetType().ToString() with
                | "System.ArgumentException" ->
                    sprintf """<span class="warning">%s の補数を、2進法表記を入力してください。</span>""" question
                | "System.FormatException" ->
                    sprintf """<span class="warning">'%s' は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>""" input
                | _ -> "不明なエラーです。"
                |> fun x -> (document.getElementById "errorArea").innerHTML <- x
            | Bin.Valid v ->
                (document.getElementById "errorArea").innerHTML <- ""
                let dec: Dec = Bin.Valid v |> Bin.toDec

                let historyClassName =
                    if dec = Dec.Valid answer then
                        "history history-correct"
                    else
                        "history history-wrong"

                // Converting the input in order to use in the history message.
                let digit = 4
                let taggedInputValue = v |> padWithZero digit
                let sourceRadix = 2

                // Making a new history and updating the history with the new one.
                let outputArea = document.getElementById "outputArea"

                let historyMessage =
                    sprintf
                        """<span class ="%s">%s<sub>(%d)</sub></span>"""
                        historyClassName
                        taggedInputValue
                        sourceRadix
                    |> (fun x -> concatinateStrings "<br>" [ x; outputArea.innerHTML ])

                outputArea.innerHTML <- historyMessage

                if dec = Dec.Valid answer then
                    // Making the next question.
                    let nextNumber =
                        newNumber (fun _ -> getRandomBetween 1 15) (fun n -> List.contains n last_answers = false)

                    let nextAnswer = 16 - nextNumber

                    let nextBin =
                        nextNumber
                        |> Dec.Valid
                        |> Dec.toBin
                        |> function
                            | Bin.Valid v -> v
                            | Bin.Invalid _ -> ""
                        |> Fermata.String.padLeft 4 '0'

                    (document.getElementById "questionSpan").innerText <- nextBin

                    let reversedBin = nextBin |> String.collect (fun c -> if c = '1' then "0" else "1")
                    (document.getElementById "hintArea").innerHTML <- hint nextBin reversedBin

                    numberInput.value <- ""

                    // Updating `lastAnswers`.
                    // These numbers will not be used for the next question.
                    let answersToKeep = Math.Min(8, List.length last_answers + 1)
                    let lastAnswers = (nextNumber :: last_answers).[0 .. (answersToKeep - 1)]

                    // Setting the next answer to the check button.
                    (document.getElementById "submitButton").onclick <-
                        (fun e ->
                            e.preventDefault ()
                            checkAnswer nextBin nextAnswer lastAnswers)

                    (document.getElementById "inputArea").onsubmit <-
                        (fun e ->
                            e.preventDefault ()
                            checkAnswer nextBin nextAnswer lastAnswers)


        // let init () =
        //     // Initialization.
        //     let sourceRadix = 2
        //     let destinationRadix = 2

        //     let initNumber = getRandomBetween 1 15
        //     let initAnswer = 16 - initNumber
        //     let initBin = initNumber |> Dec.toBin |> Fermata.String.padLeft 4 '0'
        //     let reversedBin = initBin |> String.collect (fun c -> if c = '1' then "0" else "1")
        //     (document.getElementById "questionSpan").innerText <- initBin
        //     (document.getElementById "srcRadix").innerText <- sprintf "(%d)" sourceRadix
        //     (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
        //     (document.getElementById "hintArea").innerHTML <- hint initBin reversedBin

        //     (document.getElementById "submitButton").onclick <-
        //         (fun e ->
        //             e.preventDefault ()
        //             checkAnswer initBin initAnswer [ initNumber ])

        //     (document.getElementById "inputArea").onsubmit <-
        //         (fun e ->
        //             e.preventDefault ()
        //             checkAnswer initBin initAnswer [ initNumber ])

        //     (document.getElementById "helpButton").onclick <-
        //         (fun _ ->
        //             [ "helpWindow"; "helpBarrier" ]
        //             |> List.iter (fun x -> (document.getElementById x).classList.toggle "active" |> ignore))

        //     (document.getElementById "helpBarrier").onclick <-
        //         (fun _ ->
        //             [ "helpWindow"; "helpBarrier" ]
        //             |> List.iter (fun x -> (document.getElementById x).classList.remove "active" |> ignore))

        //     (document.getElementById "helpClose").onclick <-
        //         (fun _ ->
        //             [ "helpWindow"; "helpBarrier" ]
        //             |> List.iter (fun x -> (document.getElementById x).classList.remove "active" |> ignore))

        //     document.onkeydown <- (fun (e: KeyboardEvent) -> EndlessBinary.keyboardshortcut e)

        let init'' () =
            // Initialization.
            document.title <- "補数 - taidalab"

            let header = document.querySelector "header"
            header.innerHTML <- Content.Common.header
            header.className <- "complement"

            (document.getElementById "hamburgerButton").onclick <-
                (fun _ ->
                    (document.querySelector "aside").classList.toggle "flagged" |> ignore
                    (document.getElementById "barrier").classList.toggle "flagged" |> ignore
                    (document.querySelector "main").classList.toggle "flagged" |> ignore)

            (document.getElementById "barrier").onclick <-
                (fun _ ->
                    (document.querySelector "aside").classList.remove "flagged" |> ignore
                    (document.getElementById "barrier").classList.remove "flagged" |> ignore
                    (document.querySelector "main").classList.remove "flagged" |> ignore)

            (document.querySelector "#headerTitle").innerHTML <-
                """<h1>補数 - <span translate="no">taidalab</span></h1>"""

            (document.querySelector "main").innerHTML <- EndlessBinary.Course.main help "help-color complement"
            (document.querySelector "#submitButton").className <- "submit-button display-order-3 complement"
            (document.querySelector "#questionArea").innerHTML <- Content.Common.question

            let sourceRadix = 2
            let destinationRadix = 2

            let initNumber = getRandomBetween 1 15
            let initAnswer = 16 - initNumber

            let initBin =
                initNumber
                |> Dec.Valid
                |> Dec.toBin
                |> function
                    | Bin.Valid v -> v
                    | Bin.Invalid _ -> ""
                |> Fermata.String.padLeft 4 '0'

            let reversedBin = initBin |> String.collect (fun c -> if c = '1' then "0" else "1")
            (document.getElementById "questionSpan").innerText <- initBin
            (document.getElementById "srcRadix").innerText <- sprintf "(%d)" sourceRadix
            (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
            (document.getElementById "hintArea").innerHTML <- hint initBin reversedBin

            (document.getElementById "submitButton").onclick <-
                (fun e ->
                    e.preventDefault ()
                    checkAnswer initBin initAnswer [ initNumber ])

            (document.getElementById "inputArea").onsubmit <-
                (fun e ->
                    e.preventDefault ()
                    checkAnswer initBin initAnswer [ initNumber ])

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
