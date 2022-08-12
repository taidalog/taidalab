// taidalab Version 1.6.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom
open Taidalab.Common

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
          widthClass : string
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
                headerColorClass = "home-header"
                headerTitle = "<h1>taidalab</h1>"
                mainContent = Content.Home.main
                buttonColorClass = ""
                questionContent = ""
                widthClass = "home"
                initFunc = (fun _ -> setHomeButtons ())
            }
        | "/endless-dec2bin-1/" ->
            printfn "%s" "/endless-dec2bin-1/"
            {
                pathname = "/endless-dec2bin-1/"
                title = "10進数→2進数 (1) - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "d2b-header"
                headerTitle = "<h1>10進数→2進数 (1)</h1>"
                mainContent = Content.Course.main
                buttonColorClass = "submit-button d2b-button"
                questionContent = Content.Common.question
                widthClass = "course"
                initFunc = (fun _ -> Dec2Bin1.init ())
            }
        | "/endless-dec2bin-2/" ->
            printfn "%s" "/endless-dec2bin-2/"
            {
                pathname = "/endless-dec2bin-2/"
                title = "10進数→2進数 (2) - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "d2b-header"
                headerTitle = "<h1>10進数→2進数 (2)</h1>"
                mainContent = Content.Course.main
                buttonColorClass = "submit-button d2b-button"
                questionContent = Content.Common.question
                widthClass = "course"
                initFunc = (fun _ -> Dec2Bin2.init ())
            }
        | "/endless-bin2dec-1/" ->
            printfn "%s" "/endless-bin2dec-1/"
            {
                pathname = "/endless-bin2dec-1/"
                title = "2進数→10進数 (1) - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "b2d-header"
                headerTitle = "<h1>2進数→10進数 (1)</h1>"
                mainContent = Content.Course.main
                buttonColorClass = "submit-button b2d-button"
                questionContent = Content.Common.question
                widthClass = "course"
                initFunc = (fun _ -> Bin2Dec1.init ())
            }
        | "/endless-bin2dec-2/" ->
            printfn "%s" "/endless-bin2dec-2/"
            {
                pathname = "/endless-bin2dec-2/"
                title = "2進数→10進数 (2) - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "b2d-header"
                headerTitle = "<h1>2進数→10進数 (2)</h1>"
                mainContent = Content.Course.main
                buttonColorClass = "submit-button b2d-button"
                questionContent = Content.Common.question
                widthClass = "course"
                initFunc = (fun _ -> Bin2Dec2.init ())
            }
        | "/endless-power-of-two-1/" ->
            printfn "%s" "/endless-power-of-two-1/"
            {
                pathname = "/endless-power-of-two-1/"
                title = "2のn乗 - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "pot-header"
                headerTitle = "<h1>2のn乗</h1>"
                mainContent = Content.Course.main
                buttonColorClass = "submit-button pot-button"
                questionContent = Content.Common.question
                widthClass = "course"
                initFunc = (fun _ -> PowerOfTwo1.init ())
            }
        | "/endless-power-of-two-2/" ->
            printfn "%s" "/endless-power-of-two-2/"
            {
                pathname = "/endless-power-of-two-2/"
                title = "2のn乗-1 - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "pot-header"
                headerTitle = "<h1>2のn乗 - 1</h1>"
                mainContent = Content.Course.main
                buttonColorClass = "submit-button pot-button"
                questionContent = Content.Common.question
                widthClass = "course"
                initFunc = (fun _ -> PowerOfTwo2.init ())
            }
        | "/endless-addition/" ->
            printfn "%s" "/endless-addition/"
            {
                pathname = "/endless-addition/"
                title = "加算 - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "add-header"
                headerTitle = "<h1>加算</h1>"
                mainContent = Content.Course.main
                buttonColorClass = "submit-button add-button"
                questionContent = Content.Common.columnAdditionFormat
                widthClass = "course"
                initFunc = (fun _ -> Addition.init ())
            }
        | "/endless-subtraction/" ->
            printfn "%s" "/endless-subtraction/"
            {
                pathname = "/endless-subtraction/"
                title = "減算 - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "sub-header"
                headerTitle = "<h1>減算</h1>"
                mainContent = Content.Course.main
                buttonColorClass = "submit-button sub-button"
                questionContent = Content.Common.columnAdditionFormat
                widthClass = "course"
                initFunc = (fun _ -> Subtraction.init ())
            }
        | "/endless-complement/" ->
            printfn "%s" "/endless-complement/"
            {
                pathname = "/endless-complement/"
                title = "補数 - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "cmp-header"
                headerTitle = "<h1>補数</h1>"
                mainContent = Content.Course.main
                buttonColorClass = "submit-button cmp-button"
                questionContent = Content.Complement.question
                widthClass = "course"
                initFunc = (fun _ -> Complement.init ())
            }
        | "/about/" ->
            printfn "%s" "/about/"
            {
                pathname = "/about/"
                title = "about - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "home-header"
                headerTitle = "<h1>about</h1>"
                mainContent = Content.About.main
                buttonColorClass = ""
                questionContent = ""
                widthClass = "course"
                initFunc = (fun _ -> About.setLinks ())
            }
        | "/terms/" ->
            printfn "%s" "/terms/"
            {
                pathname = "/terms/"
                title = "ご利用について - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "home-header"
                headerTitle = "<h1>ご利用について</h1>"
                mainContent = Content.Terms.main
                buttonColorClass = ""
                questionContent = ""
                widthClass = "course"
                initFunc = (fun _ -> ())
            }
        | _ ->
            printfn "%s" "default"
            {
                pathname = "/404/"
                title = "404: Page Not Found - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "not-header"
                headerTitle = "<h1>404: Page Not Found</h1>"
                mainContent = Content.Course.main
                buttonColorClass = "submit-button not-button"
                questionContent = Content.Common.question
                widthClass = "course"
                initFunc = (fun _ -> NotFound.init ())
            }

    let initPage initial_object =
        document.title <- initial_object.title

        let header = document.querySelector "header"
        header.innerHTML <- initial_object.headerContent
        header.className <- initial_object.headerColorClass + " " + initial_object.widthClass
        
        let headerContainer = document.querySelector "#headerContainer"
        headerContainer.innerHTML <- initial_object.headerTitle
        
        let main = document.querySelector "main"
        main.className <- initial_object.widthClass
        main.innerHTML <- initial_object.mainContent
        
        let footer = document.querySelector "footer"
        footer.className <- initial_object.widthClass

        if initial_object.questionContent <> "" then
            (document.querySelector "#questionArea").innerHTML <- initial_object.questionContent

        if initial_object.buttonColorClass <> "" then
            (document.querySelector "#submitButton").className <- initial_object.buttonColorClass

