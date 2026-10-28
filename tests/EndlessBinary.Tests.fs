module Taidalab.EndlessBinary.Tests

open System
open Xunit
open Taidalab.EndlessBinary.Course

[<Fact>]
let ``numOpt 1`` () =
    let actual = numOpt 2 10
    let expected = Some 2, Some 1, Some 10, None
    Assert.Equal<int option * int option * int option * int option>(expected, actual)

[<Fact>]
let ``numOpt 2`` () =
    let actual = numOpt 2 161
    let expected = Some 2, Some 1, Some 161, None
    Assert.Equal<int option * int option * int option * int option>(expected, actual)

[<Fact>]
let ``divRemOpt 1`` () =
    let actual = divRemOpt 2 [ 5, 0; 2, 1; 1, 0 ]

    let expected =
        [ (Some 2, Some 1, Some 5, Some 0)
          (Some 2, Some 1, Some 2, Some 1)
          (None, None, Some 1, Some 0) ]

    Assert.Equal<int option * int option * int option * int option>(expected, actual)

[<Fact>]
let ``divRemOpt 2`` () =
    let actual = divRemOpt 2 []
    let expected = [ None, None, None, None ]
    Assert.Equal<(int option * int option * int option * int option) list>(expected, actual)
