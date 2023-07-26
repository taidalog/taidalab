// taidalab Version 4.3.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom
open Browser.Types
open Fermata
open Taidalab.RankedRgb

module IroIroiro =
    let help =
        """
        <p>
            元の色のRGB値などを入力すると、その色の色相（色の種類）を変更しながら色をローテーションします。<br>
            綺麗です。
        </p>
        <p>
            入力する値は以下の通りです。
            <ul>
                <li>R: 赤のRGB値 (0 &le; R &le; 255)</li>
                <li>G: 緑のRGB値 (0 &le; G &le; 255)</li>
                <li>B: 青のRGB値 (0 &le; B &le; 255)</li>
                <li>
                    変化量: RGB値を変化させる量。(0 &le; 変化量 &le; 255)<br>
                    この値が小さいと色の変化が小さく、グラデーションのようになり、大きいと色が大きく変化し、カラフルになります。
                </li>
                <li>
                    回数: 色をローテーションさせる回数。(1 &le; 回数)<br>
                    あまり大きくすると時間がかかってしまいます。100位にしておいてください。
                </li>
            </ul>
        </p>
    """

    let main =
        $"""
        <form id="inputArea" class="iro-input-area" autocomplete="off">
            <span class="display-order-1 input-area-iro-shorter">
                <span class="iro-input-wrapper"><label for="rInput">R:<input type="number" id="rInput" class="iro-number-input consolas" min="0" max="255"></label></span>
                <span class="iro-input-wrapper"><label for="gInput">G:<input type="number" id="gInput" class="iro-number-input consolas" min="0" max="255"></label></span>
                <span class="iro-input-wrapper"><label for="bInput">B:<input type="number" id="bInput" class="iro-number-input consolas" min="0" max="255"></label></span>
            </span>
            <span class="display-order-2 input-area-iro-wider">
                <span class="iro-input-wrapper"><label for="stepInput">間隔:<input type="number" id="stepInput" class="iro-number-input consolas"></label></span>
                <span class="iro-input-wrapper"><label for="limitInput">回数:<input type="number" id="limitInput" class="iro-number-input iro-number-input-6rem consolas" value="100"></label></span>
            </span>
            <span class="display-order-3">
                <button type="button" id="submitButton" class="submit-button d2b-button">確認</button>
            </span>
            <span id="helpButton" class="material-symbols-outlined help-button display-order-4">
                help
            </span>
        </form>
        <div id="errorArea" class="error-area"></div>
        <div id="outputArea" class="output-area"></div>
        <div id="helpWindow" class="help-window">
            %s{help}
            <p class="help-color-iro">このヘルプは、他の場所をクリックすると消えます。</p>
        </div>
        """

    let (|Positive|Negative|) num = if num >= 0 then Positive else Negative

    let getNextRgb r g b step colorToModify =
        let rec loop rgbList min max value colorToModify =
            let addedMed, gap =
                rgbList
                |> List.find (fun x -> x.Color = colorToModify)
                |> fun x -> x.Value + value |> Bound.clampGap min max
                |> fun (x, y) -> x, -y
            //printfn "addedMed: %d" addedMed
            //printfn "gap: %d" gap

            let newRankedRgb =
                rgbList
                |> List.map (fun x ->
                    if x.Color = colorToModify then
                        { x with Value = addedMed }
                    else
                        x)
                |> RankedRgb.toInts
                |||> RankedRgb.ofInts
            //printfn "newRankedRgb: %A" newRankedRgb

            let rankToAdd =
                if gap > 0 then Some Rank.Min
                else if gap < 0 then Some Rank.Max
                else None
            //printfnfnfn "rankToAdd: %A" rankToAdd

            let nextColorToModify =
                match rankToAdd with
                | None -> None
                | Some rnk ->
                    newRankedRgb
                    |> List.filter (fun x -> x.Color <> colorToModify)
                    |> List.find (fun x -> x.Rank = rnk)
                    |> fun x -> Some x.Color

            match nextColorToModify with
            | None -> (newRankedRgb, colorToModify)
            | Some c -> loop newRankedRgb min max gap c

        let rankedRgbs = RankedRgb.ofInts r g b
        //printfn "rankedRgbs: %A" rankedRgbs

        let getValueByRank rgbList rank =
            rgbList |> List.find (fun x -> x.Rank = rank) |> (fun x -> x.Value)

        let min = getValueByRank rankedRgbs Rank.Min
        //printfnfn "min: %d" min

        let max = getValueByRank rankedRgbs Rank.Max
        //printfn "max: %d" max

        loop rankedRgbs min max step colorToModify

    let rec repeatGetNextRgb r g b step limit colorToModify acc =
        //printfn "r: %d  g: %d  b: %d" r g b
        //printfn "colorToModify: %A" colorToModify

        let resRgb, lastModifiedColor = getNextRgb r g b step colorToModify
        let resR, resG, resB = resRgb |> RankedRgb.toInts
        //printfn "resRgb: %A" resRgb
        //printfn "lastModifiedColor: %A" lastModifiedColor

        let nextStep = step * (if colorToModify = lastModifiedColor then 1 else -1)
        //printfn "nextStep: %d" nextStep

        let nextColorToModify =
            if lastModifiedColor = colorToModify then
                colorToModify
            else
                let nextRankToModify =
                    match (List.tryFind (fun x -> x.Rank = Rank.Med) resRgb) with
                    | Some m -> m.Rank
                    | None ->
                        match nextStep with
                        | Positive -> Rank.Min
                        | Negative -> Rank.Max
                //printfnfnfn "nextRankToModify: %A" nextRankToModify

                match nextRankToModify with
                | Rank.Med -> resRgb |> List.find (fun x -> x.Rank = nextRankToModify) |> (fun x -> x.Color)
                | _ ->
                    resRgb
                    |> List.filter (fun x -> x.Color <> lastModifiedColor)
                    |> List.find (fun x -> x.Rank = nextRankToModify)
                    |> fun x -> x.Color
        //printfn "nextColorToModify: %A" nextColorToModify
        //printfn "The end of repeatGetNextRgb at limit: %d" limit
        //printfn "\n"

        match limit with
        | 0 -> acc @ [ (resR, resG, resB) ]
        | _ -> repeatGetNextRgb resR resG resB nextStep (limit - 1) nextColorToModify (acc @ [ (resR, resG, resB) ])

    let start () =
        let errorArea = document.getElementById "errorArea"
        errorArea.innerHTML <- ""

        //
        let rInput = (document.getElementById "rInput" :?> HTMLInputElement).value
        let gInput = (document.getElementById "gInput" :?> HTMLInputElement).value
        let bInput = (document.getElementById "bInput" :?> HTMLInputElement).value

        let stepInput = (document.getElementById "stepInput" :?> HTMLInputElement).value

        let limitInput = (document.getElementById "limitInput" :?> HTMLInputElement).value
        //(rInput, gInput, bInput) |> printfn "initial: %A"

        let parseResult =
            [ ("R", "rInput", rInput)
              ("G", "gInput", gInput)
              ("B", "bInput", bInput)
              ("Step", "stepInput", stepInput)
              ("Limit", "limitInput", limitInput) ]
            |> List.map (fun (name, id, s) -> (name, id, System.Int32.TryParse s))
            |> List.filter (fun (_, _, (b, _)) -> b = false)

        match parseResult with
        | h :: t ->
            parseResult
            |> List.map (fun (name, _, (_, _)) -> name)
            |> List.map (fun name ->
                match name with
                | "R" -> name
                | "G" -> name
                | "B" -> name
                | "Step" -> "間隔"
                | "Limit" -> "回数"
                | _ -> "")
            |> List.map (sprintf """<span class="warning">%s の値が正しくありません。</span>""")
            |> List.reduce (fun x y -> $"%s{x}<br>%s{y}")
            |> fun s -> errorArea.innerHTML <- s

            h
            |> fun (_, id, (_, _)) -> id
            |> fun id -> (document.getElementById id)
            |> fun el -> el.focus () |> ignore
        | [] ->
            let r = rInput |> int
            let g = gInput |> int
            let b = bInput |> int
            let step = stepInput |> int
            let limit = limitInput |> int

            let colorToModify =
                RankedRgb.ofInts r g b
                |> List.sortBy (fun x -> x.Value)
                |> List.item 1
                |> fun x -> x.Color

            //
            let ress = repeatGetNextRgb r g b step limit colorToModify [ (r, g, b) ]

            let output =
                ress
                |> List.map (fun (r, g, b) ->
                    sprintf
                        $"""<div class="color-div" style="background-color: rgb(%d{r}, %d{g}, %d{b});">R: %d{r}  G: %d{g}  B: %d{b}</div>""")
                |> List.reduce (fun x y -> $"%s{x}\n%s{y}")

            //
            let outputArea = document.getElementById "outputArea"
            outputArea.innerHTML <- output


    let init () =
        // Initialization.
        //printfn "Initialization starts."
        (document.getElementById "submitButton").onclick <- (fun _ -> start ())

        (document.getElementById "helpButton").onclick <-
            (fun _ ->
                [ "helpWindow"; "helpBarrier" ]
                |> List.iter (fun x -> (document.getElementById x).classList.toggle "active" |> ignore))

        (document.getElementById "helpBarrier").onclick <-
            (fun _ ->
                [ "helpWindow"; "helpBarrier" ]
                |> List.iter (fun x -> (document.getElementById x).classList.remove "active" |> ignore))

//(document.getElementById "inputArea").onsubmit <- (fun _ -> start())
//printfn "Initialization ends."
