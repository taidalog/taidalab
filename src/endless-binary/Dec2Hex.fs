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

        let error (question: int) =
            question |> string |> newErrorMessageHex

        let history (correct: bool) (input: string) : string =
            match input |> Hex.validate |> Hex.toDec with
            | Dec.Invalid _ -> ""
            | Dec.Valid v ->
                let colored = input |> Fermata.String.padLeft 4 ' ' |> escapeSpace
                let spacePadded = v |> string |> Fermata.String.padLeft 3 ' ' |> escapeSpace
                newHistory correct colored 16 spacePadded 10

        let additional number : unit =
            (document.getElementById "hint1").onclick <-
                (fun _ ->
                    (document.getElementById "hint1").innerHTML <- newHintAnimation 16 number 20
                    (document.getElementById "hintDetails").setAttribute ("open", "true"))

        let rec exec
            // (questionGenerator: int list -> int)
            // (hintGenerator: int -> string)
            // (errorGenerator: string -> string -> exn -> string)
            (validator: string -> 'Radix)
            (errorf: int -> string -> exn -> string)
            (convertor: 'Radix -> Dec)
            (historyf: bool -> 'T -> string)
            (questionf: int list -> int)
            (questionSetter: int -> string)
            (hintf: int -> string)
            (additional: int -> unit)
            (numbersToKeep: int)
            (lastNumbers: int list)
            (answer: int)
            : unit =
            // Getting the user input.
            let numberInput = document.getElementById "numberInput" :?> HTMLInputElement
            let input: string = numberInput.value |> escapeHtml
            let input': 'Radix = validator (input.ToLower())

            numberInput.focus ()

            match input' with
            | Hex.Invalid e ->
                // Making an error message.
                (document.getElementById "errorArea").innerHTML <- errorf answer input e
            | Hex.Valid _ ->
                (document.getElementById "errorArea").innerHTML <- ""

                // Making a new history and updating the history with the new one.
                let outputArea = document.getElementById "outputArea" :?> HTMLParagraphElement

                match convertor input' with
                | Dec.Invalid _ -> ()
                | Dec.Valid d ->
                    let historyMessage =
                        historyf (d = answer) input
                        |> (fun x -> concatinateStrings "<br>" [ x; outputArea.innerHTML ])

                    outputArea.innerHTML <- historyMessage

                    if d <> answer then
                        ()
                    else
                        // Making the next question.
                        let nextNumber: int = questionf lastNumbers
                        (document.getElementById "questionSpan").innerText <- questionSetter nextNumber
                        (document.getElementById "hintArea").innerHTML <- hintf nextNumber
                        additional nextNumber

                        numberInput.value <- ""

                        // Updating `lastNumbers`.
                        // These numbers will not be used for the next question.
                        let lastNumbers' = (nextNumber :: lastNumbers) |> List.truncate numbersToKeep

                        // Setting the next answer to the check button.
                        let f =
                            fun (e: Event) ->
                                e.preventDefault ()

                                exec
                                    validator
                                    errorf
                                    convertor
                                    historyf
                                    questionf
                                    questionSetter
                                    hintf
                                    additional
                                    numbersToKeep
                                    lastNumbers'
                                    nextNumber

                        (document.getElementById "submitButton").onclick <- f
                        (document.getElementById "inputArea").onsubmit <- f

        let exec' (lastNumbers: int list) (answer: int) : unit =
            exec Hex.validate error Hex.toDec history question string hint additional 10 lastNumbers answer

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

            let f =
                fun (e: Event) ->
                    e.preventDefault ()
                    exec' [ initNumber ] initNumber

            (document.getElementById "submitButton").onclick <- f
            (document.getElementById "inputArea").onsubmit <- f

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
                    (document.querySelector "nav").classList.toggle "flagged" |> ignore
                    (document.getElementById "barrier").classList.toggle "flagged" |> ignore
                    (document.querySelector "main").classList.toggle "flagged" |> ignore)

            (document.getElementById "barrier").onclick <-
                (fun _ ->
                    (document.querySelector "nav").classList.remove "flagged" |> ignore
                    (document.getElementById "barrier").classList.remove "flagged" |> ignore
                    (document.querySelector "main").classList.remove "flagged" |> ignore)

            (document.querySelector "#headerTitle").innerHTML <-
                """<span>10進数→16進数 - </span><span translate="no">taidalab</span>"""

            (document.querySelector "main").innerHTML <- EndlessBinary.Course.main help "help-color dec2hex"
            (document.querySelector "#submitButton").className <- "dec2hex"
            (document.querySelector "#questionArea").innerHTML <- Content.Common.question

            init' question hint additional 10 16 EndlessBinary.keyboardshortcut
