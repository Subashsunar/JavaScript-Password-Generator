// Assignment Code
var numbers = [0,1,2,3,4,5,6,7,8,9];
console.log(Math.floor(Math.random() * 10));

var lowerCaseLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
console.log(lowerCaseLetter[Math.floor(Math.random() * lowerCaseLetter.length)]);

var upperCaseLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
console.log(upperCaseLetter[Math.floor(Math.random() * upperCaseLetter.length)]);

var specialChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
console.log(specialChars[Math.floor(Math.random() * specialChars.length)]);

var userChoice = numbers + lowerCaseLetter + upperCaseLetter + specialChars;
console.log(userChoice);
console.log(userChoice.length);

// if (userChoice.length >= 8 || 128) {

// }

if (userChoice.length >= 8) {
  console.log(`You choose maximum length.`)
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
