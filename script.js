// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character Types
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var spCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "|", "}", "]", "{", "[", "'", ";", ":", "/", "?", ".", ">", "<", ",","\"", "\\"];
var characters = [];
var password = [];


var generatePassword = function() {
  password = [];
  // ask user for password criteria
  var pwLength = prompt("Choose your password length, enter a number between 8 - 128.");

  if (!pwLength) {
    return password;
  } else if (pwLength > 128 || pwLength < 8) {
    alert("Password length must be between 8 and 128 characters.");
  } else if (pwLength >= 8 && pwLength <= 128) {
    var ucLetters = confirm("Would you like to include uppercase letters?");
    var lcLetters = confirm("Would you like to include lowercase letters?");
    var num = confirm("Would you like to include numbers?");
    var spChar = confirm("Would you like to include special characters?");
  }
  
  if (ucLetters === false && lcLetters === false && num === false && spChar === false) {
    alert("You must choose at least one character type.");
  }
  
  // Pulling characters from their initial array into a new array to make all user selected types available in one array
  // each 'if' statement ensures that if that character type is selected then at least 1 of that type is in the password
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

  // after each user selected type has at least one character selected, this 'for' statement randomly selects the rest of the characters until the password legth matches the user selected length
  for (var i=password.length; i < pwLength; i++) {
    password = password.concat(characters[Math.floor(Math.random() * characters.length)]);
    console.log(password);
  }
  
  console.log(characters)
  console.log(password.join(""))

return password.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);