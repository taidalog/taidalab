// taidalab Version 1.6.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom

module rec Switcher =
    let settHomeButtons () =
        (document.getElementById "buttonED2B1").onclick <- (fun _ -> pushPage "/endless-dec2bin-1/")
        (document.getElementById "buttonED2B2").onclick <- (fun _ -> pushPage "/endless-dec2bin-2/")
        (document.getElementById "buttonEB2D1").onclick <- (fun _ -> pushPage "/endless-bin2dec-1/")
        (document.getElementById "buttonEB2D2").onclick <- (fun _ -> pushPage "/endless-bin2dec-2/")
        (document.getElementById "buttonEPOT1").onclick <- (fun _ -> pushPage "/endless-power-of-two-1/")
        (document.getElementById "buttonEPOT2").onclick <- (fun _ -> pushPage "/endless-power-of-two-2/")
        (document.getElementById "buttonEBAD").onclick <- (fun _ -> pushPage "/endless-addition/")
        (document.getElementById "buttonEBSB").onclick <- (fun _ -> pushPage "/endless-subtraction/")
        (document.getElementById "buttonECMP").onclick <- (fun _ -> pushPage "/endless-complement/")
    
    type InitObject =
        { pathname : string
          title : string
          headerContent : string
          headerColorClass : string
          headerTitle : string
          mainContent : string
          buttonColorClass : string
          questionContent : string
          footerContent : string
          widthClass : string
          versionNumber : string
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
                footerContent = Content.Home.footer
                widthClass = "home"
                versionNumber = Content.Common.version
                initFunc = (fun _ -> settHomeButtons ())
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
                footerContent = Content.Course.footer
                widthClass = "course"
                versionNumber = Content.Common.version
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
                footerContent = Content.Course.footer
                widthClass = "course"
                versionNumber = Content.Common.version
                initFunc = (fun _ -> ())
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
                footerContent = Content.Course.footer
                widthClass = "course"
                versionNumber = Content.Common.version
                initFunc = (fun _ -> ())
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
                footerContent = Content.Course.footer
                widthClass = "course"
                versionNumber = Content.Common.version
                initFunc = (fun _ -> ())
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
                footerContent = Content.Course.footer
                widthClass = "course"
                versionNumber = Content.Common.version
                initFunc = (fun _ -> ())
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
                footerContent = Content.Course.footer
                widthClass = "course"
                versionNumber = Content.Common.version
                initFunc = (fun _ -> ())
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
                footerContent = Content.Course.footer
                widthClass = "course"
                versionNumber = Content.Common.version
                initFunc = (fun _ -> ())
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
                footerContent = Content.Course.footer
                widthClass = "course"
                versionNumber = Content.Common.version
                initFunc = (fun _ -> ())
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
                footerContent = Content.Course.footer
                widthClass = "course"
                versionNumber = Content.Common.version
                initFunc = (fun _ -> ())
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
                buttonColorClass = null
                questionContent = null
                footerContent = Content.About.footer
                widthClass = "course"
                versionNumber = null
                initFunc = (fun _ -> ())
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
                buttonColorClass = null
                questionContent = null
                footerContent = Content.Terms.footer
                widthClass = "course"
                versionNumber = null
                initFunc = (fun _ -> ())
            }
        | _ ->
            printfn "%s" "default"
            {
                pathname = "/404/"
                title = "404: Page Not Found - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "not-header"
                headerTitle = "<h1>404; Page Not Found</h1>"
                mainContent = Content.Course.main
                buttonColorClass = "submit-button not-button"
                questionContent = Content.Common.question
                footerContent = Content.NotFound.footer
                widthClass = "course"
                versionNumber = Content.Common.version
                initFunc = (fun _ -> ())
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
        footer.innerHTML <- initial_object.footerContent
        footer.className <- initial_object.widthClass

        if initial_object.questionContent <> "" then
            (document.querySelector "#questionArea").innerHTML <- initial_object.questionContent

        if initial_object.buttonColorClass <> "" then
            (document.querySelector "#submitButton").className <- initial_object.buttonColorClass

        if initial_object.versionNumber <> "" then
            let versionNumber = document.querySelector "#versionNumber" :?> Browser.Types.HTMLDivElement
            versionNumber.innerText <- initial_object.versionNumber

        initial_object.initFunc()

    let pushPage pathname =
        let initialObject = newInitObject pathname
        window.history.pushState(null, null, initialObject.pathname)
        initPage initialObject

    let replacePage pathname =
        let initialObject = newInitObject pathname
        window.history.replaceState(null, null, initialObject.pathname)
        initPage initialObject
