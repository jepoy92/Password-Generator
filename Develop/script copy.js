// Assignment Code
// User needs to make a secure password based off of options they select. Min of 8 and max of 128
// Characters can be lowercase, uppercase, numeric, and/or special characters
// User opens website
// There is a button asking for password parameters
// When parameters password is clicked, a window opens 
// Window box contains an input box asking for how many characters they'd like
// Underneath the input box  are option boxes for each category
// After the parameters have been set the user can click a box that puts everything together
// Assignment Code
// Assignment Code
var generateBtn = document.getElementById("generate");
var setParameters = document.getElementById("parameters")

// variables containing arrays for each password option 
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz"
const nums = [0,1,2,3,4,5,6,7,8,9,10];
const syms = "!@#$%^&*()_+=-"; 

const Options = upper + lower + nums + syms;

const includeUpper;
const includeLower;
const includNumber;
const includeSpecial

// Function which is called by the Parameters button which asks the user what they would like 
// to include in their password

function generatePasword() {

  let length = parseInt(prompt("How many characters would you like to include? Passwords must be between 8 to 128 characters")); {
      if ( length >= 8 && length <= 128){

        let password = []
        
        let includeUpper = confirm("Would you like to include uppercase letters?");

        let includeLower = confirm("Would you like to include lower letters?");
        let includNumber = confirm("Would you like to include numbers?");
        let includeSpecial = confirm("Would you like to include special letters?");
      } else {
        alert("Your character length is invalid. Please refresh the page and try again.")
      }
    }
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePasword);

