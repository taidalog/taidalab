// taidalab Version 0.12.1
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function checkAnswer (answer, hint_format, last_answers) {
    const inputForm = document.getElementById("inputForm");
    const userInput = escapeHtml(inputForm.value);
    console.log(userInput);

    const hintArea = document.getElementById('hintArea');
    const errorArea = document.getElementById('errorArea');
    errorArea.innerHTML = "";
    
    if (userInput == "") {
        errorArea.innerHTML = "<span class=\"warning\">" + answer + " の2進法表記を入力してください。</span>";
    } else if (testBinaryString(userInput) == false) {
        errorArea.innerHTML = "<span class=\"warning\">\"" + userInput + "\" は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>";
    } else {
        
        const binaryDigit = 8;
        const zeroPaddedBin = userInput.padStart(binaryDigit, '0');
        const taggedBin = colorLeadingZero(zeroPaddedBin);
        console.log(zeroPaddedBin);
        console.log(taggedBin);
        
        const destinationRadix = 2;
        const userInputToDestRadix = parseInt(userInput, destinationRadix);
        console.log(userInputToDestRadix);
        
        const decimalDigit = 3;
        const spacePaddedDec = userInputToDestRadix.toString().padStart(decimalDigit, ' ').replace(' ', '&nbsp;');
        
        const sourceRadix = 10;
        const outputArea = document.getElementById("outputArea");
        const currentHistoryMessage = newHistory((userInputToDestRadix == answer), taggedBin, sourceRadix, spacePaddedDec, destinationRadix);
        const historyMessage = concatinateStrings(currentHistoryMessage, outputArea.innerHTML);
        console.log(currentHistoryMessage);
        console.log(historyMessage);
        outputArea.innerHTML = historyMessage;
        
        if (userInputToDestRadix == answer) {
            let nextIndexNumber = 0;
            let nextAnswer = 0;

            console.log(last_answers);
            do {
                nextIndexNumber = getRandomBetween(0, 7);
                nextAnswer = Math.pow(2, nextIndexNumber);
                console.log(nextAnswer);
                console.log(last_answers.some((element) => element == nextAnswer));
            } while (last_answers.some((element) => element == nextAnswer))
            
            const nextHint = formatString(hint_format, [nextAnswer, nextIndexNumber]);
            console.log(nextHint);
            
            document.getElementById('questionSpan').innerText = nextAnswer;
            hintArea.innerHTML = nextHint;
            inputForm.value = "";

            const answersToKeep = 4;
            const lastAnswers = [nextAnswer].concat(last_answers).slice(0, answersToKeep);
            document.getElementById('submitButton').onclick = function() { checkAnswer(nextAnswer, hint_format, lastAnswers); return false; };
        }
    }
    
    inputForm.focus();
}


function newHistory (is_correct, input, source_radix, converted_input, destination_radix) {
    let historyClassName = "";
    if (is_correct) {
        historyClassName = "history-correct";
    } else {
        historyClassName = "history-wrong";
    }
    
    const result = "<span class =\"" + historyClassName + "\">" + input + "<sub>(" + destination_radix + ")</sub> = " + converted_input + "<sub>(" + source_radix + ")</sub></span>";
    return result;
}


// initialization.
const initIndexNumber = getRandomBetween(0, 7);
const initAnswer = Math.pow(2, initIndexNumber);

const hintFormat = "<details><summary>ヒント: </summary><p class=\"history-indented\">{0}<sub>(10)</sub> = 2<sup>{1}</sup><br>10進法で2<sup>n</sup>になる数は、<br>2進法では1の後ろに0をn個つけます。</p></details>";
const hint = formatString(hintFormat, [initAnswer, initIndexNumber]);

const sourceRadix = 10;
const destinationRadix = 2;

document.title = "2のn乗 - taidalab";
document.getElementsByTagName('header')[0].innerHTML = headerContentPages;
document.getElementsByTagName('header')[0].className = "pot-header";
document.getElementById('headerContainer').innerHTML = "<h1>2のn乗</h1>";
document.getElementById('questionArea').innerHTML = "<span id=\"questionSpan\" class=\"question-number\">" + initAnswer + "</span><sub>(" + sourceRadix + ")</sub> を" + destinationRadix + "進法で表すと？";
document.getElementById('binaryRadix').innerHTML = "<sub>(" + destinationRadix + ")</sub>";
document.getElementById('hintArea').innerHTML = hint;
document.getElementsByTagName('footer')[0].innerHTML = footerContentPages;
document.getElementById('versionNumber').innerText = "Version 0.10.1";

document.getElementById('submitButton').onclick = function() { checkAnswer(initAnswer, hintFormat, [initAnswer]); return false;  };
