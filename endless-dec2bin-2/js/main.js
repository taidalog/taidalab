// taidalab Version 0.12.1
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function checkAnswer (answer, last_answers) {
    const errorArea = document.getElementById('errorArea');
    errorArea.innerHTML = "";
    
    const numberInput = document.getElementById("numberInput");
    const bin = escapeHtml(numberInput.value);
    console.log(bin);
    
    if (bin == "") {
        errorArea.innerHTML = "<span class=\"warning\">" + answer + " の2進法表記を入力してください。</span>";
    } else if (testBinaryString(bin) == false) {
        errorArea.innerHTML = "<span class=\"warning\">\"" + bin + "\" は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>";
    } else {
        
        const binaryDigit = 8;
        const destinationRadix = 2;
        const zeroPaddedBin = bin.padStart(binaryDigit, '0');
        const taggedBin = colorLeadingZero(zeroPaddedBin);
        const dec = parseInt(bin, destinationRadix);
        console.log(taggedBin);
        console.log(dec);
        
        const outputArea = document.getElementById("outputArea");
        
        let historyClassName = ""
        if (dec == answer) {
            historyClassName = "history-correct"
        } else {
            historyClassName = "history-wrong"
        }
        
        const decimalDigit = 3;
        const spacePaddedDec = dec.toString().padStart(decimalDigit, ' ').replace(' ', '&nbsp;');
        
        const sourceRadix = 10;
        const msg1 = "<span class =\"" + historyClassName + "\">" + taggedBin + "<sub>(" + destinationRadix + ")</sub> = " + spacePaddedDec + "<sub>(" + sourceRadix + ")</sub></span>";
        const msg2 = concatinateStrings(msg1, outputArea.innerHTML);
        outputArea.innerHTML = msg2;
        console.log(msg1);
        console.log(msg2);
        
        if (dec == answer) {
            let nextNumber = 0;

            console.log(last_answers);
            do {
                nextNumber = getRandomBetween(0, 255);
                console.log(nextNumber);
                console.log(last_answers.some((element) => element == nextNumber));
            } while (last_answers.some((element) => element == nextNumber));

            document.getElementById('questionSpan').innerText = nextNumber;
            numberInput.value = "";

            const answersToKeep = 10;
            const lastAnswers = [nextNumber].concat(last_answers).slice(0, answersToKeep);
            document.getElementById('submitButton').onclick = function() { checkAnswer(nextNumber, lastAnswers); return false; };
        }
    }
    
    numberInput.focus();
}


// initialization
const initNumber = getRandomBetween(0, 255);
const sourceRadix = 10;
const destinationRadix = 2;

document.title = "10進数→2進数 (2) - taidalab";
document.getElementsByTagName('header')[0].innerHTML = headerContentPages;
document.getElementsByTagName('header')[0].className = "d2b-header";
document.getElementById('headerContainer').innerHTML = "<h1>10進数→2進数 (2)</h1>";
document.getElementsByTagName('main')[0].innerHTML = mainContentPages;
document.getElementById('submitButton').className = "submit-button d2b-button";
document.getElementById('questionArea').innerHTML = "<span id=\"questionSpan\" class=\"question-number\">" + initNumber + "</span><sub>(" + sourceRadix + ")</sub> を" + destinationRadix + "進法で表すと？";
document.getElementById('binaryRadix').innerHTML = "<sub>(" + destinationRadix + ")</sub>";
document.getElementsByTagName('footer')[0].innerHTML = footerContentPages;
document.getElementById('versionNumber').innerText = "Version 0.10.1";

document.getElementById('submitButton').onclick = function() { checkAnswer(initNumber, [initNumber]); return false; };
