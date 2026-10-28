module Taidalab.EndlessBinary.Dec2Bin1.Tests

open System
open Xunit
open Taidalab.EndlessBinary.Dec2Bin1

[<Fact>]
let ``devideIntoPowerOfTwo 1`` () =
    let actual = devideIntoPowerOfTwo 10
    let expected = [ 8; 2 ]
    Assert.Equal<int list>(expected, actual)

[<Fact>]
let ``devideIntoPowerOfTwo 2`` () =
    let actual = devideIntoPowerOfTwo 161
    let expected = [ 128; 32; 1 ]
    Assert.Equal<int list>(expected, actual)

[<Fact>]
let ``repeatDivision 1`` () =
    let actual = repeatDivision 10 2
    let expected = [ 5, 0; 2, 1; 1, 0 ]
    Assert.Equal<(int * int) list>(expected, actual)

[<Fact>]
let ``repeatDivision 2`` () =
    let actual = repeatDivision 161 2
    let expected = [ 80, 1; 40, 0; 20, 0; 10, 0; 5, 0; 2, 1; 1, 0 ]
    Assert.Equal<(int * int) list>(expected, actual)
