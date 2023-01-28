// taidalab Version 3.3.2
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

module About =
    let main = """
        <p>
            このサイトは、taidalog が作成したプログラム置き場です。<br>
            F# で書いたものを Fable で JavaScript にトランスパイルしています。<br>
            10進数と2進数の変換を反復練習するためのツールや、RGB値を入力して色相を変換するツールを公開しています。
        </p>
        <dl id="explanation">
            <dt><a href="/endless-binary/dec2bin-1/">10進数→2進数 (1)</a></dt>
            <dd>
                10進数から2進数への変換をエンドレスで練習できます。<br>
                出題範囲は n (0&le;n&le;255) で、2の累乗の数同士の和になっています。<br>
                ヒント付きなので、考え方も身に付けられます。
            </dd>
            <dt><a href="/endless-binary/dec2bin-2/">10進数→2進数 (2)</a></dt>
            <dd>
                10進数から2進数への変換をエンドレスで練習できます。<br>
                出題範囲は n (0&le;n&le;255) です。<br>
                ヒントはありませんので、慣れてからどうぞ。
            </dd>
            <dt><a href="/endless-binary/bin2dec-1/">2進数→10進数 (1)</a></dt>
            <dd>
                2<sup>n</sup> (0&le;n&le;7) の2進数から10進数への変換をエンドレスで練習できます。<br>
                ヒント付きなので、考え方も身に付けられます。
            </dd>
            <dt><a href="/endless-binary/bin2dec-2/">2進数→10進数 (2)</a></dt>
            <dd>
                2進数から10進数への変換をエンドレスで練習できます。<br>
                出題範囲は n (0&le;n&le;255) です。<br>
                ヒントはありませんので、慣れてからどうぞ。
            </dd>
            <dt><a href="/endless-binary/power-of-two-1/">2のn乗</a></dt>
            <dd>
                2<sup>n</sup> (0&le;n&le;7) の10進数から2進数への変換をエンドレスで練習できます。<br>
                2<sup>n</sup> の2進数を覚えると10進数からの変換を早く行えるので、まずはこのコースから始めてみてください。<br>
                ヒント付きなので、考え方も身に付けられます。
            </dd>
            <dt><a href="/endless-binary/power-of-two-2/">2のn乗-1</a></dt>
            <dd>
                2<sup>n</sup> - 1 (0&le;n&le;7) の10進数から2進数への変換をエンドレスで練習できます。<br>
                2<sup>n</sup> - 1 の2進数を通して、2進数の繰り上がりや繰り下がりを覚えられます。<br>
                ヒント付きなので、考え方も身に付けられます。
            </dd>
            <dt><a href="/endless-binary/addition/">加算</a></dt>
            <dd>
                2進数同士の足し算をエンドレスで練習できます。<br>
                出題範囲は m, n (2 &le; m + n &le; 255) で、繰り上がりもあります。<br>
                ヒント付きなので、考え方も身に付けられます。
            </dd>
            <dt><a href="/endless-binary/subtraction/">減算</a></dt>
            <dd>
                2進数同士の引き算をエンドレスで練習できます。<br>
                出題範囲は m, n (2 &le; m + n &le; 255) で、繰り下がりもあります。<br>
                ヒント付きなので、考え方も身に付けられます。
            </dd>
            <dt><a href="/endless-binary/complement/">補数</a></dt>
            <dd>
                2進数の補数（2の補数）を求める練習ができます。<br>
                出題範囲は n (1 &le; n &le; 15) です。<br>
                ヒント付きなので、考え方も身に付けられます。
            </dd>
            <dt><a href="/endless-binary/dec2hex/">10進数→16進数</a></dt>
            <dd>
                10進数から16進数への変換をエンドレスで練習できます。<br>
                出題範囲は n (0&le;n&le;255) です。<br>
                ヒント付きなので、考え方も身に付けられます。
            </dd>
            <dt><a href="/endless-binary/hex2dec/">16進数→10進数</a></dt>
            <dd>
                16進数から10進数への変換をエンドレスで練習できます。<br>
                出題範囲は n (0&le;n&le;255) です。<br>
                ヒント付きなので、考え方も身に付けられます。
            </dd>
            <dt><a href="/iro-iroiro/">色いろいろ</a></dt>
            <dd>
                RGB値などを入力すると、その色の色相（色の雰囲気）を変更しながら色をローテーションします。<br>
                綺麗です。<br>
                入力する値は以下の通りです。
                <ul>
                    <li>R: 赤のRGB値 (0 &le; R &le; 255)</li>
                    <li>G: 緑のRGB値 (0 &le; G &le; 255)</li>
                    <li>B: 青のRGB値 (0 &le; B &le; 255)</li>
                    <li>
                        Interval: RGB値を変化させる間隔。(0 &le; Interval &le; 255)<br>
                        小さいと色がグラデーションのようになり、大きいとカラフルになります。
                    </li>
                    <li>
                        Limit: (1 &le; Limit)色をローテーションさせる回数。<br>
                        あまり大きくすると時間がかかってしまいます。100位にしておいてください。
                    </li>
                </ul>
            </dd>
        </dl>"""
