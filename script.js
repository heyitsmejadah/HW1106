// Variables for character types
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+-=[]{}|;:'<>,.?/";

// Function to generate a random character from character set
function getRandomChar(characterSet) {
  var randomIndex = Math.floor(Math.random() * characterSet.length);
  return characterSet[randomIndex];
}

// Function to generate the password based on user criteria
function generatePassword() {
  var passwordLength = parseInt(
    prompt("Enter the password length (between 8 and 128 characters):")
  );

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }

  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type.");
    return;
  }

  var characterSet = "";
  if (includeLowercase) characterSet += lowercaseChars;
  if (includeUppercase) characterSet += uppercaseChars;
  if (includeNumeric) characterSet += numericChars;
  if (includeSpecial) characterSet += specialChars;

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += getRandomChar(characterSet);
  }

  document.getElementById("password").value = password;
}

// Event for the "Generate Password" button
document.getElementById("generate").addEventListener("click", generatePassword);
