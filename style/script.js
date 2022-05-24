// Assignment code here
var passwordLength = "";
var charsArr = [];
var newPassword = ""

var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var numericArr = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '_', '`', '{', '|', '}', '~'];

function generatePassword() {
  var question = prompt("What is the required length of your password? Pick a number between 8 and 128?", "8");
  
  var num = Number(question)
  console.log(num)

  for (let i = 0; i < num; i++) {
    var randomNumber = Math.floor(Math.random() * num)
    newPassword = chars.substring (randomNumber, randomNumber + 1)
    console.log(newPassword)
    
  }

}

function userInput() {
  
}





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
