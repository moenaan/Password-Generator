// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseletters = ["ABCDEFGHIJKLMNOPQRSTUVYZ"];
var lowercaseletters = ["abcdefghijklmnopqrstuvyz"];
var specialcharacters = ["!@#$%^&*()_+-="];
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

  var passwordlength = prompt("How long should your password be? (8-128 chars");
    if(passwordlength <8 || passwordlength >128 ) {
      prompt("Password must be between 8 to 128 characters, please try again.");
    } else {
      console.log("User's password will be" + passwordlength + "characters long.");
    };
  var uppercaseletters = confirm("Do you want uppercase letters?");
    if(uppercaseletters === true){
      password += uppercaseletters;
      var randomuppercaseletters = function () {
        return String.uppercaseletters(Math.floor(Math.random() *26));
      }
      console.log("Uppercase letters will be included.");
    } else {
      console.log("Uppercase letters will not be included.");
    };

  var lowercaseletters = confirm("Do you want lowercase letter?");
    if(lowercaseletters === true){
    password += lowercaseletters;
    var randomlowercaseletters = function () {
      return String.lowercaseletters(Math.floor(Math.random() *26));
    }
    console.log("Lowercase letters will be included.");
  } else {
    console.log("Lowercase letters will not be included.");
    };
  var specialcharacters = confirm("Do you want special Characters?");
    if(specialcharacters === true){
    password += specialcharacters;
    var randomspecialcharacters = function () {
      return String.specialcharacters(Math.floor(Math.random() *26));
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


  };
  console.log(uppercaseletters)
  console.log(passwordlength)
  console.log(lowercaseletters)
  console.log(specialcharacters)
  console.log(numbers)

console.log(password);
return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
