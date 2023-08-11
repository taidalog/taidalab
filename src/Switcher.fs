// taidalab Version 4.4.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom
open Browser.Types
open Taidalab.EndlessBinary
open Fermata

module rec Switcher =
    let switch pathname =
        match pathname with
        | "/" -> (pathname, Taidalab.Home.main, (fun _ -> ()))
        | "/endless-binary/" -> (pathname, EndlessBinary.Home.main, setHomeButtons)
        | "/endless-binary/dec2bin-1/" ->
            (pathname, EndlessBinary.Course.main Dec2Bin1.help "help-color dec2bin", Dec2Bin1.init)
        | "/endless-binary/dec2bin-1/4/" ->
            (pathname, EndlessBinary.Course.main Dec2Bin1.help "help-color dec2bin", Dec2Bin1.init4)
        | "/endless-binary/dec2bin-2/" ->
            (pathname, EndlessBinary.Course.main Dec2Bin2.help "help-color dec2bin", Dec2Bin2.init)
        | "/endless-binary/bin2dec-1/" ->
            (pathname, EndlessBinary.Course.main Bin2Dec1.help "help-color bin2dec", Bin2Dec1.init)
        | "/endless-binary/bin2dec-2/" ->
            (pathname, EndlessBinary.Course.main Bin2Dec2.help "help-color bin2dec", Bin2Dec2.init)
        | "/endless-binary/power-of-two-1/" ->
            (pathname, EndlessBinary.Course.main PowerOfTwo1.help "help-color power-of-two", PowerOfTwo1.init)
        | "/endless-binary/power-of-two-2/" ->
            (pathname, EndlessBinary.Course.main PowerOfTwo2.help "help-color power-of-two", PowerOfTwo2.init)
        | "/endless-binary/addition/" ->
            (pathname, EndlessBinary.Course.main Addition.help "help-color addition", Addition.init)
        | "/endless-binary/addition/4/" ->
            (pathname, EndlessBinary.Course.main Addition.help "help-color addition", Addition.init4)
        | "/endless-binary/subtraction/" ->
            (pathname, EndlessBinary.Course.main Subtraction.help "help-color subtraction", Subtraction.init)
        | "/endless-binary/complement/" ->
            (pathname, EndlessBinary.Course.main Complement.help "help-color complement", Complement.init)
        | "/endless-binary/dec2hex/" ->
            (pathname, EndlessBinary.Course.main Dec2Hex.help "help-color dec2hex", Dec2Hex.init)
        | "/endless-binary/hex2dec/" ->
            (pathname, EndlessBinary.Course.main Hex2Dec.help "help-color hex2dec", Hex2Dec.init)
        | "/iro-iroiro/" -> (pathname, IroIroiro.main, IroIroiro.init)
        | "/network-simulator/" -> (pathname, NetworkSimulator.main, NetworkSimulator.init)
        | "/about/" -> (pathname, Taidalab.About.main, (fun _ -> ()))
        | "/terms/" -> (pathname, Taidalab.Terms.main, (fun _ -> ()))
        | "/information-policy/" -> (pathname, Taidalab.InformationPolicy.main, (fun _ -> ()))
        | _ -> ("/404/", EndlessBinary.Course.main404, NotFound.init)

    let initPageFromPathname pathname =
        pathname |> switch |||> InitObject.create |> Page.init

    let (|InnerPage|OuterPage|) url =
        let m = Regex.isMatch "^http://localhost:8080/" url

        match m with
        | true -> InnerPage
        | false -> OuterPage

    let isInnerPage url =
        match url with
        | InnerPage -> true
        | OuterPage -> false

    //    let idToAnchor id =
    //        document.getElementById id :?> HTMLAnchorElement

    let overwriteAnchorClick action (anchor: HTMLAnchorElement) =
        anchor.onclick <-
            (fun ev ->
                ev.preventDefault ()
                action ())

    let setHomeButtons () =
        [ ("buttonED2B1", "/endless-binary/dec2bin-1/")
          ("buttonED2B2", "/endless-binary/dec2bin-2/")
          ("buttonEB2D1", "/endless-binary/bin2dec-1/")
          ("buttonEB2D2", "/endless-binary/bin2dec-2/")
          ("buttonEPOT1", "/endless-binary/power-of-two-1/")
          ("buttonEPOT2", "/endless-binary/power-of-two-2/")
          ("buttonEBAD", "/endless-binary/addition/")
          ("buttonEBSB", "/endless-binary/subtraction/")
          ("buttonECMP", "/endless-binary/complement/")
          ("buttonED2H", "/endless-binary/dec2hex/") ]
        |> List.iter (fun (x, y) ->
            (document.getElementById x).onclick <- (fun _ -> y |> switch |||> InitObject.create |> Page.push))

    //    let switchOverwriteAnchor actionTrue actionFalse anchor =
    //        anchor
    //        |> (fun (x : HTMLAnchorElement) -> (isInnerPage x.href, x))
    //        |> (fun (b, x) ->
    //            match (b, x) with
    //            | (true, x) -> (actionTrue, x)
    //            | (false, x) -> (actionFalse, x))
    //        |> (fun (action, x) -> action x)

    let switchAnchorAction pathname (anchor: HTMLAnchorElement) =
        (pathname, anchor.href, anchor)
        |> (fun (p, h, a) -> (p <> "/404/", isInnerPage h, a))
        |> (fun (p, h, a) ->
            match (p, h, a) with
            | (true, true, a) ->
                (fun _ ->
                    overwriteAnchorClick
                        (fun _ ->
                            a.pathname |> Switcher.switch |||> InitObject.create |> Page.push
                            (document.querySelector "aside").classList.remove "active" |> ignore
                            (document.getElementById "barrier").classList.remove "active" |> ignore)
                        a)
            | (true, false, a) -> (fun _ -> ())
            | (false, true, a) ->
                (fun _ ->
                    overwriteAnchorClick
                        (fun _ ->
                            a.pathname |> Switcher.switch |||> InitObject.create |> Page.replace
                            (document.querySelector "aside").classList.remove "active" |> ignore
                            (document.getElementById "barrier").classList.remove "active" |> ignore)
                        a)
            | (false, false, a) ->
                (fun _ ->
                    overwriteAnchorClick
                        (fun _ ->
                            window.location.replace a.pathname
                            (document.querySelector "aside").classList.remove "active" |> ignore
                            (document.getElementById "barrier").classList.remove "active" |> ignore)
                        a))
        |> (fun f -> f ())
