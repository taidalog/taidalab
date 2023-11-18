// taidalab Version 4.6.1
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

type InitObject =
    { pathname: string
      title: string
      headerContent: string
      headerColorClass: string
      headerTitle: string
      mainContent: string
      buttonColorClass: string
      questionContent: string
      initFunc: unit -> unit }

module InitObject =
    let create pathname main f =
        printfn "%A" pathname

        match pathname with
        | "/" ->
            { pathname = "/"
              title = "taidalab"
              headerContent = Content.Common.headerNoHelp
              headerColorClass = "home"
              headerTitle = """<h1 translate="no">taidalab</h1>"""
              mainContent = main
              buttonColorClass = ""
              questionContent = ""
              initFunc = f }
        | "/endless-binary/" ->
            { pathname = "/endless-binary/"
              title = "10進数↔2進数 - taidalab"
              headerContent = Content.Common.headerNoHelp
              headerColorClass = "home"
              headerTitle = """<h1>10進数↔︎2進数 - <span translate="no">taidalab</span></h1>"""
              mainContent = main
              buttonColorClass = ""
              questionContent = ""
              initFunc = f }
        | "/endless-binary/dec2bin-1/" ->
            { pathname = "/endless-binary/dec2bin-1/"
              title = "10進数→2進数 (1) - taidalab"
              headerContent = Content.Common.header
              headerColorClass = "dec2bin"
              headerTitle = """<h1>10進数→2進数 (1) - <span translate="no">taidalab</span></h1>"""
              mainContent = main
              buttonColorClass = "submit-button display-order-3 dec2bin"
              questionContent = Content.Common.question
              initFunc = f }
        | "/endless-binary/dec2bin-1/4/" ->
            { pathname = "/endless-binary/dec2bin-1/4/"
              title = "10進数→2進数 (1) - taidalab"
              headerContent = Content.Common.header
              headerColorClass = "dec2bin"
              headerTitle = """<h1>10進数→2進数 (1) - <span translate="no">taidalab</span></h1>"""
              mainContent = main
              buttonColorClass = "submit-button display-order-3 dec2bin"
              questionContent = Content.Common.question
              initFunc = f }
        | "/endless-binary/dec2bin-2/" ->
            { pathname = "/endless-binary/dec2bin-2/"
              title = "10進数→2進数 (2) - taidalab"
              headerContent = Content.Common.header
              headerColorClass = "dec2bin"
              headerTitle = """<h1>10進数→2進数 (2) - <span translate="no">taidalab</span></h1>"""
              mainContent = main
              buttonColorClass = "submit-button display-order-3 dec2bin"
              questionContent = Content.Common.question
              initFunc = f }
        | "/endless-binary/bin2dec-1/" ->
            { pathname = "/endless-binary/bin2dec-1/"
              title = "2進数→10進数 (1) - taidalab"
              headerContent = Content.Common.header
              headerColorClass = "bin2dec"
              headerTitle = """<h1>2進数→10進数 (1) - <span translate="no">taidalab</span></h1>"""
              mainContent = main
              buttonColorClass = "submit-button display-order-3 bin2dec"
              questionContent = Content.Common.question
              initFunc = f }
        | "/endless-binary/bin2dec-2/" ->
            { pathname = "/endless-binary/bin2dec-2/"
              title = "2進数→10進数 (2) - taidalab"
              headerContent = Content.Common.header
              headerColorClass = "bin2dec"
              headerTitle = """<h1>2進数→10進数 (2) - <span translate="no">taidalab</span></h1>"""
              mainContent = main
              buttonColorClass = "submit-button display-order-3 bin2dec"
              questionContent = Content.Common.question
              initFunc = f }
        | "/endless-binary/power-of-two-1/" ->
            { pathname = "/endless-binary/power-of-two-1/"
              title = "2のn乗 - taidalab"
              headerContent = Content.Common.header
              headerColorClass = "power-of-two"
              headerTitle = """<h1>2のn乗 - <span translate="no">taidalab</span></h1>"""
              mainContent = main
              buttonColorClass = "submit-button display-order-3 power-of-two"
              questionContent = Content.Common.question
              initFunc = f }
        | "/endless-binary/power-of-two-2/" ->
            { pathname = "/endless-binary/power-of-two-2/"
              title = "2のn乗-1 - taidalab"
              headerContent = Content.Common.header
              headerColorClass = "power-of-two"
              headerTitle = """<h1>2のn乗-1 - <span translate="no">taidalab</span></h1>"""
              mainContent = main
              buttonColorClass = "submit-button display-order-3 power-of-two"
              questionContent = Content.Common.question
              initFunc = f }
        | "/endless-binary/addition/" ->
            { pathname = "/endless-binary/addition/"
              title = "加算 - taidalab"
              headerContent = Content.Common.header
              headerColorClass = "addition"
              headerTitle = """<h1>加算 - <span translate="no">taidalab</span></h1>"""
              mainContent = main
              buttonColorClass = "submit-button display-order-3 addition"
              questionContent = Content.Common.columnAdditionFormat
              initFunc = f }
        | "/endless-binary/addition/4/" ->
            { pathname = "/endless-binary/addition/4/"
              title = "加算 - taidalab"
              headerContent = Content.Common.header
              headerColorClass = "addition"
              headerTitle = """<h1>加算 - <span translate="no">taidalab</span></h1>"""
              mainContent = main
              buttonColorClass = "submit-button display-order-3 addition"
              questionContent = Content.Common.columnAdditionFormat
              initFunc = f }
        | "/endless-binary/subtraction/" ->
            { pathname = "/endless-binary/subtraction/"
              title = "減算 - taidalab"
              headerContent = Content.Common.header
              headerColorClass = "subtraction"
              headerTitle = """<h1>減算 - <span translate="no">taidalab</span></h1>"""
              mainContent = main
              buttonColorClass = "submit-button display-order-3 subtraction"
              questionContent = Content.Common.columnAdditionFormat
              initFunc = f }
        | "/endless-binary/complement/" ->
            { pathname = "/endless-binary/complement/"
              title = "補数 - taidalab"
              headerContent = Content.Common.header
              headerColorClass = "complement"
              headerTitle = """<h1>補数 - <span translate="no">taidalab</span></h1>"""
              mainContent = main
              buttonColorClass = "submit-button display-order-3 complement"
              questionContent = Content.Complement.question
              initFunc = f }
        | "/endless-binary/dec2hex/" ->
            { pathname = "/endless-binary/dec2hex/"
              title = "10進数→16進数 - taidalab"
              headerContent = Content.Common.header
              headerColorClass = "dec2hex"
              headerTitle = """<h1>10進数→16進数 - <span translate="no">taidalab</span></h1>"""
              mainContent = main
              buttonColorClass = "submit-button display-order-3 dec2hex"
              questionContent = Content.Common.question
              initFunc = f }
        | "/endless-binary/hex2dec/" ->
            { pathname = "/endless-binary/hex2dec/"
              title = "16進数→10進数 - taidalab"
              headerContent = Content.Common.header
              headerColorClass = "hex2dec"
              headerTitle = """<h1>16進数→10進数 - <span translate="no">taidalab</span></h1>"""
              mainContent = main
              buttonColorClass = "submit-button display-order-3 hex2dec"
              questionContent = Content.Common.question
              initFunc = f }
        | "/iro-iroiro/" ->
            { pathname = "/iro-iroiro/"
              title = "色いろいろ - taidalab"
              headerContent = Content.Common.header
              headerColorClass = "iro-iroiro"
              headerTitle = """<h1>色いろいろ - <span translate="no">taidalab</span></h1>"""
              mainContent = main
              buttonColorClass = "submit-button iro-iroiro"
              questionContent = ""
              initFunc = f }
        | "/network-simulator/" ->
            { pathname = "/network-simulator/"
              title = "ネットワークシミュレータ - taidalab"
              headerContent = Content.Common.header
              headerColorClass = "network-simulator"
              headerTitle = """<h1>ネットワークシミュレータ - <span translate="no">taidalab</span></h1>"""
              mainContent = main
              buttonColorClass = "submit-button network-simulator"
              questionContent = ""
              initFunc = f }
        | "/about/" ->
            { pathname = "/about/"
              title = "about - taidalab"
              headerContent = Content.Common.headerNoHelp
              headerColorClass = "home"
              headerTitle = """<h1>about - <span translate="no">taidalab</span></h1>"""
              mainContent = main
              buttonColorClass = ""
              questionContent = ""
              initFunc = f }
        | "/terms/" ->
            { pathname = "/terms/"
              title = "ご利用について - taidalab"
              headerContent = Content.Common.headerNoHelp
              headerColorClass = "home"
              headerTitle = """<h1>ご利用について - <span translate="no">taidalab</span></h1>"""
              mainContent = main
              buttonColorClass = ""
              questionContent = ""
              initFunc = f }
        | "/information-policy/" ->
            { pathname = "/information-policy/"
              title = "情報の外部送信について - taidalab"
              headerContent = Content.Common.headerNoHelp
              headerColorClass = "home"
              headerTitle = """<h1>情報の外部送信について - <span translate="no">taidalab</span></h1>"""
              mainContent = main
              buttonColorClass = ""
              questionContent = ""
              initFunc = f }
        | _ ->
            { pathname = "/404/"
              title = "404: Page Not Found - taidalab"
              headerContent = Content.Common.headerNoHelp
              headerColorClass = "not-found"
              headerTitle = """<h1>404: Page Not Found - <span translate="no">taidalab</span></h1>"""
              mainContent = main
              buttonColorClass = "submit-button display-order-3 not-found"
              questionContent = Content.Common.question
              initFunc = f }
