// taidalab Version 0.10.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function checkAnswer (answer, index_number, hint_format) {
    const inputForm = document.getElementById("inputForm");
    const userInput = escapeHtml(inputForm.value);
    console.log(userInput);

    const hintArea = document.getElementById('hintArea');
    const errorArea = document.getElementById('errorArea');
    errorArea.innerHTML = "";
    
    // const numberInput = document.getElementById("numberInput");
    // const bin = escapeHtml(numberInput.value);
    // console.log(bin);
    
    const hint = formatString(hint_format, [answer, index_number]);
    
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
            do {
                nextIndexNumber = getRandomBetween(0, 7);
                nextAnswer = Math.pow(2, nextIndexNumber);
            } while (nextAnswer == answer)
            console.log(nextAnswer);
            
            const nextHint = formatString(hintFormat, [nextAnswer, nextIndexNumber]);
            console.log(nextHint);
            
            questionSpan.innerText = nextAnswer;
            hintArea.innerHTML = nextHint;
            inputForm.value = "";

            document.getElementById('submitButton').onclick = function() { checkAnswer(nextAnswer, nextIndexNumber, hintFormat); return false; };
        } else {
            hintArea.innerHTML = hint;
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

const hintFormat = "<details><summary>ヒント: </summary><span class=\"history-indented\">{0}<sub>(10)</sub> = 2<sup>{1}</sup></span><br><span class=\"history-indented\">10進法で2<sup>n</sup>になる数は、</span><br><span class=\"history-indented\">2進法では1の後ろに0をn個つけます。</span></details>";
const hint = formatString(hintFormat, [initAnswer, initIndexNumber]);

document.getElementById('questionSpan').innerText = initAnswer;
document.getElementById('hintArea').innerHTML = hint;

document.getElementById('submitButton').onclick = function() { checkAnswer(initAnswer, initIndexNumber, hintFormat); return false;  };
