// taidalab Version 4.1.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

[<StructuredFormatDisplay("{DisplayText}")>]
type Area =
    { X : float
      Y : float
      Width : float
      Height : float }
    member this.DisplayText = this.ToString()
    override this.ToString() = sprintf "X = %f; Y = %f; Width = %f; Height = %f" this.X this.Y this.Width this.Height

module Area =
    let ofFloats x y width height =
        { Area.X = x
          Area.Y = y
          Area.Width = width
          Area.Height = height }
    
    let ofPoints (point1: Point) (point2: Point) : Area =
        ofFloats (min point1.X point2.X) (min point1.Y point2.Y) (point1.X - point2.X |> abs) (point1.Y - point2.Y |> abs)
    
    let expand (x: float) (y: float) (area: Area) : Area =
        { area with Area.Width = area.Width + x; Area.Height = area.Height + y }
    
    let shift (x: float) (y: float) (area: Area) : Area =
        { area with Area.X = area.X + x; Area.Y = area.Y + y }
    
    let includesPoint (area: Area) (point: Point) : bool =
        point.X >= area.X &&
        point.X <= area.X + area.Width &&
        point.Y >= area.Y &&
        point.Y <= area.Y + area.Height
    
//    let isOver (offset: float) (area1: Area) (area2: Area): bool =
//        //printfn "DEBUG: area1 = left: %f top: %f width: %f height: %f" area1.X area1.Y area1.Width area1.Height
//        //printfn "DEBUG: area2  = left: %f top: %f width: %f height: %f" area2.X area2.Y area2.Width area2.Height
//        let topLeft =
//            area2.X >= area1.X - offset &&
//            area2.X <= area1.X + area1.Width + offset &&
//            area2.Y >= area1.Y - offset &&
//            area2.Y <= area1.Y + area1.Height + offset
//        
//        let topRight =
//            area2.X + area2.Width >= area1.X - offset &&
//            area2.X + area2.Width <= area1.X + area1.Width + offset &&
//            area2.Y >= area1.Y - offset &&
//            area2.Y <= area1.Y + area1.Height + offset
//        
//        let bottomLeft =
//            area2.X >= area1.X - offset &&
//            area2.X <= area1.X + area1.Width + offset &&
//            area2.Y + area2.Height >= area1.Y - offset &&
//            area2.Y + area2.Height <= area1.Y + area1.Height + offset
//        
//        let bottomRight =
//            area2.X + area2.Width >= area1.X - offset &&
//            area2.X + area2.Width <= area1.X + area1.Width + offset &&
//            area2.Y + area2.Height >= area1.Y - offset &&
//            area2.Y + area2.Height <= area1.Y + area1.Height + offset
//        
//        topLeft || topRight || bottomLeft || bottomRight