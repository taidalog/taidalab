// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2025 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System
open System.Diagnostics
open Fable.Core
open Fable.Core.JsInterop
open Browser.Dom
open Browser.Types
open Browser.Url
open Taidalab.Page

module Main =
    let init () : unit =
        document.body.innerHTML <- ""
        document.body.innerHTML <- Content.Common.body
        (document.querySelector "footer").innerHTML <- Content.Common.footer
        (document.querySelector "aside").innerHTML <- Content.Common.aside

    window.addEventListener (
        "DOMContentLoaded",
        (fun _ ->
            // Adding elements to the <body> element.
            init ()

            let mergedUrl = window.location.href |> URL.Create |> Url.mergePathname
            window.history.replaceState (null, "", mergedUrl.href)
            Page.init mergedUrl

            // Debug.WriteLine mergedUrl

            let links: HTMLAnchorElement array = JS.Constructors.Array?from document.links

            links
            |> Array.filter (fun x -> x.href <> "")
            |> Array.filter (fun x -> x.href |> URL.Create |> Url.isInternal')
            |> Array.iter overwriteAnchor

            showLocation ())
    )

    window.addEventListener (
        "popstate",
        (fun _ ->
            let mergedUrl = window.location.href |> URL.Create |> Url.mergePathname
            window.history.replaceState (null, "", mergedUrl.href)
            Page.init mergedUrl

            // Debug.WriteLine mergedUrl

            let links: HTMLAnchorElement array =
                (document.querySelector "aside").querySelectorAll "a"
                |> JS.Constructors.Array?from

            links
            |> Array.filter (fun x -> x.href <> "")
            |> Array.filter (fun x -> x.href |> URL.Create |> Url.isInternal')
            |> Array.iter overwriteAnchor

            showLocation ())
    )
