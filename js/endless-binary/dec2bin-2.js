// taidalab Version 1.1.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function checkAnswerd2b2 (answer, last_answers) {
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
        
        const binaryDigit = 8;
        const destinationRadix = 2;
        const zeroPaddedBin = bin.padStart(binaryDigit, '0');
        const taggedBin = colorLeadingZero(zeroPaddedBin);
        const dec = parseInt(bin, destinationRadix);
        console.log(taggedBin);
        console.log(dec);
        
        const outputArea = document.getElementById('outputArea');
        
        let historyClassName = ''
        if (dec == answer) {
            historyClassName = 'history-correct'
        } else {
            historyClassName = 'history-wrong'
        }
        
        const decimalDigit = 3;
        const spacePaddedDec = dec.toString().padStart(decimalDigit, ' ').replace(' ', '&nbsp;');
        
        const sourceRadix = 10;
        const msg1 = '<span class ="' + historyClassName + '">' + taggedBin + '<sub>(' + destinationRadix + ')</sub> = ' + spacePaddedDec + '<sub>(' + sourceRadix + ')</sub></span>';
        const msg2 = concatinateStrings(msg1, outputArea.innerHTML);
        outputArea.innerHTML = msg2;
        console.log(msg1);
        console.log(msg2);
        
        if (dec == answer) {
            let nextNumber = 0;

            console.log(last_answers);
            do {
                nextNumber = getRandomBetween(0, 255);
                console.log(nextNumber);
                console.log(last_answers.some((element) => element == nextNumber));
            } while (last_answers.some((element) => element == nextNumber));

            document.getElementById('questionSpan').innerText = nextNumber;
            numberInput.value = '';

            const answersToKeep = 10;
            const lastAnswers = [nextNumber].concat(last_answers).slice(0, answersToKeep);
            document.getElementById('submitButton').onclick = function() { checkAnswerd2b2(nextNumber, lastAnswers); return false; };
        }
    }
    
    numberInput.focus();
}


function initDec2Bin2 () {
    // initialization
    const initNumber = getRandomBetween(0, 255);
    const sourceRadix = 10;
    const destinationRadix = 2;
    
    document.getElementById('questionSpan').innerHTML = initNumber;
    document.getElementById('srcRadix').innerHTML = '(' + sourceRadix + ')';
    document.getElementById('dstRadix').innerHTML = destinationRadix;
    document.getElementById('binaryRadix').innerHTML = '<sub>(' + destinationRadix + ')</sub>';
    document.getElementById('submitButton').onclick = function() { checkAnswerd2b2(initNumber, [initNumber]); return false; };
}
