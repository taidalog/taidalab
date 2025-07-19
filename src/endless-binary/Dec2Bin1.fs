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
open Taidalab.EndlessBinary
open Fermata
open Fermata.RadixConversion

module EndlessBinary =
    module Dec2Bin1 =
        let help =
            """
            10進数から2進数への変換をエンドレスで練習できます。<br>
            出題範囲は n (0&le;n&le;255) で、2の累乗の数同士の和になっています。<br>
            ヒント付きなので、考え方も身に付けられます。
            """

        let devideIntoPowerOfTwo (number: int) =
            let getMaxPowerOfTwo (number: int) = number |> log2 |> int |> pown 2

            let rec loop acc number =
                match number with
                | 0 -> acc
                | 1 -> acc @ [ 1 ]
                | _ ->
                    let max = getMaxPowerOfTwo number
                    loop (acc @ [ max ]) (number - max)

            loop [] number


        let rec repeatDivision (dividend: int) (divisor: int) : (int * int) list =
            let quotient, remainder = Math.DivRem(dividend, divisor)

            if quotient < divisor then
                [ (quotient, remainder) ]
            else
                [ (quotient, remainder) ] @ repeatDivision quotient divisor

        let newArrowBin fontSize lineCount stroke fill =
            Svg.newArrow
                (fontSize |> double |> (fun x -> x / 2. * 4.))
                (lineCount |> (fun x -> fontSize * (x - 1) + 6) |> double)
                (fontSize |> double |> (fun x -> x / 2. * 3.))
                (lineCount |> double |> (fun x -> 17.85 * x - 35.) |> (*) -1.)
                -48.
                (17.85 * (lineCount |> double) - 15.)
                (lineCount - 1 |> delayMs |> (+) 1500)
                stroke
                fill


        let newHintAnimation divisor num fontSize =
            let divRems =
                (numOpt divisor num) :: (divRemOpt divisor (repeatDivision num divisor))

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
                                (fontSize / 2 + 2)
                                (fontSize * i + 6)
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
                            (fontSize / 2 * 2)
                            (fontSize * (i + 1))
                            0.
                            (sprintf
                                "%s%s"
                                (x |> string |> Fermata.String.padLeft 3 ' ' |> escapeSpace)
                                (Svg.animateOpacity (i |> delayMs) 500)))
                    c,
                Option.map // remainder
                    (fun x ->
                        Svg.text
                            (fontSize / 2 * 6)
                            (fontSize * (i + 1))
                            0.
                            (sprintf "…%d%s" x (Svg.animateOpacity (i |> delayMs |> (+) 500) 500)))
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
                (newArrowBin fontSize (List.length divRems) "#191970" "#b0e0e6")
            |> (Svg.frame (fontSize / 2 * 10) (divRems |> List.length |> (fun x -> fontSize * (x + 1))))

        let newHintRepeatDivision divisor number =
            $"""
            <div class="history-indented">
                <p>
                    10進法で表現した数を2進法で表現しなおすには、<br>
                    10進法の数を、商が 1 になるまで 2 で割り続けます。<br>
                    この時、余りを商の右に書いておきます。<br>
                    商と余りを下から順に繋げると、2進法の数になります。<br>
                    ※この下の筆算をクリックすると動きます。
                </p>
            </div>
            <div id="hint1" class="history-indented mono">
                %s{(newHintAnimation divisor number 20)}
            </div>
            """

        let newHintRepeatAddition (dec: Dec) (power_of_twos: int list) : string =
            let additionDec = power_of_twos |> List.map string |> String.concat " + "

            let additionIndex =
                power_of_twos
                |> List.map (log2 >> truncate >> int)
                |> List.map (sprintf "2<sup>%d</sup>")
                |> String.concat " + "

            let additionBin =
                power_of_twos
                |> List.map (Dec.Valid >> Dec.toBin)
                |> List.map (function
                    | Bin.Valid v -> v
                    | Bin.Invalid _ -> "")
                |> List.map (fun x -> $"%s{x}<sub>(2)</sub>")
                |> String.concat " + "

            let bin: string =
                dec
                |> Dec.toBin
                |> function
                    | Bin.Valid v -> v
                    | Bin.Invalid _ -> "-1"

            let number: int =
                dec
                |> function
                    | Dec.Valid v -> v
                    | Dec.Invalid _ -> -1

            $"""
            <p class="history-indented">
                10進法で表現した数を2進法で表現しなおすには、<br>
            </p>
            <p class="history-indented">
                <ol style="padding-left: 4rem;">
                    <li>10進法の数を「2<sup>n</sup> の数同士の足し算」に変換して、</li>
                    <li>それぞれの 2<sup>n</sup> の数を2進法で表し、</li>
                    <li>足し合わせる</li>
                </ol>
            </p>
            <p class="history-indented">
                という方法もあります。
            </p>
            <p class="history-indented">
                %d{number}<sub>(10)</sub> を 2<sup>n</sup> の数同士の足し算に変換すると
            </p>
            <p class="history-indented hint-bgcolor-gray mono">
                &nbsp;&nbsp;%s{additionDec}<br>
                = %s{additionIndex}
            </p>
            <p class="history-indented">
                になります。<br>
            </p>
            <p class="history-indented">
                次に、それぞれの 2<sup>n</sup> の数を2進法で表します。<br>
                2<sup>n</sup> の数を2進法で表すには、1 の後に 0 を n 個続けます。<br>
                そのため、%s{additionIndex} は2進法で
            </p>
            <p class="history-indented hint-bgcolor-gray mono">
                &nbsp;&nbsp;%s{additionBin}<br>
            </p>
            <p class="history-indented">
                と表現できます。最後にこれを計算すると
            </p>
            <p class="history-indented hint-bgcolor-gray mono">
                &nbsp;&nbsp;%s{additionBin}<br>
                = %s{bin}<sub>(2)</sub>
            </p>
            <p class="history-indented">
                になります。
            </p>
            """

        let hint (number: int) : string =
            $"""
            <details id="hintDetails">
                <summary><h2>ヒント:</h2></summary>
                <h3>考え方 1</h3>
                %s{(newHintRepeatDivision 2 number)}
                <h3>考え方 2</h3>
                %s{(newHintRepeatAddition (Dec.Valid number) (devideIntoPowerOfTwo number))}
            </details>
            """

        let newNumberWithTwoOne min max =
            let rec newTwoRandomNumbers min max =
                let rand = new Random()
                let index1 = rand.Next(min, max)
                let index2 = rand.Next(min, max)

                if index1 <> index2 then
                    (index1, index2)
                else
                    newTwoRandomNumbers min max

            newTwoRandomNumbers min max |> Tuple.map (pown 2) ||> (+)

        let question (digit: int) (lastNumbers: int list) : int =
            newNumber (fun _ -> newNumberWithTwoOne 0 digit) (fun n -> List.contains n lastNumbers = false)

        let history (correct: bool) (input: string) : string =
            match input |> Bin.validate |> Bin.toDec with
            | Dec.Invalid _ -> ""
            | Dec.Valid v ->
                let colored = input |> Fermata.String.padLeft 8 ' ' |> escapeSpace
                let spacePadded = v |> string |> Fermata.String.padLeft 3 ' ' |> escapeSpace
                newHistory correct colored 2 spacePadded 10

        let additional number : unit =
            (document.getElementById "hint1").onclick <-
                (fun _ ->
                    (document.getElementById "hint1").innerHTML <- newHintAnimation 2 number 20
                    (document.getElementById "hintDetails").setAttribute ("open", "true"))

        let rec exec
            (questionGenerator: int list -> int)
            (hintGenerator: int -> string)
            (errorGenerator: string -> string -> exn -> string)
            (additional: int -> unit)
            (numbersToKeep: int)
            (lastNumbers: int list)
            (answer: int)
            : unit =
            // Getting the user input.
            let numberInput = document.getElementById "numberInput" :?> HTMLInputElement
            let input: string = numberInput.value |> escapeHtml
            let bin: Bin = input |> Bin.validate

            numberInput.focus ()

            match bin with
            | Bin.Invalid e ->
                // Making an error message.
                (document.getElementById "errorArea").innerHTML <- errorGenerator (string answer) input e
            | Bin.Valid v ->
                (document.getElementById "errorArea").innerHTML <- ""

                // Making a new history and updating the history with the new one.
                let outputArea = document.getElementById "outputArea" :?> HTMLParagraphElement

                match bin |> Bin.toDec with
                | Dec.Invalid _ -> ()
                | Dec.Valid d ->
                    let historyMessage =
                        history (d = answer) v
                        |> (fun x -> concatinateStrings "<br>" [ x; outputArea.innerHTML ])

                    outputArea.innerHTML <- historyMessage

                    if d <> answer then
                        ()
                    else
                        // Making the next question.
                        let nextNumber: int = questionGenerator lastNumbers
                        (document.getElementById "questionSpan").innerText <- string nextNumber
                        (document.getElementById "hintArea").innerHTML <- hintGenerator nextNumber
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
                                    questionGenerator
                                    hintGenerator
                                    errorGenerator
                                    additional
                                    numbersToKeep
                                    lastNumbers'
                                    nextNumber

                        (document.getElementById "submitButton").onclick <- f
                        (document.getElementById "inputArea").onsubmit <- f

        let exec' (lastNumbers: int list) (answer: int) : unit =
            exec (question 8) hint newErrorMessageBin additional 10 lastNumbers answer

        let init'
            (questionGenerator: int list -> int)
            (hintGenerator: int -> string)
            (additional: int -> unit)
            (sourceRadix: int)
            (destinationRadix: int)
            (executor: int list -> int -> unit)
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
                    executor [ initNumber ] initNumber

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

        let init4 () =
            init' (question 4) hint additional 10 2 exec' EndlessBinary.keyboardshortcut

        let init () : unit =
            document.title <- "10進数→2進数 (1) - taidalab"

            let header = document.querySelector "header"
            header.innerHTML <- Content.Common.header
            header.className <- "dec2bin"

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
                """<span>10進数→2進数 (1) - </span><span translate="no">taidalab</span>"""

            (document.querySelector "main").innerHTML <- EndlessBinary.Course.main help "help-color dec2bin"
            (document.querySelector "#submitButton").className <- "dec2bin"
            (document.querySelector "#questionArea").innerHTML <- Content.Common.question

            init' (question 8) hint additional 10 2 exec' EndlessBinary.keyboardshortcut
