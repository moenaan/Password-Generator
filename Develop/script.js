// Assignment Code
const upperCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','Y','Z'];
const lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','y','z'];
const specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];
const numbers = ['0','1','2','3','4','5','6','7','8','9'];

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#passwordText");

  passwordText.value = generatedpassword;

};

function getPasswordOptions() {
  
  let length = parseInt(
    prompt('How long do you want your password to be? (8-128 characters)'),
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be a number');
    return null;
  }

  if (length < 8) {
    alert('Password length must be at least 8 characters long. Please try again.');
    return null;
  }

  if (length > 128) {
    alert('Password length must less than 129 characters. Please try again.');
    return null;
  }

  let hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  let hasnumbers = confirm(
    'Click OK to confirm including numeric characters.'
  );

  
  let haslowerCaseLetters = confirm(
    'Click OK to confirm including lowercase characters.'
  );

  let hasupperCaseLetters = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  if (
    hasSpecialCharacters === false &&
    hasnumbers === false &&
    haslowerCaseLetters === false &&
    hasupperCaseLetters === false
  ) {
    alert('Must select at least one character type');
    return null;
  }

  
  let passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasnumbers: hasnumbers,
    haslowerCaseLetters: haslowerCaseLetters,
    hasupperCaseLetters: hasupperCaseLetters,
  };

  return passwordOptions;
}


function getRandom(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  let randElement = arr[randIndex];

  return randElement;
}


function generatePassword() {
  let options = getPasswordOptions();
  
  let result = [];

  let possibleCharacters = [];

  let guaranteedCharacters = [];

  if (!options) return null;

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasnumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }

  if (options.haslowerCaseLetters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseLetters);
    guaranteedCharacters.push(getRandom(lowerCaseLetters));
  }

  
  if (options.hasupperCaseLetters) {
    possibleCharacters = possibleCharacters.concat(upperCaseLetters);
    guaranteedCharacters.push(getRandom(upperCaseLetters));
  }

  for (let i = 0; i < options.length; i++) {
    let possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (let i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');
}

let generateBtn = document.querySelector('#generate');

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);