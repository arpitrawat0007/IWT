const prompt = require("prompt-sync")();

const userInput = prompt("Enter some text: ");
const uppercaseText = userInput.toUpperCase();

console.log("Uppercase text:", uppercaseText);
