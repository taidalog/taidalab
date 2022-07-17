// taidalab Version 0.12.1
// https://github.com/taidalog/taidalab
// Copyright (c) 2022 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
const mainContentHome = '\
<form class="button-container">\
    <button type="button" onclick="switchPage(\'/endless-dec2bin-1/\');" id="buttonESAD" class="btn button-esad">10進数→2進数 (1)</button>\
    <button type="button" onclick="switchPage(\'/endless-dec2bin-2/\');" id="buttonED2B" class="btn button-ed2b">10進数→2進数 (2)</button>\
    <button type="button" onclick="switchPage(\'/endless-bin2dec-1/\');" id="buttonEB2D" class="btn button-eb2d">2進数→10進数 (1)</button>\
    <button type="button" onclick="switchPage(\'/endless-bin2dec-2/\');" id="buttonEB2D" class="btn button-eb2d">2進数→10進数 (2)</button>\
    <button type="button" onclick="switchPage(\'/endless-power-of-two-1/\');" id="buttonEPOT" class="btn button-epot">2のn乗</button>\
    <button type="button" onclick="switchPage(\'/endless-power-of-two-2/\');" id="buttonEPOTEX" class="btn button-epotex">2のn乗 - 1</button>\
    <button type="button" onclick="switchPage(\'/endless-addition/\');" id="buttonEBAD" class="btn button-ebad">加算</button>\
    <button type="button" onclick="switchPage(\'/endless-subtraction/\');" id="buttonEBSB" class="btn button-ebsb">減算</button>\
    <button type="button" onclick="switchPage(\'/endless-complement/\');" id="buttonECMP" class="btn button-ecmp">補数</button>\
</form>\
';

const footerContentHome = '\
<small class="footer-container">\
    <div class="item">&copy; 2022 taidalog</div>\
    <div class="item" id="versionNumber"></div>\
    <div class="item"><a href="javascript:switchPage(\'/about/\')">About</a></div>\
    <div class="item"><a href="javascript:switchPage(\'/terms/\')">ご利用について</a></div>\
    <div class="item"><a href="https://github.com/taidalog/taidalab">Repository on GitHub</a></div>\
</small>\
';

const initialObject = newInitObject('/');
initPage(initialObject);
