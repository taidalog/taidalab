// taidalab Version 1.1.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function checkAnswerb2d2 (answer, question, last_answers) {
    const errorArea = document.getElementById('errorArea');
    errorArea.innerHTML = '';
    
    const numberInput = document.getElementById('numberInput');
    const inputValue = escapeHtml(numberInput.value);
    console.log('inputValue : ' + inputValue);
    
    if (inputValue == '') {
        const questionWithoutSpace = question.replace(' ', '');
        errorArea.innerHTML = '<span class="warning">' + questionWithoutSpace + ' の10進法表記を入力してください。</span>';
    } else if (tesDecimalString(inputValue) == false) {
        errorArea.innerHTML = '<span class="warning">"' + inputValue + '" は10進数ではありません。使えるのは半角の 0123456789 のみです。</span>';
    } else {
        
        const inputValueAsInt = parseInt(inputValue);
        
        let historyClassName = '';
        if (inputValueAsInt == answer) {
            historyClassName = 'history-correct';
        } else {
            historyClassName = 'history-wrong';
        }
        
        const digit = 3;
        const spacePaddedInputValue = inputValue.padStart(digit, ' ').replace(' ', '&nbsp;');
        
        const sourceRadix = 2;
        const bin = inputValueAsInt.toString(sourceRadix);
        console.log('inputValue -> binary : ' + bin);

        const destinationRadix = 10;
        const outputArea = document.getElementById('outputArea');
        const msg1 = '<span class ="' + historyClassName + '">' + spacePaddedInputValue + '<sub>(' + destinationRadix + ')</sub> = ' + bin + '<sub>(' + sourceRadix + ')</sub></span>';
        const msg2 = concatinateStrings(msg1, outputArea.innerHTML);
        outputArea.innerHTML = msg2;
        console.log(msg1);
        console.log(msg2);
        
        if (inputValueAsInt == answer) {
            let nextNumber = 0;
            
            console.log(last_answers);
            do {
                nextNumber = getRandomBetween(0, 255);
                console.log(nextNumber);
                console.log(last_answers.some((element) => element == nextNumber));
            } while (last_answers.some((element) => element == nextNumber));

            const nextBin = nextNumber.toString(sourceRadix);
            const splitBin = splitBinaryStringBy(4, nextBin);
            console.log(nextBin);
            console.log(splitBin);
            
            document.getElementById('questionSpan').innerText = splitBin;

            numberInput.value = '';

            const answersToKeep = 10;
            const lastAnswers = [nextNumber].concat(last_answers).slice(0, answersToKeep);
            document.getElementById('submitButton').onclick = function() { checkAnswerb2d2(nextNumber, splitBin, lastAnswers); return false; };
        }
    }
    
    numberInput.focus();
}


function initBin2Dec2 () {
    // initialization
    const initNumber = getRandomBetween(0, 255);
    const initBin = initNumber.toString(2);
    const splitBin = splitBinaryStringBy(4,initBin);
    console.log(initNumber);
    console.log(initBin);
    console.log(splitBin);
    
    const sourceRadix = 2;
    const destinationRadix = 10;
    
    document.getElementById('questionSpan').innerText = splitBin;
    document.getElementById('binaryRadix').innerHTML = '<sub>(' + destinationRadix + ')</sub>';
    document.getElementById('srcRadix').innerHTML = '(' + sourceRadix + ')';
    document.getElementById('dstRadix').innerHTML = destinationRadix;
    document.getElementById('submitButton').onclick = function() { checkAnswerb2d2(initNumber, splitBin, [initNumber]); return false; };
}
