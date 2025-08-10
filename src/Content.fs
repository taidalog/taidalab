// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2025 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Url
open Html

module Content =
    module Complement =
        let question: Browser.Types.HTMLElement list =
            [ span { innerText "4ビットの2進数 " }
              span {
                  id "questionSpan"
                  className "question-number"
              }
              sub { id "srcRadix" }
              span { innerText " の補数は？" } ]


    module Common =
        let body: Browser.Types.HTMLDivElement =
            div {
                className "body-container"

                appendChild (
                    div {
                        id "barrier"
                        className "barrier"
                    }
                )

                appendChild (
                    div {
                        id "helpBarrier"
                        className "help-barrier"
                    }
                )

                appendChild (header { () })

                appendChild (
                    div {
                        className "main-container"
                        appendChild (nav { () })
                        appendChild (main { () })
                    }
                )

                appendChild (footer { () })
            }

        let header: Browser.Types.HTMLDivElement list =
            [ div {
                  className "header-left"

                  appendChild (
                      span {
                          id "hamburgerButton"
                          className "material-symbols-outlined hamburger-button"
                          translate false
                          innerText "menu"
                      }
                  )
              }
              div {
                  className "header-center"
                  appendChild (h1 { id "headerTitle" })

                  appendChild (
                      div {
                          appendChild (
                              span {
                                  id "helpButton"
                                  className "material-symbols-outlined help-button"
                                  translate false
                                  innerText "help"
                              }
                          )
                      }
                  )
              }
              div { () } ]

        let headerNoHelp: Browser.Types.HTMLDivElement list =
            [ div {
                  className "header-left"

                  appendChild (
                      span {
                          id "hamburgerButton"
                          className "material-symbols-outlined hamburger-button"
                          translate false
                          innerText "menu"
                      }
                  )
              }
              div {
                  className "header-center"
                  appendChild (h1 { id "headerTitle" })
                  appendChild (div { () })
              }
              div { () } ]

        let nav: Browser.Types.HTMLUListElement list =
            [ ul {
                  appendChild (li { appendChild (a { set $"%s{Url.home}endless-binary/dec2bin-1/" "10進数→2進数 (1)" }) })
                  appendChild (li { appendChild (a { set $"%s{Url.home}endless-binary/dec2bin-2/" "10進数→2進数 (2)" }) })
                  appendChild (li { appendChild (a { set $"%s{Url.home}endless-binary/bin2dec-1/" "2進数→10進数 (1)" }) })
                  appendChild (li { appendChild (a { set $"%s{Url.home}endless-binary/bin2dec-2/" "2進数→10進数 (2)" }) })
                  appendChild (li { appendChild (a { set $"%s{Url.home}endless-binary/power-of-two-1/" "2のn乗" }) })
                  appendChild (li { appendChild (a { set $"%s{Url.home}endless-binary/power-of-two-2/" "2のn乗-1" }) })
                  appendChild (li { appendChild (a { set $"%s{Url.home}endless-binary/addition/" "加算" }) })
                  appendChild (li { appendChild (a { set $"%s{Url.home}endless-binary/subtraction/" "減算" }) })
                  appendChild (li { appendChild (a { set $"%s{Url.home}endless-binary/complement/" "補数" }) })
                  appendChild (li { appendChild (a { set $"%s{Url.home}endless-binary/dec2hex/" "10進数→16進数" }) })
                  appendChild (li { appendChild (a { set $"%s{Url.home}endless-binary/hex2dec/" "16進数→10進数" }) })
              }
              ul {
                  appendChild (li { appendChild (a { set $"%s{Url.home}iro-iroiro/" "色いろいろ" }) })
                  appendChild (li { appendChild (a { set $"%s{Url.home}network-simulator/" "ネットワークシミュレータ" }) })
                  appendChild (li { appendChild (a { set "#" "Coming soon..." }) })
              }
              ul {
                  appendChild (li { appendChild (a { set $"%s{Url.home}" "Home" }) })
                  appendChild (li { appendChild (a { set $"%s{Url.home}about/" "About" }) })
                  appendChild (li { appendChild (a { set $"%s{Url.home}terms/" "ご利用について" }) })
                  appendChild (li { appendChild (a { set $"%s{Url.home}information-policy/" "情報の外部送信について" }) })
              } ]

        let question: Browser.Types.Element list =
            [ span {
                  id "questionSpan"
                  className "question-number"
              }
              sub { id "srcRadix" }
              span { innerText "を" }
              span { id "dstRadix" }
              span { innerText "進法で表すと？" } ]

        let version = "Version 5.2.0"

        let footer: Browser.Types.HTMLElement list =
            [ small {
                  translate false
                  innerText "© 2022-2025 "
                  appendChild (a { set "https://taidalog.github.io/" "taidalog" })
              }
              small {
                  translate false
                  appendChild (a { set "https://github.com/taidalog/taidalab/releases" $"%s{version}" })
              }
              small { appendChild (a { set "https://odaibako.net/u/taidalog" "お題箱" }) }
              small {
                  translate false
                  appendChild (a { set "https://github.com/taidalog/taidalab" "Repository on GitHub" })
              }
              small {
                  appendChild (span { innerText "Powered by " })

                  appendChild (
                      a {
                          href "https://fsharp.org/"
                          translate false
                          innerText "F#"
                      }
                  )

                  appendChild (span { innerText " and " })

                  appendChild (
                      a {
                          href "https://fable.io"
                          translate false
                          innerText "Fable"
                      }
                  )

                  appendChild (span { innerText ". Thank you!" })
              } ]

        let columnAdditionFormat: Browser.Types.HTMLDivElement =
            let innerFirstRow = div { () }

            [ 8..-1..1 ]
            |> List.map (fun i ->
                span {
                    className "question-number"
                    id $"firstRowDigit%d{i}"
                })
            |> List.iter (innerFirstRow.appendChild >> ignore)

            let firstRow =
                div {
                    className "first-row"
                    id ""
                    appendChild innerFirstRow
                    appendChild (div { appendChild (span { appendChild (sub { id "firstRowSrcRadix" }) }) })
                }

            let innerSecondRow = div { () }

            span {
                className "question-number"
                id "operator"
            }
            |> innerSecondRow.appendChild
            |> ignore

            [ 8..-1..1 ]
            |> List.map (fun i ->
                span {
                    className "question-number"
                    id $"secondRowDigit%d{i}"
                })
            |> List.iter (innerSecondRow.appendChild >> ignore)

            let secondRow =
                div {
                    className "second-row"
                    id "secondRow"
                    appendChild innerSecondRow
                    appendChild (div { appendChild (span { appendChild (sub { id "secondRowSrcRadix" }) }) })
                }

            div {
                className "calculation-area"
                id "calculationArea"
                appendChild firstRow
                appendChild secondRow
                appendChild (div { className "under-line" })
            }
