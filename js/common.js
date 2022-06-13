// taidalab Version 0.7.1
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function getRandomByte() {
    return Math.floor(Math.random() * 256);
}

function getRandomBetween (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function testBinaryString (binary_string) {
    const reCorrect = /^[01]+$/;
    return reCorrect.test(binary_string)
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
