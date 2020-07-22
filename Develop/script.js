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
var generateDefault = document.getElementById("default")

// variables containing arrays for each password option 
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const lower = "abcdefghijklmnopqrstuvwxyz".split('');
const nums = "0,1,2,3,4,5,6,7,8,9".split('');
const syms = "!@#$%^&*()_+=-".split('');

// Function which is called by the Parameters button which asks the user what they would like 
// to include in their password

function generatePassword() {
// Prompts the user to select a character count between 8 to 128
  let passwordLength = parseInt(prompt("How many characters would you like to include? Passwords must be between 8 to 128 characters")); {
      if ( passwordLength >= 8 && passwordLength <= 128){
        // empty array to push the randomized arrays of the options the user would like to put into
        let passwordCharOptions = []
        // Options the user can choose from: Upper/lowercase letters, numbers, and special symbols
        let includeUpper = confirm("Would you like to include uppercase letters?");
        let includeLower = confirm("Would you like to include lower letters?");
        let includeNumber = confirm("Would you like to include numbers?");
        let includeSpecial = confirm("Would you like to include special letters?");

        // For loop to randomize each option's array based on the if statement that is triggered by the user's choice
        for (var i = 0; i < passwordLength; i++) {
        if(includeUpper) {
          passwordCharOptions.push(upper[Math.floor(Math.random()*upper.length)])
        }
        if(includeLower) {
          passwordCharOptions.push(lower[Math.floor(Math.random()*lower.length)])
        }
        if(includeNumber) {
          passwordCharOptions.push(nums[Math.floor(Math.random()*nums.length)])
        }
        if(includeSpecial) {
          passwordCharOptions.push(syms[Math.floor(Math.random()*syms.length)])
        }
          }
        console.log(passwordCharOptions)

        let password = []
        for (var i = 0; i < passwordLength; i++) {
          
         password.push(passwordCharOptions[Math.floor(Math.random()*passwordCharOptions.length)]);
         let shufflePassword = password => {
          for (let i = password.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = password[i];
            password [i]  = password [j];
            password [j] = temp;
          }
          return password
          console.log(password)
        }
        // add a default option
        } return password.join("")
      } 
      else {
        alert("Your character length is invalid. Please refresh the page and try again.")
      }
    }
  }

  function generateDefaultPassword() {
    let passwordCharOptions = []
    // Options the user can choose from: Upper/lowercase letters, numbers, and special symbols
    const includeUpper = true
    const includeLower = true
    const includeNumber = true
    const includeSpecial = true

    // For loop to randomize each option's array based on the if statement that is triggered by the user's choice
    for (var i = 0; i <= 16; i++) {
    
    if(includeUpper) {
      passwordCharOptions.push(upper[Math.floor(Math.random()*upper.length)])
    }
    if(includeLower) {
      passwordCharOptions.push(lower[Math.floor(Math.random()*lower.length)])
    }
    if(includeNumber) {
      passwordCharOptions.push(nums[Math.floor(Math.random()*nums.length)])
    }
    if(includeSpecial) {
      passwordCharOptions.push(syms[Math.floor(Math.random()*syms.length)])
    }
      }
    console.log(passwordCharOptions)

    let password = []
    
    for (var i = 0; i <= 16 ; i++) {
      
     password.push(passwordCharOptions[Math.floor(Math.random()*passwordCharOptions.length)]);
     console.log(password)
     let shufflePassword = password => {
      for (let i = password.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = password[i];
        password [i]  = password [j];
        password [j] = temp;
      }
      return password
    }
    // add a default option
    } return password.join("")
  }
      
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;

}

function writeDefault() {
  var defaultPassword = generateDefaultPassword();
  var defaultPasswordText = document.getElementById("password");

  defaultPasswordText.value = defaultPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateDefault.addEventListener("click", writeDefault);

