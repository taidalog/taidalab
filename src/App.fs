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
open Taidalab.Switcher

module Main =

    window.addEventListener (
        "DOMContentLoaded",
        (fun _ ->
            printfn "%s" "The begining of DOMContentLoaded"
            document.body.innerHTML <- Content.Common.body
            (document.querySelector "footer").innerHTML <- Content.Common.footer
            (document.querySelector "aside").innerHTML <- Content.Common.aside
            printfn "%s" window.location.pathname

            let pathname = window.location.pathname
            pathname |> Switcher.initPageFromPathname |> ignore

            (document.querySelector "aside").getElementsByTagName "a"
            |> (fun x -> JS.Constructors.Array?from(x))
            |> Array.toList
            |> List.iter (Switcher.switchAnchorAction pathname)

            printfn "%s" "The end of DOMContentLoaded")
    )

    window.addEventListener (
        "popstate",
        (fun _ ->
            let links: HTMLAnchorElement array =
                (document.querySelector "aside").getElementsByTagName "a"
                |> (fun x -> JS.Constructors.Array?from(x))
                |> Array.filter (fun (x: HTMLAnchorElement) -> x.id <> "asideSoon")
                |> Array.filter (fun (x: HTMLAnchorElement) -> x.pathname <> "/taidalab/")

            links
            |> Array.iter (fun (x: HTMLAnchorElement) -> x.classList.remove "current-location")

            links
            |> Array.filter (fun (x: HTMLAnchorElement) -> x.pathname = window.location.pathname)
            |> Array.iter (fun x -> x.classList.add "current-location")

            window.location.pathname |> Switcher.initPageFromPathname |> ignore)
    )
