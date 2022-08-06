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
        if window.location.pathname = "/" then
            (document.getElementById "buttonED2B1").onclick <- (fun _ -> Switcher.pushPage "/endless-dec2bin-1/")
            (document.getElementById "buttonED2B2").onclick <- (fun _ -> Switcher.pushPage "/endless-dec2bin-2/")
            (document.getElementById "buttonEB2D1").onclick <- (fun _ -> Switcher.pushPage "/endless-bin2dec-1/")
            (document.getElementById "buttonEB2D2").onclick <- (fun _ -> Switcher.pushPage "/endless-bin2dec-2/")
            (document.getElementById "buttonEPOT1").onclick <- (fun _ -> Switcher.pushPage "/endless-power-of-two-1/")
            (document.getElementById "buttonEPOT2").onclick <- (fun _ -> Switcher.pushPage "/endless-power-of-two-2/")
            (document.getElementById "buttonEBAD").onclick <- (fun _ -> Switcher.pushPage "/endless-addition/")
            (document.getElementById "buttonEBSB").onclick <- (fun _ -> Switcher.pushPage "/endless-subtraction/")
            (document.getElementById "buttonECMP").onclick <- (fun _ -> Switcher.pushPage "/endless-complement/")
    ))

    window.addEventListener("popstate", (fun _ ->
        Switcher.newInitObject window.location.pathname |> Switcher.initPage
    ))
