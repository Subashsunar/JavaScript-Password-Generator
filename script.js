// Assignment Code
// Declearing an arrays: numbers, lowerCaseLetter, upperCaseLetter, and spclChars
var numbers = [0,1,2,3,4,5,6,7,8,9];
var lowerCaseLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var spclChars = ['!','@','#','$','%','&','*','(',')','{','['];

// Creating a variable called generateBtn and selecting an Id called generate from HTML document.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var responseObject = passwordPrompts();
  var password = generatePassword(responseObject);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Writing a function from user password prompts and returning an object responseOblect
function passwordPrompts() {
  var userInput = prompt("Please choose a length of at least 8 characters and no more than 128 characters.");
  var lowerCase = confirm("Would you like to include lowercase letter?");
  var upperCase = confirm("Would you like to include uppercase letter?");
  var numericValue = confirm("Would you like to include numeric value?");
  var specialChars = confirm("Would you like to include special characters?");
  var responseObject = {
    userInput, 
    lowerCase, 
    upperCase, 
    numericValue, 
    specialChars
  }
  return responseObject;
}

// This function will generate a randon password
function generatePassword(responseObject) {
  var userSelection = [];
  var password = [];
  if (responseObject.numericValue === true) {
    userSelection = userSelection.concat(numbers);
  }
  if (responseObject.lowerCase === true) {
    userSelection = userSelection.concat(lowerCaseLetter);
  }
  if (responseObject.upperCase === true) {
    userSelection = userSelection.concat(upperCaseLetter);
  }
  if (responseObject.specialChars === true) {
    userSelection = userSelection.concat(spclChars);
  }

  for (var i = 0; i < responseObject.userInput; i++) {
    var randomCharacter = userSelection[Math.floor(Math.random() * userSelection.length)];
    password = password.concat(randomCharacter);
  }

  return password.join('')
}
