// taidalab Version 0.9.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function main() {
    const sourceRadix = 10;
    const destinationRadix = 2;
    const binaryDigit = 8;
    const decimalDigit = 3;

    const errorArea = document.getElementById('errorArea');
    errorArea.innerHTML = "";

    const questionSpan = document.getElementById('questionSpan');
    const question = questionSpan.innerText;
    console.log(question);

    const numberInput = document.getElementById("numberInput");
    const bin = escapeHtml(numberInput.value);
    console.log(bin);

    if (bin == "") {
        errorArea.innerHTML = "<span class=\"warning\">" + question + " の2進法表記を入力してください。</span>";
    } else if (testBinaryString(bin) == false) {
        errorArea.innerHTML = "<span class=\"warning\">\"" + bin + "\" は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>";
    } else {

        const zeroPaddedBin = bin.padStart(binaryDigit, '0');
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
        
        const spacePaddedDec = dec.toString().padStart(decimalDigit, ' ').replace(' ', '&nbsp;');
        const msg1 = "<span class =\"" + historyClassName + "\">" + taggedBin + "<sub>(" + destinationRadix + ")</sub> = " + spacePaddedDec + "<sub>(" + sourceRadix + ")</sub></span>";
        const msg2 = concatinateStrings(msg1, outputArea.innerHTML);
        outputArea.innerHTML = msg2;
        console.log(msg1);
        console.log(msg2);
        
        if (dec == question) {
            const nextNumber = getRandomBetween(0, 255);
            questionSpan.innerText = nextNumber;
            console.log(nextNumber);
            numberInput.value = "";
        }
    }
    
    numberInput.focus();
}

document.getElementById('questionSpan').innerText = getRandomBetween(0, 255);
