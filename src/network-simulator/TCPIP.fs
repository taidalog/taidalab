// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2025 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Fermata

module TCPIP =
    let getNetNeighbors (cables: Cable list) (devices: Device list) (route: Device list) : Device list =
        let current = route |> List.last
        let last = route |> List.filter (Device.isHub >> not) |> List.tryLast

        cables
        |> List.filter (Cable.connectedTo current)
        |> List.collect (fun c ->
            devices
            |> List.filter (fun next -> (List.contains next route) = false)
            |> List.filter (fun next -> Cable.connectedTo next c)
            |> List.filter (fun next ->
                Device.isHub next
                || Device.isRouter current
                || match last with
                   | None -> false
                   | Some last' ->
                       List.intersect (Device.networkAddresses last') (Device.networkAddresses next)
                       <> []))

    let extendRoute (cables: Cable list) (devices: Device list) (route: Device list) : Device list list =
        route |> getNetNeighbors cables devices |> List.map (fun x -> route @ [ x ])

    let ping (cables: Cable list) (devices: Device list) (ttl: int) (destinationIPv4: IPv4) (source: Device) : bool =
        let rec ping'
            (cables: Cable list)
            (devices: Device list)
            (ttl: int)
            (destinationIPv4: IPv4)
            (route: Device list)
            : bool =
            let routes = extendRoute cables devices route

            let found =
                routes |> List.map List.last |> List.exists (Device.hasIPv4 destinationIPv4)

            if found then
                true
            else if ttl = 0 then
                false
            else
                routes |> List.exists (ping' cables devices (ttl - 1) destinationIPv4)

        ping' cables devices ttl destinationIPv4 [ source ]
