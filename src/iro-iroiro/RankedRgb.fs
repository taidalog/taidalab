// taidalab Version 4.3.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Fermata

type PrimaryColors =
    | Red = 0
    | Green = 1
    | Blue = 2

type Rank =
    | Min = 0
    | Med = 1
    | Max = 2

type RankedRgb =
    { Color: PrimaryColors
      Value: int
      Rank: Rank }

module RankedRgb =
    let ofInts (r: int) (g: int) (b: int) : RankedRgb list =
        [ (PrimaryColors.Red, r); (PrimaryColors.Green, g); (PrimaryColors.Blue, b) ]
        |> List.map (fun (color, value) ->
            match value with
            | var when var = (List.min [ r; g; b ]) -> (color, value, Rank.Min)
            | var when var = (List.max [ r; g; b ]) -> (color, value, Rank.Max)
            | _ -> (color, value, Rank.Med))
        |> List.map (fun (color, value, rank) ->
            ({ RankedRgb.Color = color
               RankedRgb.Value = value
               RankedRgb.Rank = rank }))

    let toInts (rankedRgb: RankedRgb list) : (int * int * int) =
        let r =
            rankedRgb
            |> List.find (fun x -> x.Color = PrimaryColors.Red)
            |> fun x -> x.Value

        let g =
            rankedRgb
            |> List.find (fun x -> x.Color = PrimaryColors.Green)
            |> fun x -> x.Value

        let b =
            rankedRgb
            |> List.find (fun x -> x.Color = PrimaryColors.Blue)
            |> fun x -> x.Value

        (r, g, b)
