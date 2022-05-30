// copyright 2022 taidalog
function main() {
    $('#check_button').click(function () {
        const sourceRadix = 10;
        const destinationRadix = 2;
        const digit = 8;

        const questionBox = $('#question');
        const question = questionBox.text();
        console.log(question);

        const nunmberBox = document.getElementById("nunmber_input");
        const bin = escapeHtml(nunmberBox.value);
        const binWithLeadingZero = colorLeadingZero(putLeadingZero(bin, digit));
        const dec = parseInt(bin, destinationRadix);
        console.log(bin);
        console.log(binWithLeadingZero);
        console.log(dec);

        const outputArea = document.getElementById("output");

        let resultClassName = ""
        if (dec == question) {
            resultClassName = "result-correct"
        } else {
            resultClassName = "result-wrong"
        }

        const msg1 = "<span class =\"" + resultClassName + "\">" + bin + "<sub>(" + destinationRadix + ")</sub> is " + dec + "<sub>(" + sourceRadix + ")</sub></span>";
        const msg2 = concatinateStrings(msg1, outputArea.innerHTML);
        $('#output').html(msg2);
        console.log(msg1);
        console.log(msg2);

        if (dec == question) {
            const nextNumber = getRandomByte();
            questionBox.text(getRandomByte());
            console.log(nextNumber);
            nunmberBox.value = "";
        }
        
        nunmberBox.focus();
    });
}

function getRandomByte() {
    return Math.floor(Math.random() * 256);
}

function concatinateStrings (new_string, existing_string) {
    if (new_string == "" || new_string == null) {
        return new_string
    } else {
        return new_string + "<br>" + existing_string
    }
}

function escapeHtml (target_string) {
    let result = target_string;
    result = result.replace(/&/g, '&amp;');
    result = result.replace(/</g, '&lt;');
    result = result.replace(/>/g, '&gt;');
    result = result.replace(/"/g, '&quot;');
    result = result.replace(/'/g, '&#39;');
    return result;
}

function putLeadingZero (str, digit) {
    const zeroCount = digit - str.length;
    if (zeroCount >= 0) {
        return '0'.repeat(digit - str.length) + str;
    } else {
        return str
    }
}

function colorLeadingZero (str) {
    const reLeadingZero = /^0+/;
    if (str.match(reLeadingZero == false)) {
        return str;
    }
    
    const leadingZero = str.match(reLeadingZero);
    const leadingZeroInTag = "<span class=\"zero-grey\">" + leadingZero + "</span>";
    return str.replace(leadingZero, leadingZeroInTag);
}

$(function () {
    $('#question').text(getRandomByte());
    main();
});