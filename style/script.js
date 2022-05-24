// Assignment code here





// prompt for length of the password between 8 to 128 characters
window.prompt("What is the length of your password?");

// user selects length


// prompt for character types
window.prompt("Should your password include lowercase characters?");
window.prompt("Should your password include uppercase characters?");
window.prompt("Should your password include numeric characters?");
window.prompt("Should your password include special characters?");

// user confirms whether or not to includer lowercase, uppercase, numeric, and/or special characters




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
