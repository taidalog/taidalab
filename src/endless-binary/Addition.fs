// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2025 taidalog
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
                         (fun n ->
                             n
                             |> bin
                             |> function
                                 | Bin v -> v
                             |> String.length = digit)
                     else
                         (fun n ->
                             let pattern = "^1+0+$"
                             let (Bin v) = bin n
                             (String.length v = digit) && (Regex.isMatch pattern v) = false))

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

        let questionExpression (x: int, y: int) : string =
            let intToBinExpr (x: int) = let (Bin v) = bin x in v
            $"%s{intToBinExpr x}<sub>(2)</sub> + %s{intToBinExpr y}<sub>(2)</sub>"

        let history (correct: bool) (input: string) : string =
            match input |> Bin.validate with
            | Error _ -> ""
            | Ok v ->
                let (Dec d) = Bin.toDec v
                let left = input |> Fermata.String.padLeft 8 ' ' |> escapeSpace
                let right = d |> string |> Fermata.String.padLeft 4 ' ' |> escapeSpace
                newHistory correct left 2 right 10

        let rec exec
            (questionf: int list -> int * int)
            (questionExpressionf: int * int -> string)
            (hintf: unit -> string)
            (collumnf: int -> int -> unit)
            (answerf: int -> int -> int)
            (answersToKeep: int)
            (lastAnswers: int list)
            (num1: int)
            (num2: int)
            (answer: int)
            : unit =
            // Getting the user input.
            let numberInput = document.getElementById "numberInput" :?> HTMLInputElement
            let input: string = numberInput.value |> escapeHtml
            let input': Result<Bin, exn> = input |> Bin.validate

            numberInput.focus ()

            match input' with
            | Error e ->
                // Making an error message.
                (document.getElementById "errorArea").innerHTML <-
                    newErrorMessageBin (questionExpressionf (num1, num2)) input e
            | Ok v ->
                (document.getElementById "errorArea").innerHTML <- ""

                let (Dec d) = Bin.toDec v

                // Making a new history and updating the history with the new one.
                let outputArea = document.getElementById "outputArea"

                let historyMessage =
                    history (d = answer) input
                    |> (fun x -> concatinateStrings "<br>" [ x; outputArea.innerHTML ])

                outputArea.innerHTML <- historyMessage

                if d = answer then
                    // Making the next question.
                    let (number1, number2) = questionf lastAnswers

                    collumnf number1 number2

                    (document.getElementById "hintArea").innerHTML <- hintf ()

                    numberInput.value <- ""

                    // Updating `lastAnswers`.
                    // These numbers will not be used for the next question.
                    let lastAnswers' =
                        ([ number1; number2 ] @ lastAnswers) |> List.truncate answersToKeep

                    // Setting the next answer to the check button.
                    let f =
                        fun (e: Event) ->
                            e.preventDefault ()

                            exec
                                questionf
                                questionExpressionf
                                hintf
                                collumnf
                                answerf
                                answersToKeep
                                lastAnswers'
                                number1
                                number2
                                (answerf number1 number2)

                    (document.getElementById "submitButton").onclick <- f
                    (document.getElementById "inputArea").onsubmit <- f


        let init'
            (questionf: int list -> int * int)
            (questionExpressionf: int * int -> string)
            (hintf: unit -> string)
            (sourceRadix: int)
            (destinationRadix: int)
            (answersToKeep: int)
            (keyboardshortcut: KeyboardEvent -> unit)
            executor
            : unit =
            // Initialization.
            (document.getElementById "numberInput").className <- "question-number"
            (document.getElementById "operator").innerText <- "+)"
            (document.getElementById "firstRowSrcRadix").innerText <- sprintf "(%d)" sourceRadix
            (document.getElementById "secondRowSrcRadix").innerText <- sprintf "(%d)" sourceRadix
            (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
            (document.getElementById "hintArea").innerHTML <- hintf ()

            let (number1, number2) = questionf []
            setColumnAddition number1 number2

            let f =
                fun (e: Event) ->
                    e.preventDefault ()

                    executor
                        questionf
                        questionExpressionf
                        hintf
                        setColumnAddition
                        (+)
                        answersToKeep
                        [ number1; number2 ]
                        number1
                        number2
                        (number1 + number2)

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

            document.onkeydown <- (fun (e: KeyboardEvent) -> keyboardshortcut e)

        let init () =
            document.title <- "加算 - taidalab"

            let header = document.querySelector "header"
            header.innerHTML <- Content.Common.header
            header.className <- "addition"

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
                """<span>加算 - </span><span translate="no">taidalab</span>"""

            (document.querySelector "main").innerHTML <- EndlessBinary.Course.main help "help-color addition"
            (document.querySelector "#submitButton").className <- "addition"
            (document.querySelector "#questionArea").innerHTML <- Content.Common.columnAdditionFormat

            init' (question 8) questionExpression newHintAdd 2 2 10 EndlessBinary.keyboardshortcut exec

        let init4 () =
            init' (question 4) questionExpression newHintAdd 2 2 5 EndlessBinary.keyboardshortcut exec
