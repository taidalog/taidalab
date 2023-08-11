// taidalab Version 4.4.3
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
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
