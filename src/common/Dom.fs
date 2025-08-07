// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2025 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Types

module Dom =
    type EventTargetBuilder() = class end

    type NodeBuilder() =
        inherit EventTargetBuilder()

        [<CustomOperation("textContent")>]
        member _.SetTextContent(acc: 'T :> Node, x: string) : 'T =
            acc.textContent <- x
            acc

        [<CustomOperation("appendChild")>]
        member _.AppendChild(acc: 'T :> Node, x: Node) : 'T =
            acc.appendChild x |> ignore
            acc

    type ElementBuilder() =
        inherit NodeBuilder()

        [<CustomOperation("className")>]
        member _.SetClassName(acc: 'T :> Element, x: string) : 'T =
            acc.className <- x
            acc

        [<CustomOperation("id")>]
        member _.SetId(acc: 'T :> Element, x: string) : 'T =
            acc.id <- x
            acc

        [<CustomOperation("innerHTML")>]
        member _.SetInnetHTML(acc: 'T :> Element, x: string) : 'T =
            acc.innerHTML <- x
            acc

        [<CustomOperation("setAttribute")>]
        member _.SetAttribute(acc: 'T :> Element, x: string, y: string) : 'T =
            acc.setAttribute (x, y)
            acc
