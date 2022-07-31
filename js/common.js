// taidalab Version 1.5.2
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function getRandomBetween (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function testBinaryString (binary_string) {
    const reCorrect = /^[01]+$/;
    return reCorrect.test(binary_string);
}

function testDecimalString (decimal_string) {
    const reCorrect = /^[0-9]+$/;
    return reCorrect.test(decimal_string);
}

function newErrorMessageBin (answer, input) {
    if (input == '') {
        return '<span class="warning">' + answer + ' の2進法表記を入力してください。</span>';
    } else if (testBinaryString(input) == false) {
        return '<span class="warning">"' + input + '" は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>';
    } else {
        return '';
    }
}

function newErrorMessageDec (answer, input) {
    if (input == '') {
        return '<span class="warning">' + answer + ' の10進法表記を入力してください。</span>';
    } else if (testDecimalString(input) == false) {
        return '<span class="warning">"' + input + '" は10進数ではありません。使えるのは半角の 0123456789 のみです。</span>';
    } else {
        return '';
    }
}

function concatinateStrings (new_string, existing_string) {
    if (existing_string == "" || existing_string == null) {
        return new_string;
    } else {
        return new_string + "<br>" + existing_string;
    }
}

function formatString (format, replacements) {
    let acc = format;
    let placeholder = new RegExp ("", "");
    for (let i = 0; i < replacements.length; i++) {
        placeholder = new RegExp ("\\{" + i + "\\}", "g");
        acc = acc.replace(placeholder, replacements[i]);
    }
    return acc;
}

function escapeHtml (target_string) {
    let result = target_string;
    result = result.replace(/&/g, '&amp;');
    result = result.replace(/</g, '&lt;');
    result = result.replace(/>/g, '&gt;');
    result = result.replace(/"/g, '&quot;');
    result = result.replace(/'/g, '&#39;');
    return result;
}

function colorLeadingZero (str) {
    const reLeadingZero = /^0+/;
    if (str.match(reLeadingZero == false)) {
        return str;
    }
    
    const leadingZero = str.match(reLeadingZero);
    const leadingZeroInTag = '<span class="zero-grey">' + leadingZero + "</span>";
    return str.replace(leadingZero, leadingZeroInTag);
}

function newHistory (is_correct, input, destination_radix, converted_input, source_radix) {
    let historyClassName = '';
    if (is_correct) {
        historyClassName = 'history-correct';
    } else {
        historyClassName = 'history-wrong';
    }
    
    const result = '<span class ="' + historyClassName + '">' + input + '<sub>(' + destination_radix + ')</sub> = ' + converted_input + '<sub>(' + source_radix + ')</sub></span>';
    return result;
}

function splitBinaryStringBy (digit, str) {
    const regex = new RegExp ("([01])(?=([01]{" + digit + "})+(?![01]))", "g");
    return str.replace(regex, '$1 ');
}

function setColumnAddition (number1, number2) {
    const bin1 = number1.toString(2);
    const bin2 = number2.toString(2);
    console.log(bin1);
    console.log(bin2);

    for (let i = 1; i <= 8; i++) {
        document.getElementById('firstRowDigit' + i).innerText = '';
    }

    for (let i = 1; i <= 8; i++) {
        document.getElementById('secondRowDigit' + i).innerText = '';
    }

    for (let i = 1; i <= bin1.length; i++) {
        document.getElementById('firstRowDigit' + i).innerText = bin1[bin1.length - i];
    }

    for (let i = 1; i <= bin2.length; i++) {
        document.getElementById('secondRowDigit' + i).innerText = bin2[bin2.length - i];
    }
}

const headerContentPages = '<div id="headerContainer" class="header-container"></div>';

const mainContentPages = '\
<div id="questionArea" class="question-area"></div>\
<form class="input-area">\
    <input type="text" id="numberInput" class="number-input consolas">\
    <span id="binaryRadix" class="binary-radix"></span>\
    <input type="submit" value ="確認" id="submitButton">\
    <div id="hintArea" class="hint-area"></div>\
    <div id="errorArea" class="error-area"></div>\
</form>\
<div class="history-area">\
    結果:\
    <div class="history-indented consolas">\
        <span id="outputArea"></span>\
    </div>\
</div>\
';

const mainContentHome = '\
<form class="button-container">\
    <button type="button" onclick="switchPage(\'/endless-dec2bin-1/\');" id="buttonESAD" class="btn button-esad">10進数→2進数 (1)</button>\
    <button type="button" onclick="switchPage(\'/endless-dec2bin-2/\');" id="buttonED2B" class="btn button-ed2b">10進数→2進数 (2)</button>\
    <button type="button" onclick="switchPage(\'/endless-bin2dec-1/\');" id="buttonEB2D" class="btn button-eb2d">2進数→10進数 (1)</button>\
    <button type="button" onclick="switchPage(\'/endless-bin2dec-2/\');" id="buttonEB2D" class="btn button-eb2d">2進数→10進数 (2)</button>\
    <button type="button" onclick="switchPage(\'/endless-power-of-two-1/\');" id="buttonEPOT" class="btn button-epot">2のn乗</button>\
    <button type="button" onclick="switchPage(\'/endless-power-of-two-2/\');" id="buttonEPOTEX" class="btn button-epotex">2のn乗 - 1</button>\
    <button type="button" onclick="switchPage(\'/endless-addition/\');" id="buttonEBAD" class="btn button-ebad">加算</button>\
    <button type="button" onclick="switchPage(\'/endless-subtraction/\');" id="buttonEBSB" class="btn button-ebsb">減算</button>\
    <button type="button" onclick="switchPage(\'/endless-complement/\');" id="buttonECMP" class="btn button-ecmp">補数</button>\
</form>\
';

const mainContentAbout = '\
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

const mainContentTerms = '\
<p>著作権は作成者 (taidalog) が所有しています。</p>\
<p>利用に必要な通信料等は利用者の負担となります。</p>\
<p>当サイトを利用したことにより、コンピュータウィルス等による被害やデータの損失、その他いかなる不利益が生じた場合も、作成者は一切の責任を負いません。</p>\
<p>ソースコードの利用は可能ですが、再頒布時には著作権表示とライセンス表示を消さずに残しておいてください。</p>\
<p>2022年6月11日</p>\
';

const footerContentPages = '\
<small class="footer-container">\
    <div class="item">&copy; 2022 taidalog</div>\
    <div class="item"><a href="https://github.com/taidalog/taidalab/releases" id="versionNumber"></a></div>\
    <div class="item"><a href="javascript:switchPage(\'/\')">Home</a></div>\
    <div class="item"><a href="javascript:switchPage(\'/about/\')">About</a></div>\
    <div class="item"><a href="javascript:switchPage(\'/terms/\')">ご利用について</a></div>\
    <div class="item"><a href="https://github.com/taidalog/taidalab">Repository on GitHub</a></div>\
</small>\
';

const footerContentHome = '\
<small class="footer-container">\
    <div class="item">&copy; 2022 taidalog</div>\
    <div class="item"><a href="https://github.com/taidalog/taidalab/releases" id="versionNumber"></a></div>\
    <div class="item"><a href="javascript:switchPage(\'/about/\')">About</a></div>\
    <div class="item"><a href="javascript:switchPage(\'/terms/\')">ご利用について</a></div>\
    <div class="item"><a href="https://github.com/taidalog/taidalab">Repository on GitHub</a></div>\
</small>\
';

const footerContentAbout = '\
<small class="footer-container">\
    <div class="item">&copy; 2022 taidalog</div>\
    <div class="item"><a href="javascript:switchPage(\'/\')">Home</a></div>\
    <div class="item"><a href="javascript:switchPage(\'/terms/\')">ご利用について</a></div>\
    <div class="item"><a href="https://github.com/taidalog/taidalab">Repository on GitHub</a></div>\
</small>\
';

const footerContentTerms = '\
<small class="footer-container">\
    <div class="item">&copy; 2022 taidalog</div>\
    <div class="item"><a href="javascript:switchPage(\'/\')">Home</a></div>\
    <div class="item"><a href="javascript:switchPage(\'/about/\')">About</a></div>\
    <div class="item"><a href="https://github.com/taidalog/taidalab">Repository on GitHub</a></div>\
</small>\
';

const versionNumber = 'Version 1.5.2';

const questionContentPages = '<span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> を<span id="dstRadix"></span>進法で表すと？';

const questionContentComplement = '4ビットの2進数 <span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> の補数は？';

const columnAdditionFormat = '\
<div class="calculation-area" id="calculationArea">\
    <div class="first-row" id="">\
        <span class="digit-area question-number" id="firstRowDigit8"></span>\
        <span class="digit-area question-number" id="firstRowDigit7"></span>\
        <span class="digit-area question-number" id="firstRowDigit6"></span>\
        <span class="digit-area question-number" id="firstRowDigit5"></span>\
        <span class="digit-area question-number" id="firstRowDigit4"></span>\
        <span class="digit-area question-number" id="firstRowDigit3"></span>\
        <span class="digit-area question-number" id="firstRowDigit2"></span>\
        <span class="digit-area question-number" id="firstRowDigit1"></span>\
        <span class=""><sub id="firstRowSrcRadix"></sub></span>\
    </div>\
    <div class="second-row" id="secondRow">\
        <span class="question-number" id="operator"></span>\
        <span class="digit-area question-number" id="secondRowDigit8"></span>\
        <span class="digit-area question-number" id="secondRowDigit7"></span>\
        <span class="digit-area question-number" id="secondRowDigit6"></span>\
        <span class="digit-area question-number" id="secondRowDigit5"></span>\
        <span class="digit-area question-number" id="secondRowDigit4"></span>\
        <span class="digit-area question-number" id="secondRowDigit3"></span>\
        <span class="digit-area question-number" id="secondRowDigit2"></span>\
        <span class="digit-area question-number" id="secondRowDigit1"></span>\
        <span class=""><sub id="secondRowSrcRadix"></sub></span>\
    </div>\
    <div class="under-line"></div>\
</div>\
';


function switchPage (pathname) {
    const initialObject = newInitObject(pathname);
    window.history.pushState(null, null, initialObject.pathname);
    initPage(initialObject);
}

function newInitObject (pathname) {
    console.log(pathname);
    switch (pathname) {
        case '/':
            console.log('/');
            return {
                pathname: '/',
                title: 'taidalab',
                headerContent: headerContentPages,
                headerColorClass: 'home-header',
                headerTitle: '<h1>taidalab</h1>',
                mainContent: mainContentHome,
                buttonColorClass: null,
                questionContent: null,
                footerContent: footerContentHome,
                widthClass: "home",
                versionNumber: versionNumber,
                initFunc: null
            };
        case '/endless-dec2bin-1/':
            console.log('/endless-dec2bin-1/');
            return {
                pathname: '/endless-dec2bin-1/',
                title: '10進数→2進数 (1) - taidalab',
                headerContent: headerContentPages,
                headerColorClass: 'd2b-header',
                headerTitle: '<h1>10進数→2進数 (1)</h1>',
                mainContent: mainContentPages,
                buttonColorClass: 'submit-button d2b-button',
                questionContent: questionContentPages,
                footerContent: footerContentPages,
                widthClass: "course",
                versionNumber: versionNumber,
                initFunc: function () { initDec2Bin1(); }
            };
        case '/endless-dec2bin-2/':
            console.log('/endless-dec2bin-2/');
            return {
                pathname: '/endless-dec2bin-2/',
                title: '10進数→2進数 (2) - taidalab',
                headerContent: headerContentPages,
                headerColorClass: 'd2b-header',
                headerTitle: '<h1>10進数→2進数 (2)</h1>',
                mainContent: mainContentPages,
                buttonColorClass: 'submit-button d2b-button',
                questionContent: questionContentPages,
                footerContent: footerContentPages,
                widthClass: "course",
                versionNumber: versionNumber,
                initFunc: function () { initDec2Bin2(); }
            };
        case '/endless-bin2dec-1/':
            console.log('/endless-bin2dec-1/');
            return {
                pathname: '/endless-bin2dec-1/',
                title: '2進数→10進数 (1) - taidalab',
                headerContent: headerContentPages,
                headerColorClass: 'b2d-header',
                headerTitle: '<h1>2進数→10進数 (1)</h1>',
                mainContent: mainContentPages,
                buttonColorClass: 'submit-button b2d-button',
                questionContent: questionContentPages,
                footerContent: footerContentPages,
                widthClass: "course",
                versionNumber: versionNumber,
                initFunc: function () { initBin2Dec1(); }
            };
        case '/endless-bin2dec-2/':
            console.log('/endless-bin2dec-2/');
            return {
                pathname: '/endless-bin2dec-2/',
                title: '2進数→10進数 (2) - taidalab',
                headerContent: headerContentPages,
                headerColorClass: 'b2d-header',
                headerTitle: '<h1>2進数→10進数 (2)</h1>',
                mainContent: mainContentPages,
                buttonColorClass: 'submit-button b2d-button',
                questionContent: questionContentPages,
                footerContent: footerContentPages,
                widthClass: "course",
                versionNumber: versionNumber,
                initFunc: function () { initBin2Dec2(); }
            };
        case '/endless-power-of-two-1/':
            console.log('/endless-power-of-two-1/');
            return {
                pathname: '/endless-power-of-two-1/',
                title: '2のn乗 - taidalab',
                headerContent: headerContentPages,
                headerColorClass: 'pot-header',
                headerTitle: '<h1>2のn乗</h1>',
                mainContent: mainContentPages,
                buttonColorClass: 'submit-button pot-button',
                questionContent: questionContentPages,
                footerContent: footerContentPages,
                widthClass: "course",
                versionNumber: versionNumber,
                initFunc: function () { initPowerOfTwo1(); }
            };
        case '/endless-power-of-two-2/':
            console.log('/endless-power-of-two-2/');
            return {
                pathname: '/endless-power-of-two-2/',
                title: '2のn乗-1 - taidalab',
                headerContent: headerContentPages,
                headerColorClass: 'pot-header',
                headerTitle: '<h1>2のn乗 - 1</h1>',
                mainContent: mainContentPages,
                buttonColorClass: 'submit-button pot-button',
                questionContent: questionContentPages,
                footerContent: footerContentPages,
                widthClass: "course",
                versionNumber: versionNumber,
                initFunc: function () { initPowerOfTwo2(); }
            };
        case '/endless-addition/':
            console.log('/endless-addition/');
            return {
                pathname: '/endless-addition/',
                title: '加算 - taidalab',
                headerContent: headerContentPages,
                headerColorClass: 'add-header',
                headerTitle: '<h1>加算</h1>',
                mainContent: mainContentPages,
                buttonColorClass: 'submit-button add-button',
                questionContent: columnAdditionFormat,
                footerContent: footerContentPages,
                widthClass: "course",
                versionNumber: versionNumber,
                initFunc: function () { initAddition(); }
            };
        case '/endless-subtraction/':
            console.log('/endless-subtraction/');
            return {
                pathname: '/endless-subtraction/',
                title: '減算 - taidalab',
                headerContent: headerContentPages,
                headerColorClass: 'sub-header',
                headerTitle: '<h1>減算</h1>',
                mainContent: mainContentPages,
                buttonColorClass: 'submit-button sub-button',
                questionContent: columnAdditionFormat,
                footerContent: footerContentPages,
                widthClass: "course",
                versionNumber: versionNumber,
                initFunc: function () { initSubtraction(); }
            };
        case '/endless-complement/':
            console.log('/endless-complement/');
            return {
                pathname: '/endless-complement/',
                title: '補数 - taidalab',
                headerContent: headerContentPages,
                headerColorClass: 'cmp-header',
                headerTitle: '<h1>補数</h1>',
                mainContent: mainContentPages,
                buttonColorClass: 'submit-button cmp-button',
                questionContent: questionContentComplement,
                footerContent: footerContentPages,
                widthClass: "course",
                versionNumber: versionNumber,
                initFunc: function () { initComplement(); }
            };
        case '/about/':
            console.log('/about/');
            return {
                pathname: '/about/',
                title: 'about - taidalab',
                headerContent: headerContentPages,
                headerColorClass: 'home-header',
                headerTitle: '<h1>about</h1>',
                mainContent: mainContentAbout,
                buttonColorClass: null,
                questionContent: null,
                footerContent: footerContentAbout,
                widthClass: "course",
                versionNumber: null,
                initFunc: function () { initAbout(); }
            };
        case '/terms/':
            console.log('/terms/');
            return {
                pathname: '/terms/',
                title: 'ご利用について - taidalab',
                headerContent: headerContentPages,
                headerColorClass: 'home-header',
                headerTitle: '<h1>ご利用について</h1>',
                mainContent: mainContentTerms,
                buttonColorClass: null,
                questionContent: null,
                footerContent: footerContentTerms,
                widthClass: "course",
                versionNumber: null,
                initFunc: function () { initTerms(); }
            };
        default:
            console.log("default");
            return {
                pathname: '/404/',
                title: '404: Page Not Found - taidalab',
                headerContent: headerContentPages,
                headerColorClass: 'not-header',
                headerTitle: '<h1>404: Page Not Found</h1>',
                mainContent: mainContentPages,
                buttonColorClass: 'submit-button not-button',
                questionContent: questionContentPages,
                footerContent: footerContentPages,
                widthClass: "course",
                versionNumber: versionNumber,
                initFunc: function () { initNotFound(); }
            };
    }
}

function initPage (initial_object) {
    document.title = initial_object.title;
    document.getElementsByTagName('header')[0].innerHTML = initial_object.headerContent;
    document.getElementsByTagName('header')[0].className = initial_object.headerColorClass + ' ' + initial_object.widthClass;
    document.getElementById('headerContainer').innerHTML = initial_object.headerTitle;
    document.getElementsByTagName('main')[0].className = initial_object.widthClass;
    document.getElementsByTagName('main')[0].innerHTML = initial_object.mainContent;
    document.getElementsByTagName('footer')[0].innerHTML = initial_object.footerContent;
    document.getElementsByTagName('footer')[0].className = initial_object.widthClass;

    if (initial_object.questionContent != null) {
        document.getElementById('questionArea').innerHTML = initial_object.questionContent;
    }

    if (initial_object.buttonColorClass != null) {
        document.getElementById('submitButton').className = initial_object.buttonColorClass;
    }

    if (initial_object.radixContent != null) {
        document.getElementById('binaryRadix').innerHTML = initial_object.radixContent;
    }

    if (initial_object.versionNumber != null) {
        document.getElementById('versionNumber').innerText = initial_object.versionNumber;
    }

    if (initial_object.initFunc != null) {
        initial_object.initFunc();
    }
}


window.addEventListener("DOMContentLoaded", (ev) => {
    console.log('DOMContentLoaded');
    const initialObject = newInitObject('/');
    initPage(initialObject);
});

window.addEventListener("popstate", (ev) => {
    const initialObject = newInitObject(window.location.pathname);
    initPage(initialObject);
});
