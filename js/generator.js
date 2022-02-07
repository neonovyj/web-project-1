var pswrd;
var length;
var symbols;
const ASCII_LETTERS = 'abcdefghijklnopqrstuvwxyz';
const ASCII_UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS = '0123456789';
const PUNCTUATION = '+-/*!&$#?=@<>';


document.getElementById('generate').onclick = generate;

function generate() {
    custom();
    doPswrd();
}

function custom() {
    symbols = ASCII_LETTERS;
    var chbox_uppercase;
    chbox_uppercase = document.getElementById('uppercase');
    if (chbox_uppercase.checked) {
        symbols = symbols + ASCII_UPPERCASE;
    }
    var chbox_digit;
    chbox_digit = document.getElementById('digit');
    if (chbox_digit.checked) {
        symbols = symbols + DIGITS;
    }
    var chbox_special;
    chbox_special = document.getElementById('special');
    if (chbox_special.checked) {
        symbols = symbols + PUNCTUATION;
    }
}

function doPswrd() {
    var pswrd = '';
    var length1 = document.getElementById('passLength').value;
    if (length1 > 25) {
        length1 = 24;
    }
    while (pswrd.length < length1) {
        pswrd += symbols[Math.floor(Math.random() * symbols.length)];
    }
    document.getElementById('generate2').innerHTML = pswrd;
}