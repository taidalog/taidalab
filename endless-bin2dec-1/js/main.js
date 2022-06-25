// taidalab Version 0.9.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function main() {
    const sourceRadix = 2;
    const destinationRadix = 10;
    const digit = 3;

    const instructionArea = document.getElementById('instructionArea');
    instructionArea.innerHTML = "<br>";

    const questionSpan = document.getElementById('questionSpan');
    const question = questionSpan.innerText;
    const questionWithoutSpace = question.replace(' ', '');
    console.log(question);
    console.log(questionWithoutSpace);

    const numberInput = document.getElementById("numberInput");
    const inputValue = escapeHtml(numberInput.value);
    console.log("inputValue : " + inputValue);

    const addtionFormula = writeAdditionFormula(questionWithoutSpace);
    const hint = formatString(hintFormat, [questionWithoutSpace, addtionFormula]);

    if (inputValue == "") {
        instructionArea.innerHTML = hint + "<span class=\"warning\">" + questionWithoutSpace + " の10進法表記を入力してください。</span>";
    } else if (tesDecimalString(inputValue) == false) {
        instructionArea.innerHTML = hint + "<span class=\"warning\">\"" + inputValue + "\" は10進数ではありません。使えるのは半角の 0123456789 のみです。</span>";
    } else {

        const inputValueAsInt = parseInt(inputValue);
        const bin = inputValueAsInt.toString(sourceRadix);
        console.log("inputValue -> binary : " + bin);
        
        const outputArea = document.getElementById("outputArea");
        
        let historyClassName = ""
        if (bin == questionWithoutSpace) {
            historyClassName = "history-correct"
        } else {
            historyClassName = "history-wrong"
        }
        
        const spacePaddedInputValue = inputValue.padStart(digit, ' ').replace(' ', '&nbsp;');
        const msg1 = "<span class =\"" + historyClassName + "\">" + spacePaddedInputValue + "<sub>(" + destinationRadix + ")</sub> = " + bin + "<sub>(" + sourceRadix + ")</sub></span>";
        const msg2 = concatinateStrings(msg1, outputArea.innerHTML);
        outputArea.innerHTML = msg2;
        console.log(msg1);
        console.log(msg2);
        
        if (bin == questionWithoutSpace) {
            const nextIndexNumber = getRandomBetween(0, 7);
            const nextNumber = Math.pow(2, nextIndexNumber);
            const nextBin = nextNumber.toString(sourceRadix);
            const splitBin = splitBinaryStringBy(4, nextBin);
            questionSpan.innerText = splitBin;
            console.log(nextBin);
            console.log(splitBin);
            
            const nextAddtionFormula = writeAdditionFormula(nextBin);
            const nextHint = formatString(hintFormat, [nextBin, nextAddtionFormula]);
            console.log(nextHint);
            
            instructionArea.innerHTML = nextHint;
            numberInput.value = "";
        } else {
            instructionArea.innerHTML = hint;
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
document.getElementById('instructionArea').innerHTML = hint;
