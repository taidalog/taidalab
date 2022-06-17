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
    
    const indexNumber = Math.log(question) / Math.log(2);
    const hint = formatString(hintFormat, [question, indexNumber]);

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
                nextIndexNumber = getRandomBetween(0, 7);
                nextNumber = Math.pow(2, nextIndexNumber);
            } while (nextNumber == question)
            
            const nextHint = formatString(hintFormat, [nextNumber, nextIndexNumber]);
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

function countOneBit (binaryString) {
    const regex = /1/g;
    const res = binaryString.match(regex);
    if (res == null) {
        return 0
    } else {
        return res.length
    }
}


function devideIntoPowerOfTwo (number) {
    function getMaxPowerOfTwo (number) {
        const indexNumber = Math.floor(Math.log(number) / Math.log(2));
        return Math.pow(2, indexNumber);
    }

    function loop (acc, number) {
        if (number == 0) {
            return acc;
        } else if (number == 1) {
            return acc.concat([1]);
        } else {
            const max = getMaxPowerOfTwo(number);
            return loop(acc.concat([max]), number - max);
        }
    }

    return loop([], number);
}


let initNumber = 0;
let initBin = "";

do {
    initNumber = getRandomBetween(0, 192);
    initBin = initNumber.toString(2);
} while (countOneBit(initBin) != 2);

const initIndexNumber = Math.log(initNumber) / Math.log(2);
const powerOtTwos = devideIntoPowerOfTwo(initNumber);
console.log(initNumber);
console.log(initIndexNumber);
console.log(powerOtTwos);

const hintFormat01 = "<details><summary>ヒント: </summary>";
const hintFormat02 = "<span class=\"history-indented\">{0}<sub>(10)</sub> 以下で最大の2の累乗は {1}<sub>(10)</sub></span><br>";
const hintFormat03 = "<span class=\"history-indented\">{0}<sub>(10)</sub> - {1}<sub>(10)</sub> = {2}<sub>(10)</sub></span><br>";
const hintFormat04 = "<span class=\"history-indented\">{2}<sub>(10)</sub> 以下で最大の2の累乗は {3}<sub>(10)</sub></span><br>";
const hintFormat05 = "<span class=\"history-indented\">{2}<sub>(10)</sub> - {3}<sub>(10)</sub> = {4}<sub>(10)</sub></span><br>";
const hintFormat06 = "<span class=\"history-indented\">よって、{0}<sub>(10)</sub> = {1}<sub>(10)</sub> + {3}<sub>(10)</sub></span></details>";
const hintFormat = hintFormat01 + hintFormat02 + hintFormat03 + hintFormat04 + hintFormat05 + hintFormat06;
const hint = formatString(hintFormat, [initNumber, powerOtTwos[0], initNumber - powerOtTwos[0], powerOtTwos[1], initNumber - powerOtTwos[0] - powerOtTwos[1]]);
console.log(hint);

document.getElementById('questionSpan').innerText = initNumber;
document.getElementById('instructionArea').innerHTML = hint;
