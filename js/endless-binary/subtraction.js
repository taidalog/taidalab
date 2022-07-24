// taidalab Version 1.4.0
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function checkAnswerSub(answer, num1, num2, last_answers) {
    // Getting the user input.
    const numberInput = document.getElementById('numberInput');
    const bin = escapeHtml(numberInput.value);
    console.log(bin);
    
    numberInput.focus();

    const sourceRadix = 2;
    
    // Making an error message.
    let errorMessage = '';
    if (bin == '') {
        errorMessage = '<span class="warning">' + num1.toString(sourceRadix) + '<small>(' + sourceRadix + ')</small>' + num2.toString(sourceRadix)+ '<small>(' + sourceRadix + ')</small>' + ' の2進法表記を入力してください。</span>';
    } else if (testBinaryString(bin) == false) {
        errorMessage = '<span class="warning">"' + bin + '" は2進数ではありません。使えるのは半角の 0 と 1 のみです。</span>';
    }

    const errorArea = document.getElementById('errorArea');
    errorArea.innerHTML = errorMessage;
    
    // Exits when the input was invalid.
    if (errorMessage) {
        return;
    }

    // Converting the input in order to use in the history message.
    const digit = 8;
    const zeroPaddedBin = bin.padStart(digit, '0');
    const taggedBin = colorLeadingZero(zeroPaddedBin);
    const dec = parseInt(bin, sourceRadix);
    console.log(taggedBin);
    console.log(dec);
    
    // Making a new history and updating the history with the new one.
    const destinationRadix = 10;
    const outputArea = document.getElementById('outputArea');
    const currentHistoryMessage = newHistory((dec == answer), taggedBin, sourceRadix, dec, destinationRadix);
    const historyMessage = concatinateStrings(currentHistoryMessage, outputArea.innerHTML);
    console.log(currentHistoryMessage);
    console.log(historyMessage);
    outputArea.innerHTML = historyMessage;
    
    if (dec == answer) {
        // Making the next question.
        let numbers = [];

        console.log(last_answers);
        do {
            numbers = newNumbersSub();
            console.log(numbers[0]);
            console.log(numbers[1]);
            console.log(last_answers.some((element) => element == numbers[0] || element == numbers[1]));
        } while (last_answers.some((element) => element == numbers[0] || element == numbers[1]));

        console.log(numbers[0]);
        console.log(numbers[1]);
        console.log(numbers[0] - numbers[1]);
        console.log((numbers[0] - numbers[1]).toString(sourceRadix));
        setColumnAddition(numbers[0], numbers[1]);

        const nextHint = newHintSub();
        document.getElementById('hintArea').innerHTML = nextHint;
        console.log(nextHint);

        numberInput.value = '';

        // Updating `lastAnswers`.
        // These numbers will not be used for the next question.
        const answersToKeep = 20;
        const lastAnswers = [numbers[0], numbers[1]].concat(last_answers).slice(0, answersToKeep);

        // Setting the next answer to the check button.
        document.getElementById('submitButton').onclick = function () { checkAnswerSub((numbers[0] - numbers[1]), numbers[0], numbers[1], lastAnswers); return false; };
    }
}


function newNumbersSub () {
    const number1 = getRandomBetween(1, 255);
    console.log('number1: ' + number1);

    let number2 = 0;

    do {
        number2 = getRandomBetween(1, 255);
        console.debug('number1 == number2: ' + (number1 <= number2) + '\t(number1 & number2) == 0: ' + ((number1 & number2) == 0));
    } while ((number1 == number2) || ((number1 & number2) == 0));

    console.log(number2);

    if (number1 > number2) {
        return [number1, number2];
    } else {
        return [number2, number1];
    }
}


function newHintSub () {
    const hintFormat01 = '<details><summary>ヒント: </summary>';
    const hintFormat02 = '<p class="history-indented">';
    const hintFormat03 = '10進数の筆算と同じように、右端から上下の数で引き算をします。<br><br>';
    const hintFormat04 = '0<sub>(2)</sub> - 0<sub>(2)</sub> = 0<sub>(2)</sub><br>';
    const hintFormat05 = '1<sub>(2)</sub> - 1<sub>(2)</sub> = 0<sub>(2)</sub><br>';
    const hintFormat06 = '1<sub>(2)</sub> - 0<sub>(2)</sub> = 1<sub>(2)</sub><br><br>';
    const hintFormat07 = '0<sub>(2)</sub> - 1<sub>(2)</sub> をする時は、<br>';
    const hintFormat08 = 'ひとつ左の桁から1を2つもらってきます。<br>';
    const hintFormat09 = '</p>';
    const hintFormat10 = '</details>';
    const hint = hintFormat01 + hintFormat02 + hintFormat03 + hintFormat04 + hintFormat05 + hintFormat06 + hintFormat07 + hintFormat08 + hintFormat09 + hintFormat10;
    return hint;
}


function initSubtraction () {
    // Initialization.
    const sourceRadix = 2;
    const destinationRadix = 2;
    const hint = newHintSub();
    
    document.getElementById('numberInput').className = 'number-input question-number eight-digit';
    document.getElementById('operator').innerText = '-)';
    document.getElementById('firstRowSrcRadix').innerHTML = '(' + sourceRadix + ')';
    document.getElementById('secondRowSrcRadix').innerHTML = '(' + sourceRadix + ')';
    document.getElementById('binaryRadix').innerHTML = '<sub>(' + destinationRadix + ')</sub>';
    document.getElementById('hintArea').innerHTML = hint;

    const numbers = newNumbersSub();
    console.log(numbers[0]);
    console.log(numbers[1]);
    console.log(numbers[0] - numbers[1]);
    console.log((numbers[0] - numbers[1]).toString(sourceRadix));
    setColumnAddition(numbers[0], numbers[1]);

    document.getElementById('submitButton').onclick = function () { checkAnswerSub((numbers[0] - numbers[1]), numbers[0], numbers[1], [numbers[0], numbers[1]]); return false; };
}
