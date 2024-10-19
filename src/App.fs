// taidalab Version 4.6.3
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2024 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

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

            document.links
            |> JS.Constructors.Array?from
            |> Array.filter (fun (x: HTMLAnchorElement) -> x.href |> URL.Create |> Url.isInternal')
            |> Array.iter overwriteAnchor

            let asideLinks: HTMLAnchorElement array =
                (document.querySelector "aside").querySelectorAll "a"
                |> JS.Constructors.Array?from

            asideLinks
            |> Array.iter (fun (x: HTMLAnchorElement) -> printfn "%s, %s" x.href x.pathname)

            asideLinks |> Array.iter _.classList.remove("current-location")

            asideLinks
            |> Array.filter (fun x -> x.pathname <> Url.home)
            |> Array.filter (fun x -> x.href = mergedUrl.href)
            |> Array.iter _.classList.add("current-location"))
    )

    window.addEventListener (
        "popstate",
        (fun _ ->
            let mergedUrl = window.location.href |> URL.Create |> Url.mergePathname
            window.history.replaceState (null, "", mergedUrl.href)
            Page.init mergedUrl

            (document.querySelector "aside").querySelectorAll "a"
            |> JS.Constructors.Array?from
            |> Array.iter overwriteAnchor

            let asideLinks: HTMLAnchorElement array =
                (document.querySelector "aside").querySelectorAll "a"
                |> JS.Constructors.Array?from

            asideLinks |> Array.iter _.classList.remove("current-location")

            asideLinks
            |> Array.filter (fun x -> x.pathname <> Url.home)
            |> Array.filter (fun x -> x.href = mergedUrl.href)
            |> Array.iter _.classList.add("current-location"))
    )
