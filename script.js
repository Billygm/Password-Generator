// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character Types
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var spCharacters = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","|","}","]","{","[","'",";",":","/","?",".",">","<",","];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generatePassword = function() {
  // ask user for password criteria
  var pwLength = window.prompt("Enter Password length, " + 8 + "-" + 128 + " charachters");

  if (!pwLength) {
    return;
  }
  else if (pwLength < 8 && pwLength > 128) {
    alert("Password length must be between 8 and 128 characters.")
    console.log(pwLength);
  }
  else if (pwLength > 7 && pwLength < 129) {
    var ucLetters = confirm("Would you like to include uppercase letters?");
    var lcLetters = confirm("Would you like to include lowercase letters?");
    var num = confirm("Would you like to include numbers?");
    var SpChar = confirm("Would you like to include special characters?");
  }
}
