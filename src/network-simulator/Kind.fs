// taidalab Version 3.3.3
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

type Kind =
    | Client
    | Server
    | Router
    | Hub
    | ProxyServer
    | LANCable

module Kind =
    let ofString str =
        match str with
        | "Client" -> Some Kind.Client
        | "Server" -> Some Kind.Server
        | "Router" -> Some Kind.Router
        | "Hub" -> Some Kind.Hub
        | "ProxyServer" -> Some Kind.ProxyServer
        | "LANCable" -> Some Kind.LANCable
        | _ -> None