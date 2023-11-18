// taidalab Version 4.6.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System

[<Flags>]
type Directions =
    | None = 0
    | Up = 1
    | Down = 2
    | Left = 4
    | Right = 8
