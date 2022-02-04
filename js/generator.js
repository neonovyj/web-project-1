//let a = 0;
//var a = document.getElementById('passLength').oninput.value;
//
// generatePass();
//butt.onclick = function() {
  //  var val = document.getElementById('elem1').value;
    //document.getElementById('str').innerHTML="Вы ввели: "+val;
//};
// function lox(){
// var val = document.getElementById('elem1').value;
// console.log(val);
// }
// lox();


var pswrd;
var length;
var symbols;
const ASCII_LETTERS = 'abcdefghijklnopqrstuvwxyz';
const ASCII_UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS = '0123456789';
const PUNCTUATION = '+-/*!&$#?=@<>';
//length = ASCII_LETTERS + DIGITS;

document.getElementById('generate').onclick = generate;

function generate(){
  custom();
  doPswrd();
  document.getElementById('generate2').innerHTML = pswrd;
}






function custom(){

symbols = ASCII_LETTERS;
var chbox_uppercase;
chbox_uppercase=document.getElementById('uppercase');
if (chbox_uppercase.checked) {
  symbols = symbols + ASCII_UPPERCASE;
		// console.log(symbols);
	}

var chbox_digit;
chbox_digit=document.getElementById('digit');
if (chbox_digit.checked) {
    symbols = symbols + DIGITS;
		// console.log(symbols);
	}

var chbox_special;
chbox_special=document.getElementById('special');
if (chbox_special.checked) {
  symbols = symbols + PUNCTUATION;
	// console.log(symbols);
	}

}


function doPswrd(){
  var length = document.getElementById('passLength').value;


  while (pswrd.length < length) {
    pswrd += symbols[Math.floor(Math.random() * symbols.length)];
  }
  console.log(pswrd);
}
