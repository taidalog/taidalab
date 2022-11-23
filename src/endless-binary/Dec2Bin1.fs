// taidalab Version 3.2.0
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


    let newNumberWithTwoOne () =
        let rec newTwoRandomNumbers min max =
            let rand = new Random()
            let index1 = rand.Next(min, max)
            let index2 = rand.Next(min, max)
            if index1 <> index2 then
                (index1, index2)
            else
                newTwoRandomNumbers min max
        newTwoRandomNumbers 0 7
        ||> (fun x y -> double x, double y)
        ||> (fun x y -> Math.Pow(2.0, x) + Math.Pow(2.0, y))
        |> int

        
    let delayMs index =
        index * 2500 - 500 |> abs

    let newSvgDivisor x y index option =
        Option.map
            (fun option -> Svg.text x y 0. (sprintf "%s%s" (string option) (Svg.animate "stroke" "ease-in" "" "" (index |> delayMs) 500 "1" "freeze")))
            option
    
    let newArrow x y width1 height1 width2 height2 beginMs =
        let d = sprintf "M %f,%f h %f v %f h -7 l 16,-20 16,20 h -7 v %f h %f Z" x y width1 height1 height2 width2
        Svg.path d "#0000ff" 1 "#aaddff" 0. (Svg.animateOpacity beginMs 500)
    
    let numOpt num =
        (Some 2, Some 1, Some num, None)
    
    let divRemOpt divisor divRem =
        match divRem |> List.rev with
        | [] -> [ (None, None, None, None) ]
        | h::t ->
            let inner_h =
                h |> (fun (x, y) -> (None, None, Some x, Some y))
            let inner_t =
                t |> List.map (fun (x, y) -> (Some divisor, Some 1, Some x, Some y))
            inner_h :: inner_t |> List.rev
    
    let newHintAnimation divisor num =
        let divRems =
            (numOpt num) :: (divRemOpt divisor (repeatDivision num divisor))
        divRems
        |> List.mapi (fun i (a, b, c, d) ->
            Option.map // divisor
                (fun x ->
                    Svg.text
                        0
                        (20 * (i + 1))
                        0.
                        (sprintf "%d%s" x (Svg.animateOpacity (i |> delayMs |> (fun x -> if i = 0 then x + 1000 else x + 2000)) 500)))
                a,
            Option.map // line
                (fun x ->
                    Svg.path
                        (sprintf "M 12,%d q 10,8 0,16 h 48" ((20 * i) + 6))
                        "#000000"
                        1
                        "none"
                        0.
                        (Svg.animateOpacity (i |> delayMs |> (fun x -> if i = 0 then x + 500 else x + 1500)) 500))
                b,
            Option.map // dividend
                (fun x ->
                    Svg.text
                        (20 / 2 * 2)
                        (20 * (i + 1))
                        0.
                        (sprintf "%s%s" (x |> string |> (padStart " " 3) |> escapeSpace) (Svg.animateOpacity (i |> delayMs) 500)))
                c,
            Option.map // remainder
                (fun x ->
                    Svg.text
                        (20 / 2 * 6)
                        (20 * (i + 1))
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
            (newArrow 40. (List.length divRems |> (fun x -> (20 * (x - 1)) + 6) |> double) 30. (List.length divRems |> double |> (fun x -> 17.85 * x - 35.) |> ((*) -1.)) -48. (17.85 * (List.length divRems |> double) - 15.) (List.length divRems - 1 |> delayMs |> ((+) 1500)))
        |> (Svg.frame
                (20 / 2 * 10)
                (divRems |> List.length |> (fun x -> (x + 1) * 20)))
    
    let hint content=
        sprintf """<details id="hintDetails"><summary>ヒント: </summary>%s</details>""" content

    let newHintRepeatDivision divisor number =
        sprintf
            """
            <div class="history-indented">
                <p>
                    10進数を、商が 1 になるまで 2 で割り続けます。<br>
                    この時、余りを商の右に書いておきます。<br>
                    商と余りを下から順に繋げると、2進数になります。<br>
                    ※この下の筆算をクリックすると動きます。
                </p>
            </div>
            <div id="hint1" class="history-indented column-addition-area">
                %s
            </div>"""
            (newHintAnimation divisor number)


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


    let newHint divisor number power_of_twos =
        sprintf
            """
            <details id="hintDetails">
                <summary>ヒント: </summary>
                <h2>考え方 1</h2>
                %s
                <h2>考え方 2</h2>
                %s
            </details>
            """
            (newHintRepeatDivision divisor number)
            (newHintRepeatAddition number power_of_twos)


    let rec checkAnswer answer (last_answers : int list) =
        // Getting the user input.
        let numberInput = document.getElementById "numberInput" :?> Browser.Types.HTMLInputElement
        let bin = escapeHtml numberInput.value
        printfn "bin: %s" bin
        
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
            printfn "taggedBin: %s" taggedBin
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
                newHistory (dec = int answer) taggedBin destinationRadix spacePaddedDec sourceRadix
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
                        (fun _ -> newNumberWithTwoOne ())
                        (fun n -> List.contains n last_answers = false)
                printfn "nextNumber : %d" nextNumber
                printfn "List.contains nextNumber last_answers : %b" (List.contains nextNumber last_answers)

                let quotientsAndRemainders = repeatDivision nextNumber 2
                printfn "quotientsAndRemainders: %A" quotientsAndRemainders
                
                let powerOfTwos = devideIntoPowerOfTwo nextNumber
                printfn "powerOfTwos: %A" powerOfTwos

                let nextHint = newHint 2 nextNumber powerOfTwos
                printfn "nextHint: \n%s" nextHint
                
                (document.getElementById "questionSpan").innerText <- string nextNumber
                (document.getElementById "hintArea").innerHTML <- nextHint
                (document.getElementById "hint1").onclick <- (fun _ ->
                    (document.getElementById "hint1").innerHTML <-
                        newHintAnimation 2 nextNumber
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

        let initNumber = newNumberWithTwoOne ()
        printfn "initNumber : %d" initNumber

        let quotientsAndRemainders = repeatDivision initNumber 2
        let powerOfTwos = devideIntoPowerOfTwo initNumber
        printfn "quotients and remainders : %A" quotientsAndRemainders
        printfn "power of twos : %A" powerOfTwos

        let sourceRadix = 10
        let destinationRadix = 2

        (document.getElementById "questionSpan").innerText <- string initNumber
        (document.getElementById "srcRadix").innerText <- sprintf "(%d)" sourceRadix
        (document.getElementById "dstRadix").innerText <- string destinationRadix
        (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
        (document.getElementById "hintArea").innerHTML <- (newHint 2 initNumber powerOfTwos)
        (document.getElementById "hint1").onclick <- (fun _ ->
            (document.getElementById "hint1").innerHTML <-
                newHintAnimation 2 initNumber
            (document.getElementById "hintDetails").setAttribute ("open", "true"))
        (document.getElementById "submitButton").onclick <- (fun _ ->
            checkAnswer (string initNumber) [initNumber]
            false)
        (document.getElementById "inputArea").onsubmit <- (fun _ ->
            checkAnswer (string initNumber) [initNumber]
            false)
        
        printfn "Initialization ends."
