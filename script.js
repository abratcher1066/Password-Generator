var generateBtn = document.querySelector("#generate");

// Write password to password id
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Event listener/generate button
generateBtn.addEventListener("click", writePassword);

// New password function
function generatePassword() {

  // Moved all variables top of file:

  // created lengthAsk and set it to true. The computer will prompt an error if it becomes false. It only becomes false if it has to run the loop again, meaning user entered the incorrect length.
  var lengthAsk = true
  // set charset to an empty string
  var charset = "";
  // set password to an empty string
  var password = "";

  do {

    if (lengthAsk) {
      var length = prompt("How long would you like your password to be? (Must be between 8-128 characters.)");
      lengthAsk = false

    } else {
      var length = prompt("Invalid - Please try again! Must be between 8-128 characters.")

    }

    length = parseInt(length)

  }
  while (length < 8 || length > 128)

  if (confirm("Would you like to include an uppercase letter?")) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if (confirm("Would you like to include a lowercase letter?")) {
    charset += "abcdefghijklmnopqrstuvwxyz"
  }

  if (confirm("Would you like to include a number?")) {
    charset += "0123456789"
  }

  if (confirm("Would you like to include a special character?")) {
    charset += "!@#$%^&*()_+ ~`|}{[]\:;?><,./-="
  }

  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }

  return password;

}


