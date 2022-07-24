// taidalab Version 1.4.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function checkAnswerCmp (question, answer, last_answers, hint_format) {
    const numberInput = document.getElementById('numberInput');
    const inputValue = escapeHtml(numberInput.value);
    console.log('inputValue : ' + inputValue);

    let errorMessage = '';
    if (inputValue == '') {
        const questionWithoutSpace = question.replace(' ', '');
        errorMessage = '<span class="warning">' + questionWithoutSpace + ' の補数を、2進法表記で入力してください。</span>';
    } else if (testBinaryString(inputValue) == false) {
        errorMessage = '<span class="warning">"' + inputValue + '" は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>';
    }

    const errorArea = document.getElementById('errorArea');
    errorArea.innerHTML = errorMessage;
    
    if (errorMessage) {
        return;
    }

    const inputValueAsInt = parseInt(inputValue, 2);
    
    let historyClassName = '';
    if (inputValueAsInt == answer) {
        historyClassName = 'history-correct';
    } else {
        historyClassName = 'history-wrong';
    }
    
    const digit = 4;
    const zeroPaddedInputValue = inputValue.padStart(digit, '0');
    const taggedInputValue = colorLeadingZero(zeroPaddedInputValue);
    const sourceRadix = 2;
    const bin = inputValueAsInt.toString(sourceRadix);
    
    const destinationRadix = 10;
    const outputArea = document.getElementById('outputArea');
    const msg1 = '<span class ="' + historyClassName + '">' + taggedInputValue + '<sub>(' + sourceRadix + ')</sub></span>';
    const msg2 = concatinateStrings(msg1, outputArea.innerHTML);
    outputArea.innerHTML = msg2;
    console.log(msg1);
    console.log(msg2);
    
    if (inputValueAsInt == answer) {
        
        let nextNumber = 0;
        
        console.log(last_answers);
        do {
            nextNumber = getRandomBetween(1, 15);
            console.log(nextNumber);
            console.log(last_answers.some((element) => element == nextNumber));
        } while (last_answers.some((element) => element == nextNumber));
        
        const nextAnswer = 16 - nextNumber;
        const nextBin = nextNumber.toString(sourceRadix).padStart(4, '0');
        console.log(nextAnswer);
        console.log(nextBin);
        
        document.getElementById('questionSpan').innerText = nextBin;
        
        const reversedBin = [...nextBin].map(x => x === "1" ? "0" : "1").join('');
        console.log(reversedBin);

        const nextHint = formatString(hint_format, [nextBin, reversedBin]);
        const hintArea = document.getElementById('hintArea');
        hintArea.innerHTML = nextHint;
        console.log(nextHint);
        
        numberInput.value = '';

        const answersToKeep = 8;
        const lastAnswers = [nextNumber].concat(last_answers).slice(0, answersToKeep);
        document.getElementById('submitButton').onclick = function() { checkAnswerCmp(nextBin, nextAnswer, lastAnswers, hint_format); return false; };
    }
}

function initComplement () {
    // initialization
    const sourceRadix = 2;
    const destinationRadix = 2;

    const initNumber = getRandomBetween(1, 15);
    const initAnswer = 16 - initNumber;
    const initBin = initNumber.toString(sourceRadix).padStart(4, '0');
    console.log(initNumber);
    console.log(initAnswer);
    console.log(initBin);

    const reversedBin = [...initBin].map(x => x === "1" ? "0" : "1").join('');
    console.log(reversedBin);

    const hintFormat01 = '<details><summary>ヒント:</summary>';
    const hintFormat02 = '<p class="history-indented">2進数の補数（2の補数）は、';
    const hintFormat03 = 'ある2進数の 0 と 1 を反転させて１を足したものです。<br>';
    const hintFormat04 = '{0} の 0 と 1 を反転させると<br>';
    const hintFormat05 = '{1} になります。<br>';
    const hintFormat06 = 'これに 1 を足したものが {0} の補数（2の補数）です。</p>';
    const hintFormat07 = '</details>';
    const hintFormat = hintFormat01 + hintFormat02 + hintFormat03 + hintFormat04 + hintFormat05 + hintFormat06 + hintFormat07;
    const hint = formatString(hintFormat, [initBin, reversedBin]);

    document.getElementById('questionSpan').innerText = initBin;
    document.getElementById('srcRadix').innerHTML = '(' + sourceRadix + ')';
    document.getElementById('binaryRadix').innerHTML = '<sub>(' + destinationRadix + ')</sub>';
    document.getElementById('hintArea').innerHTML = hint;
    document.getElementById('submitButton').onclick = function() { checkAnswerCmp(initBin, initAnswer, [initNumber], hintFormat); return false; };
}
