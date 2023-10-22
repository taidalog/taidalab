// taidalab Version 4.4.4
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom
open Browser.Types
open Fermata

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
        <form id="inputArea" class="iro-iroiro input-area" autocomplete="off">
            <span class="display-order-1 iro-iroiro shorter">
                <span class="iro-iroiro input-wrapper"><label for="rInput">R:<input type="number" id="rInput" class="iro-iroiro number-input mono regular" min="0" max="255"></label></span>
                <span class="iro-iroiro input-wrapper"><label for="gInput">G:<input type="number" id="gInput" class="iro-iroiro number-input mono regular" min="0" max="255"></label></span>
                <span class="iro-iroiro input-wrapper"><label for="bInput">B:<input type="number" id="bInput" class="iro-iroiro number-input mono regular" min="0" max="255"></label></span>
            </span>
            <span class="display-order-2 iro-iroiro wider">
                <span class="iro-iroiro input-wrapper"><label for="stepInput">変化量:<input type="number" id="stepInput" class="iro-iroiro number-input mono regular"></label></span>
                <span class="iro-iroiro input-wrapper"><label for="limitInput">回数:<input type="number" id="limitInput" class="iro-iroiro number-input rem6 mono regular" value="100"></label></span>
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
            <p class="help-color iro-iroiro">このヘルプは、他の場所をクリックすると消えます。</p>
        </div>
        """

    let private circulation1 (s: int) (n: int) : int = n % s
    // 0 1 2 ... 0 1 2 ... 0 1 2 ...
    let private circulation2 (s: int) (n: int) : int = n / s
    // 0 0 0 ... 1 1 1 ... 2 2 2 ...

    let private countBefore (index: int) (list: 'T list) : int =
        list |> List.truncate index |> List.countWith ((=) (List.item index list))

    let private f min' max' x =
        let gap = max' - min'

        if (circulation2 (gap * 3) x) % 2 = 0 then
            min (min' + (circulation1 (gap * 3) x)) max'
        else
            max (max' - (circulation1 (gap * 3) x)) min'

    let private f' factor min' max' step start value =
        f min' max' (((max' - min') * factor) + step * value + start)

    let rec repeatGetNextRgb r g b step limit =
        let rgb = [ r; g; b ]
        let min' = List.min rgb
        let max' = List.max rgb
        let shift = List.item 1 (List.sort rgb) - min'

        let fmin = f' 4 min' max' step shift
        let fmid = f' 0 min' max' step shift
        let fmax = f' 2 min' max' step shift

        let rf, gf, bf =
            (0, 1, 2)
            |> Tuple.map3 (fun x -> List.findIndex ((=) (List.item x rgb)) (List.sort rgb) + countBefore x rgb)
            |> Tuple.map3 (fun x -> List.item x [ fmin; fmid; fmax ])

        [ 0..limit ] |> List.map (fun x -> rf x, gf x, bf x)

    let start () =
        let errorArea = document.getElementById "errorArea"
        errorArea.innerHTML <- ""

        let rInput = (document.getElementById "rInput" :?> HTMLInputElement).value
        let gInput = (document.getElementById "gInput" :?> HTMLInputElement).value
        let bInput = (document.getElementById "bInput" :?> HTMLInputElement).value
        let stepInput = (document.getElementById "stepInput" :?> HTMLInputElement).value
        let limitInput = (document.getElementById "limitInput" :?> HTMLInputElement).value

        let parseResult =
            [ ("R", "rInput", rInput)
              ("G", "gInput", gInput)
              ("B", "bInput", bInput)
              ("変化量", "stepInput", stepInput)
              ("回数", "limitInput", limitInput) ]
            |> List.map (fun (name, id, s) -> (name, id, System.Int32.TryParse s))
            |> List.filter (fun (_, _, (b, _)) -> b = false)

        match parseResult with
        | h :: t ->
            parseResult
            |> List.map (fun (name, _, (_, _)) -> $"""<span class="warning">%s{name} の値が正しくありません。</span>""")
            |> List.reduce (fun x y -> $"%s{x}<br>%s{y}")
            |> fun s -> errorArea.innerHTML <- s

            h |> fun (_, id, (_, _)) -> (document.getElementById id).focus () |> ignore
        | [] ->
            let r = rInput |> int
            let g = gInput |> int
            let b = bInput |> int
            let step = stepInput |> int
            let limit = limitInput |> int

            let ress = repeatGetNextRgb r g b step limit

            let output =
                ress
                |> List.map (fun (r, g, b) ->
                    sprintf
                        $"""<div class="color-div" style="background-color: rgb(%d{r}, %d{g}, %d{b});">R: %d{r}  G: %d{g}  B: %d{b}</div>""")
                |> String.concat "\n"

            (document.getElementById "outputArea").innerHTML <- output

    let init () =
        // Initialization.
        (document.getElementById "submitButton").onclick <- (fun _ -> start ())

        [ "helpButton"; "helpBarrier" ]
        |> List.iter (fun x ->
            (document.getElementById x).onclick <-
                (fun _ ->
                    [ "helpWindow"; "helpBarrier" ]
                    |> List.iter (fun x -> (document.getElementById x).classList.toggle "active" |> ignore)))
//        (document.getElementById "inputArea").onsubmit <- (fun _ -> start())
