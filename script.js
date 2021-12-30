// Assignment Code
let generateBtn = document.querySelector("#generate");
// array of lowercase letters
let lcLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let ucLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let pwNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let pwSpecial = ["!", "#", "$", "%", "&", "@", "~", "-", "_", "?", "+", "*", "="];

//create password
function generatePassword() {
  // assign length to password
  let pwLength = Number(prompt("how long would you like your password? (min: 8, max: 128)"));
  let pwPool = ["a"]; // this will become the entire pool of available characters

  // select desired character types
  if (pwLength >= 8 && pwLength <= 128) {
    let yesLower = confirm("Would you like your password to include lowercase letters?");
    // [user wants lowercase] = concat lcLetters into pwPool
    if (yesLower === true) {
      pwPool = pwPool.concat(lcLetters);
    }
    let yesUpper = confirm("would you like your password to include UPPERCASE letters?");
    // [user wants uppercase] = concat ucLetters into pwPool
    if (yesUpper === true) {
      pwPool = pwPool.concat(ucLetters);
    }
    let yesNumber = confirm("Would you like your password to include numb3r5?");
    // [user wants numbers] = concat pwNumbers into pwPool
    if (yesNumber === true) {
      pwPool = pwPool.concat(pwNumbers);
    }
    let yesSpecial = confirm("would you like your password to inclide $pec!@l characters?");
    // [user wants special chars] = concat pwSpecial into pwPool
    if (yesSpecial === true) {
      pwPool = pwPool.concat(pwSpecial);
    }
  } else {
    alert("Invalid entry, please enter a number between 8 - 128 for your password length");
    return "";
  }

  let pwFinal = []; // this will be the user's final password
  // loop through variables
  for (let i = 0; i < pwLength; i++) {
    pwFinal.push(pwPool[Math.floor(Math.random() * (pwPool.length - 1))]); //replace i with random math function
    console.log(Math.floor(Math.random() * (pwPool.length - 1)));
  }
  // convert password to string
  return pwFinal.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
// kicks off the generator
generateBtn.addEventListener("click", writePassword);
