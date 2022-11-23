// taidalab Version 3.3.1
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom
open Taidalab.Common
open Fable.Core
open Fable.Core.JsInterop

module rec Switcher =
    
    type InitObject =
        { pathname : string
          title : string
          headerContent : string
          headerColorClass : string
          headerTitle : string
          mainContent : string
          buttonColorClass : string
          questionContent : string
          initFunc : unit -> unit }
    
    let newInitObject pathname =
        printfn "%A" pathname
        match pathname with
        | "/" ->
            printfn "%s" "/"
            {
                pathname = "/"
                title = "taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-home"
                headerTitle = "<h1>taidalab</h1>"
                mainContent = Taidalab.Home.main
                buttonColorClass = ""
                questionContent = ""
                initFunc = (fun _ -> ())
            }
        | "/endless-binary/" ->
            printfn "%s" "/endless-binary/"
            {
                pathname = "/endless-binary/"
                title = "10進数↔2進数 - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-home"
                headerTitle = "<h1>10進数↔︎2進数 - taidalab</h1>"
                mainContent = Content.Home.main
                buttonColorClass = ""
                questionContent = ""
                initFunc = (fun _ -> setHomeButtons ())
            }
        | "/endless-binary/dec2bin-1/" ->
            printfn "%s" "/endless-binary/dec2bin-1/"
            {
                pathname = "/endless-binary/dec2bin-1/"
                title = "10進数→2進数 (1) - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-d2b"
                headerTitle = "<h1>10進数→2進数 (1) - taidalab</h1>"
                mainContent = Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-d2b"
                questionContent = Content.Common.question
                initFunc = (fun _ -> Dec2Bin1.init ())
            }
        | "/endless-binary/dec2bin-2/" ->
            printfn "%s" "/endless-binary/dec2bin-2/"
            {
                pathname = "/endless-binary/dec2bin-2/"
                title = "10進数→2進数 (2) - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-d2b"
                headerTitle = "<h1>10進数→2進数 (2) - taidalab</h1>"
                mainContent = Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-d2b"
                questionContent = Content.Common.question
                initFunc = (fun _ -> Dec2Bin2.init ())
            }
        | "/endless-binary/bin2dec-1/" ->
            printfn "%s" "/endless-binary/bin2dec-1/"
            {
                pathname = "/endless-binary/bin2dec-1/"
                title = "2進数→10進数 (1) - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-b2d"
                headerTitle = "<h1>2進数→10進数 (1) - taidalab</h1>"
                mainContent = Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-b2d"
                questionContent = Content.Common.question
                initFunc = (fun _ -> Bin2Dec1.init ())
            }
        | "/endless-binary/bin2dec-2/" ->
            printfn "%s" "/endless-binary/bin2dec-2/"
            {
                pathname = "/endless-binary/bin2dec-2/"
                title = "2進数→10進数 (2) - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-b2d"
                headerTitle = "<h1>2進数→10進数 (2) - taidalab</h1>"
                mainContent = Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-b2d"
                questionContent = Content.Common.question
                initFunc = (fun _ -> Bin2Dec2.init ())
            }
        | "/endless-binary/power-of-two-1/" ->
            printfn "%s" "/endless-binary/power-of-two-1/"
            {
                pathname = "/endless-binary/power-of-two-1/"
                title = "2のn乗 - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-pot"
                headerTitle = "<h1>2のn乗 - taidalab</h1>"
                mainContent = Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-pot"
                questionContent = Content.Common.question
                initFunc = (fun _ -> PowerOfTwo1.init ())
            }
        | "/endless-binary/power-of-two-2/" ->
            printfn "%s" "/endless-binary/power-of-two-2/"
            {
                pathname = "/endless-binary/power-of-two-2/"
                title = "2のn乗-1 - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-pot"
                headerTitle = "<h1>2のn乗-1 - taidalab</h1>"
                mainContent = Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-pot"
                questionContent = Content.Common.question
                initFunc = (fun _ -> PowerOfTwo2.init ())
            }
        | "/endless-binary/addition/" ->
            printfn "%s" "/endless-binary/addition/"
            {
                pathname = "/endless-binary/addition/"
                title = "加算 - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-add"
                headerTitle = "<h1>加算 - taidalab</h1>"
                mainContent = Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-add"
                questionContent = Content.Common.columnAdditionFormat
                initFunc = (fun _ -> Addition.init ())
            }
        | "/endless-binary/subtraction/" ->
            printfn "%s" "/endless-binary/subtraction/"
            {
                pathname = "/endless-binary/subtraction/"
                title = "減算 - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-sub"
                headerTitle = "<h1>減算 - taidalab</h1>"
                mainContent = Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-sub"
                questionContent = Content.Common.columnAdditionFormat
                initFunc = (fun _ -> Subtraction.init ())
            }
        | "/endless-binary/complement/" ->
            printfn "%s" "/endless-binary/complement/"
            {
                pathname = "/endless-binary/complement/"
                title = "補数 - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-cmp"
                headerTitle = "<h1>補数 - taidalab</h1>"
                mainContent = Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-cmp"
                questionContent = Content.Complement.question
                initFunc = (fun _ -> Complement.init ())
            }
        | "/endless-binary/dec2hex/" ->
            printfn "%s" "/endless-binary/dec2hex/"
            {
                pathname = "/endless-binary/dec2hex/"
                title = "10進数→16進数 - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-d2h"
                headerTitle = "<h1>10進数→16進数 - taidalab</h1>"
                mainContent = Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-d2h"
                questionContent = Content.Common.question
                initFunc = (fun _ -> Dec2Hex.init ())
            }
        | "/endless-binary/hex2dec/" ->
            printfn "%s" "/endless-binary/hex2dec/"
            {
                pathname = "/endless-binary/hex2dec/"
                title = "16進数→10進数 - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-d2h"
                headerTitle = "<h1>16進数→10進数 - taidalab</h1>"
                mainContent = Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-d2h"
                questionContent = Content.Common.question
                initFunc = (fun _ -> Hex2Dec.init ())
            }
        | "/iro-iroiro/" ->
            printfn "%s" "/iro-iroiro/"
            {
                pathname = "/iro-iroiro/"
                title = "色いろいろ - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-iro"
                headerTitle = "<h1>色いろいろ - taidalab</h1>"
                mainContent = IroIroiro.main
                buttonColorClass = "submit-button submit-button-iro"
                questionContent = ""
                initFunc = (fun _ -> IroIroiro.init ())
            }
        | "/about/" ->
            printfn "%s" "/about/"
            {
                pathname = "/about/"
                title = "about - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-home"
                headerTitle = "<h1>about - taidalab</h1>"
                mainContent = Content.About.main
                buttonColorClass = ""
                questionContent = ""
                initFunc = (fun _ -> About.setLinks ())
            }
        | "/terms/" ->
            printfn "%s" "/terms/"
            {
                pathname = "/terms/"
                title = "ご利用について - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-home"
                headerTitle = "<h1>ご利用について - taidalab</h1>"
                mainContent = Content.Terms.main
                buttonColorClass = ""
                questionContent = ""
                initFunc = (fun _ -> ())
            }
        | _ ->
            printfn "%s" "default"
            {
                pathname = "/404/"
                title = "404: Page Not Found - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-not"
                headerTitle = "<h1>404: Page Not Found - taidalab</h1>"
                mainContent = Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-not"
                questionContent = Content.Common.question
                initFunc = (fun _ -> NotFound.init ())
            }

    let (|InnerPage|OuterPage|) url =
            let m = regMatch "^http://localhost:8080/" url
            match m with
            | true -> InnerPage
            | false -> OuterPage
    
    let isInnerPage url =
        match url with
        | InnerPage ->  true
        | OuterPage -> false
    
    let initPage initial_object =
        document.title <- initial_object.title

        let header = document.querySelector "header"
        header.innerHTML <- initial_object.headerContent
        header.className <- initial_object.headerColorClass
        (document.getElementById "hamburgerButton").onclick <- (fun _ ->
            (document.querySelector "aside").classList.toggle "active" |> ignore
            (document.getElementById "barrier").classList.toggle "active" |> ignore)
        
        (document.getElementById "barrier").onclick <- (fun _ ->
            (document.querySelector "aside").classList.remove "active" |> ignore
            (document.getElementById "barrier").classList.remove "active" |> ignore)
        
        let headerTitle = document.querySelector "#headerTitle"
        headerTitle.innerHTML <- initial_object.headerTitle

        let main = document.querySelector "main"
        main.innerHTML <- initial_object.mainContent

        if initial_object.questionContent <> "" then
            (document.querySelector "#questionArea").innerHTML <- initial_object.questionContent

        if initial_object.buttonColorClass <> "" then
            (document.querySelector "#submitButton").className <- initial_object.buttonColorClass
        
        initial_object.initFunc()

    let pushPage pathname =
        let initialObject = newInitObject pathname
        window.history.pushState(null, "", initialObject.pathname)
        initPage initialObject

    let replacePage pathname =
        let initialObject = newInitObject pathname
        window.history.replaceState(null, "", initialObject.pathname)
        initPage initialObject

    let idToAnchor id =
        document.getElementById id :?> Browser.Types.HTMLAnchorElement
    
    let overwriteAnchorClick action (anchor : Browser.Types.HTMLAnchorElement) =
        anchor.onclick <- (fun ev ->
            ev.preventDefault()
            action())

    let setHomeButtons () =
        (document.getElementById "buttonED2B1").onclick <- (fun _ -> pushPage "/endless-binary/dec2bin-1/")
        (document.getElementById "buttonED2B2").onclick <- (fun _ -> pushPage "/endless-binary/dec2bin-2/")
        (document.getElementById "buttonEB2D1").onclick <- (fun _ -> pushPage "/endless-binary/bin2dec-1/")
        (document.getElementById "buttonEB2D2").onclick <- (fun _ -> pushPage "/endless-binary/bin2dec-2/")
        (document.getElementById "buttonEPOT1").onclick <- (fun _ -> pushPage "/endless-binary/power-of-two-1/")
        (document.getElementById "buttonEPOT2").onclick <- (fun _ -> pushPage "/endless-binary/power-of-two-2/")
        (document.getElementById "buttonEBAD").onclick <- (fun _ -> pushPage "/endless-binary/addition/")
        (document.getElementById "buttonEBSB").onclick <- (fun _ -> pushPage "/endless-binary/subtraction/")
        (document.getElementById "buttonECMP").onclick <- (fun _ -> pushPage "/endless-binary/complement/")
        (document.getElementById "buttonED2H").onclick <- (fun _ -> pushPage "/endless-binary/dec2hex/")

    let switchOverwriteAnchor actionTrue actionFalse anchor =
        anchor
        |> (fun (x : Browser.Types.HTMLAnchorElement) -> (isInnerPage x.href, x))
        |> (fun (b, x) ->
            match (b, x) with
            | (true, x) -> (actionTrue, x)
            | (false, x) -> (actionFalse, x))
        |> (fun (action, x) -> action x)


    module About =

        let setLinks () =
            (document.getElementById "explanation").getElementsByTagName "a"
            |> (fun x -> JS.Constructors.Array?from(x))
            |> Array.toList
            |> List.iter (fun (x : Browser.Types.HTMLAnchorElement) -> overwriteAnchorClick (fun _ -> pushPage x.pathname) x)


    module NotFound =

        let rec checkAnswer answer =
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
                let binaryDigit = 9
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
                    // Redirecting to the home.
                    replacePage "/"


        let init ()  =
            // Initialization.
            printfn "Initialization starts."

            let initNumber = 404
            let sourceRadix = 10
            let destinationRadix = 2

            (document.getElementById "questionSpan").innerText <- string initNumber
            (document.getElementById "srcRadix").innerText <- sprintf "(%d)" sourceRadix
            (document.getElementById "dstRadix").innerText <- string destinationRadix
            (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
            (document.getElementById "submitButton").onclick <- (fun _ ->
                checkAnswer (string initNumber)
                false)
            (document.getElementById "inputArea").onsubmit <- (fun _ ->
                checkAnswer (string initNumber)
                false)
            
            printfn "Initialization ends."
