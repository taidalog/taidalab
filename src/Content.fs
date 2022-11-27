// taidalab Version 3.3.1
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

module Content =
    module Complement =
        let question = """4ビットの2進数 <span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> の補数は？"""


    module Common =
        let header = """
            <div id="headerContainer" class="header-container">
                <button id="hamburgerButton" class="hamburger-button">
                    <span class="bar bar-top"></span>
                    <span class="bar bar-mid"></span>
                    <span class="bar bar-bottom"></span>
                </button>
                <div id="headerTitle" class="header-title"></div>
            </div>"""

        let aside = """
            <ul>
                <li><a class="aside-home" id="asideEndlessBinary" href="/endless-binary/">10進数↔︎2進数の反復練習</a></li>
                    <ul>
                        <li><a class="aside-d2b" href="/endless-binary/dec2bin-1/">10進数→2進数 (1)</a></li>
                        <li><a class="aside-d2b" href="/endless-binary/dec2bin-2/">10進数→2進数 (2)</a></li>
                        <li><a class="aside-b2d" href="/endless-binary/bin2dec-1/">2進数→10進数 (1)</a></li>
                        <li><a class="aside-b2d" href="/endless-binary/bin2dec-2/">2進数→10進数 (2)</a></li>
                        <li><a class="aside-pot" href="/endless-binary/power-of-two-1/">2のn乗</a></li>
                        <li><a class="aside-pot" href="/endless-binary/power-of-two-2/">2のn乗-1</a></li>
                        <li><a class="aside-add" href="/endless-binary/addition/">加算</a></li>
                        <li><a class="aside-sub" href="/endless-binary/subtraction/">減算</a></li>
                        <li><a class="aside-cmp" href="/endless-binary/complement/">補数</a></li>
                        <li><a class="aside-d2h" href="/endless-binary/dec2hex/">10進数→16進数</a></li>
                        <li><a class="aside-d2h" href="/endless-binary/hex2dec/">16進数→10進数</a></li>
                    </ul>
                <li><a class="aside-iro" id="asideIroIroiro" href="/iro-iroiro/">色いろいろ</a></li>
                <li><a class="aside-ctc" id="asideSoon" href="#">Comming soon...</a></li>
            </ul>
            <ul>
                <li><a class="aside-home" id="asideAbout" href="/">Home</a></li>
                <li><a class="aside-home" id="asideAbout" href="/about/">About</a></li>
                <li><a class="aside-home" id="asideTerms" href="/terms/">ご利用について</a></li>
                <li><a class="aside-home" id="asideRepo" href="https://github.com/taidalog/taidalab">Repository on GitHub</a></li>
            </ul>"""

        let question = """<span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> を<span id="dstRadix"></span>進法で表すと？"""
        
        let version = "Version 3.3.1"

        let footer = sprintf """
            <small class="footer-container">
                <div class="item">&copy; 2022 taidalog</div>
                <div class="item"><a id="versionNumber" href="https://github.com/taidalog/taidalab/releases">%s</a></div>
                <div class="item">taidalab is written in <a id="footerFSharp" href="https://fsharp.org/">F#</a> and transpiled by <a id="footerFable" href="https://fable.io">Fable</a>. Thank you!</div>
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
