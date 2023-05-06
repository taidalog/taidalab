// taidalab Version 4.1.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
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
    module Dec2Hex =
        let help = """
            10進数から16進数への変換をエンドレスで練習できます。<br>
            出題範囲は n (0&le;n&le;255) です。<br>
            ヒント付きなので、考え方も身に付けられます。
            """

        let rec repeatDivision dividend divisor =
            let quotient = int (dividend / divisor)
            let remainder = dividend - (quotient * divisor)
            if quotient < divisor then
                [(quotient, remainder)]
            else
                [(quotient, remainder)] @ repeatDivision quotient divisor


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
                (numOpt divisor num) :: (divRemOpt divisor (repeatDivision num divisor))
            divRems
            |> List.mapi (fun i (a, b, c, d) ->
                Option.map // divisor
                    (fun x ->
                        Svg.text
                            0
                            (fontSize * (i + 1))
                            0.
                            (sprintf "%d%s" x (Svg.animateOpacity (i |> delayMs |> (fun x -> if i = 0 then x + 1000 else x + 2000)) 500)))
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
                                (double fontSize / 2.* 4.8))
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
                            (sprintf "%s%s" (x |> string |> (String.padLeft 3 ' ') |> escapeSpace) (Svg.animateOpacity (i |> delayMs) 500)))
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
            |> (Svg.frame
                    (fontSize / 2 * 11)
                    (divRems |> List.length |> (fun x -> fontSize * (x + 1))))
        

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
                <div id="hint1" class="history-indented column-addition-area">
                    %s
                </div>
                """
                (newHintAnimation divisor number fontSize)


        let newHint divisor number fontSize =
            sprintf
                """
                <details id="hintDetails"><summary>ヒント: </summary>
                    <h2>考え方 1</h2>
                    %s
                </details>
                """
                (newHintRepeatDivision divisor number fontSize)


        let rec checkAnswer answer (last_answers : int list) =
            // Getting the user input.
            let numberInput = document.getElementById "numberInput" :?> HTMLInputElement
            let input = numberInput.value |> escapeHtml
            let hex: Result<string,Errors.Errors> = input |> Hex.validate
            //printfn "hex: %A" hex
            
            numberInput.focus()
            
            match hex with
            | Error (error: Errors.Errors) ->
                // Making an error message.
                (document.getElementById "errorArea").innerHTML <- newErrorMessageHex answer input error
            | Ok (hex: string) ->
                (document.getElementById "errorArea").innerHTML <- ""
                // Converting the input in order to use in the history message.
                let hexDigit = 2
                let destinationRadix = 16
                let taggedHex = hex |> padWithZero hexDigit |> colorLeadingZero
                let dec = Hex.toDec hex
                //printfn "taggedHex: %s" taggedHex
                //printfn "dec: %d" dec
                
                let decimalDigit = 3
                let spacePaddedDec =
                    dec
                    |> string
                    |> Fermata.String.padLeft decimalDigit ' '
                    |> escapeSpace
                
                // Making a new history and updating the history with the new one.
                let sourceRadix = 10
                let outputArea = document.getElementById "outputArea" :?> HTMLParagraphElement
                let historyMessage =
                    newHistory (dec = int answer) taggedHex destinationRadix spacePaddedDec sourceRadix
                    |> (fun x -> concatinateStrings "<br>" [x; outputArea.innerHTML])
                //printfn "historyMessage: \n%s" historyMessage
                outputArea.innerHTML <- historyMessage
                
                if dec <> int answer then
                    ()
                else
                    // Making the next question.
                    //printfn "last_answers : %A" last_answers
                    
                    let nextNumber =
                        newNumber
                            (fun _ -> getRandomBetween 0 255)
                            (fun n -> List.contains n last_answers = false)
                    //printfn "nextNumber : %d" nextNumber
                    //printfn "List.contains nextNumber last_answers : %b" (List.contains nextNumber last_answers)

                    let quotientsAndRemainders = repeatDivision nextNumber 16
                    //printfn "quotientsAndRemainders: %A" quotientsAndRemainders

                    let nextHint = newHint 16 nextNumber 20
                    //printfn "nextHint: \n%s" nextHint
                    
                    (document.getElementById "questionSpan").innerText <- string nextNumber
                    (document.getElementById "hintArea").innerHTML <- nextHint
                    (document.getElementById "hint1").onclick <- (fun _ ->
                        (document.getElementById "hint1").innerHTML <-
                            newHintAnimation 16 nextNumber 20
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
            //printfn "Initialization starts."

            let initNumber = getRandomBetween 0 255
            //printfn "initNumber : %d" initNumber

            let quotientsAndRemainders = repeatDivision initNumber 16
            //printfn "quotients and remainders : %A" quotientsAndRemainders

            let sourceRadix = 10
            let destinationRadix = 16

            (document.getElementById "questionSpan").innerText <- string initNumber
            (document.getElementById "srcRadix").innerText <- sprintf "(%d)" sourceRadix
            (document.getElementById "dstRadix").innerText <- string destinationRadix
            (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
            (document.getElementById "hintArea").innerHTML <- newHint 16 initNumber 20
            (document.getElementById "hint1").onclick <- (fun _ ->
                (document.getElementById "hint1").innerHTML <-
                    newHintAnimation 16 initNumber 20
                (document.getElementById "hintDetails").setAttribute ("open", "true"))
            (document.getElementById "submitButton").onclick <- (fun _ ->
                checkAnswer (string initNumber) [initNumber]
                false)
            (document.getElementById "inputArea").onsubmit <- (fun _ ->
                checkAnswer (string initNumber) [initNumber]
                false)
            
            (document.getElementById "helpButton").onclick <- (fun _ ->
                ["helpWindow"; "helpBarrier"]
                |> List.iter (fun x -> (document.getElementById x).classList.toggle "active" |> ignore))
            
            (document.getElementById "helpBarrier").onclick <- (fun _ ->
                ["helpWindow"; "helpBarrier"]
                |> List.iter (fun x -> (document.getElementById x).classList.remove "active" |> ignore))
            
            //printfn "Initialization ends."
