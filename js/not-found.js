// taidalab Version 1.4.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function checkAnswer (answer) {
    const numberInput = document.getElementById('numberInput');
    const bin = escapeHtml(numberInput.value);
    console.log(bin);
    
    numberInput.focus();

    const errorMessage = newErrorMessageBin(answer, bin);
    const errorArea = document.getElementById('errorArea');
    errorArea.innerHTML = errorMessage;
    
    if (errorMessage) {
        return;
    }
    
    const binaryDigit = 9;
    const destinationRadix = 2;
    const zeroPaddedBin = bin.padStart(binaryDigit, '0');
    const taggedBin = colorLeadingZero(zeroPaddedBin);
    const dec = parseInt(bin, destinationRadix);
    console.log(taggedBin);
    console.log(dec);
    
    const decimalDigit = 3;
    const spacePaddedDec = dec.toString().padStart(decimalDigit, ' ').replace(' ', '&nbsp;');
    
    const sourceRadix = 10;
    const outputArea = document.getElementById('outputArea');
    const currentHistoryMessage = newHistory((dec == answer), taggedBin, sourceRadix, spacePaddedDec, destinationRadix);
    const historyMessage = concatinateStrings(currentHistoryMessage, outputArea.innerHTML);
    console.log(currentHistoryMessage);
    console.log(historyMessage);
    outputArea.innerHTML = historyMessage;
    
    if (dec == answer) {
        const initialObject = newInitObject('/');
        window.history.replaceState(null, null, initialObject.pathname);
        initPage(initialObject);
    }
}


function initNotFound () {
    // initialization
    const initNumber = 404;
    const sourceRadix = 10;
    const destinationRadix = 2;

    document.getElementById('questionSpan').innerHTML = initNumber;
    document.getElementById('srcRadix').innerHTML = '(' + sourceRadix + ')';
    document.getElementById('dstRadix').innerHTML = destinationRadix;
    document.getElementById('binaryRadix').innerHTML = '<sub>(' + destinationRadix + ')</sub>';
    document.getElementById('submitButton').onclick = function() { checkAnswer(initNumber); return false; };
}
