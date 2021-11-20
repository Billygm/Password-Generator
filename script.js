// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character Types
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var spCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "|", "}", "]", "{", "[", "'", ";", ":", "/", "?", ".", ">", "<", ","];
var characters = [];
var password = [];


var generatePassword = function() {

  // ask user for password criteria
  var pwLength =  8 // prompt("Choose your password length, enter a number between 8 - 128.");

  if (!pwLength) {
    return pass;
  } else if (pwLength > 128 || pwLength < 8) {
    alert("Password length must be between 8 and 128 characters.");
  } else if (pwLength >= 8 && pwLength <= 128) {
    var ucLetters = true; // confirm("Would you like to include uppercase letters?");
    var lcLetters = true; // confirm("Would you like to include lowercase letters?");
    var num = true; // confirm("Would you like to include numbers?");
    var spChar = true; // confirm("Would you like to include special characters?");
  }
  
  if (ucLetters === false && lcLetters === false && num === false && spChar === false) {
    alert("You must choose at least one character type.");
  }
  
  // Pulling characters for password
  if (ucLetters) {
    characters = characters.concat(uppercase);
    password = password.concat(uppercase[Math.floor(Math.random() * uppercase.length)]);
    console.log(password);
  }

  if (lcLetters) {
    characters = characters.concat(lowercase);
    password = password.concat(lowercase[Math.floor(Math.random() * lowercase.length)]);
    console.log(password);
  }

  if (num) {
    characters = characters.concat(numbers)
    password = password.concat(numbers[Math.floor(Math.random() * numbers.length)]);
    console.log(password);
  }
  
  if (spChar) {
    characters = characters.concat(spCharacters)
    password = password.concat(spCharacters[Math.floor(Math.random() * spCharacters.length)]);
    console.log(password);
  }
  
  for (var i=password.length; i < pwLength; i++) {
    password = password.concat(characters[Math.floor(Math.random() * characters.length)]);
    console.log(password);
  }
  
  console.log(characters)
  
return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);