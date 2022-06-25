// taidalab Version 0.8.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function main() {
    const sourceRadix = 2;
    const destinationRadix = 10;
    const digit = 3;

    const instructionArea = document.getElementById('instructionArea');
    instructionArea.innerHTML = "<br>";

    const questionSpan = document.getElementById('questionSpan');
    const question = questionSpan.innerText;
    console.log(question);

    const numberInput = document.getElementById("numberInput");
    const inputValue = escapeHtml(numberInput.value);
    console.log("inputValue : " + inputValue);

    if (inputValue == "") {
        instructionArea.innerHTML = "<span class=\"warning\">" + question + " の10進法表記を入力してください。</span>";
    } else if (tesDecimalString(inputValue) == false) {
        instructionArea.innerHTML = "<span class=\"warning\">\"" + inputValue + "\" は10進数ではありません。使えるのは半角の 0123456789 のみです。</span>";
    } else {

        const inputValueAsInt = parseInt(inputValue);
        const bin = inputValueAsInt.toString(sourceRadix);
        console.log("inputValue -> binary : " + bin);
        
        const outputArea = document.getElementById("outputArea");
        
        let historyClassName = ""
        if (bin == question) {
            historyClassName = "history-correct"
        } else {
            historyClassName = "history-wrong"
        }
        
        const spacePaddedInputValue = inputValue.padStart(digit, ' ').replace(' ', '&nbsp;');
        const msg1 = "<span class =\"" + historyClassName + "\">" + spacePaddedInputValue + "<sub>(" + destinationRadix + ")</sub> = " + bin + "<sub>(" + sourceRadix + ")</sub></span>";
        const msg2 = concatinateStrings(msg1, outputArea.innerHTML);
        outputArea.innerHTML = msg2;
        console.log(msg1);
        console.log(msg2);
        
        if (bin == question) {
            const nextIndexNumber = getRandomBetween(0, 7);
            const nextNumber = Math.pow(2, nextIndexNumber);
            const nextBin = nextNumber.toString(sourceRadix);
            questionSpan.innerText = nextBin;
            console.log(nextBin);
            numberInput.value = "";
        }
    }
    
    numberInput.focus();
}

const initIndexNumber = getRandomBetween(0, 7);
const initNumber = Math.pow(2,initIndexNumber);
const initBin = initNumber.toString(2);
console.log(initIndexNumber);
console.log(initNumber);
console.log(initBin);
document.getElementById('questionSpan').innerText = initBin;