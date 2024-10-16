// taidalab Version 4.6.3
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2024 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom
open Browser.Types
open Taidalab.Number
open Taidalab.Text
open Taidalab.EndlessBinary
open Fermata
open Fermata.RadixConversion

module EndlessBinary =
    module Addition =
        let help =
            """
            2進数同士の足し算をエンドレスで練習できます。<br>
            出題範囲は m, n (2 &le; m + n &le; 255) で、繰り上がりもあります。<br>
            ヒント付きなので、考え方も身に付けられます。
            """

        let newHintAdd () =
            let hint =
                """
                <details><summary><h2>ヒント:</h2></summary>
                    <p class="history-indented">
                        10進数の筆算と同じように、右端から上下の数を足していきます。<br><br>
                        0<sub>(2)</sub> + 0<sub>(2)</sub> = 0<sub>(2)</sub><br>
                        0<sub>(2)</sub> + 1<sub>(2)</sub> = 1<sub>(2)</sub><br>
                        1<sub>(2)</sub> + 1<sub>(2)</sub> = 10<sub>(2)</sub><br>
                        1<sub>(2)</sub> + 1<sub>(2)</sub> + 1<sub>(2)</sub> = 11<sub>(2)</sub><br><br>
                        10<sub>(2)</sub> や 11<sub>(2)</sub>のように桁が繰り上がった時は、<br>
                        繰り上がった桁 (=1) をひとつ左の桁に足します。<br>
                    </p>
                </details>"""

            hint

        let newNumbersAdd (digit: int) : (int * int) =
            let max = digit |> pown 2 |> (+) -1

            let number1 =
                newNumber
                    (fun _ -> getRandomBetween 1 max)
                    (if digit < 4 then
                         (fun n -> n |> Dec.toBin |> String.length = digit)
                     else
                         (fun n ->
                             let pattern = "^1+0+$"
                             let bin = Dec.toBin n
                             (String.length bin = digit) && (Regex.isMatch pattern bin) = false))

            let number2 =
                let max' = if digit < 4 then max else max - number1

                newNumber
                    (fun _ -> getRandomBetween 1 max')
                    (if digit < 4 then
                         (fun _ -> true)
                     else
                         (fun n -> (n <> number1) && ((n &&& number1) <> 0)))

            (number1, number2)

        let question (digit: int) (lastAnswers: int list) : int * int =
            newNumber
                (fun _ -> newNumbersAdd digit)
                (if digit < 4 then
                     (fun _ -> true)
                 else
                     (fun (x, y) -> List.contains x lastAnswers = false && List.contains y lastAnswers = false))

        let rec checkAnswer
            (questionGenerator)
            (hintGenerator: 'a -> string)
            validator
            converter
            tagger
            (additional: 'c -> unit)
            sourceRadix
            destinationRadix
            (answersToKeep: int)
            answer
            num1
            num2
            (lastAnswers)
            =
            // Getting the user input.
            let numberInput = document.getElementById "numberInput" :?> HTMLInputElement
            let input = numberInput.value |> escapeHtml
            let bin: Result<string, Errors.Errors> = input |> validator

            numberInput.focus ()

            match bin with
            | Error(error: Errors.Errors) ->
                // Making an error message.
                newErrorMessageBin
                    $"%s{Dec.toBin num1}<sub>(%d{sourceRadix})</sub> + %s{Dec.toBin num2}<sub>(%d{sourceRadix})</sub>"
                    input
                    error
                |> fun x -> (document.getElementById "errorArea").innerHTML <- x
            | Ok(bin: string) ->
                (document.getElementById "errorArea").innerHTML <- ""
                // Converting the input in order to use in the history message.
                let taggedBin = bin |> tagger

                let decDigit = 3
                let dec = converter bin

                let spacePaddedDec =
                    dec |> string |> Fermata.String.padLeft decDigit ' ' |> escapeSpace

                // Making a new history and updating the history with the new one.
                let outputArea = document.getElementById "outputArea"

                let historyMessage =
                    newHistory (dec = answer) taggedBin sourceRadix spacePaddedDec destinationRadix
                    |> (fun x -> concatinateStrings "<br>" [ x; outputArea.innerHTML ])

                outputArea.innerHTML <- historyMessage

                if dec = answer then
                    // Making the next question.
                    let (number1, number2) = questionGenerator lastAnswers

                    setColumnAddition number1 number2

                    (document.getElementById "hintArea").innerHTML <- hintGenerator ()

                    numberInput.value <- ""

                    // Updating `lastAnswers`.
                    // These numbers will not be used for the next question.
                    let lastAnswers' =
                        ([ number1; number2 ] @ lastAnswers) |> List.truncate answersToKeep

                    // Setting the next answer to the check button.
                    (document.getElementById "submitButton").onclick <-
                        (fun e ->
                            e.preventDefault ()

                            checkAnswer
                                questionGenerator
                                hintGenerator
                                validator
                                converter
                                tagger
                                additional
                                sourceRadix
                                destinationRadix
                                answersToKeep
                                (number1 + number2)
                                number1
                                number2
                                lastAnswers')

                    (document.getElementById "inputArea").onsubmit <-
                        (fun e ->
                            e.preventDefault ()

                            checkAnswer
                                questionGenerator
                                hintGenerator
                                validator
                                converter
                                tagger
                                additional
                                sourceRadix
                                destinationRadix
                                answersToKeep
                                (number1 + number2)
                                number1
                                number2
                                lastAnswers')


        let init'
            (questionGenerator)
            (hintGenerator: 'a -> string)
            validator
            converter
            tagger
            (additional: 'c -> unit)
            sourceRadix
            destinationRadix
            (answersToKeep: int)
            (keyboardshortcutSetter: KeyboardEvent -> unit)
            checker
            : unit =
            // Initialization.
            (document.getElementById "numberInput").className <- "number-input question-number eight-digit"
            (document.getElementById "operator").innerText <- "+)"
            (document.getElementById "firstRowSrcRadix").innerText <- sprintf "(%d)" sourceRadix
            (document.getElementById "secondRowSrcRadix").innerText <- sprintf "(%d)" sourceRadix
            (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
            (document.getElementById "hintArea").innerHTML <- hintGenerator ()

            let (number1, number2) = questionGenerator []
            setColumnAddition number1 number2

            (document.getElementById "submitButton").onclick <-
                (fun e ->
                    e.preventDefault ()

                    checker
                        questionGenerator
                        hintGenerator
                        validator
                        converter
                        tagger
                        additional
                        sourceRadix
                        destinationRadix
                        answersToKeep
                        (number1 + number2)
                        number1
                        number2
                        [ number1; number2 ])

            (document.getElementById "inputArea").onsubmit <-
                (fun e ->
                    e.preventDefault ()

                    checker
                        questionGenerator
                        hintGenerator
                        validator
                        converter
                        tagger
                        additional
                        sourceRadix
                        destinationRadix
                        answersToKeep
                        (number1 + number2)
                        number1
                        number2
                        [ number1; number2 ])

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

            document.onkeydown <- (fun (e: KeyboardEvent) -> keyboardshortcutSetter e)

        // let init () =
        //     init'
        //         (question 8)
        //         newHintAdd
        //         Bin.validate
        //         Bin.toDec
        //         (padWithZero 8 >> colorLeadingZero)
        //         (fun n -> ())
        //         2
        //         2
        //         10
        //         EndlessBinary.keyboardshortcut
        //         checkAnswer

        let init'' () =
            document.title <- "加算 - taidalab"

            let header = document.querySelector "header"
            header.innerHTML <- Content.Common.header
            header.className <- "addition"

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
                """<h1>加算 - <span translate="no">taidalab</span></h1>"""

            (document.querySelector "main").innerHTML <- EndlessBinary.Course.main help "help-color addition"
            (document.querySelector "#submitButton").className <- "submit-button display-order-3 addition"
            (document.querySelector "#questionArea").innerHTML <- Content.Common.columnAdditionFormat

            init'
                (question 8)
                newHintAdd
                Bin.validate
                Bin.toDec
                (padWithZero 8 >> colorLeadingZero)
                (fun n -> ())
                2
                2
                10
                EndlessBinary.keyboardshortcut
                checkAnswer

        let init4 () =
            init'
                (question 4)
                newHintAdd
                Bin.validate
                Bin.toDec
                (padWithZero 4 >> colorLeadingZero)
                (fun n -> ())
                2
                2
                5
                EndlessBinary.keyboardshortcut
                checkAnswer
