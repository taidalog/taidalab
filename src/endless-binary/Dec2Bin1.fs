// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2025 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab.EndlessBinary

open System
open Browser.Dom
open Browser.Types
open Taidalab
open Taidalab.Number
open Taidalab.Text
open Taidalab.Html
open Taidalab.EndlessBinary.Course
open Fermata
open Fermata.RadixConversion

module Dec2Bin1 =
    let help =
        """
        10進数から2進数への変換をエンドレスで練習できます。<br>
        出題範囲は n (0&le;n&le;255) で、2の累乗の数同士の和になっています。<br>
        ヒント付きなので、考え方も身に付けられます。
        """

    let devideIntoPowerOfTwo (x: int) : int list =
        let rec loop acc x =
            match x with
            | 0 -> acc |> List.rev
            | 1 -> 1 :: acc |> List.rev
            | _ ->
                let max = x |> log2 |> int |> pown 2
                loop (max :: acc) (x - max)

        loop [] x

    [<TailCall>]
    let rec repeatDivision (dividend: int) (divisor: int) : (int * int) list =
        let quotient, remainder = Math.DivRem(dividend, divisor)

        if quotient < divisor then
            [ (quotient, remainder) ]
        else
            (quotient, remainder) :: repeatDivision quotient divisor

    let newHintAnimation (divisor: int) (num: int) (fontSize: int) : SVGSVGElement =
        let divisorf (i: int) (x: int) : SVGTextElement =

            let anim =
                let dur' = delayMs i + if i = 0 then 1000 else 2000

                Svg.animate {
                    attributeName "opacity"
                    values [ 0.; 0.; 1. ]
                    keyTimes [ 0.; float (1 - 500 / dur'); 1. ]
                    begin' "anim0.begin"
                    dur $"%d{dur'}ms"
                    repeatCount 1
                    fill "freeze"
                }

            let x' = x

            Svg.text {
                x 0
                y (fontSize * (i + 1))
                setAttribute "opacity" "0"
                textContent (string x')
                appendChild anim
            }

        let line (i: int) _ : SVGPathElement =

            let anim =
                let dur' = delayMs i + if i = 0 then 500 else 1500

                Svg.animate {
                    attributeName "opacity"
                    values [ 0.; 0.; 1. ]
                    keyTimes [ 0.; float (1 - 500 / dur'); 1. ]
                    begin' "anim0.begin"
                    dur $"%d{dur'}ms"
                    repeatCount 1
                    fill "freeze"
                }

            let d' =
                sprintf
                    "M %d,%d q %d,%f 0,%f h %f"
                    (fontSize / 2 + 2)
                    (fontSize * i + 6)
                    (fontSize / 2)
                    (float fontSize * 0.4)
                    (float fontSize * 0.8)
                    (float fontSize / 2. * 4.8)

            Svg.path {
                d d'
                stroke "#000000"
                strokeWidth 1
                fill "none"
                setAttribute "opacity" "0"
                appendChild anim
            }

        let dividend (i: int) (x: int) : SVGTextElement =
            let anim =
                let dur' = delayMs i

                Svg.animate {
                    id (if i = 0 then "anim0" else "")
                    attributeName "opacity"
                    values [ 0.; 0.; 1. ]
                    keyTimes [ 0.; float (1 - 500 / dur'); 1. ]
                    begin' (if i = 0 then "0s;hintSvg.click" else "anim0.begin")
                    dur $"%d{dur'}ms"
                    repeatCount 1
                    fill "freeze"
                }

            let x' = x

            let f (x: string) =
                String.collect (fun c -> if c = ' ' then "<tspan> </tspan>" else string c) x

            Svg.text {
                x (fontSize / 2 * 2)
                y (fontSize * (i + 1))
                setAttribute "opacity" "0"
                innerHTML (x' |> string |> Fermata.String.padLeft 3 ' ' |> f)
                appendChild anim
            }

        let remainder (i: int) (x: int) : SVGTextElement =
            let anim =
                let dur' = delayMs i + 500

                Svg.animate {
                    attributeName "opacity"
                    values [ 0.; 0.; 1. ]
                    keyTimes [ 0.; float (1 - 500 / dur'); 1. ]
                    begin' "anim0.begin"
                    dur $"%d{dur'}ms"
                    repeatCount 1
                    fill "freeze"
                }

            let x' = x

            Svg.text {
                x (fontSize / 2 * 6)
                y (fontSize * (i + 1))
                setAttribute "opacity" "0"
                textContent $"…%d{x'}"
                appendChild anim
            }

        let divRems: (int option * int option * int option * int option) list =
            (numOpt divisor num) :: (divRemOpt divisor (repeatDivision num divisor))

        let arrowAnim: SVGPathElement =
            let anim =
                let dur' = delayMs (List.length divRems - 1) + 1500

                Svg.animate {
                    attributeName "opacity"
                    values [ 0.; 0.; 1. ]
                    keyTimes [ 0.; float (1 - 500 / dur'); 1. ]
                    begin' "anim0.begin"
                    dur $"%d{dur'}ms"
                    repeatCount 1
                    fill "freeze"
                }

            let fsz = float fontSize
            let len = List.length divRems

            Svg.path {
                d
                    $"M %f{fsz / 2. * 4.},%f{float (fontSize * (len - 1) + 6)} h %f{fsz / 2. * 3.} v %f{(17.85 * float len - 35.) * -1.} h -7 l 16,-20 16,20 h -7 v %f{17.85 * float len - 15.} h %f{-48.} Z"

                stroke "#191970"
                strokeWidth 1
                fill "#b0e0e6"
                setAttribute "opacity" "0"
                appendChild anim
            }

        let s: SVGSVGElement =
            Svg.svg {
                id "hintSvg"
                width (fontSize / 2 * 10)
                height (fontSize * (List.length divRems + 1))
                appendChild arrowAnim
            }

        divRems
        |> List.mapi (fun i (a, b, c, d) ->
            Option.map (divisorf i) a, Option.map (line i) b, Option.map (dividend i) c, Option.map (remainder i) d)
        |> List.iter (fun (a, b, c, d) ->
            (Option.iter (s.appendChild >> ignore) a)
            (Option.iter (s.appendChild >> ignore) b)
            (Option.iter (s.appendChild >> ignore) c)
            (Option.iter (s.appendChild >> ignore) d))

        s

    let newHintRepeatDivision (divisor: int) (number: int) : HTMLElement list =
        [ Html.p {
              innerText
                  "10進法で表現した数を2進法で表現しなおすには、\n10進法の数を、商が 1 になるまで 2 で割り続けます。\nこの時、余りを商の右に書いておきます。\n商と余りを下から順に繋げると、2進法の数になります。\n※この下の筆算をクリックすると動きます。"
          }
          Html.div {
              id "hint1"
              className "mono"
              appendChild (newHintAnimation divisor number 20)
          } ]

    let newHintRepeatAddition (dec': Dec) (power_of_twos: int list) : HTMLParagraphElement list =
        let additionDec = power_of_twos |> List.map string |> String.concat " + "

        let additionIndex =
            power_of_twos
            |> List.map (log2 >> truncate >> int)
            |> List.map (sprintf "2<sup>%d</sup>")
            |> String.concat " + "

        let additionBin =
            power_of_twos
            |> List.map bin
            |> List.map (function
                | Bin v -> $"%s{v}<sub>(2)</sub>")
            |> String.concat " + "

        let (Bin bin') = dec' |> Dec.toBin
        let (Dec number) = dec'

        [ p { innerText "10進法で表現した数を2進法で表現しなおすには、" }
          p {
              appendChild (
                  ol {
                      appendChild (li { innerText "10進法の数を「2<sup>n</sup> の数同士の足し算」に変換して、" })
                      appendChild (li { innerText "それぞれの 2<sup>n</sup> の数を2進法で表し、" })
                      appendChild (li { innerText "足し合わせる" })
                  }
              )
          }
          p { innerText "という方法もあります。" }
          p { innerHTML $"%d{number}<sub>(10)</sub> を 2<sup>n</sup> の数同士の足し算に変換すると" }
          p {
              className "hint-bgcolor-gray mono"
              innerHTML $"&nbsp;&nbsp;%s{additionDec}<br>= %s{additionIndex}"
          }
          p { innerText "になります。" }
          p {
              innerHTML
                  $"次に、それぞれの 2<sup>n</sup> の数を2進法で表します。\n2<sup>n</sup> の数を2進法で表すには、1 の後に 0 を n 個続けます。\nそのため、%s{additionIndex} は2進法で"
          }
          p {
              className "hint-bgcolor-gray mono"
              innerHTML $"&nbsp;&nbsp;%s{additionBin}<br>"
          }
          p { innerText "と表現できます。最後にこれを計算すると" }
          p {
              className "hint-bgcolor-gray mono"
              innerHTML $"&nbsp;&nbsp;%s{additionBin}<br>= %s{bin'}<sub>(2)</sub>"
          }
          p { innerText "になります。" } ]

    let hint (number: int) : HTMLElement option =
        let det = details { id "hintDetails" }
        let d = newHintRepeatDivision 2 number
        let a = newHintRepeatAddition (Dec number) (devideIntoPowerOfTwo number)
        det.appendChild (summary { appendChild (h2 { innerText "ヒント:" }) }) |> ignore
        det.appendChild (h3 { innerText "考え方 1" }) |> ignore
        d |> List.iter (det.appendChild >> ignore)
        det.appendChild (h3 { innerText "考え方 2" }) |> ignore
        a |> List.iter (det.appendChild >> ignore)
        Some det

    let newNumberWithTwoOne (min: int) (max: int) : int =
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

    let error (question: int) =
        question |> string |> newErrorMessageBin

    let history (correct: bool) (input: string) : string =
        match input |> Bin.validate with
        | Error _ -> ""
        | Ok v ->
            let (Dec d) = Bin.toDec v
            let colored = input |> Fermata.String.padLeft 8 ' ' |> escapeSpace
            let spacePadded = d |> string |> Fermata.String.padLeft 3 ' ' |> escapeSpace
            newHistory correct colored 2 spacePadded 10

    let additional _ : unit = ()

    let exec' (lastNumbers: int list) (answer: int) : unit =
        exec Bin.validate error Bin.toDec history (question 8) string id hint additional 10 lastNumbers answer

    let init'
        (questionGenerator: int list -> int)
        (hintGenerator: int -> HTMLElement option)
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
        (document.getElementById "hintArea").innerHTML <- ""
        Option.iter ((document.getElementById "hintArea").appendChild >> ignore) (hintGenerator initNumber)

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

    let init4 () : unit =
        init' (question 4) hint additional 10 2 exec' Course.keyboardshortcut

    let init () : unit =
        document.title <- "10進数→2進数 (1) - taidalab"

        let header = document.querySelector "header"
        header.innerHTML <- ""
        Content.Common.header |> List.iter (header.appendChild >> ignore)
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

        (document.querySelector "main").innerHTML <- EndlessBinary.Course.main help
        (document.querySelector "main").className <- "dec2bin"

        Content.Common.question
        |> List.iter ((document.querySelector "#questionArea").appendChild >> ignore)

        init' (question 8) hint additional 10 2 exec' Course.keyboardshortcut
