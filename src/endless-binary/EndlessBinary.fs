// taidalab Version 4.0.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2023 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

module EndlessBinary =
    module Home =
        let main = """
            <form class="button-container">
                <button type="button" id="buttonED2B1" class="btn course-button-d2b1 display-order-1">10進数→2進数 (1)</button>
                <button type="button" id="buttonED2B2" class="btn course-button-d2b2 display-order-2">10進数→2進数 (2)</button>
                <button type="button" id="buttonEB2D1" class="btn course-button-b2d1 display-order-3">2進数→10進数 (1)</button>
                <button type="button" id="buttonEB2D2" class="btn course-button-b2d2 display-order-4">2進数→10進数 (2)</button>
                <button type="button" id="buttonEPOT1" class="btn course-button-pot1 display-order-5">2のn乗</button>
                <button type="button" id="buttonEPOT2" class="btn course-button-pot2 display-order-6">2のn乗-1</button>
                <button type="button" id="buttonEBAD" class="btn course-button-add display-order-7">加算</button>
                <button type="button" id="buttonEBSB" class="btn course-button-sub display-order-8">減算</button>
                <button type="button" id="buttonECMP" class="btn course-button-cmp display-order-9">補数</button>
                <button type="button" id="buttonED2H" class="btn course-button-d2h display-order-10">10進数→16進数</button>
                <button type="button" id="buttonEH2D" class="btn course-button-d2h display-order-11">16進数→10進数</button>
            </form>"""
    
    module Course =
        let main help colorClass = $"""
            <span id="questionArea" class="question-area"></span>
            <span id="helpButton" class="material-symbols-outlined help-button">
                help
            </span>
            <form id="inputArea" class="input-area" autocomplete="off">
                <input type="text" id="numberInput" class="number-input display-order-1 consolas">
                <span id="binaryRadix" class="binary-radix display-order-2"></span>
                <button type="button" id="submitButton" class="submit-button display-order-3 d2b-button">確認</button>
                <div id="hintArea" class="hint-area display-order-4"></div>
                <div id="errorArea" class="error-area display-order-5"></div>
            </form>
            <div class="history-area">
                結果:
                <div class="history-indented consolas">
                    <span id="outputArea"></span>
                </div>
            </div>
            <div id="helpWindow" class="help-window">
                %s{help}
                <p class="%s{colorClass}">このヘルプメッセージはクリックで消えます。</p>
            </div>"""
        
        let main404 = """
            <span id="questionArea" class="question-area"></span>
            <span id="helpButton" class="material-symbols-outlined help-button">
                help
            </span>
            <form id="inputArea" class="input-area" autocomplete="off">
                <input type="text" id="numberInput" class="number-input display-order-1 consolas">
                <span id="binaryRadix" class="binary-radix display-order-2"></span>
                <button type="button" id="submitButton" class="submit-button display-order-3 d2b-button">確認</button>
                <div id="hintArea" class="hint-area display-order-4"></div>
                <div id="errorArea" class="error-area display-order-5"></div>
            </form>
            <div class="history-area">
                結果:
                <div class="history-indented consolas">
                    <span id="outputArea"></span>
                </div>
            </div>"""
