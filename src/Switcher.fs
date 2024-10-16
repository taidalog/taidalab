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

module rec Switcher =
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
