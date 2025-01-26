// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2025 taidalog
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
            Area.ofFloats rect.left rect.top (rect.width - 20.) (rect.height - 20.)

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
        container.className <- "device device-container device-note router"
        container.setAttribute ("style", $"top: %f{router.Position.Y}px; left: %f{router.Position.X}px;")

        let svg = document.createElementNS ("http://www.w3.org/2000/svg", "svg")
        svg.id <- $"%s{router.Id}Svg"
        svg.classList.add ("device-image")

        svg.setAttribute (
            "viewBox",
            $"%f{router.Area.X} %f{router.Area.Y} %f{router.Area.Width + 20.} %f{router.Area.Height + 20.}"
        )

        svg.setAttribute ("width", $"%f{router.Area.Width + 20.}")
        svg.setAttribute ("height", $"%f{router.Area.Height + 20.}")

        let g = document.createElementNS ("http://www.w3.org/2000/svg", "g")

        let title = document.createElementNS ("http://www.w3.org/2000/svg", "title")
        title.id <- $"%s{router.Id}Title"
        title.textContent <- $"%s{router.Name}"

        let path1 = document.createElementNS ("http://www.w3.org/2000/svg", "path")
        path1.setAttribute ("d", "m 60,10 h 50 V 45 H 10 V 10 Z")

        let path2 = document.createElementNS ("http://www.w3.org/2000/svg", "path")

        path2.setAttribute (
            "d",
            "M 28 22.5 L 28 25.5 L 25 25.5 L 25 32.5 L 35 32.5 L 35 25.5 L 32 25.5 L 32 22.5 L 28 22.5 z M 48 22.5 L 48 25.5 L 45 25.5 L 45 32.5 L 55 32.5 L 55 25.5 L 52 25.5 L 52 22.5 L 48 22.5 z M 68 22.5 L 68 25.5 L 65 25.5 L 65 32.5 L 75 32.5 L 75 25.5 L 72 25.5 L 72 22.5 L 68 22.5 z M 88 22.5 L 88 25.5 L 85 25.5 L 85 32.5 L 95 32.5 L 95 25.5 L 92 25.5 L 92 22.5 L 88 22.5 z"
        )

        path2.classList.add "inner"

        g.appendChild (title) |> ignore
        g.appendChild (path1) |> ignore
        g.appendChild (path2) |> ignore
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
