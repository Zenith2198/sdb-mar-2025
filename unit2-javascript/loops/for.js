// the for loop
//3 parts
//part 1: the initialization
//part 2: the conditional
//part 3: the iteration
for (let x = 0; x < 10; x++) {
	console.log(x);
}

console.log("\nsep\n");

// print i when it is a multiple of 10
for (let i = 0; i <= 100; i++) {
	if (i % 10 === 0) {
		console.log(i);
	}
}

console.log("\nsep\n");

// nested for loops
for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 10; j++) {
		if (j === 0) {
			console.log(i * 10 + j);
		}
	}
}

console.log("\nsep\n");

// loop over a string
const str = "Hello, world!";
for (let i = 0; i < str.length; i++) {
	console.log(str[i]);
}

console.log("\nsep\n");

// caesar cipher
//TODO: make it work for characters at the end of the alphabet
//TODO: don't change punctuation
//TODO: should we change numbers?
const SHIFT = 4;
const textToCipher = "abcdefgh"; //goal: efghijkl
let result = "";
//loop from 0 to the length of the string
for (let i = 0; i < textToCipher.length; i++) {
	//get the number representation of our character, and add our shift to it
	const charcode = (textToCipher[i].charCodeAt()) + SHIFT;
	//adds the character representation of our previously numbered character plus our shift to our result
	result += String.fromCharCode(charcode);
}
console.log(result);