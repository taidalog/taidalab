// taidalab Version 4.6.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom
open Browser.Types
open Fermata

[<StructuredFormatDisplay("{DisplayText}")>]
type Router =
    { Id: string
      Name: string
      IPv4: IPv4 list
      SubnetMask: IPv4 list
      NetworkAddress: IPv4 list
      Area: Area
      Position: Point }

    member this.DisplayText = this.ToString()

    override this.ToString() =
        sprintf
            "Id = %s; Name = %s; IPv4 = %O; SubnetMask = %O; Area = %O; Position = %O"
            this.Id
            this.Name
            this.IPv4
            this.SubnetMask
            this.Area
            this.Position

module Router =
    let create id name (ipv4: string) (subnetMask: string) area position : Router =
        let ipv4 =
            ipv4
            |> String.split ';'
            |> List.map (fun x -> x.Trim())
            |> List.map IPv4.ofDotDecimal

        let subnetMask =
            subnetMask
            |> String.split ';'
            |> List.map (fun x -> x.Trim())
            |> List.map IPv4.ofDotDecimal

        let networkAddress = (subnetMask, ipv4) ||> List.map2 IPv4.getSubnet

        { Router.Id = id
          Router.Name = name
          Router.IPv4 = ipv4
          Router.SubnetMask = subnetMask
          Router.NetworkAddress = networkAddress
          Router.Area = area
          Router.Position = position }

    let ofHTMLElement (elm: HTMLElement) : Router =
        let id = elm.id

        let name = document.getElementById(id + "Name").innerText

        let ipv4 = document.getElementById(id + "IPv4").innerText

        let subnetMask = document.getElementById(id + "SubnetMask").innerText

        let area =
            let svg = document.getElementById (id + "Svg")
            let rect = svg.getBoundingClientRect ()
            Area.ofFloats rect.left rect.top rect.width rect.height

        let position =
            let x =
                elm.getAttribute ("style")
                |> Regex.match' """left: (\d+\.?\d+)px;"""
                |> fun m -> (m.Groups.Item 1).Value
                |> float

            let y =
                elm.getAttribute ("style")
                |> Regex.match' """top: (\d+\.?\d+)px;"""
                |> fun m -> (m.Groups.Item 1).Value
                |> float

            Point.ofFloats x y

        create id name ipv4 subnetMask area position

    let toHTMLElement (router: Router) : HTMLElement =
        let container = document.createElement ("div")
        container.id <- router.Id
        container.className <- "device device-container device-note"
        container.setAttribute ("style", $"top: %f{router.Position.Y}px; left: %f{router.Position.X}px;")

        let svg = document.createElementNS ("http://www.w3.org/2000/svg", "svg")
        svg.id <- $"%s{router.Id}Svg"
        svg.classList.add ("device-image")
        svg.setAttribute ("width", "100")
        svg.setAttribute ("height", "35")

        let g = document.createElementNS ("http://www.w3.org/2000/svg", "g")

        let title = document.createElementNS ("http://www.w3.org/2000/svg", "title")
        title.id <- $"%s{router.Id}Title"
        title.textContent <- $"%s{router.Name}"

        let path1 = document.createElementNS ("http://www.w3.org/2000/svg", "path")
        path1.setAttribute ("d", "m 50,0 l 50,0 l 0,35 l -100,0 l 0,-35 l 50,0 z")
        path1.setAttribute ("fill", "#000000")
        path1.setAttribute ("stroke", "#000000")

        let path2 = document.createElementNS ("http://www.w3.org/2000/svg", "path")
        path2.setAttribute ("d", "m 20,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z")
        path2.setAttribute ("fill", "#ffffff")
        path2.setAttribute ("stroke", "#000000")

        let path3 = document.createElementNS ("http://www.w3.org/2000/svg", "path")
        path3.setAttribute ("d", "m 40,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z")
        path3.setAttribute ("fill", "#ffffff")
        path3.setAttribute ("stroke", "#000000")

        let path4 = document.createElementNS ("http://www.w3.org/2000/svg", "path")
        path4.setAttribute ("d", "m 60,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z")
        path4.setAttribute ("fill", "#ffffff")
        path4.setAttribute ("stroke", "#000000")

        let path5 = document.createElementNS ("http://www.w3.org/2000/svg", "path")
        path5.setAttribute ("d", "m 80,15 l 3,0 l 0,3 l 3,0 l 0,7 l -10,0 l 0,-7 l 3,0 l 0,-3 l 3,0 z")
        path5.setAttribute ("fill", "#ffffff")
        path5.setAttribute ("stroke", "#000000")

        g.appendChild (title) |> ignore
        g.appendChild (path1) |> ignore
        g.appendChild (path2) |> ignore
        g.appendChild (path3) |> ignore
        g.appendChild (path4) |> ignore
        g.appendChild (path5) |> ignore

        svg.appendChild (g) |> ignore

        let br1 = document.createElement ("br")

        let spanName = document.createElement ("span")
        spanName.id <- $"%s{router.Id}Name"
        spanName.className <- "device-prop"
        spanName.contentEditable <- "true"
        spanName.textContent <- $"%s{router.Name}"

        let br2 = document.createElement ("br")

        let spanIPv4 = document.createElement ("span")
        spanIPv4.id <- $"%s{router.Id}IPv4"
        spanIPv4.className <- "device-prop ipv4 mono"
        spanIPv4.contentEditable <- "true"

        router.IPv4
        |> List.map (fun x -> x.ToString())
        |> String.concat "; "
        |> fun x -> spanIPv4.textContent <- x

        let br3 = document.createElement ("br")

        let spanSubnetMask = document.createElement ("span")
        spanSubnetMask.id <- $"%s{router.Id}SubnetMask"
        spanSubnetMask.className <- "device-prop subnetmask mono"
        spanSubnetMask.contentEditable <- "true"

        router.SubnetMask
        |> List.map (fun x -> x.ToString())
        |> String.concat "; "
        |> fun x -> spanSubnetMask.textContent <- x

        let spanKind = document.createElement ("span")
        spanKind.id <- $"%s{router.Id}Kind"
        spanKind.className <- "no-display"
        spanKind.textContent <- "Router"

        container.appendChild (svg) |> ignore
        container.appendChild (br1) |> ignore
        container.appendChild (spanName) |> ignore
        container.appendChild (br2) |> ignore
        container.appendChild (spanIPv4) |> ignore
        container.appendChild (br3) |> ignore
        container.appendChild (spanSubnetMask) |> ignore
        container.appendChild (spanKind) |> ignore

        container
