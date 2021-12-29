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
  let pwPool = []; // this will end up being entire pool of available characters

  // select desired character types
  if (pwLength >= 8 && pwLength <= 128) {
    let yesLower = confirm("Would you like your password to include lowercase letters?");
    let yesUpper = confirm("would you like your password to include UPPERCASE letters?");
    let yesNumber = confirm("Would you like your password to include numb3r5?");
    let yesSpecial = confirm("would you like your password to inclide $pec!@l characters?");
  } else {
    alert("Invalid entry, please enter a number between 8 - 128 for your password length");
    return "";
  }

  if (yesLower) {
    // concat lowercase into pwPool
  }
  if (yesUpper) {
  }
  // loop through variables

  for (let i = 0; i < pwLength; i++) {
    someValue.push(pwPool[i]); //replace i with some math function
  }

  // convert password to string
  return someValue.join("");
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
