// taidalab Version 0.7.1
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

    const hint = newHintPowerOfTwo(question);

    if (bin == "") {
        instructionArea.innerHTML = hint + "<br><span class=\"warning\">" + question + " の2進法表記を入力してください。</span>";
    } else if (testBinaryString(bin) == false) {
        instructionArea.innerHTML = hint + "<br><span class=\"warning\">\"" + bin + "\" は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>";
    } else {

        const binWithLeadingZero = colorLeadingZero(putLeadingZero(bin, digit));
        const dec = parseInt(bin, destinationRadix);
        console.log(binWithLeadingZero);
        console.log(dec);
        
        const outputArea = document.getElementById("outputArea");
        
        let historyClassName = ""
        if (dec == question) {
            historyClassName = "history-correct"
        } else {
            historyClassName = "history-wrong"
        }
        
        const msg1 = "<span class =\"" + historyClassName + "\">" + binWithLeadingZero + "<sub>(" + destinationRadix + ")</sub> = " + dec + "<sub>(" + sourceRadix + ")</sub></span>";
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
            
            const nextHint = newHintPowerOfTwo(nextNumber);
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

function newHintPowerOfTwo (number) {
    const indexNumber = Math.log(number) / Math.log(2);
    return "<details><summary>ヒント: </summary><span class=\"history-indented\">" + number + "<sub>(10)</sub> = 2<sup>" + indexNumber + "</sup></span><br><span class=\"history-indented\">10進法で2<sup>n</sup>になる数は、</span><br><span class=\"history-indented\">2進法では1の後ろに0をn個つけます。</span></details>"
}

const initIndexNumber = getRandomBetween(0, 7);
const initNumber = Math.pow(2, initIndexNumber);
const hint = newHintPowerOfTwo(initNumber);
document.getElementById('questionSpan').innerText = initNumber;
document.getElementById('instructionArea').innerHTML = hint;