//        if initial_object.versionNumber <> "" then
//            let versionNumber = document.querySelector "#versionNumber" :?> Browser.Types.HTMLDivElement
//            versionNumber.innerText <- initial_object.versionNumber

        initial_object.initFunc()

    let pushPage pathname =
        let initialObject = newInitObject pathname
        window.history.pushState(null, "", initialObject.pathname)
        initPage initialObject

    let replacePage pathname =
        let initialObject = newInitObject pathname
        window.history.replaceState(null, "", initialObject.pathname)
        initPage initialObject

    let setHomeButtons () =
        (document.getElementById "buttonED2B1").onclick <- (fun _ -> pushPage "/endless-dec2bin-1/")
        (document.getElementById "buttonED2B2").onclick <- (fun _ -> pushPage "/endless-dec2bin-2/")
        (document.getElementById "buttonEB2D1").onclick <- (fun _ -> pushPage "/endless-bin2dec-1/")
        (document.getElementById "buttonEB2D2").onclick <- (fun _ -> pushPage "/endless-bin2dec-2/")
        (document.getElementById "buttonEPOT1").onclick <- (fun _ -> pushPage "/endless-power-of-two-1/")
        (document.getElementById "buttonEPOT2").onclick <- (fun _ -> pushPage "/endless-power-of-two-2/")
        (document.getElementById "buttonEBAD").onclick <- (fun _ -> pushPage "/endless-addition/")
        (document.getElementById "buttonEBSB").onclick <- (fun _ -> pushPage "/endless-subtraction/")
        (document.getElementById "buttonECMP").onclick <- (fun _ -> pushPage "/endless-complement/")
    
    let setFooterLinks () =
        (document.getElementById "versionNumber" :?> Browser.Types.HTMLAnchorElement).href <- "https://github.com/taidalog/taidalab/releases"
        (document.getElementById "footerHome" :?> Browser.Types.HTMLAnchorElement).href <- "/"
        (document.getElementById "footerAbout" :?> Browser.Types.HTMLAnchorElement).href <- "/about/"
        (document.getElementById "footerTerms" :?> Browser.Types.HTMLAnchorElement).href <- "/terms/"
        (document.getElementById "footerRepo" :?> Browser.Types.HTMLAnchorElement).href <- "https://github.com/taidalog/taidalab"
        (document.getElementById "footerFSharp" :?> Browser.Types.HTMLAnchorElement).href <- "https://fsharp.org/"
        (document.getElementById "footerFable" :?> Browser.Types.HTMLAnchorElement).href <- "https://fable.io"
        
        ["footerHome"; "footerAbout"; "footerTerms"]
        |> List.map (fun x -> document.getElementById x :?> Browser.Types.HTMLAnchorElement)
        |> List.map (fun x -> x.onclick <- (fun ev ->
            ev.preventDefault()
            pushPage x.pathname
            ))


    module About =

        let setLinks () =
            let anchors = (document.getElementById "explanation").getElementsByTagName "a"
            for i in 0 ..(anchors.length - 1) do
                anchors.item(double i) :?> Browser.Types.HTMLAnchorElement
                |> (fun x -> x.onclick <- (fun ev ->
                    ev.preventDefault()
                    pushPage x.pathname
                    ))
                |> ignore


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
                    Switcher.replacePage "/"


        let init ()  =
            // Initialization.
            printfn "Initialization starts."

            let initNumber = 404
            let sourceRadix = 10
            let destinationRadix = 2

            (document.getElementById "questionSpan").innerHTML <- string initNumber
            (document.getElementById "srcRadix").innerHTML <- sprintf "(%d)" sourceRadix
            (document.getElementById "dstRadix").innerHTML <- string destinationRadix
            (document.getElementById "binaryRadix").innerHTML <- sprintf "<sub>(%d)</sub>" destinationRadix
            (document.getElementById "submitButton").onclick <- (fun _ -> checkAnswer (string initNumber))
            
            printfn "Initialization ends."
        
        let setFooterLinks () =
            (document.getElementById "versionNumber" :?> Browser.Types.HTMLAnchorElement).href <- "https://github.com/taidalog/taidalab/releases"
            (document.getElementById "footerHome" :?> Browser.Types.HTMLAnchorElement).href <- "/"
            (document.getElementById "footerAbout" :?> Browser.Types.HTMLAnchorElement).href <- "/about/"
            (document.getElementById "footerTerms" :?> Browser.Types.HTMLAnchorElement).href <- "/terms/"
            (document.getElementById "footerRepo" :?> Browser.Types.HTMLAnchorElement).href <- "https://github.com/taidalog/taidalab"
            (document.getElementById "footerFSharp" :?> Browser.Types.HTMLAnchorElement).href <- "https://fsharp.org/"
            (document.getElementById "footerFable" :?> Browser.Types.HTMLAnchorElement).href <- "https://fable.io"
            
            ["footerHome"; "footerAbout"; "footerTerms"]
            |> List.map (fun x -> document.getElementById x :?> Browser.Types.HTMLAnchorElement)
            |> List.map (fun x -> x.onclick <- (fun ev ->
                ev.preventDefault()
                replacePage x.pathname
                ))
            |> ignore

            ["versionNumber"; "footerRepo"; "footerFSharp"; "footerFable"]
            |> List.map (fun x -> document.getElementById x :?> Browser.Types.HTMLAnchorElement)
            |> List.map (fun x -> x.onclick <- (fun ev ->
                ev.preventDefault()
                window.location.replace(x.href)
                ))
            |> ignore
