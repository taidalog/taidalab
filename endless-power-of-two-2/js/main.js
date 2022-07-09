// taidalab Version 0.10.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function checkAnswer (answer, hint_format) {
    const hintArea = document.getElementById('hintArea');
    const errorArea = document.getElementById('errorArea');
    errorArea.innerHTML = "";

    const numberInput = document.getElementById("numberInput");
    const bin = escapeHtml(numberInput.value);
    console.log(bin);

//    const answerAsInt = parseInt(answer, 10);
//    const indexNumber = Math.log(answerAsInt + 1) / Math.log(2);
    // const hint = formatString(hintFormat, [answer, answerAsInt + 1, indexNumber]);

    if (bin == "") {
        errorArea.innerHTML = "<span class=\"warning\">" + answer + " の2進法表記を入力してください。</span>";
    } else if (testBinaryString(bin) == false) {
        errorArea.innerHTML = "<span class=\"warning\">\"" + bin + "\" は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>";
    } else {

        const binaryDigit = 8;
        const zeroPaddedBin = bin.padStart(binaryDigit, '0');
        const taggedBin = colorLeadingZero(zeroPaddedBin);
        console.log(taggedBin);
        
        const destinationRadix = 2;
        const dec = parseInt(bin, destinationRadix);
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
            let nextIndexNumber = 0;
            do {
                nextIndexNumber = getRandomBetween(1, 8);
                nextNumber = Math.pow(2, nextIndexNumber) - 1;
            } while (nextNumber == answer)
            
            const nextHint = formatString(hint_format, [nextNumber, nextNumber + 1, nextIndexNumber]);
            document.getElementById('questionSpan').innerText = nextNumber;
            console.log(nextNumber);
            hintArea.innerHTML = nextHint;
            console.log(nextHint);

            numberInput.value = "";

            document.getElementById('submitButton').onclick = function() { checkAnswer(nextNumber, hint_format); return false;  };
        }
    }
    
    numberInput.focus();
}

const initIndexNumber = getRandomBetween(1, 8);
const initNumber = Math.pow(2, initIndexNumber) - 1;
const hintFormat = "<details><summary>ヒント: </summary><span class=\"history-indented\">{0}<sub>(10)</sub> = {1}<sub>(10)</sub> - 1<sub>(10)</sub> = 2<sup>{2}</sup> - 1<sub>(10)</sub></span></details>";
const hint = formatString(hintFormat, [initNumber, initNumber + 1, initIndexNumber]);
document.getElementById('questionSpan').innerText = initNumber;
document.getElementById('hintArea').innerHTML = hint;

document.getElementById('submitButton').onclick = function() { checkAnswer(initNumber, hintFormat); return false;  };
