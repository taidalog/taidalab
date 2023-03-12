// taidalab Version 3.3.3
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

module TCPIP =
    let getNetNeighbors (cables: Cable list) (devices: Device list) (source: Device) : Device list =
        //cables |> List.length |> printfn "%d cables."
        //cables |> List.iter (fun x -> printfn "%s (%b)" x.Name (x.Area |> Area.isOver 0. source.Area))
        let sourceArea = source |> Device.getArea
//        printfn "%A" sourceArea
        let connectedCables =
            cables |> List.filter (fun c -> c.Area |> Area.isOver 0. sourceArea)
//        connectedCables |> List.iter (fun x -> printfn "getNetNeighbor': source is connected to %s" x.Name)
        
        let clientTester (source: Device) (cable: Cable) (client: Client) : bool =
            Area.isOver 0. client.Area cable.Area &&
            client.Id <> (Device.getId source)
        
        let routerTester (source: Device) (cable: Cable) (router: Router) : bool =
            Area.isOver 0. router.Area cable.Area &&
            router.Id <> (Device.getId source)
        
        let hubTester (source: Device) (cable: Cable) (hub: Hub) : bool =
            Area.isOver 0. hub.Area cable.Area &&
            hub.Id <> (Device.getId source)
        
        connectedCables
        |> List.collect
            (fun c ->
//                printfn "%s is connected to below:" c.Name
                devices
                |> List.filter (fun x ->
                    match x with
                    | Client d -> clientTester source c d
                    | Router d -> routerTester source c d
                    | Hub d -> hubTester source c d))

    let rec ping (cables: Cable list) (devices: Device list) (source: Device) (ttl: int) (destinationIPv4: IPv4) : bool =
        let neighbors = getNetNeighbors cables devices source
        let sourceName device =
            match device with
            | Client d -> d.Name
            | Router d -> d.Name
            | Hub d -> d.Name

        printfn "ping starts."
        neighbors |> List.iter (fun x -> printfn "ping: %s is connected to %s" (sourceName source) (sourceName x))
        
        let found = neighbors |> List.exists (Device.hasIPv4 destinationIPv4)// (fun x -> x.IPv4 = destinationIPv4)
        //printfn "ping: destination IPv4 found = %b" found

        if found then
            true
        else if ttl = 0 then
            false
        else
            neighbors
            |> List.exists (fun x -> ping cables devices x (ttl - 1) destinationIPv4)