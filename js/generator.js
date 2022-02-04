// document.getElementById('generate').onclick = generatePass;
// let a = 0;
// //var a = document.getElementById('passLength').oninput.value;
// function generatePass(){
//   a++;
//   console.log(a);
//   document.getElementById('generate2').innerHTML = a;
// }
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



var length;
const ASCII_LETTERS = 'abcdefghijklnopqrstuvwxyz';
const ASCII_UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS = '0123456789';
const PUNCTUATION = '+-/*!&$#?=@<>';
length = ASCII_LETTERS + DIGITS;

var pswrd = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";

while (pswrd.length < 6) {
  pswrd += alphabet[Math.floor(Math.random() * alphabet.length)];
}
console.log(pswrd);
