// taidalab Version 3.3.2
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Fable.Core
open Fable.Core.JsInterop
open Browser.Dom
open Taidalab.Switcher

module Main =

    window.addEventListener("DOMContentLoaded", (fun _ ->
        printfn "%s" "The begining of DOMContentLoaded"
        document.body.innerHTML <- """<div class="body-container"><div id="barrier" class="barrier"></div><header></header><div class="main-container"><aside></aside><main></main></div><footer></footer></div>"""
        (document.querySelector "footer").innerHTML <- Content.Common.footer
        (document.querySelector "aside").innerHTML <- Content.Common.aside
        printfn "%s" window.location.pathname

        let pathname = window.location.pathname
        pathname
        |> Switcher.initPageFromPathname
        |> ignore

        (document.querySelector "aside").getElementsByTagName "a"
        |> (fun x -> JS.Constructors.Array?from(x))
        |> Array.toList
        |> List.iter (Switcher.switchAnchorAction pathname)

        printfn "%s" "The end of DOMContentLoaded"
    ))

    window.addEventListener("popstate", (fun _ ->
        window.location.pathname
        |> Switcher.initPageFromPathname
        |> ignore
    ))
