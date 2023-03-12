// taidalab Version 3.3.3
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

module TCPIP =
    let getNetNeighbors (cables: Cable list) (devices: Device list) (source: Device) (previous: Device) : Device list =
        //cables |> List.length |> printfn "%d cables."
        //cables |> List.iter (fun x -> printfn "%s (%b)" x.Name (x.Area |> Area.isOver 0. source.Area))
//        printfn "getNetNeighbors starts."
//        printfn "getNetNeighbors: source:\t%s" (source |> Device.name)
//        printfn "getNetNeighbors: previous:\t%s" (previous |> Device.name)

        let sourceArea = source |> Device.area
//        printfn "%A" sourceArea
        let connectedCables =
            cables |> List.filter (fun c -> c.Area |> Area.isOver 0. sourceArea)
//        connectedCables |> List.iter (fun x -> printfn "getNetNeighbor': source is connected to %s" x.Name)
        
        let clientTester (source: Device) (cable: Cable) (device: Device) : bool =
            (Device.id device) <> (Device.id source) &&
            Area.isOver 0. (Device.area device) cable.Area
        
        let routerTester (source: Device) (cable: Cable) (device: Device) : bool =
            (Device.id device) <> (Device.id source) &&
            Area.isOver 0. (Device.area device) cable.Area
        
        let hubTester (source: Device) (previous: Device) (cable: Cable) (device: Device) : bool =
            (Device.id device) <> (Device.id source) &&
            Area.isOver 0. (Device.area device) cable.Area &&
            (List.intersection (Device.NetworkAddresses previous) (Device.NetworkAddresses device)) <> []
        
        connectedCables
        |> List.collect
            (fun c ->
//                printfn "%s is connected to below:" c.Name
                devices
                |> List.filter (fun d ->
                    match source with
                    | Client _ -> clientTester source c d
                    | Router _ -> routerTester source c d
                    | Hub _ -> hubTester source previous c d))

    let ping (cables: Cable list) (devices: Device list) (source: Device) (ttl: int) (destinationIPv4: IPv4) : bool =
        let rec ping' (cables: Cable list) (devices: Device list) (source: Device) (previous: Device) (ttl: int) (destinationIPv4: IPv4) : bool =
            let neighbors = getNetNeighbors cables devices source previous
            
//            printfn "ping starts."
//            printfn "previous: %s" (previous |> Device.name)
//            neighbors |> List.iter (fun x -> printfn "ping: %s is connected to %s" (Device.name source) (Device.name x))
            
            let found = neighbors |> List.exists (Device.hasIPv4 destinationIPv4)
            //printfn "ping: destination IPv4 found = %b" found

            if found then
                true
            else if ttl = 0 then
                false
            else
                neighbors
                |> List.exists (fun x -> ping' cables devices x source (ttl - 1) destinationIPv4)
        ping' cables devices source source ttl destinationIPv4