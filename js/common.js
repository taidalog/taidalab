// taidalab Version 0.7.1
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
function getRandomBetween (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function testBinaryString (binary_string) {
    const reCorrect = /^[01]+$/;
    return reCorrect.test(binary_string)
}

function tesDecimalString (decimal_string) {
    const reCorrect = /^[0-9]+$/;
    return reCorrect.test(decimal_string)
}

function concatinateStrings (new_string, existing_string) {
    if (existing_string == "" || existing_string == null) {
        return new_string
    } else {
        return new_string + "<br>" + existing_string
    }
}

function formatString (format, replacements) {
    let acc = format;
    let placeholder = new RegExp ("", "");
    for (let i = 0; i < replacements.length; i++) {
        placeholder = new RegExp ("\\{" + i + "\\}", "g");
        acc = acc.replace(placeholder, replacements[i]);
    }
    return acc;
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

function colorLeadingZero (str) {
    const reLeadingZero = /^0+/;
    if (str.match(reLeadingZero == false)) {
        return str;
    }
    
    const leadingZero = str.match(reLeadingZero);
    const leadingZeroInTag = "<span class=\"zero-grey\">" + leadingZero + "</span>";
    return str.replace(leadingZero, leadingZeroInTag);
}
