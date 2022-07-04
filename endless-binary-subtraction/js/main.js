// taidalab Version 0.12.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function checkAnswer(answer, num1, num2) {
    
    const numberInput = document.getElementById("numberInput");
    const bin = escapeHtml(numberInput.value);
    console.log(bin);
    
    const errorArea = document.getElementById('errorArea');
    errorArea.innerHTML = "";
    
    const sourceRadix = 2;
    if (bin == "") {
        errorArea.innerHTML = "<span class=\"warning\">" + num1.toString(sourceRadix) + "<small>(" + sourceRadix + ")</small>" + num2.toString(sourceRadix)+ "<small>(" + sourceRadix + ")</small>" + " の2進法表記を入力してください。</span>";
    } else if (testBinaryString(bin) == false) {
        errorArea.innerHTML = "<span class=\"warning\">\"" + bin + "\" は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>";
    } else {
        
        const digit = 8;
        const zeroPaddedBin = bin.padStart(digit, '0');
        const taggedBin = colorLeadingZero(zeroPaddedBin);
        const dec = parseInt(bin, sourceRadix);
        console.log(taggedBin);
        console.log(dec);
        
        const outputArea = document.getElementById("outputArea");
        
        let historyClassName = ""
        if (dec == answer) {
            historyClassName = "history-correct"
        } else {
            historyClassName = "history-wrong"
        }
        
        const destinationRadix = 10;
        const msg1 = "<span class =\"" + historyClassName + "\">" + taggedBin + "<sub>(" + sourceRadix + ")</sub> = " + dec + "<sub>(" + destinationRadix + ")</sub></span>";
        const msg2 = concatinateStrings(msg1, outputArea.innerHTML);
        outputArea.innerHTML = msg2;
        console.log(msg1);
        console.log(msg2);
        
        if (dec == answer) {
            // Making next question.
            const numbers = newNumbers();
            setColumnAddition(numbers[0], numbers[1]);
            console.log(numbers[0]);
            console.log(numbers[1]);

            const hintArea = document.getElementById('hintArea');
            const nextHint = newHint();
            hintArea.innerHTML = nextHint;
            console.log(nextHint);

            numberInput.value = "";
            document.getElementById('submitButton').onclick = function () { checkAnswer((numbers[0] - numbers[1]), numbers[0], numbers[1]); return false; };
        }
    }
    
    numberInput.focus();
}

function newNumbers () {
    
    const regex = /^1+0+$/;
    let number1 = 0;

//    do {
        number1 = getRandomBetween(1, 255);
        console.log("number1: " + number1);
//        console.log("number1.binary: " + number1.toString(2));
//        console.log("number1.length: " + number1.toString(2).length);
//    } while ((number1.toString(2).length == 8) && regex.test(number1.toString(2)))

    let number2 = 0;

    do {
        number2 = getRandomBetween(1, 255);
        console.debug("number1 == number2: " + (number1 <= number2) + "\t(number1 & number2) == 0: " + ((number1 & number2) == 0));
    } while ((number1 == number2) || ((number1 & number2) == 0))

    console.log(number2);

    if (number1 > number2) {
        return [number1, number2];
    } else {
        return [number2, number1];
    }
}


function setColumnAddition (number1, number2) {
    const bin1 = number1.toString(2);
    const bin2 = number2.toString(2);
    console.log(bin1);
    console.log(bin2);
    console.log((number1 + number2).toString(2));

    for (let i = 1; i <= 8; i++) {
        document.getElementById('firstRowDigit' + i).innerText = "";
    }

    for (let i = 1; i <= 8; i++) {
        document.getElementById('secondRowDigit' + i).innerText = "";
    }

    for (let i = 1; i <= bin1.length; i++) {
        document.getElementById('firstRowDigit' + i).innerText = bin1[bin1.length - i];
    }

    for (let i = 1; i <= bin2.length; i++) {
        document.getElementById('secondRowDigit' + i).innerText = bin2[bin2.length - i];
    }
}


function newHint () {
    const hintFormat01 = "<details><summary>ヒント: </summary>";
    const hintFormat02 = "<p class=\"history-indented\">";
    const hintFormat03 = "10進数の筆算と同じように、右端から上下の数で引き算をします。<br><br>";
    const hintFormat04 = "0<sub>(2)</sub> - 0<sub>(2)</sub> = 0<sub>(2)</sub><br>";
    const hintFormat05 = "1<sub>(2)</sub> - 1<sub>(2)</sub> = 0<sub>(2)</sub><br>";
    const hintFormat06 = "1<sub>(2)</sub> - 0<sub>(2)</sub> = 1<sub>(2)</sub><br><br>";
    const hintFormat07 = "0<sub>(2)</sub> - 1<sub>(2)</sub> をする時は、<br>";
    const hintFormat08 = "ひとつ左の桁から1を2つもらってきます。<br>";
    const hintFormat09 = "</p>";
    const hintFormat10 = "</details>";
    const hint = hintFormat01 + hintFormat02 + hintFormat03 + hintFormat04 + hintFormat05 + hintFormat06 + hintFormat07 + hintFormat08 + hintFormat09 + hintFormat10;
    return hint;
}


// initialization
const numbers = newNumbers();
setColumnAddition(numbers[0], numbers[1]);

const hint = newHint();
document.getElementById('hintArea').innerHTML = hint;

document.getElementById('submitButton').onclick = function () { checkAnswer((numbers[0] - numbers[1]), numbers[0], numbers[1]); return false; };
