// taidalab Version 5.0.1
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2024 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom

module Home =
    let main =
        """
        <div class="home-center">
            <p>
                <span class="home-title" translate="no">taidalab</span><br>
                <span class="home-subtitle">「情報I」学習サイト</span>
            </p>
        </div>"""

    let init () =
        document.title <- "taidalab"

        let header = document.querySelector "header"
        header.innerHTML <- Content.Common.headerNoHelp
        header.className <- "home"

        (document.getElementById "hamburgerButton").onclick <-
            (fun _ ->
                (document.querySelector "aside").classList.toggle "flagged" |> ignore
                (document.getElementById "barrier").classList.toggle "flagged" |> ignore
                (document.querySelector "main").classList.toggle "flagged" |> ignore)

        (document.getElementById "barrier").onclick <-
            (fun _ ->
                (document.querySelector "aside").classList.remove "flagged" |> ignore
                (document.getElementById "barrier").classList.remove "flagged" |> ignore
                (document.querySelector "main").classList.remove "flagged" |> ignore)

        (document.querySelector "#headerTitle").innerHTML <- """<h1 translate="no">taidalab</h1>"""
        (document.querySelector "main").innerHTML <- main

        // Resets keyboard shortcuts.
        document.onkeydown <- fun _ -> ()
