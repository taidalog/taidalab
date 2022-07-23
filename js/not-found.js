// taidalab Version 1.1.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function checkAnswer (answer) {
    const errorArea = document.getElementById('errorArea');
    errorArea.innerHTML = '';
    
    const numberInput = document.getElementById('numberInput');
    const bin = escapeHtml(numberInput.value);
    console.log(bin);
    
    if (bin == '') {
        errorArea.innerHTML = '<span class="warning">' + answer + ' の2進法表記を入力してください。</span>';
    } else if (testBinaryString(bin) == false) {
        errorArea.innerHTML = '<span class="warning">"' + bin + '" は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>';
    } else {
        
        const binaryDigit = 9;
        const destinationRadix = 2;
        const zeroPaddedBin = bin.padStart(binaryDigit, '0');
        const taggedBin = colorLeadingZero(zeroPaddedBin);
        const dec = parseInt(bin, destinationRadix);
        console.log(taggedBin);
        console.log(dec);
        
        let historyClassName = '';
        if (dec == answer) {
            historyClassName = 'history-correct';
        } else {
            historyClassName = 'history-wrong';
        }
        
        const decimalDigit = 3;
        const spacePaddedDec = dec.toString().padStart(decimalDigit, ' ').replace(' ', '&nbsp;');
        
        const sourceRadix = 10;
        const outputArea = document.getElementById('outputArea');
        const msg1 = '<span class ="' + historyClassName + '">' + taggedBin + '<sub>(' + destinationRadix + ')</sub> = ' + spacePaddedDec + '<sub>(' + sourceRadix + ')</sub></span>';
        const msg2 = concatinateStrings(msg1, outputArea.innerHTML);
        outputArea.innerHTML = msg2;
        console.log(msg1);
        console.log(msg2);
        
        if (dec == answer) {
            const initialObject = newInitObject('/');
            window.history.replaceState(null, null, initialObject.pathname);
            initPage(initialObject);
        }
    }
    
    numberInput.focus();
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
