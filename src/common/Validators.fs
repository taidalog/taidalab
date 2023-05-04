// taidalab Version 4.1.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

    module Errors =
        type Errors =
            | NullOrEmpty
            | EmptyString
            | WrongFormat
            | OutOfRange

    open System
    open System.Text.RegularExpressions

    module Validators =
        let validateNotNullOrEmpty (input: string) : Result<string,Errors.Errors> =
            match String.IsNullOrEmpty input with
            | true -> Error Errors.NullOrEmpty
            | false -> Ok input
        
        let validateNotEmptyString (input: string) : Result<string,Errors.Errors> =
            match input with
            | "" -> Error Errors.EmptyString
            | _ -> Ok input
        
        let validateFormat (format: string) (input: string) : Result<string,Errors.Errors> =
            match Regex.IsMatch(input, format) with
            | true -> Ok input
            | false -> Error Errors.WrongFormat
        
        let validateRange (min: 'T) (max: 'T) (input: 'T) : Result<'T,Errors.Errors> =
            match input >= min && input <= max with
            | true -> Ok input
            | false -> Error Errors.OutOfRange
        
        let validateDec str =
            Ok str
            |> Result.bind validateNotNullOrEmpty
            |> Result.bind (validateFormat "^[0-9]+$")
            |> Result.map int
        
        let validateBin str =
            Ok str
            |> Result.bind validateNotNullOrEmpty
            |> Result.bind (validateFormat "^[01]+$")
        
        let validateHex str =
            Ok str
            |> Result.bind validateNotNullOrEmpty
            |> Result.bind (validateFormat "^[0-9A-Fa-f]+$")
