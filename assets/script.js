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

// Questions to prompt the user for password requirements; how long should the password be, does it need uppercase letters, does it need lowercase letters, does it need any numbers, and does it need any special characters
function userInput() {
  passwordLength = parseInt(prompt("What is the required length of your password? Pick a number between 8 and 128?", "8"));

  // check to make sure user input for password length is correct, start function over if not between 8-128
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Please select a password length between 8 and 128.")
    return userInput();
  }
  else {
    alert(passwordLength + " : will be the number of characters in your password.");
  }

  // check to see if password needs lowercase letters
  if(confirm("Should your password include lowercase characters? Select 'OK' for yes and 'Cancel' for no.") === true) {
    charsArr = charsArr.concat(lowerCaseArr);
    alert("Your password will include lowercase characters.");
  }
  else {
    alert("Your password will not include lowercase characters.");
  }

  // check to see if password needs uppercase letters
  if(confirm("Should your password include uppercase characters? Select 'OK' for yes and 'Cancel' for no.") === true) {
    charsArr = charsArr.concat(upperCaseArr);
    alert("Your password will include uppercase characters.");
  }
  else {
    alert("Your password will not include uppercase characters.");
  }

  // check to see if password needs numbers in it
  if(confirm("Should your password include numeric characters? Select 'OK' for yes and 'Cancel' for no.") === true) {
    charsArr = charsArr.concat(numericArr);
    alert("Your password will include numeric characters.");
  }
  else {
    alert("Your password will not include numeric characters.");
  }

  // check to see if password needs special characters in it
  if(confirm("Should your password include special characters? Select 'OK' for yes and 'Cancel' for no.") === true) {
    charsArr = charsArr.concat(specialArr);
    alert("Your password will include special characters.");
  }
  else {
    alert("Your password will not include special characters.");
  }

  return true;
}

function generatePassword() {

  var newPassword = "";
  
  // forloop to run as many times as the user said the passwordLength needs to be, each time it runs it selects a new character from the charsArr based off the userInput function until it will finally generate a password that meets the user's requirements
  for(var i = 0; i < passwordLength; i++) {
    var randomCharacter = Math.floor(Math.random() * charsArr.length);
    console.log(randomCharacter);
    newPassword = newPassword + charsArr[randomCharacter];
    console.log(newPassword); 
  }

  // final password
  return newPassword;
}

// Get references to the #generate element - existing code from challenge
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button - existing code from challenge
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // added my new function to also run to get the correct user inputs required to create the password
  userInput();
  // existing code from challenge
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
