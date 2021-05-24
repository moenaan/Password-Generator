// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseletters = ["ABCDEFGHIJKLMNOPQRSTUVYZ"];
var Lowercaseletters = ["abcdefghijklmnopqrstuvyz"];
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

  var passwordLength = prompt("How long should your password be? (8-128 chars");
    if(length <8 || length >128) {
      prompt("Password must be between 8 to 128 characters, please try again.");
    } else {
      console.log("Password will be" + length + "characters long.");
    }
  var Uppercaseletters = confirm("Do you want uppercase letters?");
  var Lowercaseletters = confirm("Do you want lowercase letter?");
  var specialcharacters = confirm("Do you want special Characters?");
  var numbers = confirm("Do you want numbers?");
  var passwordLength = 8,
      charset = "abcdefghijklmnopqrstuvyzABCDEFGHIJKLMNOPQRSTUVYZ!@#$%^&*()_+-=0123456789";
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i); {
      retVal += charset.charAt(Math.floor(Math.random() * n));

  };
  console.log(Uppercaseletters)
  console.log(passwordLength)
  console.log(Lowercaseletters)
  console.log(specialcharacters)

console.log(password);
return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
