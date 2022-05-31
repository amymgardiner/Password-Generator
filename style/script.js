// Assignment code here
var passwordLength = "";
var charsArr = [];

// array for lowercase letters to be used in the charsArr
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// array for uppercase letters to be used in the charsArr
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// array for numbers to be used in the charsArr
var numericArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
// array for special characters to be used in the charsArr
var specialArr = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '_', '`', '{', '|', '}', '~'];

function generatePassword() {

  // forloop to run as many times as the user said the passwordLength needs to be, each time it runs it selects a new character from the charsArr based off the userInput function until it will finally generate a password that meets the user's requirements
  for (var i = 0; i < passwordLength; i++) {
    var element = array[index];
    
  }

}

// Questions to prompt the user for password requirements; how long should the password be, does it need uppercase letters, does it need lowercase letters, does it need any numbers, and does it need any special characters
function userInput() {
  passwordLength = parseInt(prompt("What is the required length of your password? Pick a number between 8 and 128?", "8"));

  // check to make sure user input for password length is correct
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Please select a password length between 8 and 128.")
    return false;
  }

  // check to see if password needs lowercase letters
  if(confirm("Should your password include lowercase characters?")) {
    charsArr = charsArr.concat(lowerCaseArr);
  }

  // check to see if password needs uppercase letters
  if(confirm("Should your password include uppercase characters?")) {
    charsArr = charsArr.concat(upperCaseArr);
  }

  // check to see if password needs numbers in it
  if(confirm("Should your password include numeric characters?")) {
    charsArr = charsArr.concat(numericArr);
  }

  // check to see if password needs special characters in it
  if(confirm("Should your password include special characters?")) {
    charsArr = charsArr.concat(specialArr);
  }

  return true;
}





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  userInput();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
