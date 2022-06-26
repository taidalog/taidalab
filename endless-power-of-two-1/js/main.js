// taidalab Version 0.9.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function checkNumber (index_number, number, hint_format) {
    const sourceRadix = 10;
    
    const instructionArea = document.getElementById('instructionArea');
    instructionArea.innerHTML = "<br>";
    
    const numberInput = document.getElementById("numberInput");
    const bin = escapeHtml(numberInput.value);
    console.log(bin);
    
    const hint = formatString(hint_format, [number, index_number]);
    
    if (bin == "") {
        instructionArea.innerHTML = hint + "<br><span class=\"warning\">" + number + " の2進法表記を入力してください。</span>";
    } else if (testBinaryString(bin) == false) {
        instructionArea.innerHTML = hint + "<br><span class=\"warning\">\"" + bin + "\" は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>";
    } else {
        
        const binaryDigit = 8;
        const zeroPaddedBin = bin.padStart(binaryDigit, '0');
        const taggedBin = colorLeadingZero(zeroPaddedBin);
        console.log(taggedBin);
        
        const destinationRadix = 2;
        const dec = parseInt(bin, destinationRadix);
        console.log(dec);
        
        const outputArea = document.getElementById("outputArea");
        
        const decimalDigit = 3;
        const spacePaddedDec = dec.toString().padStart(decimalDigit, ' ').replace(' ', '&nbsp;');
        const historyMessage = newHistory((dec == number), taggedBin, sourceRadix, spacePaddedDec, destinationRadix, outputArea.innerHTML);
        outputArea.innerHTML = historyMessage;
        
        if (dec == number) {
            let nextNumber = 0;
            let nextIndexNumber = 0;
            do {
                nextIndexNumber = getRandomBetween(0, 7);
                nextNumber = Math.pow(2, nextIndexNumber);
            } while (nextNumber == number)
            
            const nextHint = formatString(hintFormat, [nextNumber, nextIndexNumber]);
            questionSpan.innerText = nextNumber;
            console.log(nextNumber);
            instructionArea.innerHTML = nextHint;
            console.log(nextHint);
            numberInput.value = "";

            document.getElementById('submitButton').onclick = function() { checkNumber(nextIndexNumber, nextNumber, hintFormat); return false; };
        } else {
            instructionArea.innerHTML = hint;
        }
    }
    
    numberInput.focus();
}

function newHistory (is_correct, input, source_radix, converted_input, destination_radix, existing_results) {
    let historyClassName = ""
    if (is_correct) {
        historyClassName = "history-correct"
    } else {
        historyClassName = "history-wrong"
    }
    
    const msg1 = "<span class =\"" + historyClassName + "\">" + input + "<sub>(" + destination_radix + ")</sub> = " + converted_input + "<sub>(" + source_radix + ")</sub></span>";
    const msg2 = concatinateStrings(msg1, existing_results);
    console.log(msg1);
    console.log(msg2);
    return msg2;
}

const initIndexNumber = getRandomBetween(0, 7);
const initNumber = Math.pow(2, initIndexNumber);

const hintFormat = "<details><summary>ヒント: </summary><span class=\"history-indented\">{0}<sub>(10)</sub> = 2<sup>{1}</sup></span><br><span class=\"history-indented\">10進法で2<sup>n</sup>になる数は、</span><br><span class=\"history-indented\">2進法では1の後ろに0をn個つけます。</span></details>";
const hint = formatString(hintFormat, [initNumber, initIndexNumber]);

document.getElementById('questionSpan').innerText = initNumber;
document.getElementById('instructionArea').innerHTML = hint;

document.getElementById('submitButton').onclick = function() { checkNumber(initIndexNumber, initNumber, hintFormat); return false;  };
