// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2024 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System
open System.Diagnostics
open Browser.Dom
open Browser.Url
open Browser.Types
open Fable.Core
open Fable.Core.JsInterop
open Taidalab.EndlessBinary

module Page =
    let init (url: URL) : unit =
        match url.pathname with
        | x when x = Url.home -> Home.init ()
        | x when x = $"%s{Url.home}endless-binary/dec2bin-1/" -> Dec2Bin1.init ()
        | x when x = $"%s{Url.home}endless-binary/dec2bin-2/" -> Dec2Bin2.init ()
        | x when x = $"%s{Url.home}endless-binary/bin2dec-1/" -> Bin2Dec1.init ()
        | x when x = $"%s{Url.home}endless-binary/bin2dec-2/" -> Bin2Dec2.init ()
        | x when x = $"%s{Url.home}endless-binary/power-of-two-1/" -> PowerOfTwo1.init ()
        | x when x = $"%s{Url.home}endless-binary/power-of-two-2/" -> PowerOfTwo2.init ()
        | x when x = $"%s{Url.home}endless-binary/addition/" -> Addition.init ()
        | x when x = $"%s{Url.home}endless-binary/subtraction/" -> Subtraction.init ()
        | x when x = $"%s{Url.home}endless-binary/complement/" -> Complement.init ()
        | x when x = $"%s{Url.home}endless-binary/dec2hex/" -> Dec2Hex.init ()
        | x when x = $"%s{Url.home}endless-binary/hex2dec/" -> Hex2Dec.init ()
        | x when x = $"%s{Url.home}iro-iroiro/" -> IroIroiro.init ()
        | x when x = $"%s{Url.home}network-simulator/" -> NetworkSimulator.init ()
        | x when x = $"%s{Url.home}about/" -> About.init ()
        | x when x = $"%s{Url.home}terms/" -> Terms.init ()
        | x when x = $"%s{Url.home}information-policy/" -> InformationPolicy.init ()
        | _ -> NotFound.init ()

    let showLocation () : unit =
        let asideLinks: HTMLAnchorElement array =
            (document.querySelector "aside").querySelectorAll "a"
            |> JS.Constructors.Array?from

        asideLinks |> Array.iter _.classList.remove("current-location")

        asideLinks
        |> Array.filter (fun x -> x.pathname <> Url.home)
        |> Array.filter (fun x -> x.href <> "")
        |> Array.filter (fun x -> x.href = window.location.href)
        |> Array.iter _.classList.add("current-location")

    let rec overwriteAnchor (anchor: HTMLAnchorElement) : unit =
        anchor.onclick <-
            fun (e: MouseEvent) ->
                e.preventDefault ()
                window.history.pushState (null, "", anchor.href)
                anchor.href |> URL.Create |> init

                // Debug.WriteLine(URL.Create anchor.href)

                let links: HTMLAnchorElement array = JS.Constructors.Array?from document.links

                links
                |> Array.filter (fun x -> x.href <> "")
                |> Array.filter (fun x -> x.href |> URL.Create |> Url.isInternal')
                |> Array.iter overwriteAnchor

                showLocation ()
