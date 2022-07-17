// taidalab Version 0.12.1
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

const footerContentPages = '\
<small class="footer-container">\
    <div class="item">&copy; 2022 taidalog</div>\
    <div class="item" id="versionNumber"></div>\
    <div class="item"><a href="javascript:switchPage(\'/\')">Home</a></div>\
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
    //window.history.pushState(null, null, initialObject.pathname);
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
                scriptPath: [],
                versionNumber: 'Version 0.13.0',
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
                scriptPath: ['/js/endless-binary/dec2bin-1.js'],
                versionNumber: 'Version 0.10.1',
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
                scriptPath: ['/js/endless-binary/dec2bin-2.js'],
                versionNumber: 'Version 0.10.1',
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
                scriptPath: ['/js/endless-binary/bin2dec-1.js'],
                versionNumber: 'Version 0.10.1',
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
                scriptPath: ['/js/endless-binary/bin2dec-2.js'],
                versionNumber: 'Version 0.10.1',
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
                scriptPath: ['/js/endless-binary/power-of-two-1.js'],
                versionNumber: 'Version 0.10.1',
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
                scriptPath: ['/js/endless-binary/power-of-two-2.js'],
                versionNumber: 'Version 0.10.1',
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
                scriptPath: ['/js/endless-binary/addition.js'],
                versionNumber: 'Version 0.11.1',
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
                scriptPath: ['/js/endless-binary/subtraction.js'],
                versionNumber: 'Version 0.1.1',
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
                scriptPath: ['/js/endless-binary/complement.js'],
                versionNumber: 'Version 0.1.1',
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
                scriptPath: ['/js/about.js'],
                versionNumber: null,
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
                scriptPath: ['/js/terms.js'],
                versionNumber: null,
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
                scriptPath: ['/js/not-found.js'],
                versionNumber: 'Version 0.10.1',
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

    if (initial_object.scriptPath != []) {
        initial_object.scriptPath.map(
            x => { 
                const element = document.createElement('script');
                element.src = x;
                document.body.appendChild(element);
            }
        );
    }
}


window.addEventListener("popstate", (ev) => {
    const initialObject = newInitObject(window.location.pathname);
    initPage(initialObject);
});
