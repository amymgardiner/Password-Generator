// Assignment code here

var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()-_+=/><;:'"
var newPassword = ""

function generatePassword() {
  var question = prompt("What is the required length of your password? Pick a number between 8 and 128?", "8");
  
  var num = Number(question)
  console.log(num)

  for (let i = 0; i < num; i++) {
    var randomNumber = Math.floor(Math.random() * num)
    newPassword += chars.substring(randomNumber, randomNumber + 1)
    console.log(newPassword)
    
  }

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
