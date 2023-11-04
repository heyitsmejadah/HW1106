var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var generateBtn = document.querySelector("#generate");

// Function to generate a secure password based on user prompts
function generatePassword() {
  // Prompt for password length
  var passwordLength = parseInt(prompt("Enter the password length (between 8 and 128 characters):"));


}

// Function to display the generated password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


// Add event listener to the generate button
generateBtn.addEventListener("click", writePassword);
