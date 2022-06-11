// Endless-Dec2Bin Version 0.5.0
// https://github.com/taidalog/Endless-Dec2Bin
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/Endless-Dec2Bin/blob/main/LICENSE
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

    if (bin == "") {
        instructionArea.innerHTML = "<span class=\"warning\">" + question + " の2進法表記を入力してください。</span>";
    } else if (testBinaryString(bin) == false) {
        instructionArea.innerHTML = "<span class=\"warning\">\"" + bin + "\" は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>";
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
            const nextNumber = getRandomByte();
            questionSpan.innerText = nextNumber;
            console.log(nextNumber);
            numberInput.value = "";
        }
    }
    
    numberInput.focus();
}

function getRandomByte() {
    return Math.floor(Math.random() * 256);
}

function testBinaryString (binary_string) {
    const reCorrect = /^[01]+$/;
    return reCorrect.test(binary_string)
}

function concatinateStrings (new_string, existing_string) {
    if (new_string == "" || new_string == null) {
        return new_string
    } else {
        return new_string + "<br>" + existing_string
    }
}

function escapeHtml (target_string) {
    let result = target_string;
    result = result.replace(/&/g, '&amp;');
    result = result.replace(/</g, '&lt;');
    result = result.replace(/>/g, '&gt;');
    result = result.replace(/"/g, '&quot;');
    result = result.replace(/'/g, '&#39;');
    return result;
}

function putLeadingZero (str, digit) {
    const zeroCount = digit - str.length;
    if (zeroCount >= 0) {
        return '0'.repeat(digit - str.length) + str;
    } else {
        return str
    }
}

function colorLeadingZero (str) {
    const reLeadingZero = /^0+/;
    if (str.match(reLeadingZero == false)) {
        return str;
    }
    
    const leadingZero = str.match(reLeadingZero);
    const leadingZeroInTag = "<span class=\"zero-grey\">" + leadingZero + "</span>";
    return str.replace(leadingZero, leadingZeroInTag);
}

document.getElementById('questionSpan').innerText = getRandomByte();