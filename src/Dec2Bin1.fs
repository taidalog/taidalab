// taidalab Version 1.6.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System
open System.Text.RegularExpressions
open Browser.Dom
open Taidalab.Common

module Dec2Bin1 =

    let countOneBit binaryString =
        let bitCount = Regex.Matches(binaryString, "1")
        if bitCount = null then
            0
        else
            bitCount.Count


    let devideIntoPowerOfTwo (number : int) =
        let getMaxPowerOfTwo (number : int) =
            let indexNumber = Math.Log(double number, 2.0) |> int |> double
            Math.Pow(2.0, indexNumber) |> int

        let rec loop acc number =
            match number with
            | 0 -> acc
            | 1 -> acc @ [1]
            | _ ->
                let max = getMaxPowerOfTwo number
                loop (acc @ [max]) (number - max)

        loop [] number


    let rec repeatDivision dividend divisor =
        let quotient = int (dividend / divisor)
        let remainder = dividend - (quotient * divisor)
        if quotient < divisor then
            [(quotient, remainder)]
        else
            [(quotient, remainder)] @ repeatDivision quotient divisor


    let newColumnAddition answer quotients_and_remainders =
        let first =
            sprintf """2<span class="column-addition-row">%s</span>""" (answer |> string |> padStart " " 3 |> escapeSpace)
        let body =
            quotients_and_remainders
            |> List.rev
            |> List.tail
            |> List.rev
            |> List.map (fun ((q : int), r) -> sprintf """2<span class="column-addition-row">%s</span>...%d""" (q |> string  |> padStart " " 3 |> escapeSpace) r)
        let foot =
            quotients_and_remainders
            |> List.rev
            |> List.head
            |> (fun ((q : int), r) -> sprintf """<span class="column-addition-row-last">%s</span>...%d""" (q |> string |> padStart " " 5 |> escapeSpace) r)
        first :: (body @ [foot]) |> List.reduce (fun x  y -> sprintf "%s<br>%s" x y)


    let newHintRepeatDivision number quotients_and_remainders =
        let msg = """
            <div class="history-indented">
                <p>
                    10進数を、商が 1 になるまで 2 で割り続けます。<br>
                    この時、余りを商の右に書いておきます。<br>
                    商と余りを下から順に繋げると、2進数になります。
                </p>
            </div>
            <div class="history-indented column-addition-area">"""
        let columnAddition = newColumnAddition number quotients_and_remainders
        sprintf "%s%s</div>" msg columnAddition


    let newHintRepeatAddition number (power_of_twos : int list) =
        let largerNumber = power_of_twos.[0]
        let smallerNumber = power_of_twos.[1]
        let hintFormat = """
            <p class="history-indented">
                {0}<sub>(10)</sub> 以下で最大の2の累乗は {1}<sub>(10)</sub><br>
                {0}<sub>(10)</sub> - {1}<sub>(10)</sub> = {2}<sub>(10)</sub><br>
                {2}<sub>(10)</sub> 以下で最大の2の累乗は {3}<sub>(10)</sub><br>
                {2}<sub>(10)</sub> - {3}<sub>(10)</sub> = {4}<sub>(10)</sub><br>
                よって、{0}<sub>(10)</sub> = {1}<sub>(10)</sub> + {3}<sub>(10)</sub><br>
                または、{0}<sub>(10)</sub> = 2<sup>{5}</sup><sub>(10)</sub> + 2<sup>{6}</sup><sub>(10)</sub>
            </p>"""
        let hint = String.Format(hintFormat, number, largerNumber, number - largerNumber, smallerNumber, number - largerNumber - smallerNumber, string (int (Math.Log(double largerNumber, 2.0))), string (int (Math.Log(double smallerNumber, 2.0))))
        //printfn "%s" hint
        hint


    let newHint number quotients_and_remainders power_of_twos =
        """<details><summary>ヒント: </summary><h2>考え方 1</h2>""" + newHintRepeatDivision number quotients_and_remainders + """<h2>考え方 2</h2>""" + newHintRepeatAddition number power_of_twos + """</details>"""


    let rec checkAnswer answer (last_answers : int list) =
        // Getting the user input.
        let numberInput = document.getElementById "numberInput" :?> Browser.Types.HTMLInputElement
        let bin = escapeHtml numberInput.value
        printfn "%s" bin
        
        numberInput.focus()
        
        // Making an error message.
        let errorMessage = newErrorMessageBin answer bin
        (document.getElementById "errorArea").innerHTML <- errorMessage
        
        // Exits when the input was invalid.
        if errorMessage <> "" then
            ()
        else
            // Converting the input in order to use in the history message.
            let binaryDigit = 8
            let destinationRadix = 2
            let taggedBin = padWithZero binaryDigit bin |> colorLeadingZero
            let dec = toDecimal bin
            printfn "%s" taggedBin
            printfn "%d" dec
            
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
                newHistory (dec = int answer) taggedBin destinationRadix spacePaddedDec sourceRadix
                |> (fun x -> concatinateStrings "<br>" x outputArea.innerHTML)
            printfn "%s" historyMessage
            outputArea.innerHTML <- historyMessage
            
            if dec <> int answer then
                ()
            else
                // Making the next question.
                let mutable nextNumber = last_answers.[0]
                let mutable nextBin = "0"
                
                printfn "last_answers : %A" last_answers

                while List.contains nextNumber last_answers do
                    while countOneBit nextBin <> 2 do
                        nextNumber <- getRandomBetween 0 192
                        nextBin <- toBinary nextNumber
                    printfn "Next answer : %d" nextNumber
                    printfn "last_answers contains next answer : \t%b" (List.contains nextNumber last_answers)
                
                let quotientsAndRemainders = repeatDivision nextNumber 2
                printfn "%A" quotientsAndRemainders
                
                let powerOfTwos = devideIntoPowerOfTwo nextNumber
                printfn "%A" powerOfTwos

                let nextHint = newHint nextNumber quotientsAndRemainders powerOfTwos
                printfn "%s" nextHint
                
                (document.getElementById "questionSpan").innerText <- string nextNumber
                (document.getElementById "hintArea").innerHTML <- nextHint
                
                numberInput.value <- ""

                // Updating `lastAnswers`.
                // These numbers will not be used for the next question.
                let answersToKeep = Math.Min(10, List.length last_answers + 1)
                let lastAnswers = (nextNumber :: last_answers).[0..(answersToKeep - 1)]

                // Setting the next answer to the check button.
                (document.getElementById "submitButton").onclick <- (fun _ -> checkAnswer (string nextNumber) lastAnswers)


    let init ()  =
        // Initialization.
        printfn "Initialization starts."

        let mutable initNumber = 0
        let mutable initBin = "0"

        while countOneBit initBin <> 2 do
            initNumber <- getRandomBetween 0 192
            initBin <- toBinary initNumber

        let quotientsAndRemainders = repeatDivision initNumber 2
        let powerOfTwos = devideIntoPowerOfTwo initNumber
        printfn "initNumber : %d" initNumber
        printfn "quotients and remainders : %A" quotientsAndRemainders
        printfn "power of twos : %A" powerOfTwos

        let sourceRadix = 10
        let destinationRadix = 2

        (document.getElementById "questionSpan").innerHTML <- string initNumber
        (document.getElementById "srcRadix").innerHTML <- sprintf "(%d)" sourceRadix
        (document.getElementById "dstRadix").innerHTML <- string destinationRadix
        (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
        (document.getElementById "hintArea").innerHTML <- newHint initNumber quotientsAndRemainders powerOfTwos
        (document.getElementById "submitButton").onclick <- (fun _ -> checkAnswer (string initNumber) [initNumber])
        
        printfn "Initialization ends."
