// taidalab Version 1.0.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function getRandomBetween (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function testBinaryString (binary_string) {
    const reCorrect = /^[01]+$/;
    return reCorrect.test(binary_string)
}

function tesDecimalString (decimal_string) {
    const reCorrect = /^[0-9]+$/;
    return reCorrect.test(decimal_string)
}

function concatinateStrings (new_string, existing_string) {
    if (existing_string == "" || existing_string == null) {
        return new_string
    } else {
        return new_string + "<br>" + existing_string
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

function splitBinaryStringBy (digit, str) {
    const regex = new RegExp ("([01])(?=([01]{" + digit + "})+(?![01]))", "g");
    return str.replace(regex, '$1 ');
}

function setColumnAddition (number1, number2) {
    const bin1 = number1.toString(2);
    const bin2 = number2.toString(2);
    console.log(bin1);
    console.log(bin2);
    console.log((number1 + number2).toString(2));

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

const versionNumber = 'Version 1.0.0';

const questionContentPages = '<span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> を<span id="dstRadix"></span>進法で表すと？'

const questionContentComplement = '4ビットの2進数 <span id="questionSpan" class="question-number"></span><sub id="srcRadix"></sub> の補数は？'

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
                mainContent: '',
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
                mainContent: '',
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
