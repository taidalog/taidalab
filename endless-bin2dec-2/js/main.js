// taidalab Version 0.12.1
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function checkAnswer (answer, question, last_answers) {
    const errorArea = document.getElementById('errorArea');
    errorArea.innerHTML = "";
    
    const numberInput = document.getElementById("numberInput");
    const inputValue = escapeHtml(numberInput.value);
    console.log("inputValue : " + inputValue);
    
    if (inputValue == "") {
        const questionWithoutSpace = question.replace(' ', '');
        errorArea.innerHTML = "<span class=\"warning\">" + questionWithoutSpace + " の10進法表記を入力してください。</span>";
    } else if (tesDecimalString(inputValue) == false) {
        errorArea.innerHTML = "<span class=\"warning\">\"" + inputValue + "\" は10進数ではありません。使えるのは半角の 0123456789 のみです。</span>";
    } else {
        
        const inputValueAsInt = parseInt(inputValue);
        
        let historyClassName = ""
        if (inputValueAsInt == answer) {
            historyClassName = "history-correct"
        } else {
            historyClassName = "history-wrong"
        }
        
        const digit = 3;
        const spacePaddedInputValue = inputValue.padStart(digit, ' ').replace(' ', '&nbsp;');
        
        const sourceRadix = 2;
        const bin = inputValueAsInt.toString(sourceRadix);
        console.log("inputValue -> binary : " + bin);

        const destinationRadix = 10;
        const outputArea = document.getElementById("outputArea");
        const msg1 = "<span class =\"" + historyClassName + "\">" + spacePaddedInputValue + "<sub>(" + destinationRadix + ")</sub> = " + bin + "<sub>(" + sourceRadix + ")</sub></span>";
        const msg2 = concatinateStrings(msg1, outputArea.innerHTML);
        outputArea.innerHTML = msg2;
        console.log(msg1);
        console.log(msg2);
        
        if (inputValueAsInt == answer) {
            let nextNumber = 0;
            
            console.log(last_answers);
            do {
                nextNumber = getRandomBetween(0, 255);
                console.log(nextNumber);
                console.log(last_answers.some((element) => element == nextNumber));
            } while (last_answers.some((element) => element == nextNumber));

            const nextBin = nextNumber.toString(sourceRadix);
            const splitBin = splitBinaryStringBy(4, nextBin);
            console.log(nextBin);
            console.log(splitBin);
            
            document.getElementById('questionSpan').innerText = splitBin;

            numberInput.value = "";

            const answersToKeep = 10;
            const lastAnswers = [nextNumber].concat(last_answers).slice(0, answersToKeep);
            document.getElementById('submitButton').onclick = function() { checkAnswer(nextNumber, splitBin, lastAnswers); return false; };
        }
    }
    
    numberInput.focus();
}

const initNumber = getRandomBetween(0, 255);
const initBin = initNumber.toString(2);
const splitBin = splitBinaryStringBy(4,initBin);
console.log(initNumber);
console.log(initBin);
console.log(splitBin);
//document.getElementById('questionSpan').innerText = splitBin;

const sourceRadix = 2;
const destinationRadix = 10;

document.title = "2進数→10進数 (2) - taidalab";
document.getElementById('headerContainer').innerHTML = "<h1>2進数→10進数 (2)</h1>";
document.getElementById('questionArea').innerHTML = "<span id=\"questionSpan\" class=\"question-number\">" + splitBin + "</span><sub>(" + sourceRadix + ")</sub> を" + destinationRadix + "進法で表すと？";
document.getElementById('binaryRadix').innerHTML = "<sub>(" + destinationRadix + ")</sub>";
document.getElementsByTagName('footer')[0].innerHTML = footerContentPages;
document.getElementById('versionNumber').innerText = "Version 0.10.1";

document.getElementById('submitButton').onclick = function() { checkAnswer(initNumber, splitBin, [initNumber]); return false; };
