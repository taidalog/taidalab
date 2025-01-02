// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2024 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Types
open Browser.Url

module Url =
    let baseUrl: string =
#if DEBUG
        "http://localhost:8080"
#else
        "https://taidalog.github.io"
#endif

    let home: string =
#if TESTING
        "/taidalab/"
#else
        "/test.taidalab/"
#endif


    let mergePathname (url: URL) =
        let searchParams = url.searchParams

        match searchParams.get "pathname" with
        | None -> url
        | Some v ->
            let searchParams' = url.searchParams
            searchParams'.delete "pathname"

            if searchParams'.ToString() = "" then
                URL.Create(url.origin + v)
            else
                URL.Create(url.origin + v + "?" + searchParams'.ToString())

    let isInternal (baseUrl: string) (url: URL) : bool =
        url.origin = baseUrl && url.pathname.StartsWith home

    let isExternal (baseUrl: string) (url: URL) : bool = url |> isInternal baseUrl |> not

    let isInternal' (url: URL) : bool = isInternal baseUrl url

    let isExternal' (url: URL) : bool = url |> isInternal' |> not
