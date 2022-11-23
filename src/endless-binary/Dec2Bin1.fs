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


    type TextProp =
        TextProp of width : int * height : int * content : string
    
    type PathProp =
        PathProp of d : string * stroke : string * strokeWidth : int * fill : string * content : string
    
    type AnimateProp =
        AnimateProp of attributeName : string * calcMode : string * fromState : string * toState : string * beginMs : int * durMs : int * repeatCount : string
    
    let svgFrame width height content =
        sprintf
            """
            <?xml version="1.0" standalone="no"?>
            <svg width="%d" height="%d" version="1.1" xmlns="http://www.w3.org/2000/svg">
                %s
            </svg>
            """
            width height content

    let svgText x y  text =
        sprintf """<text x="%d" y="%d" font-family="Courier New" font-size="20">%s</text>""" x y text
    
    let svgPath d stroke strokeWidth fill opacity animation  =
        sprintf """<path d="%s" stroke="%s" stroke-width=%d fill="%s" opacity="%f">%s</path>""" d stroke strokeWidth fill opacity animation
    
    let svgPolyline points stroke strokeWidth fill animation =
        sprintf """<polylie points="%s" stroke="%s" stroke-width=%d fill="%s">%s</polyline>""" points stroke strokeWidth fill animation
    
    let svgAnimate attributeName calcMode fromState toState beginMs durMs repeatCount =
        sprintf """<animate attributeMode="%s" calcMode="%s" from="%s" to="%s" begin="%dms" dur="%dms" repeatCount="%s"/>""" attributeName calcMode fromState toState beginMs durMs repeatCount
    
    let delayMs index =
        match index with
        | 0. -> 0.5
        | _ -> index * 2.5

    let newSvgDivisor x y index option =
        Option.map
            (fun option -> svgText x y (sprintf "%s%s" (string option) (svgAnimate "stroke" "ease-in" "" "" (index |> double |> delayMs |> (fun x -> x * 1000.) |> int) 500 "1")))
            option
    
    let newArrow x y width1 height1 width2 height2 =
        let d = sprintf "M %f,%f h %f v %f h -7 l 16,-20 16,20 h -7 v %f h %f Z" x y width1 height1 height2 width2
        let animationStroke = svgAnimate "stroke" "ease-in" "none" "#0000ff" 10000 500 "1"
        let animationFill = svgAnimate "fill" "ease-in" "none" "#aaddff" 10000 500 "1"
        svgPath d "#0000ff" 1 "#aaddff" 1. (animationStroke + animationFill)
    
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
            Option.map
                (fun x ->
                    svgText 0 (20 * (i + 1)) (string x))
                a,
            Option.map
                (fun x ->
                    svgPath (sprintf "M 12,%d q 10,8 0,16 h 48" ((20 * i) + 6)) "#000000" 1 "none" 1. "")
                b,
            Option.map
                (fun x ->
                    svgText (20 / 2 * 2) (20 * (i + 1)) (x |> string |> (padStart " " 3) |> escapeSpace))
                c,
            Option.map
                (fun x ->
                    svgText (20 / 2 * 6) (20 * (i + 1)) (sprintf "…%d" x))
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
            (newArrow 40. (((20 * (List.length divRems - 1)) + 6) |> double) 30. ((17.85 * (List.length divRems |> double) - 35.) * -1.) -48. (17.85 * (List.length divRems |> double) - 15.))
        |> (svgFrame 400 400)
    
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
            sprintf """2<span class="column-addition-row">%s</span>""" (answer |> string |> padStart " " 3 |> escapeSpace)
        let body =
            indexedList
            |> List.rev
            |> List.tail
            |> List.rev
            |> List.map (fun (i, (q : int), r) ->
                sprintf
                    """<span id="c%d" style="opacity: 0; %s">2<span style="text-decoration: underline;">)</span></span><span id="a%d" style="opacity: 0; %s"><span style="%s">%s</span>...%d</span>"""
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
                    10進数を、商が 1 になるまで 2 で割り続けます。<br>
                    この時、余りを商の右に書いておきます。<br>
                    商と余りを下から順に繋げると、2進数になります。<br>
                    ※この下の筆算をクリックすると動きます。
                </p>
            </div>
            <div id="hint1" class="history-indented column-addition-area">
                %s
            </div>"""
            (newColumnAddition number quotients_and_remainders)


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
        """<details id="hintDetails"><summary>ヒント: </summary><h2>考え方 1</h2>""" + newHintRepeatDivision number quotients_and_remainders + """<h2>考え方 2</h2>""" + newHintRepeatAddition number power_of_twos + """</details>"""


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

                let nextHint = newHint nextNumber quotientsAndRemainders powerOfTwos
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
        (document.getElementById "hintArea").innerHTML <- (newHint initNumber quotientsAndRemainders powerOfTwos) + (newHintAnimation 2 initNumber)
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
