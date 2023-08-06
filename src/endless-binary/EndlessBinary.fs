// taidalab Version 4.3.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Fermata
open Fermata.RadixConversion

module EndlessBinary =
    module Home =
        let main =
            """
            <form class="button-container">
                <button type="button" id="buttonED2B1" class="btn course-button-d2b1 display-order-1">10進数→2進数 (1)</button>
                <button type="button" id="buttonED2B2" class="btn course-button-d2b2 display-order-2">10進数→2進数 (2)</button>
                <button type="button" id="buttonEB2D1" class="btn course-button-b2d1 display-order-3">2進数→10進数 (1)</button>
                <button type="button" id="buttonEB2D2" class="btn course-button-b2d2 display-order-4">2進数→10進数 (2)</button>
                <button type="button" id="buttonEPOT1" class="btn course-button-pot1 display-order-5">2のn乗</button>
                <button type="button" id="buttonEPOT2" class="btn course-button-pot2 display-order-6">2のn乗-1</button>
                <button type="button" id="buttonEBAD" class="btn course-button-add display-order-7">加算</button>
                <button type="button" id="buttonEBSB" class="btn course-button-sub display-order-8">減算</button>
                <button type="button" id="buttonECMP" class="btn course-button-cmp display-order-9">補数</button>
                <button type="button" id="buttonED2H" class="btn course-button-d2h display-order-10">10進数→16進数</button>
                <button type="button" id="buttonEH2D" class="btn course-button-d2h display-order-11">16進数→10進数</button>
            </form>"""

    module Course =
        let main help colorClass =
            $"""
            <span id="questionArea" class="question-area"></span>
            <span id="helpButton" class="material-symbols-outlined help-button">
                help
            </span>
            <form id="inputArea" class="input-area" autocomplete="off">
                <input type="text" id="numberInput" class="number-input display-order-1 mono regular">
                <span id="binaryRadix" class="binary-radix display-order-2"></span>
                <button type="button" id="submitButton" class="submit-button display-order-3 d2b-button">確認</button>
                <div id="hintArea" class="hint-area display-order-4"></div>
                <div id="errorArea" class="error-area display-order-5"></div>
            </form>
            <div class="history-area">
                結果:
                <div class="history-indented mono regular">
                    <span id="outputArea"></span>
                </div>
            </div>
            <div id="helpWindow" class="help-window">
                %s{help}
                <p class="%s{colorClass}">このヘルプは、他の場所をクリックすると消えます。</p>
            </div>"""

        let main404 =
            """
            <span id="questionArea" class="question-area"></span>
            <span id="helpButton" class="material-symbols-outlined help-button">
                help
            </span>
            <form id="inputArea" class="input-area" autocomplete="off">
                <input type="text" id="numberInput" class="number-input display-order-1 mono regular">
                <span id="binaryRadix" class="binary-radix display-order-2"></span>
                <button type="button" id="submitButton" class="submit-button display-order-3 d2b-button">確認</button>
                <div id="hintArea" class="hint-area display-order-4"></div>
                <div id="errorArea" class="error-area display-order-5"></div>
            </form>
            <div class="history-area">
                結果:
                <div class="history-indented mono regular">
                    <span id="outputArea"></span>
                </div>
            </div>"""

    let newErrorMessageBin answer input (error: Errors.Errors) =
        match error with
        | Errors.EmptyString
        | Errors.NullOrEmpty -> sprintf """<span class="warning">%s の2進法表記を入力してください。</span>""" answer
        | Errors.WrongFormat -> sprintf """<span class="warning">'%s' は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>""" input
        | Errors.OutOfRange ->
            sprintf """<span class="warning">'%s' は入力できる数値の範囲を越えています。入力できるのは xxx ~ yyy の間です。</span>""" input

    let newErrorMessageDec answer input (error: Errors.Errors) =
        match error with
        | Errors.EmptyString
        | Errors.NullOrEmpty -> sprintf """<span class="warning">%s の10進法表記を入力してください。</span>""" answer
        | Errors.WrongFormat ->
            sprintf """<span class="warning">'%s' は10進数ではありません。使えるのは半角の 0123456789 のみです。</span>""" input
        | Errors.OutOfRange ->
            sprintf """<span class="warning">'%s' は入力できる数値の範囲を越えています。入力できるのは xxx ~ yyy の間です。</span>""" input

    let newErrorMessageHex answer input (error: Errors.Errors) =
        match error with
        | Errors.EmptyString
        | Errors.NullOrEmpty -> sprintf """<span class="warning">%s の16進法表記を入力してください。</span>""" answer
        | Errors.WrongFormat ->
            sprintf """<span class="warning">'%s' は16進数ではありません。使えるのは半角の 0123456789ABCDEF のみです。</span>""" input
        | Errors.OutOfRange ->
            sprintf """<span class="warning">'%s' は入力できる数値の範囲を越えています。入力できるのは xxx ~ yyy の間です。</span>""" input

    let newHistory correct input destination_radix converted_input source_radix =
        let historyClassName = if correct then "history-correct" else "history-wrong"

        sprintf
            "<span class =\"%s\">%s<sub>(%d)</sub> = %s<sub>(%d)</sub></span>"
            historyClassName
            input
            destination_radix
            converted_input
            source_radix

    let splitBinaryStringBy digit str =
        str |> String.chunkBySizeRight digit |> Seq.toList |> String.concat " "

    open Browser.Dom

    let setColumnAddition number1 number2 =
        let bin1 = number1 |> Dec.toBin |> Seq.map string |> Seq.padLeft 8 ""

        let bin2 = number2 |> Dec.toBin |> Seq.map string |> Seq.padLeft 8 ""
        //printfn "%s" bin1
        //printfn "%s" bin2

        bin1
        |> Seq.iteri (fun i x ->
            $"firstRowDigit%d{8 - i}"
            |> document.getElementById
            |> fun elm -> elm.innerText <- x)

        bin2
        |> Seq.iteri (fun i x ->
            $"secondRowDigit%d{8 - i}"
            |> document.getElementById
            |> fun elm -> elm.innerText <- x)

    let delayMs index = index * 2500 - 500 |> abs

    let numOpt radix num = (Some radix, Some 1, Some num, None)

    let divRemOpt divisor divRem =
        match divRem |> List.rev with
        | [] -> [ (None, None, None, None) ]
        | h :: t ->
            let inner_h = h |> (fun (x, y) -> (None, None, Some x, Some y))
            let inner_t = t |> List.map (fun (x, y) -> (Some divisor, Some 1, Some x, Some y))
            inner_h :: inner_t |> List.rev
