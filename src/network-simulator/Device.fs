// taidalab Version 3.3.3
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

type Device =
    { Kind : Kind
      Area : Area
      Name : string
      IPv4 : IPv4
      SubnetMask : IPv4
      NetworkAddress : IPv4 }

module Device =
    let create kind area name ipv4 subnetMask =
        let ipv4 = IPv4.ofDotDecimal ipv4
        let subnetMask = IPv4.ofDotDecimal subnetMask
        let networkAddress = IPv4.getSubnet subnetMask ipv4

        { Device.Kind = kind
          Device.Area = area
          Device.Name = name
          Device.IPv4 = ipv4
          Device.SubnetMask = subnetMask
          Device.NetworkAddress =  networkAddress }