// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2026 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab.EndlessBinary

open System
open Browser.Dom
open Browser.Types
open Taidalab
open Taidalab.Html
open Taidalab.Number
open Taidalab.Text
open Taidalab.EndlessBinary.Course
open Fermata
open Fermata.RadixConversion

module Complement =
    let help =
        """
        2進数の補数（2の補数）を求める練習ができます。<br>
        出題範囲は n (1 &le; n &le; 15) です。<br>
        ヒント付きなので、考え方も身に付けられます。
        """

    let question =
        """4ビットの2進数 <span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> の補数は？"""

    let newErrorMessageComplement (question: string) (input: string) (error: exn) =
        if String.IsNullOrWhiteSpace input then
            $"""<span>%s{question} の補数を、2進法表記で入力してください。</span>"""
        else if Regex.isMatch "^[01]+$" input |> not then
            $"""<span>'%s{input}' は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>"""
        // else if false then
        //      $"""<span>'%s{input}' は入力できる数値の範囲を越えています。入力できるのは xxx ~ yyy の間です。</span>"""
        else
            """<span>不明なエラーです。</span>"""

    let fourBitsBinString (x: int) : string =
        let (Bin v) = bin x
        Fermata.String.padLeft 4 '0' v

    let hint (bin': string) (reversedBin: string) : HTMLElement option =

        Some
        <| details {
            appendChild (Html.summary { appendChild (Html.h2 { innerText "ヒント:" }) })

            appendChild (
                p {
                    innerHTML
                        $"""ある2進数に足すと桁が1つ上がる、最も小さい数のことを、<br>
                元の2進数に対する<span class="complement marker">「2の補数」</span>と呼びます。"""
                }
            )

            appendChild (
                p {
                    innerHTML
                        $"""たとえば、4ビットの2進数 1010<sub>(2)</sub> に 0110<sub>(2)</sub></span> を足すと<br>
                1桁上がって5ビットの2進数 10000<sub>(2)</sub> になります。<br>
                この 0110<sub>(2)</sub> を、元の 1010<sub>(2)</sub> に対する2の補数と呼びます。"""
                }
            )

            appendChild (
                p {
                    innerHTML
                        $"""2の補数は、<span class="complement marker">2進数の負の数を表すのに使われます。</sub></span><br>
                        1010<sub>(2)</sub> (=10<sub>(10)</sub>) の2の補数 0110<sub>(2)</sub> は-10<sub>(10)</sub> を表します。"""
                }
            )

            appendChild (
                p {
                    innerHTML
                        $"""2の補数を求めるには、元の2進数の各ビットの<br>
                        <span class="complement marker">0 と 1 を反転させた数に 1 を足します。</span><br>
                        今回の問題で説明すると、<br>
                        %s{bin'}<sub>(2)</sub> の 0 と 1 を反転させると<br>
                        %s{reversedBin}<sub>(2)</sub> になります。これに 1 を足したものが<br>
                        %s{bin'}<sub>(2)</sub> の2の補数です。"""
                }
            )
        }

    let hint' (x: int) : HTMLElement option =
        let b: string = fourBitsBinString x
        let r: string = b |> String.collect (fun c -> if c = '1' then "0" else "1")
        hint b r

    let question' (lastAnswers: int list) : int =
        newNumber (fun _ -> getRandomBetween 1 15) (fun n -> List.contains n lastAnswers = false)

    let error (question: int) =
        let q =
            let (Bin v) = bin (16 - question)
            v |> Fermata.String.padLeft 4 '0' |> escapeSpace

        newErrorMessageComplement q

    let history (correct: bool) (input: string) : string =
        let taggedInputValue = input |> Fermata.String.padLeft 4 '0'

        let historyClassName =
            if correct then
                "history history-correct"
            else
                "history history-wrong"

        $"""<span class ="%s{historyClassName}">%s{taggedInputValue}<sub>(2)</sub></span>"""

    let init () =
        // Initialization.
        document.title <- "補数 - taidalab"

        let header = document.querySelector "header"
        header.innerHTML <- ""
        Content.Common.header |> List.iter (header.appendChild >> ignore)
        header.className <- "complement"

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
            """<span>補数 - </span><span translate="no">taidalab</span>"""

        (document.querySelector "main").innerHTML <- EndlessBinary.Course.main help
        (document.querySelector "main").className <- "complement"
        (document.querySelector "#questionArea").innerHTML <- question

        let sourceRadix = 2
        let destinationRadix = 2

        let initNumber = getRandomBetween 1 15
        let initBin = fourBitsBinString initNumber
        let reversedBin = initBin |> String.collect (fun c -> if c = '1' then "0" else "1")

        (document.getElementById "questionSpan").innerText <- initBin
        (document.getElementById "srcRadix").innerText <- sprintf "(%d)" sourceRadix
        (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
        (document.getElementById "hintArea").innerHTML <- ""
        Option.iter ((document.getElementById "hintArea").appendChild >> ignore) (hint initBin reversedBin)

        let f =
            fun (e: Event) ->
                e.preventDefault ()

                exec
                    Bin.validate
                    error
                    Bin.toDec
                    history
                    question'
                    fourBitsBinString
                    ((-) 16)
                    hint'
                    (fun _ -> ())
                    10
                    [ initNumber ]
                    (16 - initNumber)

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

        document.onkeydown <- (fun (e: KeyboardEvent) -> Course.keyboardshortcut e)
