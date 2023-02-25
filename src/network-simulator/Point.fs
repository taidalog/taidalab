// taidalab Version 3.3.3
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

type Point =
    { X : float
      Y : float }

module Point =
    let ofFloats x y =
        { Point.X = x
          Point.Y = y }