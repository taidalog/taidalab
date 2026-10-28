// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2026 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom
open Browser.Types
open Fermata
open Taidalab.Html
open Taidalab.Svg

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
        let title' =
            title {
                id $"%s{router.Id}Title"
                textContent router.Name
            }

        let path1 = path { d "m 60,10 h 50 V 45 H 10 V 10 Z" }

        let path2 =
            path {
                d
                    "M 28 22.5 L 28 25.5 L 25 25.5 L 25 32.5 L 35 32.5 L 35 25.5 L 32 25.5 L 32 22.5 L 28 22.5 z M 48 22.5 L 48 25.5 L 45 25.5 L 45 32.5 L 55 32.5 L 55 25.5 L 52 25.5 L 52 22.5 L 48 22.5 z M 68 22.5 L 68 25.5 L 65 25.5 L 65 32.5 L 75 32.5 L 75 25.5 L 72 25.5 L 72 22.5 L 68 22.5 z M 88 22.5 L 88 25.5 L 85 25.5 L 85 32.5 L 95 32.5 L 95 25.5 L 92 25.5 L 92 22.5 L 88 22.5 z"

                className "inner"
            }

        let g' =
            g {
                appendChild title'
                appendChild path1
                appendChild path2
            }

        let svg' =
            svg {
                id $"%s{router.Id}Svg"
                className "device-image"
                viewBox router.Area.X router.Area.Y (router.Area.Width + 20.) (router.Area.Height + 20.)
                width (router.Area.Width + 20.)
                height (router.Area.Height + 20.)
                appendChild g'
            }

        let spanName =
            span {
                id $"%s{router.Id}Name"
                className "device-prop"
                contentEditable true
                textContent router.Name
            }

        let spanIPv4 =
            span {
                id $"%s{router.Id}IPv4"
                className "device-prop ipv4 mono"
                contentEditable true
                textContent (router.IPv4 |> List.map _.ToString() |> String.concat "; ")
            }

        let spanSubnetMask =
            span {
                id $"%s{router.Id}SubnetMask"
                className "device-prop subnetmask mono"
                contentEditable true
                textContent (router.SubnetMask |> List.map _.ToString() |> String.concat "; ")
            }

        let spanKind =
            span {
                id $"%s{router.Id}Kind"
                className "no-display"
                textContent "Router"
            }

        div {
            id router.Id
            className "device device-container device-note router"
            setAttribute "style" $"top: %f{router.Position.Y}px; left: %f{router.Position.X}px;"
            appendChild svg'
            appendChild (br { () })
            appendChild spanName
            appendChild (br { () })
            appendChild spanIPv4
            appendChild (br { () })
            appendChild spanSubnetMask
            appendChild spanKind
        }
