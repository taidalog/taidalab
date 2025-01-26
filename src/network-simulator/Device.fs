// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2024 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System
open System.Diagnostics
open Fable.Core
open Fable.Core.JsInterop
open Browser.Dom
open Browser.Types
open Fermata

type Device =
    | Client of Client
    | Router of Router
    | Hub of Hub

module Device =
    let ofHTMLElement (element: HTMLElement) : Device option =
        let id = element.id
        let kind = document.getElementById(id + "Kind").innerText

        match kind with
        | "Client" -> element |> Client.ofHTMLElement |> Client |> Some
        | "Router" -> element |> Router.ofHTMLElement |> Router |> Some
        | "Hub" -> element |> Hub.ofHTMLElement |> Hub |> Some
        | _ -> None

    let toHTMLElement (device: Device) : HTMLElement =
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

    let id (device: Device) : string =
        match device with
        | Client d -> d.Id
        | Router d -> d.Id
        | Hub d -> d.Id

    let hasIPv4 (ipv4: IPv4) (device: Device) : bool =
        match device with
        | Client d -> d.IPv4 = ipv4
        | Router d -> d.IPv4 |> List.contains ipv4
        | _ -> false

    let IPv4s device : IPv4 list =
        match device with
        | Client d -> [ d.IPv4 ]
        | Router d -> d.IPv4
        | Hub d -> []

    let tryGetIPv4s device : IPv4 list option =
        match device with
        | Client _ -> device |> IPv4s |> Some
        | Router _ -> device |> IPv4s |> Some
        | _ -> None

    let networkAddresses device : IPv4 list =
        match device with
        | Client d -> [ d.NetworkAddress ]
        | Router d -> d.NetworkAddress
        | Hub d -> []

    let tryGetNetworkSddresses device : IPv4 list option =
        match device with
        | Client _ -> device |> networkAddresses |> Some
        | Router _ -> device |> networkAddresses |> Some
        | _ -> None

    let area (device: Device) : Area =
        match device with
        | Client d -> d.Area
        | Router d -> d.Area
        | Hub d -> d.Area

    let name device =
        match device with
        | Client d -> d.Name
        | Router d -> d.Name
        | Hub d -> d.Name

    let removeSelectedClass () =
        document.getElementsByClassName "selected"
        |> JS.Constructors.Array?from
        |> Array.iter (fun (x: HTMLElement) -> x.classList.remove "selected")

    let onpointerdown (container: HTMLElement) (e: PointerEvent) : unit =
        let t = e.target :?> HTMLElement
        Debug.WriteLine t
        removeSelectedClass ()

        let paths: HTMLElement array =
            container.querySelectorAll "path" |> JS.Constructors.Array.from

        if e.buttons = 1 && Array.contains t paths then
            Debug.WriteLine "Device.onpointerdown"
            container.classList.add "selected"

            container.onlostpointercapture <-
                fun _ ->
                    Debug.WriteLine "onlostpointercapture"
                    container.onpointermove <- fun _ -> ()

            container.onpointerup <-
                fun _ ->
                    Debug.WriteLine "onpointerup"
                    container.onpointermove <- fun _ -> ()

            container.onpointermove <-
                fun e ->
                    if e.buttons = 1 then
                        Debug.WriteLine e.target
                        Debug.WriteLine "Device.onpointermove"
                        let top = container.offsetTop + e.movementY
                        let left = container.offsetLeft + e.movementX
                        container.setAttribute ("style", $"top: %f{top}px; left: %f{left}px;")
                        container.draggable <- false
                        container.setPointerCapture (e.pointerId)
