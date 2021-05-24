// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseLetters = ["ABCDEFGHIJKLMNOPQRSTUVYZ"];
var lowerCaseLetters = ["abcdefghijklmnopqrstuvyz"];
var specialCharacters = ["!@#$%^&*()_+-="];
var numbers = ["0123456789"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//function for the password
function generatePassword () {
  var password = "";

  var passwordLength = prompt("How long should your password be? (8-128 chars");
    if(passwordLength <8 || passwordLength >128 ) {
      prompt("Password must be between 8 to 128 characters, please try again.");
    } else {
      console.log("User's password will be" + passwordLength + "characters long.");
    };
  var upperCaseLetters = confirm("Do you want uppercase letters?");
    if(upperCaseLetters === true){
      password += upperCaseLetters;
      var randomUpperCaseLetters = function () {
        return String.upperCaseLetters(Math.floor(Math.random() *26));
      }
      console.log("Uppercase letters will be included.");
    } else {
      console.log("Uppercase letters will not be included.");
    };

  var lowerCaseLetters = confirm("Do you want lowercase letter?");
    if(lowerCaseLetters === true){
    password += lowerCaseLetters;
    var randomLowerCaseletters = function () {
      return String.lowerCaseLetters(Math.floor(Math.random() *26));
    }
    console.log("Lowercase letters will be included.");
  } else {
    console.log("Lowercase letters will not be included.");
    };
  var specialCharacters = confirm("Do you want special Characters?");
    if(specialCharacters === true){
    password += specialCharacters;
    var randomspecialcharacters = function () {
      return String.specialCharacters(Math.floor(Math.random() *26));
    }
    console.log("Special characters will be included.");
  } else {
    console.log("Special characters will not be included.");
    };
  var numbers = confirm("Do you want numbers?");
    if(numbers === true){
    password += numbers;
    var randomnumbers = function () {
      return String.numbers(Math.floor(Math.random() *26));
    }
    console.log("Numbers will be included.");
  } else {
    console.log("Numbers will not be included.");
    };

    for (var i = 0, n = charset.passwordlength; i < passwordlength; ++i); {
      retVal += charset.charAt(Math.floor(Math.random() * n));


  };

console.log(password);
return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
