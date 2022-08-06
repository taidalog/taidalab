// taidalab Version 1.6.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom

module Main =

    window.addEventListener("DOMContentLoaded", (fun _ ->
        printfn "%s" "DOMContentLoaded"
        printfn "%s" window.location.pathname
        Switcher.newInitObject window.location.pathname |> Switcher.initPage
        printfn "%s" "The end of DOMContentLoaded"
    ))

    window.addEventListener("popstate", (fun _ ->
        Switcher.newInitObject window.location.pathname |> Switcher.initPage
    ))
