// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2024 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

module Content =
    module Complement =
        let question =
            """4ビットの2進数 <span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> の補数は？"""


    module Common =
        let body =
            """
            <div class="body-container">
                <div id="barrier" class="barrier"></div>
                <div id="helpBarrier" class="help-barrier"></div>
                <header></header>
                <div class="main-container">
                    <aside></aside>
                    <main></main>
                </div>
                <footer></footer>
            </div>"""

        let header =
            """
            <div class="header-left">
                <span id="hamburgerButton" class="material-symbols-outlined hamburger-button" translate="no">
                    menu
                </span>
            </div>
            <div class="header-center">
                <div id="headerTitle" class="header-title"></div>
                <div class="inline-flex-center">
                    <span id="helpButton" class="material-symbols-outlined help-button" translate="no">
                        help
                    </span>
                </div>
            </div>
            <div class="header-right">
            </div>
            """

        let headerNoHelp =
            """
            <div class="header-left">
                <span id="hamburgerButton" class="material-symbols-outlined hamburger-button" translate="no">
                    menu
                </span>
            </div>
            <div class="header-center">
                <div id="headerTitle" class="header-title"></div>
                <div class="inline-flex-center"></div>
            </div>
            <div class="header-right">
            </div>
            """

        let aside =
            """
            <ul>
                <details>
                    <summary>
                        <a class="home" id="asideEndlessBinary">10進数↔︎2進数の反復練習</a>
                    </summary>
                    <ul>
                        <li><a class="dec2bin" href="/taidalab/endless-binary/dec2bin-1/">10進数→2進数 (1)</a></li>
                        <li><a class="dec2bin" href="/taidalab/endless-binary/dec2bin-2/">10進数→2進数 (2)</a></li>
                        <li><a class="bin2dec" href="/taidalab/endless-binary/bin2dec-1/">2進数→10進数 (1)</a></li>
                        <li><a class="bin2dec" href="/taidalab/endless-binary/bin2dec-2/">2進数→10進数 (2)</a></li>
                        <li><a class="power-of-two" href="/taidalab/endless-binary/power-of-two-1/">2のn乗</a></li>
                        <li><a class="power-of-two" href="/taidalab/endless-binary/power-of-two-2/">2のn乗-1</a></li>
                        <li><a class="addition" href="/taidalab/endless-binary/addition/">加算</a></li>
                        <li><a class="subtraction" href="/taidalab/endless-binary/subtraction/">減算</a></li>
                        <li><a class="complement" href="/taidalab/endless-binary/complement/">補数</a></li>
                        <li><a class="dec2hex" href="/taidalab/endless-binary/dec2hex/">10進数→16進数</a></li>
                        <li><a class="hex2dec" href="/taidalab/endless-binary/hex2dec/">16進数→10進数</a></li>
                    </ul>
                </details>
                <li><a class="iro-iroiro" id="asideIroIroiro" href="/taidalab/iro-iroiro/">色いろいろ</a></li>
                <li><a class="network-simulator" id="asideNetworkSimulator" href="/taidalab/network-simulator/">ネットワークシミュレータ</a></li>
                <li><a class="ctc" id="asideSoon" href="#">Coming soon...</a></li>
            </ul>
            <ul>
                <li><a class="home" id="asideAbout" href="/taidalab/">Home</a></li>
                <li><a class="home" id="asideAbout" href="/taidalab/about/">About</a></li>
                <li><a class="home" id="asideTerms" href="/taidalab/terms/">ご利用について</a></li>
                <li><a class="home" id="asideTerms" href="/taidalab/information-policy/">情報の外部送信について</a></li>
            </ul>
            <ul>
                <li><a class="home" id="asideOdaibako" href="https://odaibako.net/u/taidalog">お題箱</a></li>
                <li><a class="home" id="asideRepo" href="https://github.com/taidalog/taidalab">Repository on GitHub</a></li>
            </ul>"""

        let question =
            """<span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> を<span id="dstRadix"></span>進法で表すと？"""

        let version = "Version 5.0.4"

        let footer =
            sprintf
                """
                <small class="footer-container">
                    <div class="item" translate="no">&copy; 2022-2024 <a href="https://taidalog.github.io/">taidalog</a></div>
                    <div class="item"><a id="versionNumber" href="https://github.com/taidalog/taidalab/releases">%s</a></div>
                    <div class="item">Powered by <a id="footerFSharp" href="https://fsharp.org/" translate="no">F#</a> and <a id="footerFable" href="https://fable.io" translate="no">Fable</a>. Thank you!</div>
                </small>"""
                version

        let columnAdditionFormat =
            """
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
