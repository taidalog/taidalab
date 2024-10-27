// taidalab Version 5.0.0
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
    module Dec2Hex =
        let help =
            """
            10進数から16進数への変換をエンドレスで練習できます。<br>
            出題範囲は n (0&le;n&le;255) です。<br>
            ヒント付きなので、考え方も身に付けられます。
            """

        let newArrowHex fontSize lineCount stroke fill =
            Svg.newArrow
                (fontSize |> double |> (fun x -> x / 2. * 4.))
                (lineCount |> (fun x -> (fontSize * (x - 1)) + 6) |> double)
                (fontSize |> double |> (fun x -> x / 2. * 4.))
                (lineCount |> double |> (fun x -> 17.85 * x - 35.) |> ((*) -1.))
                -58.
                (17.85 * (lineCount |> double) - 15.)
                (lineCount - 1 |> delayMs |> ((+) 1500))
                stroke
                fill


        let newHintAnimation divisor num fontSize =
            let divRems =
                (numOpt divisor num)
                :: (divRemOpt divisor (Dec2Bin1.repeatDivision num divisor))

            divRems
            |> List.mapi (fun i (a, b, c, d) ->
                Option.map // divisor
                    (fun x ->
                        Svg.text
                            0
                            (fontSize * (i + 1))
                            0.
                            (sprintf
                                "%d%s"
                                x
                                (Svg.animateOpacity
                                    (i |> delayMs |> (fun x -> if i = 0 then x + 1000 else x + 2000))
                                    500)))
                    a,
                Option.map // line
                    (fun x ->
                        Svg.path
                            (sprintf
                                "M %d,%d q %d,%f 0,%f h %f"
                                (fontSize / 2 * 2 + 4)
                                ((fontSize * i) + 6)
                                (fontSize / 2)
                                (double fontSize * 0.4)
                                (double fontSize * 0.8)
                                (double fontSize / 2. * 4.8))
                            "#000000"
                            1
                            "none"
                            0.
                            (Svg.animateOpacity (i |> delayMs |> (fun x -> if i = 0 then x + 500 else x + 1500)) 500))
                    b,
                Option.map // dividend
                    (fun x ->
                        Svg.text
                            (fontSize / 2 * 3)
                            (fontSize * (i + 1))
                            0.
                            (sprintf
                                "%s%s"
                                (x |> string |> (String.padLeft 3 ' ') |> escapeSpace)
                                (Svg.animateOpacity (i |> delayMs) 500)))
                    c,
                Option.map // remainder
                    (fun x ->
                        Svg.text
                            (fontSize / 2 * 7)
                            (fontSize * (i + 1))
                            0.
                            (sprintf "…%d%s" x (Svg.animateOpacity (i |> delayMs |> ((+) 500)) 500)))
                    d)
            |> List.map (fun (a, b, c, d) ->
                sprintf
                    "%s%s%s%s"
                    (Option.defaultValue "" a)
                    (Option.defaultValue "" b)
                    (Option.defaultValue "" c)
                    (Option.defaultValue "" d))
            |> List.fold
                (fun x y -> sprintf "%s%s" x y)
                (newArrowHex fontSize (List.length divRems) "#1e3330" "#95feec")
            |> (Svg.frame (fontSize / 2 * 11) (divRems |> List.length |> (fun x -> fontSize * (x + 1))))


        let newHintRepeatDivision divisor number fontSize =
            sprintf
                """
                <div class="history-indented">
                    <p>
                        10進法で表現した数を2進法で表現しなおすには、<br>
                        10進法の数を、商が 16 未満になるまで 16 で割り続けます。<br>
                        この時、余りを商の右に書いておきます。<br>
                        商と余りのうち、10~15 をそれぞれ A~F に変換し、<br>
                        下から順に繋げると、16進法の数になります。<br>
                        ※この下の筆算をクリックすると動きます。
                    </p>
                </div>
                <div id="hint1" class="history-indented mono">
                    %s
                </div>
                """
                (newHintAnimation divisor number fontSize)


        let newHint divisor number fontSize =
            sprintf
                """
                <details id="hintDetails"><summary><h2>ヒント:</h2></summary>
                    <h3>考え方 1</h3>
                    %s
                </details>
                """
                (newHintRepeatDivision divisor number fontSize)

        let hint number = newHint 16 number 20

        let question lastNumbers : int =
            newNumber (fun _ -> getRandomBetween 0 255) (fun n -> List.contains n lastNumbers = false)

        let additional number : unit =
            (document.getElementById "hint1").onclick <-
                (fun _ ->
                    (document.getElementById "hint1").innerHTML <- newHintAnimation 16 number 20
                    (document.getElementById "hintDetails").setAttribute ("open", "true"))

        let rec exec
            (questionGenerator: int list -> int)
            (hintGenerator: int -> string)
            (errorGenerator: string -> string -> exn -> string)
            tagger
            (additional: int -> unit)
            sourceRadix
            destinationRadix
            (numbersToKeep: int)
            (lastNumbers: int list)
            (answer: Hex)
            =
            // Getting the user input.
            let numberInput = document.getElementById "numberInput" :?> HTMLInputElement
            let input = numberInput.value |> escapeHtml
            let hex: Hex = input |> Dec.validate |> Dec.toHex

            numberInput.focus ()

            match hex with
            | Hex.Invalid e ->
                // Making an error message.
                let q =
                    match answer with
                    | Hex.Invalid _ -> ""
                    | Hex.Valid v -> v

                (document.getElementById "errorArea").innerHTML <- errorGenerator q input e
            | Hex.Valid v ->
                (document.getElementById "errorArea").innerHTML <- ""

                // Converting the input in order to use in the history message.
                let colored = v |> tagger //padWithZero binaryDigit |> colorLeadingZero

                let decimalDigit = 3

                let spacePadded = v |> Fermata.String.padLeft decimalDigit ' ' |> escapeSpace

                // Making a new history and updating the history with the new one.
                let outputArea = document.getElementById "outputArea" :?> HTMLParagraphElement

                let historyMessage =
                    newHistory (hex = answer) colored destinationRadix spacePadded sourceRadix
                    |> (fun x -> concatinateStrings "<br>" [ x; outputArea.innerHTML ])

                outputArea.innerHTML <- historyMessage

                if hex <> answer then
                    ()
                else
                    // Making the next question.
                    let nextNumber: int = questionGenerator lastNumbers
                    (document.getElementById "questionSpan").innerText <- string nextNumber
                    (document.getElementById "hintArea").innerHTML <- hintGenerator nextNumber
                    additional nextNumber

                    let nextAnswer = nextNumber |> Dec.Valid |> Dec.toHex

                    numberInput.value <- ""

                    // Updating `lastNumbers`.
                    // These numbers will not be used for the next question.
                    let lastNumbers' = (nextNumber :: lastNumbers) |> List.truncate numbersToKeep

                    // Setting the next answer to the check button.
                    (document.getElementById "submitButton").onclick <-
                        (fun e ->
                            e.preventDefault ()

                            exec
                                questionGenerator
                                hintGenerator
                                errorGenerator
                                tagger
                                additional
                                sourceRadix
                                destinationRadix
                                numbersToKeep
                                lastNumbers'
                                nextAnswer)

                    (document.getElementById "inputArea").onsubmit <-
                        (fun e ->
                            e.preventDefault ()

                            exec
                                questionGenerator
                                hintGenerator
                                errorGenerator
                                tagger
                                additional
                                sourceRadix
                                destinationRadix
                                nextNumber
                                lastNumbers'
                                nextAnswer)

        let exec' (lastNumbers: int list) (answer: Hex) =
            exec
                question
                hint
                newErrorMessageBin
                (padWithZero 8 >> colorLeadingZero)
                additional
                10
                2
                10
                lastNumbers
                answer

        let init'
            (questionGenerator: int list -> int)
            (hintGenerator: int -> string)
            (additional: int -> unit)
            sourceRadix
            destinationRadix
            (keyboardshortcutSetter: KeyboardEvent -> unit)
            : unit =
            // Initialization.
            let initNumber: int = questionGenerator []
            (document.getElementById "questionSpan").innerText <- string initNumber
            (document.getElementById "srcRadix").innerText <- sprintf "(%d)" sourceRadix
            (document.getElementById "dstRadix").innerText <- string destinationRadix
            (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
            (document.getElementById "hintArea").innerHTML <- hintGenerator initNumber

            let answer = initNumber |> Dec.Valid |> Dec.toHex

            (document.getElementById "submitButton").onclick <-
                (fun e ->
                    e.preventDefault ()
                    exec' [ initNumber ] answer)

            (document.getElementById "inputArea").onsubmit <-
                (fun e ->
                    e.preventDefault ()
                    exec' [ initNumber ] answer)

            additional initNumber

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

        let init () =
            document.title <- "10進数→16進数 - taidalab"

            let header = document.querySelector "header"
            header.innerHTML <- Content.Common.header
            header.className <- "dec2hex"

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
                """<h1>10進数→16進数 - <span translate="no">taidalab</span></h1>"""

            (document.querySelector "main").innerHTML <- EndlessBinary.Course.main help "help-color dec2hex"
            (document.querySelector "#submitButton").className <- "submit-button display-order-3 dec2hex"
            (document.querySelector "#questionArea").innerHTML <- Content.Common.question

            init' question hint additional 10 16 EndlessBinary.keyboardshortcut
