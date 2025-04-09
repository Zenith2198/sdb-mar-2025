// a function
function sayHello() {
	console.log("Hello");
}

// calling our function
sayHello()

// a function with a parameter
function sayWhatever(text) {
	console.log(text);
}

// calling our function with a parameter
sayWhatever("Hello, world!");
sayWhatever("Goodbye, universe!");

// add two numbers and return
function addTwoNums(a, b) {
	return a + b;
}

// call our function with 2 parameters and a return
const result = addTwoNums(4, 17);
console.log(result);

// shout function
function shout(text) {
	if (typeof text === "string") {
		const textUpper = text.toUpperCase() + "!!!";
		return textUpper;
	} else {
		return "STOP TYPING NOT STRINGS!!!";
	}
}

console.log(shout("whatever text you want it to shout out"));
console.log(shout(12345));
console.log(shout(true));
console.log(shout(undefined));
