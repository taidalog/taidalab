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
open Fermata
open Fermata.RadixConversion

module EndlessBinary =
    module Bin2Dec1 =
        let help =
            """
            2進数から10進数への変換をエンドレスで練習できます。<br>
            出題範囲は n (0&le;n&le;255) で、2の累乗の数同士の和になっています。<br>
            ヒント付きなので、考え方も身に付けられます。
            """

        let newNumberWithOneOrTwoOne () : int =
            let generator () : (int * int) =
                let generator' () : int =
                    // Generates a number that is zero, or that is power of two and less than 255.
                    getRandomBetween 0 8
                    |> pown 2
                    |> Dec
                    |> Dec.toBin
                    |> function
                        | Bin v -> v
                    |> String.padLeft 9 '0'
                    |> String.tail
                    |> Bin.validate
                    |> function
                        | Ok v ->
                            v
                            |> Bin.toDec
                            |> function
                                | Dec v -> v
                        | Error _ -> -1

                generator' (), generator' ()

            let tester (x, y) : bool = x <> y
            newNumber generator tester ||> (+)

        let writeAdditionFormula binaryString =
            binaryString
            |> Seq.toList
            |> List.mapi (fun i c -> sprintf """(%c * 2<sup>%d</sup>)""" c (String.length binaryString - i - 1))
            |> String.concat " + "

        let tableComponents binaryString =
            binaryString
            |> Seq.toList
            |> List.mapi (fun i c ->
                $"""<span class="bin2dec hint-table-digit">%d{(String.length binaryString) - i}</span>""",
                $"""<span class="bin2dec hint-table-digit green large">%c{c}</span>""",
                $"""<span class="bin2dec hint-table-digit gray">%d{2}<sup>%d{(String.length binaryString) - i - 1}</sup></span>""")

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
                            <span class="middle">ビット</span>
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

        let hintTable binaryString =
            binaryString
            |> tableComponents
            |> List.fold (fun x y -> applyToTuples3 (fun a1 a2 -> sprintf "%s%s" a1 a2) x y) ("", "", "")
            |> newHintTable

        let hint (answer: int) : string =
            let (Bin v) = Dec answer |> Dec.toBin
            let formula = writeAdditionFormula v
            let table = hintTable v

            $"""
            <details><summary><h2>ヒント:</h2></summary>
                <p class="history-indented">
                    10進法で表現した数は、一番右の桁から<br>
                    1の位、10の位、100の位、1000の位...となっています。<br>
                    これを「10<sup>n</sup>の位」の形で表すと、<br>
                    10<sup>0</sup>の位、10<sup>1</sup>の位、10<sup>2</sup>の位、10<sup>3</sup>の位...となります。<br>
                </p>
                <p class="history-indented">
                    同様に、2進法で表現した数は、一番右の桁から<br>
                    1の位、2の位、4の位、8の位...となっています。<br>
                    これを「2<sup>n</sup>の位」の形で表すと、<br>
                    2<sup>0</sup>の位、2<sup>1</sup>の位、2<sup>2</sup>の位、2<sup>3</sup>の位...となります。
                </p>
                <p class="history-indented">
                    この 10<sup>0</sup>、10<sup>1</sup>、10<sup>2</sup>、10<sup>3</sup>...や 2<sup>0</sup>、2<sup>1</sup>、2<sup>2</sup>、2<sup>3</sup>...という数を、その桁の「重み」と呼びます。<br>
                </p>
                <p class="history-indented">
                    %s{table}
                </p>
                <p class="history-indented">
                    2進法で表現した数を10進法で表現しなおすには、それぞれの桁の数と重みをかけ算し、それを合計します。<br>
                    %s{v}<sub>(2)</sub> の場合、以下のように計算します。
                </p>
                <p class="history-indented hint-bgcolor-gray mono">
                    &nbsp;&nbsp;%s{formula}<br>
                    = %d{answer}<sub>(10)</sub>
                </p>
            </details>
            """

        let question' lastNumbers : int =
            newNumber newNumberWithOneOrTwoOne (fun n -> List.contains n lastNumbers = false)

        let error (answer: int) (input: string) (error: exn) : string =
            let (Bin v) = Dec answer |> Dec.toBin
            newErrorMessageDec v input error

        let history' (correct: bool) (input: string) : string =
            let v =
                match Dec.validate input with
                | Error _ -> ""
                | Ok v ->
                    Dec.toBin v
                    |> function
                        | Bin v -> v

            let leftSide = input |> Fermata.String.padLeft 3 ' ' |> escapeSpace
            let rightSide = v |> Fermata.String.padLeft 8 ' ' |> escapeSpace
            newHistory correct leftSide 10 rightSide 2

        let additional number : unit = ()

        let exec' (lastNumbers: int list) (answer: int) =
            exec
                Dec.validate
                error
                id
                history'
                question'
                (fun x -> splitBinaryStringBy 4 (Dec x |> Dec.toBin))
                id
                hint
                additional
                4
                lastNumbers
                answer

        let init'
            (questionGenerator: int list -> int)
            (hintGenerator: int -> string)
            (additional: 'c -> unit)
            (keyboardshortcutSetter: KeyboardEvent -> unit)
            : unit =
            // Initialization.
            let initNumber: int = questionGenerator []
            let initQuestion: Bin = Dec initNumber |> Dec.toBin
            let sourceRadix = 2
            let destinationRadix = 10

            (document.getElementById "questionSpan").innerText <- splitBinaryStringBy 4 initQuestion
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

        let init () : unit =
            document.title <- "2進数→10進数 (1) - taidalab"

            let header = document.querySelector "header"
            header.innerHTML <- Content.Common.header
            header.className <- "bin2dec"

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
                """<span>2進数→10進数 (1) - </span><span translate="no">taidalab</span>"""

            (document.querySelector "main").innerHTML <- EndlessBinary.Course.main help "help-color bin2dec"
            (document.querySelector "#submitButton").className <- "bin2dec"
            (document.querySelector "#questionArea").innerHTML <- Content.Common.question

            init' question' hint additional EndlessBinary.keyboardshortcut
