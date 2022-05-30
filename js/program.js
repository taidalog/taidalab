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
        const bin = nunmberBox.value;
        const binWithLeadingZero = colorLeadingZero(putLeadingZero(bin, digit));
        const dec = parseInt(bin, destinationRadix);
        console.log(bin);
        console.log(binWithLeadingZero);
        console.log(dec);

        const outputArea = document.getElementById("output");

        if (dec == question) {
            const msg1 = "<span class =\"result-correct\">" + binWithLeadingZero + "<sub>(" + destinationRadix + ")</sub> is " + dec + "<sub>(" + sourceRadix + ")</sub></span>";
            const msg2 = concatinateStrings(msg1, outputArea.innerHTML);
            $('#output').html(msg2);
            console.log(msg1);
            console.log(msg2);
            const nextNumber = getRandomByte();
            questionBox.text(getRandomByte());
            console.log(nextNumber);
            nunmberBox.value = "";
        } else {
            const msg1 = "<span class =\"result-wrong\">" + binWithLeadingZero + "<sub>(" + destinationRadix + ")</sub> is " + dec + "<sub>(" + sourceRadix + ")</sub></span>";
            const msg2 = concatinateStrings(msg1, outputArea.innerHTML);
            $('#output').html(msg2);
            console.log(msg1);
            console.log(msg2);
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