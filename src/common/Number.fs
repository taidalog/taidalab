// taidalab Version 5.0.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2024 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open System

module Number =
    let getRandomBetween min max =
        let rand = new Random()
        rand.Next(min, max + 1)

    let rec newNumber generator tester =
        let candidate = generator ()

        if tester candidate then
            candidate
        else
            newNumber generator tester

    let log2 (value: int) : float = Math.Log(float value, 2.0)
