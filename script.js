///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////

// declare global constant values because they're always going to be constant
const lowers = "abcdefghijklmnopqrstuvwxyz";
const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specials = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const allChars = lowers + uppers + numbers + specials;

// Generates a random password, returns a string
function generatePassword() {

  // declare boolean variables for each type of character
  var qLower = false;
  var qUpper = false;
  var qNumber = false;
  var qSpecial = false;

  // asks user number of characters required for the password
  var numberOfChars = prompt("How many characters does the password require (enter a number from 8 to 128, select cancel for random number of characters)?");

  // If prompt is left blank, get a random number from 8 to 128 for the number
  if (!numberOfChars || numberOfChars === "") {
    numberOfChars = randomIndex(121) + 8;
  }

  // If user does not enter a number from 8 to 128, it will again prompt the user to enter a valid number.
  while (isNaN(numberOfChars) || parseInt(numberOfChars) < 8 || parseInt(numberOfChars) > 128) {
    alert("Please enter a valid number.")
    var numberOfChars = prompt("How many characters should the password have (enter a number from 8 to 128, select cancel for random number of characters)?");
  }
  
  // Asking user whether each character type is required
  var qLower = confirm("Does the password require at least one lowercase letter?");
  var qUpper = confirm("Does the password require at least one uppercase letter?");
  var qNumber = confirm("Does the password require at least one number?");
  var qSpecial = confirm("Does the password require at least one special character?");
  
  // the string where the characters will be concatenated
  var pwText = "";
  var validated = false;

  // This will initialize a string and add characters to it, then validate that string. The process will repeat until validation has passed.
  while (!validated) {
    pwText = "";
    for (let i = 0; i < numberOfChars; i++) {
    pwText += allChars[randomIndex(allChars.length)];
    }
    // If password has no requirements, validation is skipped
    if (!qLower && !qUpper && !qNumber && !qSpecial) {
      return pwText;
    }
    validated = validatePassword(pwText, qLower, qUpper, qNumber, qSpecial);
  }
  return pwText;
}

// Returns a random index from number of variables in string/array (i.e. if n = 10, returns a number from 0 to 9)
function randomIndex(n) {
  return Math.floor(Math.random() * parseInt(n));
}

/*
  Checks the password if it meets the criteria the user requested
  Takes the randomly generated string, 4 boolean variables for each type
  Returns false if a required type is not in the string
*/
function validatePassword(str, lo, up, no, sp) {
  var next = false; // just a flag to move on to next character type
  if (lo) { // checking for lowercase letters if answered yes
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < lowers.length; j++) {
        if (str[i] === lowers[j]) {
          if (!up && !no && !sp) {
            return true; // if only lowercase letters are required validation is complete
          } else {
            next = true; // changes flag, otherwise will execute line 117
          }
        }
      }
    }
    if (!next) {return false;}
  }
  next = false;
  if (up) { // checking for uppercase letters if answered yes
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < uppers.length; j++) {
        if (str[i] === uppers[j]) {
          if (!no && !sp) {
            return true;
          } else {
            next = true;
          }
        }
      }
    }
    if (!next) {return false;}
  }
  next = false;
  if (no) { // checking for numbers if answered yes
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        if (str[i] === numbers[j]) {
          if (!sp) {
            return true;
          } else {
            next = true;
          }
        }
      }
    }
    if (!next) {return false;} 
  }
  if (sp) {
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < specials.length; j++) {
        if (str[i] === specials[j]) {
          return true;
        }
      }
    }
    return false;
  }
}

