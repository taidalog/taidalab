// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2026 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab.EndlessBinary

open Browser.Dom
open Browser.Types
open Taidalab
open Taidalab.Html
open Taidalab.Number
open Taidalab.Text
open Taidalab.EndlessBinary.Course
open Fermata
open Fermata.RadixConversion

module Dec2Hex =
    let help =
        """
        10進数から16進数への変換をエンドレスで練習できます。<br>
        出題範囲は n (0&le;n&le;255) です。<br>
        ヒント付きなので、考え方も身に付けられます。
        """

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
                    (fontSize / 2 * 2 + 4)
                    ((fontSize * i) + 6)
                    (fontSize / 2)
                    (double fontSize * 0.4)
                    (double fontSize * 0.8)
                    (double fontSize / 2. * 4.8)

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
                x (fontSize / 2 * 3)
                y (fontSize * (i + 1))
                setAttribute "opacity" "0"
                innerHTML (x' |> string |> String.padLeft 3 ' ' |> f)
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
                x (fontSize / 2 * 7)
                y (fontSize * (i + 1))
                setAttribute "opacity" "0"
                textContent $"…%d{x'}"
                appendChild anim
            }

        let divRems: (int option * int option * int option * int option) list =
            (numOpt divisor num)
            :: (divRemOpt divisor (Dec2Bin1.repeatDivision num divisor))

        let arrowAnim: SVGPathElement =
            let anim =
                let dur' = delayMs ((List.length divRems) - 1) + 1500

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
                    $"M %f{fsz / 2. * 4.},%f{float (fontSize * (len - 1) + 6)} h %f{fsz / 2. * 4.} v %f{(17.85 * float (len) - 35.) * -1.} h -7 l 16,-20 16,20 h -7 v %f{17.85 * float (len) - 15.} h %f{-58.} Z"

                stroke "#1e3330"
                strokeWidth 1
                fill "#95feec"
                setAttribute "opacity" "0"
                appendChild anim
            }

        let s: SVGSVGElement =
            Svg.svg {
                id "hintSvg"
                width (fontSize / 2 * 11)
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

    let newHintRepeatDivision (divisor: int) (number: int) (fontSize: int) : HTMLElement list =
        [ p {
              innerText
                  $"""10進法で表現した数を2進法で表現しなおすには、<br>
                10進法の数を、商が 16 未満になるまで 16 で割り続けます。<br>
                この時、余りを商の右に書いておきます。<br>
                商と余りのうち、10~15 をそれぞれ A~F に変換し、<br>
                下から順に繋げると、16進法の数になります。<br>
                ※この下の筆算をクリックすると動きます。"""
          }
          div {
              id "hint1"
              className "mono"
              appendChild (newHintAnimation divisor number fontSize)
          } ]

    let newHint (divisor: int) (number: int) (fontSize: int) : HTMLElement =
        let det =
            details {
                id "hintDetails"
                appendChild (summary { appendChild (h2 { innerText "ヒント:" }) })
                appendChild (h3 { innerText "考え方 1" })
            }

        (newHintRepeatDivision divisor number fontSize)
        |> List.iter (det.appendChild >> ignore)

        det

    let hint (number: int) : HTMLElement option = newHint 16 number 20 |> Some

    let question (lastNumbers: int list) : int =
        newNumber (fun _ -> getRandomBetween 0 255) (fun n -> List.contains n lastNumbers = false)

    let error (question: int) =
        question |> string |> newErrorMessageHex

    let history (correct: bool) (input: string) : string =
        let v =
            match input |> Hex.validate with
            | Error _ -> -1
            | Ok v ->
                Hex.toDec v
                |> function
                    | Dec v -> v

        let colored = input |> Fermata.String.padLeft 4 ' ' |> escapeSpace
        let spacePadded = v |> string |> Fermata.String.padLeft 3 ' ' |> escapeSpace
        newHistory correct colored 16 spacePadded 10

    let additional _ : unit = ()

    let exec' (lastNumbers: int list) (answer: int) : unit =
        exec Hex.validate error Hex.toDec history question string id hint additional 10 lastNumbers answer

    let init'
        (questionGenerator: int list -> int)
        (hintGenerator: int -> HTMLElement option)
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
        (document.getElementById "hintArea").innerHTML <- ""
        Option.iter ((document.getElementById "hintArea").appendChild >> ignore) (hintGenerator initNumber)

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

    let init () : unit =
        document.title <- "10進数→16進数 - taidalab"

        let header = document.querySelector "header"
        header.innerHTML <- ""
        Content.Common.header |> List.iter (header.appendChild >> ignore)
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

        (document.querySelector "main").innerHTML <- EndlessBinary.Course.main help
        (document.querySelector "main").className <- "dec2hex"

        Content.Common.question
        |> List.iter ((document.querySelector "#questionArea").appendChild >> ignore)

        init' question hint additional 10 16 Course.keyboardshortcut
