// taidalab Version 1.5.1
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function checkAnswerd2b1 (answer, last_answers) {
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
    const destinationRadix = 2;
    const zeroPaddedBin = bin.padStart(binaryDigit, '0');
    const taggedBin = colorLeadingZero(zeroPaddedBin);
    const dec = parseInt(bin, destinationRadix);
    console.log(taggedBin);
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
        let nextBin = 0;
        
        console.log(last_answers);
        do {

            do {
                nextNumber = getRandomBetween(0, 192);
                nextBin = nextNumber.toString(2);
            } while (countOneBit(nextBin) != 2);
            console.log(nextNumber);
            console.log(last_answers.some((element) => element == nextNumber));
        } while (last_answers.some((element) => element == nextNumber));
        
        const quotientsAndRemainders = repeatDivision(nextNumber, 2);
        console.log(quotientsAndRemainders);
        
        const powerOfTwos = devideIntoPowerOfTwo(nextNumber);
        console.log(powerOfTwos);

        const nextHint = newHintDec2Bin(nextNumber, quotientsAndRemainders, powerOfTwos);
        console.log(nextHint);
        
        document.getElementById('questionSpan').innerText = nextNumber;
        document.getElementById('hintArea').innerHTML = nextHint;
        
        numberInput.value = '';

        // Updating `lastAnswers`.
        // These numbers will not be used for the next question.
        const answersToKeep = 10;
        const lastAnswers = [nextNumber].concat(last_answers).slice(0, answersToKeep);

        // Setting the next answer to the check button.
        document.getElementById('submitButton').onclick = function() { checkAnswerd2b1(nextNumber, lastAnswers); return false; };
    }
}


function countOneBit (binaryString) {
    const regex = /1/g;
    const res = binaryString.match(regex);
    if (res == null) {
        return 0;
    } else {
        return res.length;
    }
}


function devideIntoPowerOfTwo (number) {
    function getMaxPowerOfTwo (number) {
        const indexNumber = Math.floor(Math.log(number) / Math.log(2));
        return Math.pow(2, indexNumber);
    }

    function loop (acc, number) {
        if (number == 0) {
            return acc;
        } else if (number == 1) {
            return acc.concat([1]);
        } else {
            const max = getMaxPowerOfTwo(number);
            return loop(acc.concat([max]), number - max);
        }
    }

    return loop([], number);
}


function repeatDivision (dividend, divisor) {
    const quotient = parseInt(dividend / divisor);
    const remainder = dividend - (quotient * divisor);
    if (quotient < divisor) {
        return [[quotient, remainder]];
    } else {
        return [[quotient, remainder]].concat(repeatDivision(quotient, divisor));
    }
}


function newColumnAddition (quotients_and_remainders) {
    const lengthMinusOne = quotients_and_remainders.length - 1;
    return quotients_and_remainders.slice(0, lengthMinusOne).reduceRight(
        (prev, curr) => '2<span class="column-addition-row">' + curr[0].toString().padStart(3, ' ').replace(' ', '&nbsp;') + '</span>...' + curr[1] + '<br>' + prev,
        '<span class="column-addition-row-last">' + quotients_and_remainders[lengthMinusOne][0].toString().padStart(5, ' ').replace(/ /g, '&nbsp;') + '</span>...' + quotients_and_remainders[lengthMinusOne][1]
        );
}


function newHintDec2Bin (number, quotients_and_remainders, power_of_twos) {
    return '<details><summary>?????????: </summary>' + '<h2>????????? 1</h2>' + newHintRepeatDivision(number, quotients_and_remainders) + '<h2>????????? 2</h2>' + newHintRepeatAddition(number, power_of_twos) + '</details>';
}


function newHintRepeatDivision (number, quotients_and_remainders) {
    const firstRow = '2<span class="column-addition-row">' + number.toString().padStart(3, ' ').replace(' ', '&nbsp;') + '</span>';
    const columnAddition = newColumnAddition(quotients_and_remainders);

    const msg01 = '<div class="history-indented">';
    const msg02 = '<p>10?????????????????? 1 ??????????????? 2 ????????????????????????<br>';
    const msg03 = '?????????????????????????????????????????????????????????<br>';
    const msg04 = '?????????????????????????????????????????????2????????????????????????</p>';
    const msg05 = '</div>';
    const msg06 = '<div class="history-indented column-addition-area">';
    const msg07 = '</div>';

    return msg01 + msg02 + msg03 + msg04 + msg05 + msg06 + firstRow + '<br>' + columnAddition + msg07;
}


function newHintRepeatAddition (number, power_of_twos) {
    const hintFormat01 = '<p class="history-indented">';
    const hintFormat02 = '{0}<sub>(10)</sub> ??????????????????2???????????? {1}<sub>(10)</sub><br>';
    const hintFormat03 = '{0}<sub>(10)</sub> - {1}<sub>(10)</sub> = {2}<sub>(10)</sub><br>';
    const hintFormat04 = '{2}<sub>(10)</sub> ??????????????????2???????????? {3}<sub>(10)</sub><br>';
    const hintFormat05 = '{2}<sub>(10)</sub> - {3}<sub>(10)</sub> = {4}<sub>(10)</sub><br>';
    const hintFormat06 = '????????????{0}<sub>(10)</sub> = {1}<sub>(10)</sub> + {3}<sub>(10)</sub><br>';
    const hintFormat07 = '????????????{0}<sub>(10)</sub> = 2<sup>{5}</sup><sub>(10)</sub> + 2<sup>{6}</sup><sub>(10)</sub>';
    const hintFormat08 = '</p>';
    const hintFormat = hintFormat01 + hintFormat02 + hintFormat03 + hintFormat04 + hintFormat05 + hintFormat06 + hintFormat07 + hintFormat08;
    const hint = formatString(hintFormat, [number, power_of_twos[0], number - power_of_twos[0], power_of_twos[1], number - power_of_twos[0] - power_of_twos[1], Math.floor(Math.log(power_of_twos[0]) / Math.log(2)), Math.floor(Math.log(power_of_twos[1]) / Math.log(2))]);
    console.log(hint);
    return hint;
}


function initDec2Bin1 () {
    // Initialization.
    let initNumber = 0;
    let initBin = '';

    do {
        initNumber = getRandomBetween(0, 192);
        initBin = initNumber.toString(2);
    } while (countOneBit(initBin) != 2);

    const quotientsAndRemainders = repeatDivision(initNumber, 2);
    const powerOfTwos = devideIntoPowerOfTwo(initNumber);
    console.log(initNumber);
    console.log(quotientsAndRemainders);
    console.log(powerOfTwos);

    const sourceRadix = 10;
    const destinationRadix = 2;

    document.getElementById('questionSpan').innerHTML = initNumber;
    document.getElementById('srcRadix').innerHTML = '(' + sourceRadix + ')';
    document.getElementById('dstRadix').innerHTML = destinationRadix;
    document.getElementById('binaryRadix').innerHTML = '<sub>(' + destinationRadix + ')</sub>';
    document.getElementById('hintArea').innerHTML = newHintDec2Bin(initNumber, quotientsAndRemainders, powerOfTwos);
    document.getElementById('submitButton').onclick = function() { checkAnswerd2b1(initNumber, [initNumber]); return false; };
}
