// Assignment Code
// User needs to make a secure password based off of options they select. Min of 8 and max of 128
// Characters can be lowercase, uppercase, numeric, and/or special characters
// User opens website
// There is a button asking for password parameters
// When parameters password is clicked, a window opens 
// Window box contains an input box asking for how many characters they'd like
// Underneath the input box  are option boxes for each category
// After the parameters have been set the user can click a box that puts everything together

var generateBtn = document.getElementById("generate");

// Write password to the password input
function writePassword() {

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789"
var symbols = "!@#$%^&*()_-+=\/"

var parametersBtn = document.getElementById("parameters"); 
  var allowed = "";

  if ( uppercase[i]) {
    allowed.push(uppercase[i].value);
  }

  if (document.Options.Lowercase) {
    allowed += Lowercase;
  }
  
  if (document.Options.Numbers) {
    allowed += Numbers;
  }
  
  if (document.Options.Symbols.checked) {
    allowed += Symbols;
  }

  var password = generatePassword();
  var passwordText = document.getElementById("password");
  passwordText.value = password;
  var length = parseInt(document.Options.length.value);
  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * allowed.length);
    password += allowed[random];
  }
  return password;
  
  console.log(password)
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
