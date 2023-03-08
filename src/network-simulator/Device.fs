// taidalab Version 3.3.3
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom
open Fermata

type Device =
    | Client of Client
    | Router of Router
    | Hub of Hub

module Device =
    let ofHTMLElement (element: Browser.Types.HTMLElement) : Device option =
        let id = element.id
        let kind = document.getElementById(id + "Kind").innerText

        match kind with
        | "Client" -> element |> Client.ofHTMLElement |> Client |> Some
        | "Router" -> element |> Router.ofHTMLElement |> Router |> Some
        | "Hub" -> element |> Hub.ofHTMLElement |> Hub |> Some
        | _ -> None
    
    let toHTMLElement (device: Device) : Browser.Types.HTMLElement =
        match device with
        | Client d -> d |> Client.toHTMLElement
        | Router d -> d |> Router.toHTMLElement
        | Hub d -> d |> Hub.toHTMLElement
    
    let isClient (device: Device) : bool =
        match device with
        | Client _ -> true
        | _ -> false
    
    let isRouter (device: Device) : bool =
        match device with
        | Router _ -> true
        | _ -> false
    
    let isHub (device: Device) : bool =
        match device with
        | Hub _ -> true
        | _ -> false
    
    let hasIPv4 (ipv4String: string) (device: Device) : bool =
        match device with
        | Client d -> d.IPv4.ToString() = ipv4String
        | Router d -> d.IPv4 |> List.exists (fun x -> x.ToString() = ipv4String)
        | _ -> false

    let getIPv4AsList device : IPv4 list =
        match device with
        | Client d -> [d.IPv4]
        | Router d -> d.IPv4
    
    let tryGetIPv4AsList device : IPv4 list option =
        match device with
        | Client _ -> device |> getIPv4AsList |> Some
        | Router _ -> device |> getIPv4AsList |> Some
        | _ -> None
    
    let getArea (device: Device) : Area =
        match device with
        | Client d -> d.Area
        | Router d -> d.Area
        | Hub d -> d.Area