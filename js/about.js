// taidalab Version 1.0.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function initAbout () {
    const content = '\
    <p>このサイトでは、主に10進数と2進数の変換を反復練習するためのツールを公開しています。</p>\
    <dl>\
        <dt><a href="javascript:switchPage(\'/endless-dec2bin-1/\')">10進数→2進数 (1)</a></dt>\
        <dd>\
            10進数から2進数への変換をエンドレスで練習できます。<br>\
            出題範囲は n (0&le;n&le;255) で、2の累乗の数同士の和になっています。<br>\
            ヒント付きなので、考え方も身に付けられます。\
        </dd>\
        <dt><a href="javascript:switchPage(\'/endless-dec2bin-2/\')">10進数→2進数 (2)</a></dt>\
        <dd>\
            10進数から2進数への変換をエンドレスで練習できます。<br>\
            出題範囲は n (0&le;n&le;255) です。<br>\
            ヒントはありませんので、慣れてからどうぞ。\
        </dd>\
        <dt><a href="javascript:switchPage(\'/endless-bin2dec-1/\')">2進数→10進数 (1)</a></dt>\
        <dd>\
            2<sup>n</sup> (0&le;n&le;7) の2進数から10進数への変換をエンドレスで練習できます。<br>\
            ヒント付きなので、考え方も身に付けられます。\
        </dd>\
        <dt><a href="javascript:switchPage(\'/endless-bin2dec-2/\')">2進数→10進数 (2)</a></dt>\
        <dd>\
            2進数から10進数への変換をエンドレスで練習できます。<br>\
            出題範囲は n (0&le;n&le;255) です。<br>\
            ヒントはありませんので、慣れてからどうぞ。\
        </dd>\
        <dt><a href="javascript:switchPage(\'/endless-power-of-two-1/\')">2のn乗</a></dt>\
        <dd>\
            2<sup>n</sup> (0&le;n&le;7) の10進数から2進数への変換をエンドレスで練習できます。<br>\
            2<sup>n</sup> の2進数を覚えると10進数からの変換を早く行えるので、まずはこのコースから始めてみてください。<br>\
            ヒント付きなので、考え方も身に付けられます。\
        </dd>\
        <dt><a href="javascript:switchPage(\'/endless-power-of-two-2/\')">2のn乗 - 1</a></dt>\
        <dd>\
            2<sup>n</sup> - 1 (0&le;n&le;7) の10進数から2進数への変換をエンドレスで練習できます。<br>\
            2<sup>n</sup> - 1 の2進数を通して、2進数の繰り上がりや繰り下がりを覚えられます。<br>\
            ヒント付きなので、考え方も身に付けられます。\
        </dd>\
        <dt><a href="javascript:switchPage(\'/endless-addition/\')">加算</a></dt>\
        <dd>\
            2進数同士の足し算をエンドレスで練習できます。<br>\
            出題範囲は m, n (2 &le; m + n &le; 255) で、繰り上がりもあります。<br>\
            ヒント付きなので、考え方も身に付けられます。\
        </dd>\
        <dt><a href="javascript:switchPage(\'/endless-subtraction/\')">減算</a></dt>\
        <dd>\
            2進数同士の引き算をエンドレスで練習できます。<br>\
            出題範囲は m, n (2 &le; m + n &le; 255) で、繰り下がりもあります。<br>\
            ヒント付きなので、考え方も身に付けられます。\
        </dd>\
        <dt><a href="javascript:switchPage(\'/endless-complement/\')">補数</a></dt>\
        <dd>\
            2進数の補数（2の補数）を求める練習ができます。<br>\
            出題範囲は n (1 &le; n &le; 15) です。<br>\
            ヒント付きなので、考え方も身に付けられます。\
        </dd>\
    </dl>\
    ';

    document.getElementsByTagName('main')[0].innerHTML = content;
}
