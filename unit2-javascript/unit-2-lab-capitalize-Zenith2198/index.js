// Follow the comments to complete the exercise

// The word we want to capitalize saved to a variable
const word = "leTTuCe";

// Get the first letter of the word and save to a variable
let firstLetter = word[0];

// Get the rest of the word (everything after the first letter) and save to a variable
let restOfWord = word.slice(1);

// Convert the first letter to uppercase and restOfWord to lowercase
firstLetter = firstLetter.toUpperCase();
restOfWord = restOfWord.toLowerCase();

// Concatenate the first letter and rest of word to create a properly capitalized word and save to a variable
const newWord = firstLetter + restOfWord;

// Print the result
console.log(newWord);

// Capitalize the first letter of the word and make the rest of the word lowercase
console.log(word[0].toUpperCase() + word.slice(1).toLowerCase());
