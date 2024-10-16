// taidalab Version 4.6.3
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2024 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Fable.Core
open Fable.Core.JsInterop
open Browser.Dom
open Browser.Url
open Taidalab.Switcher

module Main =
    let init () : unit =
        document.body.innerHTML <- ""
        document.body.innerHTML <- Content.Common.body
        (document.querySelector "footer").innerHTML <- Content.Common.footer
        (document.querySelector "aside").innerHTML <- Content.Common.aside

    window.addEventListener (
        "DOMContentLoaded",
        (fun _ ->
            init ()

            let mergedUrl = window.location.href |> URL.Create |> Url.mergePathname
            window.history.replaceState (null, "", mergedUrl.href)
            Switcher.init mergedUrl

            document.links |> JS.Constructors.Array?from |> Array.iter overwriteAnchor)
    )

    window.addEventListener (
        "popstate",
        (fun _ ->
            let mergedUrl = window.location.href |> URL.Create |> Url.mergePathname
            window.history.replaceState (null, "", mergedUrl.href)
            Switcher.init mergedUrl

            document.links |> JS.Constructors.Array?from |> Array.iter overwriteAnchor)
    )
