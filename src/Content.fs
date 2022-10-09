// taidalab Version 2.2.2
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

module Content =

    module Home =
        let main = """
            <form class="button-container">
                <button type="button" id="buttonED2B1" class="btn course-button-d2b1">10進数→2進数 (1)</button>
                <button type="button" id="buttonED2B2" class="btn course-button-d2b2">10進数→2進数 (2)</button>
                <button type="button" id="buttonEB2D1" class="btn course-button-b2d1">2進数→10進数 (1)</button>
                <button type="button" id="buttonEB2D2" class="btn course-button-b2d2">2進数→10進数 (2)</button>
                <button type="button" id="buttonEPOT1" class="btn course-button-pot1">2のn乗</button>
                <button type="button" id="buttonEPOT2" class="btn course-button-pot2">2のn乗 - 1</button>
                <button type="button" id="buttonEBAD" class="btn course-button-add">加算</button>
                <button type="button" id="buttonEBSB" class="btn course-button-sub">減算</button>
                <button type="button" id="buttonECMP" class="btn course-button-cmp">補数</button>
            </form>"""


    module Course =
        let main = """
            <div id="questionArea" class="question-area"></div>
            <form id="inputArea" class="input-area">
                <input type="text" id="numberInput" class="number-input consolas">
                <span id="binaryRadix" class="binary-radix"></span>
                <button type="button" id="submitButton" class="submit-button d2b-button">確認</button>
                <div id="hintArea" class="hint-area"></div>
                <div id="errorArea" class="error-area"></div>
            </form>
            <div class="history-area">
                結果:
                <div class="history-indented consolas">
                    <span id="outputArea"></span>
                </div>
            </div>"""


    module About =
        let main = """
            <p>このサイトでは、主に10進数と2進数の変換を反復練習するためのツールを公開しています。</p>
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
                <dt><a href="/endless-binary/power-of-two-2/">2のn乗 - 1</a></dt>
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
            </dl>"""


    module Terms =
        let main = """
            <p>著作権は作成者 (taidalog) が所有しています。</p>
            <p>利用に必要な通信料等は利用者の負担となります。</p>
            <p>当サイトを利用したことにより、コンピュータウィルス等による被害やデータの損失、その他いかなる不利益が生じた場合も、作成者は一切の責任を負いません。</p>
            <p>ソースコードの利用は可能ですが、再頒布時には著作権表示とライセンス表示を消さずに残しておいてください。</p>
            <p>2022年6月11日</p>"""


    module Complement =
        let question = """4ビットの2進数 <span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> の補数は？"""


    module Common =
        let header = """<div id="headerContainer" class="header-container"></div>"""

        let aside = """
            <ul>
                <li><a id="asideEndlessBinary" href="/endless-binary/">10進数↔2進数の反復練習</a></li>
                <li><a id="asideIroIroiro" href="/iro-iroiro/">色相ローテーション</a></li>
                <li><a id="asideSoon" href="#">Comming soon...</a></li>
            </ul>
            <ul>
                <li><a id="asideAbout" href="/">Home</a></li>
                <li><a id="asideAbout" href="/about/">About</a></li>
                <li><a id="asideTerms" href="/terms/">ご利用について</a></li>
                <li><a id="asideRepo" href="https://github.com/taidalog/taidalab">Repository on GitHub</a></li>
            </ul>"""

        let question = """<span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> を<span id="dstRadix"></span>進法で表すと？"""
        
        let version = "Version 2.2.2"

        let footer = sprintf """
            <small class="footer-container">
                <div class="item">&copy; 2022 taidalog</div>
                <div class="item"><a id="versionNumber">%s</a></div>
                <div class="item">taidalab is written in <a id="footerFSharp">F#</a> and transpiled by <a id="footerFable">Fable</a>. Thank you!</div>
            </small>""" version
        
        let columnAdditionFormat = """
            <div class="calculation-area" id="calculationArea">
                <div class="first-row" id="">
                    <span class="digit-area question-number" id="firstRowDigit8"></span>
                    <span class="digit-area question-number" id="firstRowDigit7"></span>
                    <span class="digit-area question-number" id="firstRowDigit6"></span>
                    <span class="digit-area question-number" id="firstRowDigit5"></span>
                    <span class="digit-area question-number" id="firstRowDigit4"></span>
                    <span class="digit-area question-number" id="firstRowDigit3"></span>
                    <span class="digit-area question-number" id="firstRowDigit2"></span>
                    <span class="digit-area question-number" id="firstRowDigit1"></span>
                    <span class=""><sub id="firstRowSrcRadix"></sub></span>
                </div>
                <div class="second-row" id="secondRow">
                    <span class="question-number" id="operator"></span>
                    <span class="digit-area question-number" id="secondRowDigit8"></span>
                    <span class="digit-area question-number" id="secondRowDigit7"></span>
                    <span class="digit-area question-number" id="secondRowDigit6"></span>
                    <span class="digit-area question-number" id="secondRowDigit5"></span>
                    <span class="digit-area question-number" id="secondRowDigit4"></span>
                    <span class="digit-area question-number" id="secondRowDigit3"></span>
                    <span class="digit-area question-number" id="secondRowDigit2"></span>
                    <span class="digit-area question-number" id="secondRowDigit1"></span>
                    <span class=""><sub id="secondRowSrcRadix"></sub></span>
                </div>
                <div class="under-line"></div>
            </div>"""
