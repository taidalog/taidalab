// taidalab Version 3.3.3
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System

type Point =
    { X : float
      Y : float }

module Point =
    let ofFloats x y =
        { Point.X = x
          Point.Y = y }
    
    let ofString (str: string) : Point =
        str.Split([|','|])
        |> Array.map float
        |> fun xs -> ofFloats (Array.head xs) (Array.last xs)
    
    let distance (p1: Point) (p2: Point) : float =
        Math.Sqrt((p1.X - p2.X) ** 2 + (p1.Y - p2.Y) ** 2)
    
    let shift (x: float) (y: float) (point: Point) : Point =
        { Point.X = point.X + x
          Point.Y = point.Y + y }