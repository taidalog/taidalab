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

    const hintArea = document.getElementById('hintArea');
    const errorArea = document.getElementById('errorArea');
    errorArea.innerHTML = "";

    const questionSpan = document.getElementById('questionSpan');
    const question = questionSpan.innerText;
    console.log(question);

    const numberInput = document.getElementById("numberInput");
    const bin = escapeHtml(numberInput.value);
    console.log(bin);
    
    const indexNumber = Math.log(question) / Math.log(2);
    const hint = formatString(hintFormat, [question, indexNumber]);

    if (bin == "") {
        errorArea.innerHTML = "<br><span class=\"warning\">" + question + " の2進法表記を入力してください。</span>";
    } else if (testBinaryString(bin) == false) {
        errorArea.innerHTML = "<br><span class=\"warning\">\"" + bin + "\" は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>";
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
            let nextNumber = 0;
            let nextIndexNumber = 0;
            do {
                nextIndexNumber = getRandomBetween(0, 7);
                nextNumber = Math.pow(2, nextIndexNumber);
            } while (nextNumber == question)
            
            const nextHint = formatString(hintFormat, [nextNumber, nextIndexNumber]);
            questionSpan.innerText = nextNumber;
            console.log(nextNumber);
            hintArea.innerHTML = nextHint;
            console.log(nextHint);
            numberInput.value = "";
        } else {
            hintArea.innerHTML = hint;
        }
    }
    
    numberInput.focus();
}

const initIndexNumber = getRandomBetween(0, 7);
const initNumber = Math.pow(2, initIndexNumber);
const hintFormat = "<details><summary>ヒント: </summary><span class=\"history-indented\">{0}<sub>(10)</sub> = 2<sup>{1}</sup></span><br><span class=\"history-indented\">10進法で2<sup>n</sup>になる数は、</span><br><span class=\"history-indented\">2進法では1の後ろに0をn個つけます。</span></details>";
const hint = formatString(hintFormat, [initNumber, initIndexNumber]);
document.getElementById('questionSpan').innerText = initNumber;
document.getElementById('hintArea').innerHTML = hint;
