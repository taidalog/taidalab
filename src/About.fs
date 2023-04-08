// taidalab Version 4.0.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

module About =
    let main = $"""
        <h2>このサイトについて</h2>
        <p>
            taidalab（タイダラブ）は、taidalog が作成したプログラム置き場です。<br>
            10進数と2進数の変換の反復練習ツールなど、高校の「情報&#8544;」の学習ツールを中心に公開しています。<br>
            F# で書いたものを Fable で JavaScript にトランスパイルしています。F# 楽しい。
        </p>
        <h2>それぞれのページについて</h2>
        <dl id="explanation" class="explanation">
            <dt>
                <h3><a href="/endless-binary/dec2bin-1/">10進数→2進数 (1)</a></h3>
            </dt>
            <dd>
                %s{EndlessBinary.Dec2Bin1.help}
            </dd>
            
            <dt>
                <h3><a href="/endless-binary/dec2bin-2/">10進数→2進数 (2)</a></h3>
            </dt>
            <dd>
                %s{EndlessBinary.Dec2Bin2.help}
            </dd>
            
            <dt>
                <h3><a href="/endless-binary/bin2dec-1/">2進数→10進数 (1)</a></h3>
            </dt>
            <dd>
                %s{EndlessBinary.Bin2Dec1.help}
            </dd>

            <dt>
                <h3><a href="/endless-binary/bin2dec-2/">2進数→10進数 (2)</a></h3>
            </dt>
            <dd>
                %s{EndlessBinary.Bin2Dec2.help}
            </dd>

            <dt>
                <h3><a href="/endless-binary/power-of-two-1/">2のn乗</a></h3>
            </dt>
            <dd>
                %s{EndlessBinary.PowerOfTwo1.help}
            </dd>
            
            <dt>
                <h3><a href="/endless-binary/power-of-two-2/">2のn乗-1</a></h3>
            </dt>
            <dd>
                %s{EndlessBinary.PowerOfTwo2.help}
            </dd>

            <dt>
                <h3><a href="/endless-binary/addition/">加算</a></h3>
            </dt>
            <dd>
                %s{EndlessBinary.Addition.help}
            </dd>

            <dt>
                <h3><a href="/endless-binary/subtraction/">減算</a></h3>
            </dt>
            <dd>
                %s{EndlessBinary.Subtraction.help}
            </dd>
            
            <dt>
                <h3><a href="/endless-binary/complement/">補数</a></h3>
            </dt>
            <dd>
                %s{EndlessBinary.Complement.help}
            </dd>

            <dt>
                <h3><a href="/endless-binary/dec2hex/">10進数→16進数</a></h3>
            </dt>
            <dd>
                %s{EndlessBinary.Dec2Hex.help}
            </dd>

            <dt>
                <h3><a href="/endless-binary/hex2dec/">16進数→10進数</a></h3>
            </dt>
            <dd>
                %s{EndlessBinary.Hex2Dec.help}
            </dd>
            
            <dt>
                <h3><a href="/iro-iroiro/">色いろいろ</a></h3>
            </dt>
            <dd>
                %s{IroIroiro.help}
            </dd>
            
            <dt>
                <h3><a href="/network-simulator/">ネットワークシミュレータ</a></h3>
            </dt>
            <dd>
                %s{NetworkSimulator.help}
            </dd>
        </dl>"""
