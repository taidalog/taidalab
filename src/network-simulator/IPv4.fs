// taidalab Version 3.3.3
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Fermata

[<StructuredFormatDisplay("{DisplayText}")>]
type IPv4 =
    { Octet1 : byte
      Octet2 : byte
      Octet3 : byte
      Octet4 : byte }
    member this.DisplayText = this.ToString()
    override this.ToString() = sprintf "%d.%d.%d.%d" this.Octet1 this.Octet2 this.Octet3 this.Octet4

type Errors =
    | Empty
    | WrongFormat
    | OutOfRange

module IPv4 =
//    let isValid (str: string) : bool =
//        Regex.isMatch "^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$" str &&
//        str.Split([|'.'|]) |> Array.map int |> Array.forall (fun x -> x >= 0 && x <= 255)

    let ofBytes byte1 byte2 byte3 byte4 : IPv4 =
        { IPv4.Octet1 = byte1
          IPv4.Octet2 = byte2
          IPv4.Octet3 = byte3
          IPv4.Octet4 = byte4 }
    
    let ofDotDecimal (dotDecimal: string) : IPv4 =
        let bytes =
            dotDecimal.Split([|'.'|])
            |> Array.map byte
        ofBytes (bytes.[0]) (bytes.[1]) (bytes.[2]) (bytes.[3])
    
    let validate (str: string) : Result<IPv4,Errors> =
        let validateNotEmpty str =
            match str with
            | "" -> Error Errors.Empty
            | _ -> Ok str
        let validateFormat str =
            if Regex.isMatch "^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$" str then
                Ok str
            else
                Error Errors.WrongFormat
        let validateRange str =
            if (str |> String.split '.' |> List.map int |> List.forall (fun x -> x >= 0 && x <= 255)) then
                Ok str
            else
                Error Errors.OutOfRange
        
        Ok str
        |> Result.bind validateNotEmpty
        |> Result.bind validateFormat
        |> Result.bind validateRange
        |> Result.map ofDotDecimal
    
    let getSubnet (subnetmask: IPv4) (ipv4: IPv4) : IPv4 =
        ofBytes
            (subnetmask.Octet1 &&& ipv4.Octet1)
            (subnetmask.Octet2 &&& ipv4.Octet2)
            (subnetmask.Octet3 &&& ipv4.Octet3)
            (subnetmask.Octet4 &&& ipv4.Octet4)