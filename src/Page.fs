// taidalab Version 4.6.2
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2024 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom

module Page =
    let init initObject =
        document.title <- initObject.title

        let header = document.querySelector "header"
        header.innerHTML <- initObject.headerContent
        header.className <- initObject.headerColorClass

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

        let headerTitle = document.querySelector "#headerTitle"
        headerTitle.innerHTML <- initObject.headerTitle

        let main = document.querySelector "main"
        main.innerHTML <- initObject.mainContent

        if initObject.questionContent <> "" then
            (document.querySelector "#questionArea").innerHTML <- initObject.questionContent

        if initObject.buttonColorClass <> "" then
            (document.querySelector "#submitButton").className <- initObject.buttonColorClass

        initObject.initFunc ()

    let push initObject =
        window.history.pushState (null, "", initObject.pathname)
        init initObject

    let replace initObject =
        window.history.replaceState (null, "", initObject.pathname)
        init initObject
