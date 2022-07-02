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
    
    const powerOfTwos = devideIntoPowerOfTwo(question);
    console.log(powerOfTwos);

    const quotientsAndRemainders = repeatDivision(question, 2);
    console.log(quotientsAndRemainders);

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
            let nextNumber = 0;
            let nextBin = 0;
            do {
                nextNumber = getRandomBetween(0, 192);
                nextBin = nextNumber.toString(2);
            } while (countOneBit(nextBin) != 2);
            console.log(nextNumber);
            
            const powerOfTwos = devideIntoPowerOfTwo(nextNumber);
            console.log(powerOfTwos);
            
            const quotientsAndRemainders = repeatDivision(nextNumber, 2);
            console.log(quotientsAndRemainders);

            const nextHint = newHint(nextNumber, quotientsAndRemainders, powerOfTwos);
            console.log(nextHint);
            
            questionSpan.innerText = nextNumber;
            hintArea.innerHTML = nextHint;
            console.log(nextHint);
            numberInput.value = "";
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


function repeatDivision (dividend, divisor) {
    const quotient = parseInt(dividend / divisor);
    const remainder = dividend - (quotient * divisor);
    if (quotient < divisor) {
        return [[quotient, remainder]];
    } else {
        return [[quotient, remainder]].concat(repeatDivision(quotient, divisor));
    }
}


function newColumnAddition (quotients_and_remainders) {
    const lengthMinusOne = quotients_and_remainders.length - 1;
    return quotients_and_remainders.slice(0, lengthMinusOne).reduceRight(
        (prev, curr) => "2<span class=\"column-addition-row\">" + curr[0].toString().padStart(3, " ").replace(" ", "&nbsp;") + "</span>..." + curr[1] + "<br>" + prev,
        "<span class=\"column-addition-row-last\">" + quotients_and_remainders[lengthMinusOne][0].toString().padStart(5, " ").replace(/ /g, "&nbsp;") + "</span>..." + quotients_and_remainders[lengthMinusOne][1]
        );
}


function newHint (number, quotients_and_remainders, power_of_twos) {
    return "<details><summary>ヒント: </summary>" + "<h2>考え方 1</h2>" + newHintRepeatDivision(number, quotients_and_remainders) + "<h2>考え方 2</h2>" + newHintRepeatAddition(number, power_of_twos) + "</details>"
}


function newHintRepeatDivision (number, quotients_and_remainders) {
    const firstRow = "2<span class=\"column-addition-row\">" + number.toString().padStart(3, " ").replace(" ", "&nbsp;") + "</span>";
    const columnAddition = newColumnAddition(quotients_and_remainders);

    const msg01 = "<div class=\"history-indented\">";
    const msg02 = "<p>10進数を、商が 1 になるまで 2 で割り続けます。<br>";
    const msg03 = "この時、余りを商の右に書いておきます。<br>";
    const msg04 = "商と余りを下から順に繋げると、2進数になります。</p>";
    const msg05 = "</div>";
    const msg06 = "<div class=\"history-indented column-addition-area\">";
    const msg07 = "</div>";

    return msg01 + msg02 + msg03 + msg04 + msg05 + msg06 + firstRow + "<br>" + columnAddition + msg07
}


function newHintRepeatAddition (number, power_of_twos) {
    const hintFormat01 = "<p class=\"history-indented\">";
    const hintFormat02 = "{0}<sub>(10)</sub> 以下で最大の2の累乗は {1}<sub>(10)</sub><br>";
    const hintFormat03 = "{0}<sub>(10)</sub> - {1}<sub>(10)</sub> = {2}<sub>(10)</sub><br>";
    const hintFormat04 = "{2}<sub>(10)</sub> 以下で最大の2の累乗は {3}<sub>(10)</sub><br>";
    const hintFormat05 = "{2}<sub>(10)</sub> - {3}<sub>(10)</sub> = {4}<sub>(10)</sub><br>";
    const hintFormat06 = "よって、{0}<sub>(10)</sub> = {1}<sub>(10)</sub> + {3}<sub>(10)</sub><br>";
    const hintFormat07 = "または、{0}<sub>(10)</sub> = 2<sup>{5}</sup><sub>(10)</sub> + 2<sup>{6}</sup><sub>(10)</sub>";
    const hintFormat08 = "</p>";
    const hintFormat = hintFormat01 + hintFormat02 + hintFormat03 + hintFormat04 + hintFormat05 + hintFormat06 + hintFormat07 + hintFormat08;
    const hint = formatString(hintFormat, [number, power_of_twos[0], number - power_of_twos[0], power_of_twos[1], number - power_of_twos[0] - power_of_twos[1], Math.floor(Math.log(power_of_twos[0]) / Math.log(2)), Math.floor(Math.log(power_of_twos[1]) / Math.log(2))]);
    console.log(hint);
    return hint
}


let initNumber = 0;
let initBin = "";

do {
    initNumber = getRandomBetween(0, 192);
    initBin = initNumber.toString(2);
} while (countOneBit(initBin) != 2);

const quotientsAndRemainders = repeatDivision(initNumber, 2);
const powerOfTwos = devideIntoPowerOfTwo(initNumber);
console.log(initNumber);
console.log(quotientsAndRemainders);
console.log(powerOfTwos);

document.getElementById('questionSpan').innerText = initNumber;
document.getElementById('hintArea').innerHTML = newHint(initNumber, quotientsAndRemainders, powerOfTwos);
