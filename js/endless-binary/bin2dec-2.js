// taidalab Version 1.4.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function checkAnswerb2d2 (answer, question, last_answers) {
    // Getting the user input.
    const numberInput = document.getElementById('numberInput');
    const inputValue = escapeHtml(numberInput.value);
    console.log('inputValue : ' + inputValue);
    
    numberInput.focus();

    // Making an error message.
    const questionWithoutSpace = question.replace(' ', '');
    const errorMessage = newErrorMessageDec(questionWithoutSpace, inputValue);
    document.getElementById('errorArea').innerHTML = errorMessage;
    
    // Exits when the input was invalid.
    if (errorMessage) {
        return;
    }
    
    const inputValueAsInt = parseInt(inputValue);
    
    // Converting the input in order to use in the history message.
    const digit = 3;
    const spacePaddedInputValue = inputValue.padStart(digit, ' ').replace(' ', '&nbsp;');
    
    const sourceRadix = 2;
    const bin = inputValueAsInt.toString(sourceRadix);
    console.log('inputValue -> binary : ' + bin);

    // Making a new history and updating the history with the new one.
    const destinationRadix = 10;
    const outputArea = document.getElementById('outputArea');
    const currentHistoryMessage = newHistory((inputValueAsInt == answer), spacePaddedInputValue, destinationRadix, bin, sourceRadix);
    const historyMessage = concatinateStrings(currentHistoryMessage, outputArea.innerHTML);
    console.log(currentHistoryMessage);
    console.log(historyMessage);
    outputArea.innerHTML = historyMessage;
    
    if (inputValueAsInt == answer) {
        // Making the next question.
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

        // Updating `lastAnswers`.
        // These numbers will not be used for the next question.
        const answersToKeep = 10;
        const lastAnswers = [nextNumber].concat(last_answers).slice(0, answersToKeep);

        // Setting the next answer to the check button.
        document.getElementById('submitButton').onclick = function() { checkAnswerb2d2(nextNumber, splitBin, lastAnswers); return false; };
    }
}


function initBin2Dec2 () {
    // Initialization.
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
