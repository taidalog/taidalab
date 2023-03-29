// taidalab Version 4.0.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

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
        
module InitObject =
    let create pathname main f =
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
                mainContent = main //Taidalab.Home.main
                buttonColorClass = ""
                questionContent = ""
                initFunc = f
            }
        | "/endless-binary/" ->
            printfn "%s" "/endless-binary/"
            {
                pathname = "/endless-binary/"
                title = "10進数↔2進数 - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-home"
                headerTitle = "<h1>10進数↔︎2進数 - taidalab</h1>"
                mainContent = main //Content.Home.main
                buttonColorClass = ""
                questionContent = ""
                initFunc = f
            }
        | "/endless-binary/dec2bin-1/" ->
            printfn "%s" "/endless-binary/dec2bin-1/"
            {
                pathname = "/endless-binary/dec2bin-1/"
                title = "10進数→2進数 (1) - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-d2b"
                headerTitle = "<h1>10進数→2進数 (1) - taidalab</h1>"
                mainContent = main // Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-d2b"
                questionContent = Content.Common.question
                initFunc = f
            }
        | "/endless-binary/dec2bin-2/" ->
            printfn "%s" "/endless-binary/dec2bin-2/"
            {
                pathname = "/endless-binary/dec2bin-2/"
                title = "10進数→2進数 (2) - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-d2b"
                headerTitle = "<h1>10進数→2進数 (2) - taidalab</h1>"
                mainContent = main // Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-d2b"
                questionContent = Content.Common.question
                initFunc = f
            }
        | "/endless-binary/bin2dec-1/" ->
            printfn "%s" "/endless-binary/bin2dec-1/"
            {
                pathname = "/endless-binary/bin2dec-1/"
                title = "2進数→10進数 (1) - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-b2d"
                headerTitle = "<h1>2進数→10進数 (1) - taidalab</h1>"
                mainContent = main // Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-b2d"
                questionContent = Content.Common.question
                initFunc = f
            }
        | "/endless-binary/bin2dec-2/" ->
            printfn "%s" "/endless-binary/bin2dec-2/"
            {
                pathname = "/endless-binary/bin2dec-2/"
                title = "2進数→10進数 (2) - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-b2d"
                headerTitle = "<h1>2進数→10進数 (2) - taidalab</h1>"
                mainContent = main // Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-b2d"
                questionContent = Content.Common.question
                initFunc = f
            }
        | "/endless-binary/power-of-two-1/" ->
            printfn "%s" "/endless-binary/power-of-two-1/"
            {
                pathname = "/endless-binary/power-of-two-1/"
                title = "2のn乗 - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-pot"
                headerTitle = "<h1>2のn乗 - taidalab</h1>"
                mainContent = main // Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-pot"
                questionContent = Content.Common.question
                initFunc = f
            }
        | "/endless-binary/power-of-two-2/" ->
            printfn "%s" "/endless-binary/power-of-two-2/"
            {
                pathname = "/endless-binary/power-of-two-2/"
                title = "2のn乗-1 - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-pot"
                headerTitle = "<h1>2のn乗-1 - taidalab</h1>"
                mainContent = main // Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-pot"
                questionContent = Content.Common.question
                initFunc = f
            }
        | "/endless-binary/addition/" ->
            printfn "%s" "/endless-binary/addition/"
            {
                pathname = "/endless-binary/addition/"
                title = "加算 - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-add"
                headerTitle = "<h1>加算 - taidalab</h1>"
                mainContent = main // Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-add"
                questionContent = Content.Common.columnAdditionFormat
                initFunc = f
            }
        | "/endless-binary/subtraction/" ->
            printfn "%s" "/endless-binary/subtraction/"
            {
                pathname = "/endless-binary/subtraction/"
                title = "減算 - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-sub"
                headerTitle = "<h1>減算 - taidalab</h1>"
                mainContent = main // Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-sub"
                questionContent = Content.Common.columnAdditionFormat
                initFunc = f
            }
        | "/endless-binary/complement/" ->
            printfn "%s" "/endless-binary/complement/"
            {
                pathname = "/endless-binary/complement/"
                title = "補数 - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-cmp"
                headerTitle = "<h1>補数 - taidalab</h1>"
                mainContent = main // Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-cmp"
                questionContent = Content.Complement.question
                initFunc = f
            }
        | "/endless-binary/dec2hex/" ->
            printfn "%s" "/endless-binary/dec2hex/"
            {
                pathname = "/endless-binary/dec2hex/"
                title = "10進数→16進数 - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-d2h"
                headerTitle = "<h1>10進数→16進数 - taidalab</h1>"
                mainContent = main // Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-d2h"
                questionContent = Content.Common.question
                initFunc = f
            }
        | "/endless-binary/hex2dec/" ->
            printfn "%s" "/endless-binary/hex2dec/"
            {
                pathname = "/endless-binary/hex2dec/"
                title = "16進数→10進数 - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-d2h"
                headerTitle = "<h1>16進数→10進数 - taidalab</h1>"
                mainContent = main // Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-d2h"
                questionContent = Content.Common.question
                initFunc = f
            }
        | "/iro-iroiro/" ->
            printfn "%s" "/iro-iroiro/"
            {
                pathname = "/iro-iroiro/"
                title = "色いろいろ - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-iro"
                headerTitle = "<h1>色いろいろ - taidalab</h1>"
                mainContent = main // IroIroiro.main
                buttonColorClass = "submit-button submit-button-iro"
                questionContent = ""
                initFunc = f
            }
        | "/network-simulator/" ->
            printfn "%s" "/network-simulator/"
            {
                pathname = "/network-simulator/"
                title = "ネットワークシミュレータ - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-nws"
                headerTitle = "<h1>ネットワークシミュレータ - taidalab</h1>"
                mainContent = main
                buttonColorClass = "submit-button submit-button-nws"
                questionContent = ""
                initFunc = f
            }
        | "/about/" ->
            printfn "%s" "/about/"
            {
                pathname = "/about/"
                title = "about - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-home"
                headerTitle = "<h1>about - taidalab</h1>"
                mainContent = main // Content.About.main
                buttonColorClass = ""
                questionContent = ""
                initFunc = f
            }
        | "/terms/" ->
            printfn "%s" "/terms/"
            {
                pathname = "/terms/"
                title = "ご利用について - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-home"
                headerTitle = "<h1>ご利用について - taidalab</h1>"
                mainContent = main // Content.Terms.main
                buttonColorClass = ""
                questionContent = ""
                initFunc = f
            }
        | _ ->
            printfn "%s" "default"
            {
                pathname = "/404/"
                title = "404: Page Not Found - taidalab"
                headerContent = Content.Common.header
                headerColorClass = "header-not"
                headerTitle = "<h1>404: Page Not Found - taidalab</h1>"
                mainContent = main // Content.Course.main
                buttonColorClass = "submit-button display-order-3 submit-button-not"
                questionContent = Content.Common.question
                initFunc = f
            }
