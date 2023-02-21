// taidalab Version 3.3.3
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

type Cable =
    { Kind : Kind
      Area : Area
      Name : string }

module Cable =
    let create kind area name =
        { Cable.Kind = kind
          Cable.Area = area
          Cable.Name = name }