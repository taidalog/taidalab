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

        let writeAdditionFormulaHex (hex': seq<char>) =
            hex'
            |> Seq.rev
            |> Seq.map string
            |> Seq.mapi (fun i c ->
                $"""(%d{c
                        |> Hex.validate
                        |> function
                            | Ok v ->
                                v
                                |> Hex.toDec
                                |> function
                                    | Dec v -> v
                            | Error _ -> -1} * 16<sup>%d{i}</sup>)""")
            |> Seq.rev
            |> String.concat " + "

        let tableComponentsHex hex' =
            hex'
            |> Seq.toList
            |> List.mapi (fun i c ->
                $"""<span class="hex2dec hint-table-digit">%d{(hex' |> String.length) - i}</span>""",
                $"""<span class="hex2dec hint-table-digit green large">%c{c}</span>""",
                $"""<span class="hex2dec hint-table-digit gray">%d{16}<sup>%d{(hex' |> String.length) - i - 1}</sup></span>""")

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

        let hintTable (hex': string) =
            hex'
            |> tableComponentsHex
            |> List.fold (fun x y -> applyToTuples3 (fun a1 a2 -> sprintf "%s%s" a1 a2) x y) ("", "", "")
            |> newHintTable

        let hintFormat (Hex h) formula table =
            let (Dec d) = (Hex h) |> Hex.toDec

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
                    %s{h}<sub>(16)</sub>の場合、以下のように計算します。<br>
                    ※ 16進数にA~Fのアルファベットがある場合は、それぞれ10<sub>(10)</sub>~15<sub>(10)</sub>を表しています。
                </p>
                <p class="history-indented hint-bgcolor-gray mono">
                    &nbsp;&nbsp;%s{formula}<br>
                    = %d{d}
                </p>
            </details>"""

        let hint' (answer: int) : string =
            let nextHex: Hex = answer |> Dec |> Dec.toHex
            let (Hex v) = nextHex
            hintFormat nextHex (writeAdditionFormulaHex v) (hintTable v)

        let question (digit: int) (lastAnswers: int list) : int =
            newNumber (fun _ -> getRandomBetween 0 (pown 2 digit - 1)) (fun n -> List.contains n lastAnswers = false)

        let questionSetter (x: int) : string =
            let (Hex v) = x |> Dec |> Dec.toHex in v

        let error (question: int) =
            let (Hex v) = Dec question |> Dec.toHex
            newErrorMessageDec v

        let history (correct: bool) (input: string) : string =
            let v =
                match Dec.validate input with
                | Error _ -> ""
                | Ok v ->
                    Dec.toHex v
                    |> function
                        | Hex v -> v

            let leftSide = input |> string |> Fermata.String.padLeft 3 ' ' |> escapeSpace
            let rightSide = v |> Fermata.String.padLeft 2 ' ' |> escapeSpace
            newHistory correct leftSide 10 rightSide 16

        let additional _ = ()

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

            let initNumber: int = getRandomBetween 0 255
            let initHex: Hex = Dec initNumber |> Dec.toHex
            let (Hex v) = initHex

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

                    exec
                        Dec.validate
                        error
                        id
                        history
                        (question 8)
                        questionSetter
                        hint'
                        additional
                        10
                        [ initNumber ]
                        initNumber

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
