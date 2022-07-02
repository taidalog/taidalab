// taidalab Version 0.10.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function main() {
    const sourceRadix = 2;
    const destinationRadix = 10;
    const digit = 3;

    const errorArea = document.getElementById('errorArea');
    errorArea.innerHTML = "";

    const questionSpan = document.getElementById('questionSpan');
    const question = questionSpan.innerText;
    const questionWithoutSpace = question.replace(' ', '');
    console.log(question);
    console.log(questionWithoutSpace);

    const numberInput = document.getElementById("numberInput");
    const inputValue = escapeHtml(numberInput.value);
    console.log("inputValue : " + inputValue);

    if (inputValue == "") {
        errorArea.innerHTML = "<span class=\"warning\">" + questionWithoutSpace + " の10進法表記を入力してください。</span>";
    } else if (tesDecimalString(inputValue) == false) {
        errorArea.innerHTML = "<span class=\"warning\">\"" + inputValue + "\" は10進数ではありません。使えるのは半角の 0123456789 のみです。</span>";
    } else {

        const inputValueAsInt = parseInt(inputValue);
        const bin = inputValueAsInt.toString(sourceRadix);
        console.log("inputValue -> binary : " + bin);
        
        const outputArea = document.getElementById("outputArea");
        
        let historyClassName = ""
        if (bin == questionWithoutSpace) {
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
        
        if (bin == questionWithoutSpace) {
            const nextNumber = getRandomBetween(0, 255);
            const nextBin = nextNumber.toString(sourceRadix);
            const splitBin = splitBinaryStringBy(4, nextBin);
            questionSpan.innerText = splitBin;
            console.log(nextBin);
            console.log(splitBin);
            numberInput.value = "";
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
document.getElementById('questionSpan').innerText = splitBin;
