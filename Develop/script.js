// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVYZ";
var specialcharacters = "!@#$%^&*()_+-=";
var numbers = "0123456789";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  var password = "";
  var password = ['abcdefghijklmnopqrstuvyz'];
  var password = ['!@#$%^&*()_+-="'];
  var password = ['0123456789'];

  var passwordLength = prompt("How long should your password be? (8-128 chars");
  var Uppercaseletters = confirm("Do you want uppercase letters?");
  var Lowercaseletters = confirm("Do you want lowercase letter?");
  var specialcharacters = confirm("Do you want special Characters?");
  var numbers = confirm("Do you want numbers?");
  var passwordLength = 8,
      charset = "abcdefghijklmnopqrstuvyzABCDEFGHIJKLMNOPQRSTUVYZ!@#$%^&*()_+-=0123456789";
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i); {
      retVal += charset.charAt(Math.floor(Math.random() * n));

  }
  console.log(Uppercaseletters)
  console.log(passwordLength)
  console.log(Lowercaseletters)
  console.log(specialcharacters)

console.log(password.join(''));
return passwordText;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
