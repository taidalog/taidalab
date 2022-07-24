// taidalab Version 1.4.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function checkAnswerPot1 (answer, hint_format, last_answers) {
    const numberInput = document.getElementById('numberInput');
    const userInput = escapeHtml(numberInput.value);
    console.log(userInput);

    numberInput.focus();

    const hintArea = document.getElementById('hintArea');
    
    const errorMessage = newErrorMessageBin(answer, userInput);
    const errorArea = document.getElementById('errorArea');
    errorArea.innerHTML = errorMessage;
    
    if (errorMessage) {
        return;
    }
    
    const binaryDigit = 8;
    const zeroPaddedBin = userInput.padStart(binaryDigit, '0');
    const taggedBin = colorLeadingZero(zeroPaddedBin);
    console.log(zeroPaddedBin);
    console.log(taggedBin);
    
    const destinationRadix = 2;
    const userInputToDestRadix = parseInt(userInput, destinationRadix);
    console.log(userInputToDestRadix);
    
    const decimalDigit = 3;
    const spacePaddedDec = userInputToDestRadix.toString().padStart(decimalDigit, ' ').replace(' ', '&nbsp;');
    
    const sourceRadix = 10;
    const outputArea = document.getElementById('outputArea');
    const currentHistoryMessage = newHistory((userInputToDestRadix == answer), taggedBin, destinationRadix, spacePaddedDec, sourceRadix);
    const historyMessage = concatinateStrings(currentHistoryMessage, outputArea.innerHTML);
    console.log(currentHistoryMessage);
    console.log(historyMessage);
    outputArea.innerHTML = historyMessage;
    
    if (userInputToDestRadix == answer) {
        let nextIndexNumber = 0;
        let nextAnswer = 0;

        console.log(last_answers);
        do {
            nextIndexNumber = getRandomBetween(0, 7);
            nextAnswer = Math.pow(2, nextIndexNumber);
            console.log(nextAnswer);
            console.log(last_answers.some((element) => element == nextAnswer));
        } while (last_answers.some((element) => element == nextAnswer));
        
        const nextHint = formatString(hint_format, [nextAnswer, nextIndexNumber]);
        console.log(nextHint);
        
        document.getElementById('questionSpan').innerText = nextAnswer;
        hintArea.innerHTML = nextHint;
        numberInput.value = '';

        const answersToKeep = 4;
        const lastAnswers = [nextAnswer].concat(last_answers).slice(0, answersToKeep);
        document.getElementById('submitButton').onclick = function() { checkAnswerPot1(nextAnswer, hint_format, lastAnswers); return false; };
    }
}


function initPowerOfTwo1 () {
    // initialization.
    const initIndexNumber = getRandomBetween(0, 7);
    const initAnswer = Math.pow(2, initIndexNumber);

    const hintFormat = '<details><summary>ヒント: </summary><p class="history-indented">{0}<sub>(10)</sub> = 2<sup>{1}</sup><br>10進法で2<sup>n</sup>になる数は、<br>2進法では1の後ろに0をn個つけます。</p></details>';
    const hint = formatString(hintFormat, [initAnswer, initIndexNumber]);

    const sourceRadix = 10;
    const destinationRadix = 2;

    document.getElementById('questionSpan').innerHTML = initAnswer;
    document.getElementById('srcRadix').innerHTML = '(' + sourceRadix + ')';
    document.getElementById('dstRadix').innerHTML = destinationRadix;
    document.getElementById('binaryRadix').innerHTML = '<sub>(' + destinationRadix + ')</sub>';
    document.getElementById('hintArea').innerHTML = hint;
    document.getElementById('submitButton').onclick = function() { checkAnswerPot1(initAnswer, hintFormat, [initAnswer]); return false;  };
}
