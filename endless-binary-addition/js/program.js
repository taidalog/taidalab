// taidalab Version 0.6.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function main() {
    const sourceRadix = 10;
    const destinationRadix = 2;
    const digit = 8;

    const instructionArea = document.getElementById('instructionArea');
    instructionArea.innerHTML = "<br>";

    const questionSpan = document.getElementById('questionSpan');
    const question = questionSpan.innerText;
    console.log(question);

    const numberInput = document.getElementById("numberInput");
    const bin = escapeHtml(numberInput.value);
    console.log(bin);

    const indexNumber = Math.log(question + 1) / Math.log(2);
    const hint = formatString(hintFormat, [question, question + 1, indexNumber]);

    if (bin == "") {
        instructionArea.innerHTML = hint + "<br><span class=\"warning\">" + question + " の2進法表記を入力してください。</span>";
    } else if (testBinaryString(bin) == false) {
        instructionArea.innerHTML = hint + "<br><span class=\"warning\">\"" + bin + "\" は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>";
    } else {

        const zeroPaddedBin = bin.padStart(digit, '0');
        const taggedBin = colorLeadingZero(zeroPaddedBin);
        const dec = parseInt(bin, destinationRadix);
        console.log(taggedBin);
        console.log(dec);
        
        const outputArea = document.getElementById("outputArea");
        
        let historyClassName = ""
        if (dec == question) {
            historyClassName = "history-correct"
        } else {
            historyClassName = "history-wrong"
        }
        
        const msg1 = "<span class =\"" + historyClassName + "\">" + taggedBin + "<sub>(" + destinationRadix + ")</sub> = " + dec + "<sub>(" + sourceRadix + ")</sub></span>";
        const msg2 = concatinateStrings(msg1, outputArea.innerHTML);
        outputArea.innerHTML = msg2;
        console.log(msg1);
        console.log(msg2);
        
        if (dec == question) {
            let nextNumber = 0;
            let nextIndexNumber = 0;
            do {
                nextIndexNumber = getRandomBetween(1, 8);
                nextNumber = Math.pow(2, nextIndexNumber) - 1;
            } while (nextNumber == question)
            
            const nextHint = formatString(hintFormat, [nextNumber, nextNumber + 1, nextIndexNumber]);
            questionSpan.innerText = nextNumber;
            console.log(nextNumber);
            instructionArea.innerHTML = nextHint;
            console.log(nextHint);
            numberInput.value = "";
        } else {
            instructionArea.innerHTML = hint;
        }
    }
    
    numberInput.focus();
}

const initNumber1 = getRandomBetween(0, 255);
let initNumber2 = 0;

do {
    initNumber2 = getRandomBetween(0, 255 - initNumber1);
//    console.log("band : " + (initNumber1 & initNumber2));
} while ((initNumber1 == initNumber2) || ((initNumber1 & initNumber2) == 0) || (initNumber1 + initNumber2 > 255))

const initBin1 = initNumber1.toString(2);
const initBin2 = initNumber2.toString(2);
console.log(initNumber1);
console.log(initBin1);
console.log(initNumber2);
console.log(initBin2);

for (let i = 1; i<=initBin1.length; i++) {
    document.getElementById('firstRowDigit' + i).innerText = initBin1[initBin1.length - i];
}

for (let i = 1; i<=initBin2.length; i++) {
    document.getElementById('secondRowDigit' + i).innerText = initBin2[initBin2.length - i];
}

//const hintFormat = "<details><summary>ヒント: </summary><span class=\"history-indented\">{0}<sub>(10)</sub> = {1}<sub>(10)</sub> - 1<sub>(10)</sub> = 2<sup>{2}</sup> - 1<sub>(10)</sub></span>";
//const hint = formatString(hintFormat, [initNumber, initNumber + 1, initIndexNumber]);
//document.getElementById('instructionArea').innerHTML = hint;
