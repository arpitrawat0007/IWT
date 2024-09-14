const prompt = require("prompt-sync")();
// Assume the stored username and password
const storedUsername = "myuser";
const storedPassword = "mypassword";

// Get user input (you can replace this with your own input method)
const enteredUsername = prompt("Enter your username:");
const enteredPassword = prompt("Enter your password:");

// Validate the input
if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
  console.log("Login successful!");
} else {
  console.log("Invalid username or password. Please try again.");
}
