// taidalab Version 0.12.1
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function checkAnswer (answer, question, last_answers) {
    const hintArea = document.getElementById('hintArea');
    const errorArea = document.getElementById('errorArea');
    errorArea.innerHTML = "";

    const numberInput = document.getElementById("numberInput");
    const inputValue = escapeHtml(numberInput.value);
    console.log("inputValue : " + inputValue);

    if (inputValue == "") {
        const questionWithoutSpace = question.replace(' ', '');
        errorArea.innerHTML = "<span class=\"warning\">" + questionWithoutSpace + " の10進法表記を入力してください。</span>";
    } else if (tesDecimalString(inputValue) == false) {
        errorArea.innerHTML = "<span class=\"warning\">\"" + inputValue + "\" は10進数ではありません。使えるのは半角の 0123456789 のみです。</span>";
    } else {

        const inputValueAsInt = parseInt(inputValue);
        
        let historyClassName = ""
        if (inputValueAsInt == answer) {
            historyClassName = "history-correct"
        } else {
            historyClassName = "history-wrong"
        }
        
        const digit = 3;
        const spacePaddedInputValue = inputValue.padStart(digit, ' ').replace(' ', '&nbsp;');
        
        const sourceRadix = 2;
        const bin = inputValueAsInt.toString(sourceRadix);
        
        const destinationRadix = 10;
        const outputArea = document.getElementById("outputArea");
        const msg1 = "<span class =\"" + historyClassName + "\">" + spacePaddedInputValue + "<sub>(" + destinationRadix + ")</sub> = " + bin + "<sub>(" + sourceRadix + ")</sub></span>";
        const msg2 = concatinateStrings(msg1, outputArea.innerHTML);
        outputArea.innerHTML = msg2;
        console.log(msg1);
        console.log(msg2);
        
        if (inputValueAsInt == answer) {
            let nextIndexNumber = 0; //getRandomBetween(0, 7);
            let nextNumber = 0; //Math.pow(2, nextIndexNumber);
            
            console.log(last_answers);
            do {
                nextIndexNumber = getRandomBetween(0, 7);
                nextNumber = Math.pow(2, nextIndexNumber);
                console.log(nextNumber);
                console.log(nextIndexNumber);
                console.log(last_answers.some((element) => element == nextNumber));
            } while (last_answers.some((element) => element == nextNumber));

            const nextBin = nextNumber.toString(sourceRadix);
            const splitBin = splitBinaryStringBy(4, nextBin);
            console.log(nextBin);
            console.log(splitBin);
            
            document.getElementById('questionSpan').innerText = splitBin;
            
            const nextAddtionFormula = writeAdditionFormula(nextBin);
            const nextHint = formatString(hintFormat, [nextBin, nextAddtionFormula]);
            console.log(nextHint);
            
            hintArea.innerHTML = nextHint;
            numberInput.value = "";

            const answersToKeep = 4;
            const lastAnswers = [nextNumber].concat(last_answers).slice(0, answersToKeep);
            document.getElementById('submitButton').onclick = function() { checkAnswer(nextNumber, splitBin, lastAnswers); return false; };
        }
    }
    
    numberInput.focus();
}


function writeAdditionFormula (binary_string) {
    let result = "";
    let tmp ="";

    for (let i = 0; i < binary_string.length; i++) {
        tmp = formatString("(2<sup>{0}</sup> * {1})", [binary_string.length - 1 - i, binary_string[i]]);
        if (result == "") {
            result = tmp;
        } else {
            result = result + " + " + tmp;
        }
    }

    return result;
}


// initialization
const initIndexNumber = getRandomBetween(0, 7);
const initNumber = Math.pow(2,initIndexNumber);
const initBin = initNumber.toString(2);
const splitBin = splitBinaryStringBy(4,initBin);
console.log(initIndexNumber);
console.log(initNumber);
console.log(initBin);
console.log(splitBin);

const addtionFormula = writeAdditionFormula(initBin);

const hintFormat01 = "<details><summary>ヒント:</summary>";
const hintFormat02 = "<p class=\"history-indented\">10進数は、一番右の桁から<br>";
const hintFormat03 = "1の位、10の位、100の位、1000の位...つまり、<br>";
const hintFormat04 = "10<sup>0</sup>の位、10<sup>1</sup>の位、10<sup>2</sup>の位、10<sup>3</sup>の位...となっています。</p>";
const hintFormat05 = "<p class=\"history-indented\">同様に、2進数は一番右の桁から<br>";
const hintFormat06 = "1の位、2の位、4の位、8の位...つまり、<br>";
const hintFormat07 = "2<sup>0</sup>の位、2<sup>1</sup>の位、2<sup>2</sup>の位、2<sup>3</sup>の位...となっています。</p>";
const hintFormat08 = "<p class=\"history-indented\">ですので、{0}<sub>(2)</sub>を10進数に変換するには、以下のように計算します。<br>";
const hintFormat09 = "{1}</p>";
const hintFormat10 = "</details>";
const hintFormat = hintFormat01 + hintFormat02 + hintFormat03 + hintFormat04 + hintFormat05 + hintFormat06 + hintFormat07 + hintFormat08 + hintFormat09 + hintFormat10;
const hint = formatString(hintFormat, [initBin, addtionFormula]);

document.getElementById('questionSpan').innerText = splitBin;
document.getElementById('hintArea').innerHTML = hint;

document.getElementById('submitButton').onclick = function() { checkAnswer(initNumber, splitBin, [initNumber]); return false; };
