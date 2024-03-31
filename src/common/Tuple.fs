// taidalab Version 4.6.3
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2024 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

module Tuple =
    let applyToTuples3 f (a1, b1, c1) (a2, b2, c2) = f a1 a2, f b1 b2, f c1 c2
