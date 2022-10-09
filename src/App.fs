// taidalab Version 2.2.2
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom
open Taidalab.Switcher

module Main =

    window.addEventListener("DOMContentLoaded", (fun _ ->
        printfn "%s" "The begining of DOMContentLoaded"
        document.body.innerHTML <- """<header></header><div class="main-container"><main></main><aside></aside></div><footer></footer>"""
        (document.querySelector "footer").innerHTML <- Content.Common.footer
        printfn "%s" window.location.pathname
        let initObj = newInitObject window.location.pathname
        initPage initObj |> ignore
        match initObj.pathname with
        | "/404/" -> NotFound.setFooterLinks () |> ignore
        | _ -> setFooterLinks () |> ignore
        printfn "%s" "The end of DOMContentLoaded"
    ))

    window.addEventListener("popstate", (fun _ ->
        newInitObject window.location.pathname |> initPage
    ))
