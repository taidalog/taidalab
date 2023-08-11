// taidalab Version 4.4.2
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
    let valueByColor (rankedRgbs: RankedRgb list) (color: PrimaryColors) : int =
        rankedRgbs |> List.find (fun x -> x.Color = color) |> (fun x -> x.Value)

    let valueByRank (rankedRgbs: RankedRgb list) (rank: Rank) : int =
        rankedRgbs |> List.find (fun x -> x.Rank = rank) |> (fun x -> x.Value)

    let colorByRank (rankedRgbs: RankedRgb list) (rank: Rank) : PrimaryColors =
        rankedRgbs |> List.find (fun x -> x.Rank = rank) |> (fun x -> x.Color)

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
        let r = valueByColor rankedRgb PrimaryColors.Red
        let g = valueByColor rankedRgb PrimaryColors.Green
        let b = valueByColor rankedRgb PrimaryColors.Blue
        (r, g, b)
