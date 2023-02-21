// taidalab Version 3.3.3
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

type Area =
    { X : float
      Y : float
      Width : float
      Height : float }

module Area =
    let ofFloats x y width height =
        { Area.X = x
          Area.Y = y
          Area.Width = width
          Area.Height = height }