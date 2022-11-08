// taidalab Version 3.1.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System
open Browser.Dom
open Taidalab.Common

module Dec2Hex =

    let rec repeatDivision dividend divisor =
        let quotient = int (dividend / divisor)
        let remainder = dividend - (quotient * divisor)
        if quotient < divisor then
            [(quotient, remainder)]
        else
            [(quotient, remainder)] @ repeatDivision quotient divisor


    let hint content=
        sprintf """<details id="hintDetails"><summary>ヒント: </summary>%s</details>""" content
    

    let newAnimationStyle name duration timing delay iteration fill state =
        sprintf
            """animation-name: %s; animation-duration: %s; animation-timing-function: %s; animation-delay: %s; animation-iteration-count: %s; animation-fill-mode: %s; animation-play-state: %s;"""
            name
            duration
            timing
            delay
            iteration
            fill
            state


    let newColumnAddition answer quotients_and_remainders =
        let indexedList =
            quotients_and_remainders
            |> List.mapi (fun i (q, r) -> (i, q, r))
        let first =
            sprintf """16<span class="column-addition-row">%s</span>""" (answer |> string |> padStart " " 3 |> escapeSpace)
        let body =
            indexedList
            |> List.rev
            |> List.tail
            |> List.rev
            |> List.map (fun (i, (q : int), r) ->
                sprintf
                    """<span id="c%d" style="opacity: 0; %s">16<span style="text-decoration: underline;">)</span></span><span id="a%d" style="opacity: 0; %s"><span style="%s">%s</span>...%d</span>"""
                    i
                    (newAnimationStyle "fade-in" "1s" "ease-in" (((i * 2 + 1) |> string) + "s") "1" "forwards" "running")
                    i
                    (newAnimationStyle "fade-in" "1s" "ease-in" (((i * 2) |> string) + "s") "1" "forwards" "running")
                    (newAnimationStyle "draw-line" "1s" "ease-in" (((i * 2 + 1) |> string) + "s") "1" "forwards" "running")
                    (q |> string  |> padStart " " 3 |> escapeSpace)
                    r)
        let foot =
            indexedList
            |> List.last
            |> (fun (i, (q : int), r) ->
                sprintf
                    """<span id="a%d" style="opacity: 0; %s"><span class="column-addition-row-last">%s</span>...%d</span>"""
                    i
                    (newAnimationStyle "fade-in" "1s" "ease-in" (((i * 2) |> string) + "s") "1" "forwards" "running")
                    (q |> string |> padStart " " 5 |> escapeSpace)
                    r)
        first :: (body @ [foot])
        |> List.reduce (fun x  y -> sprintf "%s<br>%s" x y)


    let newHintRepeatDivision number quotients_and_remainders =
        sprintf
            """
            <div class="history-indented">
                <p>
                    10進数を、商が 16 未満になるまで 16 で割り続けます。<br>
                    この時、余りを商の右に書いておきます。<br>
                    商と余りのうち、10~15 をそれぞれ A~F に変換し、<br>
                    下から順に繋げると、16進数になります。<br>
                    ※この下の筆算をクリックすると動きます。
                </p>
            </div>
            <div id="hint1" class="history-indented column-addition-area">
                %s
            </div>
            """
            (newColumnAddition number quotients_and_remainders)


    let newHint number quotients_and_remainders =
        sprintf
            """
            <details id="hintDetails"><summary>ヒント: </summary>
                <h2>考え方 1</h2>
                %s
            </details>
            """
            (newHintRepeatDivision number quotients_and_remainders)


    let rec checkAnswer answer (last_answers : int list) =
        // Getting the user input.
        let numberInput = document.getElementById "numberInput" :?> Browser.Types.HTMLInputElement
        let hex = escapeHtml numberInput.value
        printfn "hex: %s" hex
        
        numberInput.focus()
        
        // Making an error message.
        let errorMessage = newErrorMessageHex answer hex
        (document.getElementById "errorArea").innerHTML <- errorMessage
        
        // Exits when the input was invalid.
        if errorMessage <> "" then
            ()
        else
            // Converting the input in order to use in the history message.
            let hexDigit = 2
            let destinationRadix = 16
            let taggedHex = padWithZero hexDigit hex |> colorLeadingZero
            let dec = hexToDecimal hex
            printfn "taggedHex: %s" taggedHex
            printfn "dec: %d" dec
            
            let decimalDigit = 3
            let spacePaddedDec =
                dec
                |> string
                |> padStart " " decimalDigit
                |> escapeSpace
            
            // Making a new history and updating the history with the new one.
            let sourceRadix = 10
            let outputArea = document.getElementById "outputArea" :?> Browser.Types.HTMLParagraphElement
            let historyMessage =
                newHistory (dec = int answer) taggedHex destinationRadix spacePaddedDec sourceRadix
                |> (fun x -> concatinateStrings "<br>" x outputArea.innerHTML)
            printfn "historyMessage: \n%s" historyMessage
            outputArea.innerHTML <- historyMessage
            
            if dec <> int answer then
                ()
            else
                // Making the next question.
                printfn "last_answers : %A" last_answers
                
                let nextNumber =
                    newNumber
                        (fun _ -> getRandomBetween 0 255)
                        (fun n -> List.contains n last_answers = false)
                printfn "nextNumber : %d" nextNumber
                printfn "List.contains nextNumber last_answers : %b" (List.contains nextNumber last_answers)

                let quotientsAndRemainders = repeatDivision nextNumber 16
                printfn "quotientsAndRemainders: %A" quotientsAndRemainders

                let nextHint = newHint nextNumber quotientsAndRemainders
                printfn "nextHint: \n%s" nextHint
                
                (document.getElementById "questionSpan").innerText <- string nextNumber
                (document.getElementById "hintArea").innerHTML <- nextHint
                (document.getElementById "hint1").onclick <- (fun _ ->
                    (document.getElementById "hint1").innerHTML <-
                        newColumnAddition nextNumber quotientsAndRemainders
                    (document.getElementById "hintDetails").setAttribute ("open", "true"))
                
                numberInput.value <- ""

                // Updating `lastAnswers`.
                // These numbers will not be used for the next question.
                let answersToKeep = Math.Min(10, List.length last_answers + 1)
                let lastAnswers = (nextNumber :: last_answers).[0..(answersToKeep - 1)]

                // Setting the next answer to the check button.
                (document.getElementById "submitButton").onclick <- (fun _ ->
                    checkAnswer (string nextNumber) lastAnswers
                    false)
                (document.getElementById "inputArea").onsubmit <- (fun _ ->
                    checkAnswer (string nextNumber) lastAnswers
                    false)


    let init ()  =
        // Initialization.
        printfn "Initialization starts."

        let initNumber = getRandomBetween 0 255
        printfn "initNumber : %d" initNumber

        let quotientsAndRemainders = repeatDivision initNumber 16
        printfn "quotients and remainders : %A" quotientsAndRemainders

        let sourceRadix = 10
        let destinationRadix = 16

        (document.getElementById "questionSpan").innerText <- string initNumber
        (document.getElementById "srcRadix").innerText <- sprintf "(%d)" sourceRadix
        (document.getElementById "dstRadix").innerText <- string destinationRadix
        (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
        (document.getElementById "hintArea").innerHTML <- newHint initNumber quotientsAndRemainders
        (document.getElementById "hint1").onclick <- (fun _ ->
            (document.getElementById "hint1").innerHTML <-
                newColumnAddition initNumber quotientsAndRemainders
            (document.getElementById "hintDetails").setAttribute ("open", "true"))
        (document.getElementById "submitButton").onclick <- (fun _ ->
            checkAnswer (string initNumber) [initNumber]
            false)
        (document.getElementById "inputArea").onsubmit <- (fun _ ->
            checkAnswer (string initNumber) [initNumber]
            false)
        
        printfn "Initialization ends."
