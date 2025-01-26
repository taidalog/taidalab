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
type Client =
    { Id: string
      Name: string
      IPv4: IPv4
      SubnetMask: IPv4
      NetworkAddress: IPv4
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

module Client =
    let create id name ipv4 subnetMask area position : Client =
        let ipv4 = IPv4.ofDotDecimal ipv4
        let subnetMask = IPv4.ofDotDecimal subnetMask
        let networkAddress = IPv4.getSubnet subnetMask ipv4

        { Client.Id = id
          Client.Name = name
          Client.IPv4 = ipv4
          Client.SubnetMask = subnetMask
          Client.NetworkAddress = networkAddress
          Client.Area = area
          Client.Position = position }

    let ofHTMLElement (elm: HTMLElement) : Client =
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

    let toHTMLElement (client: Client) : HTMLElement =
        let container = document.createElement ("div")
        container.id <- client.Id
        container.className <- "device device-container device-note client"
        container.setAttribute ("style", $"top: %f{client.Position.Y}px; left: %f{client.Position.X}px;")

        let svg = document.createElementNS ("http://www.w3.org/2000/svg", "svg")
        svg.id <- $"%s{client.Id}Svg"
        svg.classList.add ("device-image")

        svg.setAttribute (
            "viewBox",
            $"%f{client.Area.X} %f{client.Area.Y} %f{client.Area.Width + 20.} %f{client.Area.Height + 20.}"
        )

        svg.setAttribute ("width", $"%f{client.Area.Width + 20.}")
        svg.setAttribute ("height", $"%f{client.Area.Height + 20.}")

        let g = document.createElementNS ("http://www.w3.org/2000/svg", "g")

        let title = document.createElementNS ("http://www.w3.org/2000/svg", "title")
        title.id <- $"%s{client.Id}Title"
        title.textContent <- $"%s{client.Name}"

        let path1 = document.createElementNS ("http://www.w3.org/2000/svg", "path")

        path1.setAttribute (
            "d",
            "M 28.182377 18.180962 L 28.182377 66.817481 L 91.817624 66.817481 L 91.817624 18.180962 L 28.182377 18.180962 z M 31.818789 21.819335 L 88.181212 21.819335 L 88.181212 63.181069 L 31.818789 63.181069 L 31.818789 21.819335 z M 42.618187 23.415904 C 42.372545 23.415904 42.154849 23.465785 41.967006 23.566931 C 41.782775 23.668078 41.626319 23.808011 41.496273 23.98863 C 41.369838 24.169248 41.274931 24.382089 41.209911 24.624119 C 41.148499 24.866148 41.117725 25.12918 41.117725 25.414558 C 41.117725 25.826369 41.17246 26.181726 41.284443 26.481553 C 41.40004 26.78138 41.565893 27.011055 41.782636 27.17 C 41.999379 27.328945 42.264372 27.409289 42.575036 27.409289 C 42.737593 27.409289 42.879798 27.395348 43.002618 27.370061 C 43.125439 27.348389 43.243995 27.310489 43.359591 27.256301 L 43.359591 26.773799 C 43.243995 26.820758 43.130293 26.858658 43.01831 26.88756 C 42.906326 26.916462 42.785498 26.93071 42.655453 26.93071 C 42.43871 26.93071 42.254062 26.871433 42.102342 26.752224 C 41.954235 26.629403 41.842805 26.456424 41.766945 26.232457 C 41.691085 26.004877 41.653184 25.734719 41.653184 25.420442 C 41.653184 25.2037 41.674253 25.002528 41.713987 24.818296 C 41.753723 24.634066 41.813001 24.473066 41.892473 24.335795 C 41.975558 24.194913 42.07759 24.086065 42.200411 24.010205 C 42.323232 23.930733 42.467708 23.892522 42.633878 23.892522 C 42.76031 23.892522 42.880828 23.909354 42.992812 23.945479 C 43.104795 23.977991 43.206827 24.020435 43.300749 24.071008 L 43.48512 23.631657 C 43.355074 23.563024 43.217723 23.510872 43.073228 23.474746 C 42.928733 23.435012 42.777131 23.415904 42.618187 23.415904 z M 36.939971 23.419827 C 36.712391 23.419827 36.51349 23.459999 36.343709 23.539472 C 36.173927 23.615331 36.04143 23.729033 35.947509 23.880753 C 35.857199 24.032473 35.812173 24.221976 35.812173 24.449556 C 35.812173 24.659073 35.852345 24.832053 35.931818 24.969323 C 36.01129 25.106593 36.113322 25.222567 36.239755 25.316489 C 36.3698 25.406798 36.506841 25.489725 36.647724 25.565585 C 36.803056 25.645058 36.93132 25.720548 37.036079 25.789183 C 37.140835 25.857818 37.22118 25.931348 37.275368 26.01082 C 37.329556 26.090292 37.355785 26.194596 37.355785 26.324642 C 37.355785 26.433013 37.334094 26.534735 37.287136 26.628657 C 37.240176 26.718964 37.164685 26.790221 37.063538 26.844409 C 36.966004 26.894982 36.835468 26.920903 36.669299 26.920903 C 36.524804 26.920903 36.378056 26.901796 36.229948 26.862062 C 36.085454 26.818711 35.938706 26.764287 35.790598 26.699267 L 35.790598 27.207266 C 35.917031 27.268677 36.058925 27.315976 36.214257 27.348486 C 36.36959 27.384611 36.521502 27.403405 36.673222 27.403405 C 36.864678 27.403405 37.037347 27.377484 37.189067 27.326911 C 37.340787 27.276338 37.466468 27.20508 37.567614 27.111158 C 37.67237 27.013624 37.752715 26.893107 37.806904 26.752224 C 37.864701 26.611342 37.893205 26.454886 37.893205 26.281491 C 37.893205 26.075586 37.857575 25.909732 37.785328 25.783299 C 37.716693 25.653253 37.619514 25.542134 37.493082 25.451824 C 37.37026 25.357903 37.223512 25.26785 37.053731 25.181153 C 36.902011 25.09807 36.774058 25.026812 36.669299 24.9654 C 36.564539 24.900378 36.481923 24.824887 36.424126 24.741802 C 36.369937 24.658718 36.343709 24.552142 36.343709 24.422096 C 36.343709 24.313725 36.365085 24.221401 36.408435 24.145541 C 36.451783 24.066069 36.515915 24.006481 36.602612 23.963132 C 36.692922 23.919782 36.806623 23.896444 36.943893 23.896444 C 37.063101 23.896444 37.181347 23.912969 37.296943 23.945479 C 37.416151 23.977989 37.536979 24.025287 37.6598 24.086699 L 37.838286 23.631657 C 37.690179 23.559409 37.54312 23.507256 37.395012 23.474746 C 37.246905 23.438621 37.095303 23.419827 36.939971 23.419827 z M 46.725331 23.459055 L 48.161067 27.370061 L 48.627877 27.370061 L 47.192142 23.459055 L 46.725331 23.459055 z M 33.113304 23.48063 L 33.113304 27.348486 L 33.635033 27.348486 L 33.635033 25.879407 L 34.084191 25.879407 C 34.362344 25.879407 34.587475 25.827254 34.760869 25.722496 C 34.934263 25.614125 35.061906 25.467066 35.141378 25.279222 C 35.224463 25.091379 35.264946 24.875955 35.264946 24.633926 C 35.264946 24.261851 35.170349 23.977442 34.982506 23.778761 C 34.798275 23.58008 34.516137 23.48063 34.133225 23.48063 L 33.113304 23.48063 z M 33.635033 23.963132 L 34.099882 23.963132 C 34.3094 23.963132 34.465855 24.017866 34.570615 24.129849 C 34.675373 24.241833 34.729487 24.414813 34.729487 24.649617 C 34.729487 24.833848 34.701297 24.980597 34.647109 25.088968 C 34.592923 25.197336 34.51454 25.275408 34.409781 25.322373 C 34.308635 25.369337 34.17872 25.392983 34.023388 25.392983 L 33.635033 25.392983 L 33.635033 23.963132 z M 49.35359 24.190652 L 49.35359 24.66727 L 50.83836 25.420442 L 49.35359 26.173615 L 49.35359 26.650232 L 51.41697 25.561662 L 51.41697 25.267454 L 49.35359 24.190652 z M 44.96989 24.38483 C 44.865133 24.38483 44.782206 24.417879 44.720794 24.482899 C 44.659382 24.54431 44.628608 24.636944 44.628608 24.763378 C 44.628608 24.889813 44.659382 24.986681 44.720794 25.051701 C 44.782204 25.113113 44.865131 25.143887 44.96989 25.143887 C 45.067422 25.143887 45.145806 25.113113 45.207218 25.051701 C 45.272238 24.990291 45.305287 24.895694 45.305287 24.769262 C 45.305287 24.635605 45.274514 24.538427 45.213102 24.477015 C 45.155304 24.415603 45.074648 24.38483 44.96989 24.38483 z M 44.96989 26.656116 C 44.865133 26.656116 44.782206 26.686889 44.720794 26.748301 C 44.659382 26.809711 44.628608 26.902346 44.628608 27.02878 C 44.628608 27.155215 44.659382 27.252083 44.720794 27.317104 C 44.785816 27.382124 44.868743 27.413212 44.96989 27.413212 C 45.067422 27.413212 45.145806 27.382124 45.207218 27.317104 C 45.272238 27.252081 45.305287 27.155213 45.305287 27.02878 C 45.305287 26.898733 45.274514 26.806098 45.213102 26.748301 C 45.151692 26.686889 45.071037 26.656116 44.96989 26.656116 z M 28.0745 68.021773 L 11.55962 101.05153 L 108.44038 101.05153 L 91.9255 68.021773 L 87.433923 68.021773 L 88.330277 69.814481 L 101.94034 97.034613 L 18.059657 97.034613 L 31.669723 69.814481 L 32.566077 68.021773 L 28.0745 68.021773 z M 34.894244 72.672222 L 32.03258 79.033001 L 42.271021 79.033001 L 43.765598 72.672222 L 34.894244 72.672222 z M 44.799249 72.672222 L 43.304672 79.033001 L 53.758866 79.033001 L 54.257058 72.672222 L 44.799249 72.672222 z M 55.26325 72.672222 L 54.765058 79.033001 L 65.234943 79.033001 L 64.73675 72.672222 L 55.26325 72.672222 z M 65.742942 72.672222 L 66.241134 79.033001 L 76.695328 79.033001 L 75.200751 72.672222 L 65.742942 72.672222 z M 76.234402 72.672222 L 77.728979 79.033001 L 87.967421 79.033001 L 85.105757 72.672222 L 76.234402 72.672222 z M 31.579499 80.037231 L 29.170916 85.391818 L 40.778405 85.391818 L 42.035655 80.037231 L 31.579499 80.037231 z M 43.069306 80.037231 L 41.812056 85.391818 L 53.262635 85.391818 L 53.680411 80.037231 L 43.069306 80.037231 z M 54.686602 80.037231 L 54.268827 85.391818 L 65.731174 85.391818 L 65.313398 80.037231 L 54.686602 80.037231 z M 66.31959 80.037231 L 66.737365 85.391818 L 78.187944 85.391818 L 76.930695 80.037231 L 66.31959 80.037231 z M 77.964346 80.037231 L 79.221595 85.391818 L 90.829085 85.391818 L 88.420501 80.037231 L 77.964346 80.037231 z M 28.717835 86.396048 L 25.856171 92.756827 L 39.048462 92.756827 L 40.543039 86.396048 L 28.717835 86.396048 z M 41.57669 86.396048 L 40.082113 92.756827 L 52.685987 92.756827 L 53.18418 86.396048 L 41.57669 86.396048 z M 54.190371 86.396048 L 53.692179 92.756827 L 66.307821 92.756827 L 65.809629 86.396048 L 54.190371 86.396048 z M 66.815821 86.396048 L 67.314013 92.756827 L 79.917887 92.756827 L 78.42331 86.396048 L 66.815821 86.396048 z M 79.456961 86.396048 L 80.951539 92.756827 L 94.143829 92.756827 L 91.282165 86.396048 L 79.456961 86.396048 z"
        )

        path1.setAttribute ("transform", "matrix(0.99578756,0,0,0.99578756,0.25274623,0.63390548)")
        let path2 = document.createElementNS ("http://www.w3.org/2000/svg", "path")

        path2.setAttribute (
            "d",
            "M 30.525391 21.326172 L 30.525391 64.583984 L 89.474609 64.583984 L 89.474609 21.326172 L 30.525391 21.326172 z M 32.341797 68.369141 L 17.003906 98.341797 L 102.99609 98.341797 L 87.658203 68.369141 L 32.341797 68.369141 z"
        )

        path2.classList.add "background"

        g.appendChild (title) |> ignore
        g.appendChild (path2) |> ignore
        g.appendChild (path1) |> ignore
        svg.appendChild (g) |> ignore

        let br1 = document.createElement ("br")

        let spanName = document.createElement ("span")
        spanName.id <- $"%s{client.Id}Name"
        spanName.className <- "device-prop"
        spanName.contentEditable <- "true"
        spanName.textContent <- $"%s{client.Name}"

        let br2 = document.createElement ("br")

        let spanIPv4 = document.createElement ("span")
        spanIPv4.id <- $"%s{client.Id}IPv4"
        spanIPv4.className <- "device-prop ipv4 mono"
        spanIPv4.contentEditable <- "true"
        spanIPv4.textContent <- $"%s{client.IPv4.ToString()}"

        let br3 = document.createElement ("br")

        let spanSubnetMask = document.createElement ("span")
        spanSubnetMask.id <- $"%s{client.Id}SubnetMask"
        spanSubnetMask.className <- "device-prop subnetmask mono"
        spanSubnetMask.contentEditable <- "true"
        spanSubnetMask.textContent <- $"%s{client.SubnetMask.ToString()}"

        let spanKind = document.createElement ("span")
        spanKind.id <- $"%s{client.Id}Kind"
        spanKind.className <- "no-display"
        spanKind.textContent <- "Client"

        container.appendChild (svg) |> ignore
        container.appendChild (br1) |> ignore
        container.appendChild (spanName) |> ignore
        container.appendChild (br2) |> ignore
        container.appendChild (spanIPv4) |> ignore
        container.appendChild (br3) |> ignore
        container.appendChild (spanSubnetMask) |> ignore
        container.appendChild (spanKind) |> ignore

        container
