// taidalab Version 4.3.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System

[<StructuredFormatDisplay("{DisplayText}")>]
type Point =
    { X: float
      Y: float }

    member this.DisplayText = this.ToString()
    override this.ToString() = sprintf "X = %f; Y = %f" this.X this.Y

module Point =
    let ofFloats x y = { Point.X = x; Point.Y = y }

    let ofString (str: string) : Point =
        str.Split([| ',' |])
        |> Array.map float
        |> fun xs -> ofFloats (Array.head xs) (Array.last xs)

    let toCoordinate (point: Point) : string = sprintf "%f,%f" point.X point.Y

    let distance (p1: Point) (p2: Point) : float =
        Math.Sqrt((p1.X - p2.X) ** 2 + (p1.Y - p2.Y) ** 2)

    let shift (x: float) (y: float) (point: Point) : Point =
        { Point.X = point.X + x
          Point.Y = point.Y + y }

    let relativePosition (point1: Point) (point2: Point) : Directions =
        (if point1.Y > point2.Y then
             Directions.Up
         else
             Directions.None)
        ||| (if point1.Y < point2.Y then
                 Directions.Down
             else
                 Directions.None)
        ||| (if point1.X > point2.X then
                 Directions.Left
             else
                 Directions.None)
        ||| (if point1.X < point2.X then
                 Directions.Right
             else
                 Directions.None)
