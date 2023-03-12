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
        
        let connectedClientsAndRouters =
            connectedCables
            |> List.collect
                (fun c ->
//                    printfn "%s is connected to below:" c.Name
                    devices
                    |> List.filter (fun d -> Device.isClient d || Device.isRouter d)
                    |> List.filter (fun d ->
                        //printfn "%s (%b)" d.Name (Area.isOver 0. d.Area c.Area && d.IPv4 <> source.IPv4)
                        let dArea = d |> Device.getArea
                        let dIPv4 = d |> Device.getIPv4AsList
                        Area.isOver 0. dArea c.Area &&
                        dIPv4 |> List.forall (fun x -> (Device.hasIPv4 x source) = false)))
        
        let connectedHubs =
            connectedCables
            |> List.collect
                (fun c ->
                    devices
                    |> List.filter Device.isHub
                    |> List.filter (fun d ->
                        let dArea = d |> Device.getArea
                        Area.isOver 0. dArea c.Area &&
                        (Device.getId d) <> (Device.getId source)))

        
        List.concat [connectedClientsAndRouters; connectedHubs]

    let rec ping (cables: Cable list) (devices: Device list) (source: Device) (ttl: int) (destinationIPv4: IPv4) : bool =
        let neighbors = getNetNeighbors cables devices source
        let sourceName device =
            match device with
            | Client d -> d.Name
            | Router d -> d.Name
            | Hub d -> d.Name

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