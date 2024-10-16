// taidalab Version 4.6.3
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2024 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom
open Browser.Url
open Browser.Types
open Fable.Core
open Fable.Core.JsInterop
open Taidalab.EndlessBinary
// open Fermata

module rec Switcher =
    // let switch pathname =
    //     match pathname with
    //     | "/taidalab/" -> (pathname, Taidalab.Home.main, (fun _ -> document.onkeydown <- fun _ -> ()))
    //     | "/taidalab/endless-binary/" -> (pathname, EndlessBinary.Home.main, setHomeButtons)
    //     | "/taidalab/endless-binary/dec2bin-1/" ->
    //         (pathname, EndlessBinary.Course.main Dec2Bin1.help "help-color dec2bin", Dec2Bin1.init)
    //     | "/taidalab/endless-binary/dec2bin-1/4/" ->
    //         (pathname, EndlessBinary.Course.main Dec2Bin1.help "help-color dec2bin", Dec2Bin1.init4)
    //     | "/taidalab/endless-binary/dec2bin-2/" ->
    //         (pathname, EndlessBinary.Course.main Dec2Bin2.help "help-color dec2bin", Dec2Bin2.init)
    //     | "/taidalab/endless-binary/bin2dec-1/" ->
    //         (pathname, EndlessBinary.Course.main Bin2Dec1.help "help-color bin2dec", Bin2Dec1.init)
    //     | "/taidalab/endless-binary/bin2dec-2/" ->
    //         (pathname, EndlessBinary.Course.main Bin2Dec2.help "help-color bin2dec", Bin2Dec2.init)
    //     | "/taidalab/endless-binary/power-of-two-1/" ->
    //         (pathname, EndlessBinary.Course.main PowerOfTwo1.help "help-color power-of-two", PowerOfTwo1.init)
    //     | "/taidalab/endless-binary/power-of-two-2/" ->
    //         (pathname, EndlessBinary.Course.main PowerOfTwo2.help "help-color power-of-two", PowerOfTwo2.init)
    //     | "/taidalab/endless-binary/addition/" ->
    //         (pathname, EndlessBinary.Course.main Addition.help "help-color addition", Addition.init)
    //     | "/taidalab/endless-binary/addition/4/" ->
    //         (pathname, EndlessBinary.Course.main Addition.help "help-color addition", Addition.init4)
    //     | "/taidalab/endless-binary/subtraction/" ->
    //         (pathname, EndlessBinary.Course.main Subtraction.help "help-color subtraction", Subtraction.init)
    //     | "/taidalab/endless-binary/complement/" ->
    //         (pathname, EndlessBinary.Course.main Complement.help "help-color complement", Complement.init)
    //     | "/taidalab/endless-binary/dec2hex/" ->
    //         (pathname, EndlessBinary.Course.main Dec2Hex.help "help-color dec2hex", Dec2Hex.init)
    //     | "/taidalab/endless-binary/hex2dec/" ->
    //         (pathname, EndlessBinary.Course.main Hex2Dec.help "help-color hex2dec", Hex2Dec.init)
    //     | "/taidalab/iro-iroiro/" -> (pathname, IroIroiro.main, IroIroiro.init)
    //     | "/taidalab/network-simulator/" -> (pathname, NetworkSimulator.main, NetworkSimulator.init)
    //     | "/taidalab/about/" -> (pathname, Taidalab.About.main, (fun _ -> document.onkeydown <- fun _ -> ()))
    //     | "/taidalab/terms/" -> (pathname, Taidalab.Terms.main, (fun _ -> document.onkeydown <- fun _ -> ()))
    //     | "/taidalab/information-policy/" ->
    //         (pathname, Taidalab.InformationPolicy.main, (fun _ -> document.onkeydown <- fun _ -> ()))
    //     | _ -> ("/taidalab/404/", EndlessBinary.Course.main404, NotFound.init)

    // let initPageFromPathname pathname =
    //     pathname |> switch |||> InitObject.create |> Page.init

    // let (|InnerPage|OuterPage|) url =
    //     let m = Regex.isMatch "^http://localhost:8080/taidalab/" url

    //     match m with
    //     | true -> InnerPage
    //     | false -> OuterPage

    // let isInnerPage url =
    //     match url with
    //     | InnerPage -> true
    //     | OuterPage -> false

    // let overwriteAnchorClick action (anchor: HTMLAnchorElement) =
    //     anchor.onclick <-
    //         (fun ev ->
    //             ev.preventDefault ()
    //             action ())

    // let setHomeButtons () =
    //     [ ("buttonED2B1", "/taidalab/endless-binary/dec2bin-1/")
    //       ("buttonED2B2", "/taidalab/endless-binary/dec2bin-2/")
    //       ("buttonEB2D1", "/taidalab/endless-binary/bin2dec-1/")
    //       ("buttonEB2D2", "/taidalab/endless-binary/bin2dec-2/")
    //       ("buttonEPOT1", "/taidalab/endless-binary/power-of-two-1/")
    //       ("buttonEPOT2", "/taidalab/endless-binary/power-of-two-2/")
    //       ("buttonEBAD", "/taidalab/endless-binary/addition/")
    //       ("buttonEBSB", "/taidalab/endless-binary/subtraction/")
    //       ("buttonECMP", "/taidalab/endless-binary/complement/")
    //       ("buttonED2H", "/taidalab/endless-binary/dec2hex/") ]
    //     |> List.iter (fun (x, y) ->
    //         (document.getElementById x).onclick <- (fun _ -> y |> switch |||> InitObject.create |> Page.push))

    // let switchAnchorAction pathname (anchor: HTMLAnchorElement) =
    //     let links: HTMLAnchorElement array =
    //         (document.querySelector "aside").getElementsByTagName "a"
    //         |> (fun x -> JS.Constructors.Array?from(x))
    //         |> Array.filter (fun (x: HTMLAnchorElement) -> x.id <> "asideSoon")
    //         |> Array.filter (fun (x: HTMLAnchorElement) -> x.pathname <> "/taidalab/")

    //     (pathname, anchor.href, anchor)
    //     |> (fun (p, h, a) -> (p <> "/taidalab/404/", isInnerPage h, a))
    //     |> (fun (p, h, a) ->
    //         match (p, h, a) with
    //         | (true, true, a) ->
    //             (fun _ ->
    //                 overwriteAnchorClick
    //                     (fun _ ->
    //                         a.pathname |> Switcher.switch |||> InitObject.create |> Page.push

    //                         links
    //                         |> Array.iter (fun (x: HTMLAnchorElement) -> x.classList.remove "current-location")

    //                         links
    //                         |> Array.filter (fun (x: HTMLAnchorElement) -> x.pathname = window.location.pathname)
    //                         |> Array.iter (fun x -> x.classList.add "current-location")

    //                         (document.querySelector "aside").classList.remove "flagged" |> ignore
    //                         (document.getElementById "barrier").classList.remove "flagged" |> ignore
    //                         (document.querySelector "main").classList.remove "flagged" |> ignore)
    //                     a)
    //         | (true, false, a) -> (fun _ -> ())
    //         | (false, true, a) ->
    //             (fun _ ->
    //                 overwriteAnchorClick
    //                     (fun _ ->
    //                         a.pathname |> Switcher.switch |||> InitObject.create |> Page.replace

    //                         links
    //                         |> Array.iter (fun (x: HTMLAnchorElement) -> x.classList.remove "current-location")

    //                         links
    //                         |> Array.filter (fun (x: HTMLAnchorElement) -> x.pathname = window.location.pathname)
    //                         |> Array.iter (fun x -> x.classList.add "current-location")

    //                         (document.querySelector "aside").classList.remove "flagged" |> ignore
    //                         (document.getElementById "barrier").classList.remove "flagged" |> ignore
    //                         (document.querySelector "main").classList.remove "flagged" |> ignore)
    //                     a)
    //         | (false, false, a) ->
    //             (fun _ ->
    //                 overwriteAnchorClick
    //                     (fun _ ->
    //                         window.location.replace a.pathname

    //                         links
    //                         |> Array.iter (fun (x: HTMLAnchorElement) -> x.classList.remove "current-location")

    //                         links
    //                         |> Array.filter (fun (x: HTMLAnchorElement) -> x.pathname = window.location.pathname)
    //                         |> Array.iter (fun x -> x.classList.add "current-location")

    //                         (document.querySelector "aside").classList.remove "flagged" |> ignore
    //                         (document.getElementById "barrier").classList.remove "flagged" |> ignore
    //                         (document.querySelector "main").classList.remove "flagged" |> ignore)
    //                     a))
    //     |> (fun f -> f ())


    let init (url: URL) : unit =
        match url.pathname with
        | "/taidalab/" -> Home.init ()
        | "/taidalab/endless-binary/dec2bin-1/" -> Dec2Bin1.init'' ()
        | "/taidalab/endless-binary/dec2bin-2/" -> Dec2Bin2.init'' ()
        | "/taidalab/endless-binary/bin2dec-1/" -> Bin2Dec1.init'' ()
        | "/taidalab/endless-binary/bin2dec-2/" -> Bin2Dec2.init'' ()
        | "/taidalab/endless-binary/power-of-two-1/" -> PowerOfTwo1.init'' ()
        | "/taidalab/endless-binary/power-of-two-2/" -> PowerOfTwo2.init'' ()
        | "/taidalab/endless-binary/addition/" -> Addition.init'' ()
        | "/taidalab/endless-binary/subtraction/" -> Subtraction.init'' ()
        | "/taidalab/endless-binary/complement/" -> Complement.init'' ()
        | "/taidalab/endless-binary/dec2hex/" -> Dec2Hex.init'' ()
        | "/taidalab/endless-binary/hex2dec/" -> Hex2Dec.init'' ()
        | "/taidalab/iro-iroiro/" -> IroIroiro.init'' ()
        | "/taidalab/network-simulator/" -> NetworkSimulator.init'' ()
        | "/taidalab/about/" -> About.init ()
        | "/taidalab/terms/" -> Terms.init ()
        | "/taidalab/information-policy/" -> InformationPolicy.init ()
        | _ -> NotFound.init ()

    let rec overwriteAnchor (anchor: HTMLAnchorElement) : unit =
        anchor.onclick <-
            fun (e: MouseEvent) ->
                e.preventDefault ()
                window.history.pushState (null, "", anchor.href)
                anchor.href |> URL.Create |> init
                document.links |> JS.Constructors.Array?from |> Array.iter overwriteAnchor
