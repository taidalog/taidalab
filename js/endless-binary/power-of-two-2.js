// taidalab Version 1.5.1
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function checkAnswerPot2 (answer, hint_format, last_answers) {
    // Getting the user input.
    const numberInput = document.getElementById('numberInput');
    const bin = escapeHtml(numberInput.value);
    console.log(bin);

    numberInput.focus();

    // Making an error message.
    const errorMessage = newErrorMessageBin(answer, bin);
    document.getElementById('errorArea').innerHTML = errorMessage;
    
    // Exits when the input was invalid.
    if (errorMessage) {
        return;
    }

    // Converting the input in order to use in the history message.
    const binaryDigit = 8;
    const zeroPaddedBin = bin.padStart(binaryDigit, '0');
    const taggedBin = colorLeadingZero(zeroPaddedBin);
    console.log(taggedBin);
    
    const destinationRadix = 2;
    const dec = parseInt(bin, destinationRadix);
    console.log(dec);
    
    const decimalDigit = 3;
    const spacePaddedDec = dec.toString().padStart(decimalDigit, ' ').replace(' ', '&nbsp;');
    
    // Making a new history and updating the history with the new one.
    const sourceRadix = 10;
    const outputArea = document.getElementById('outputArea');
    const currentHistoryMessage = newHistory((dec == answer), taggedBin, destinationRadix, spacePaddedDec, sourceRadix);
    const historyMessage = concatinateStrings(currentHistoryMessage, outputArea.innerHTML);
    console.log(currentHistoryMessage);
    console.log(historyMessage);
    outputArea.innerHTML = historyMessage;
    
    if (dec == answer) {
        // Making the next question.
        let nextNumber = 0;
        let nextIndexNumber = 0;
        
        console.log(last_answers);
        do {
            nextIndexNumber = getRandomBetween(1, 8);
            nextNumber = Math.pow(2, nextIndexNumber) - 1;
            console.log(nextNumber);
            console.log(last_answers.some((element) => element == nextNumber));
        } while (last_answers.some((element) => element == nextNumber));
        
        document.getElementById('questionSpan').innerText = nextNumber;
        
        const nextHint = formatString(hint_format, [nextNumber, nextNumber + 1, nextIndexNumber]);
        document.getElementById('hintArea').innerHTML = nextHint;
        console.log(nextHint);

        numberInput.value = '';

        // Updating `lastAnswers`.
        // These numbers will not be used for the next question.
        const answersToKeep = 4;
        const lastAnswers = [nextNumber].concat(last_answers).slice(0, answersToKeep);

        // Setting the next answer to the check button.
        document.getElementById('submitButton').onclick = function() { checkAnswerPot2(nextNumber, hint_format, lastAnswers); return false;  };
    }
}


function initPowerOfTwo2 () {
    // Initialization.
    const initIndexNumber = getRandomBetween(1, 8);
    const initNumber = Math.pow(2, initIndexNumber) - 1;
    const hintFormat = '<details><summary>ヒント: </summary><span class="history-indented">{0}<sub>(10)</sub> = {1}<sub>(10)</sub> - 1<sub>(10)</sub> = 2<sup>{2}</sup> - 1<sub>(10)</sub></span></details>';
    const hint = formatString(hintFormat, [initNumber, initNumber + 1, initIndexNumber]);

    const sourceRadix = 10;
    const destinationRadix = 2;

    document.getElementById('questionSpan').innerHTML = initNumber;
    document.getElementById('srcRadix').innerHTML = '(' + sourceRadix + ')';
    document.getElementById('dstRadix').innerHTML = destinationRadix;
    document.getElementById('binaryRadix').innerHTML = '<sub>(' + destinationRadix + ')</sub>';
    document.getElementById('hintArea').innerHTML = hint;
    document.getElementById('submitButton').onclick = function() { checkAnswerPot2(initNumber, hintFormat, [initNumber]); return false;  };
}
