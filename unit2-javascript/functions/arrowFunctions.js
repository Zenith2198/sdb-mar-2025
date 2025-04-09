// arrow function
() => {}

const sayWhatever = (text) => {
	console.log(text);
};

// call an arrow function
sayWhatever("some text")

// a function that has another function as an argument
function doSomething(func) {
	func();
}

// these lines of code do THE SAME THING
// function doSomethingArg() {
// 	console.log("hi");
// }
// doSomething(doSomethingArg); //do NOT do this
doSomething(() => { //this one is better
	console.log("hi");
});

function doSomethingAndPrint(func) {
	console.log(func());
}

// these two lines of code are the same
doSomethingAndPrint(() => { //this is unnecessary
	return 4 + 17;
});
doSomethingAndPrint(() => 3 + 5); //missing {} IMPLIES a return

// we use curly braces if we want to do more than one thing in our arrow function
doSomethingAndPrint(() => {
	const num1 = 4;
	const num2 = 17;
	const remainder = num2 % num1;
	return remainder;
});

//don't do this either
// doSomethingAndPrint(function funcArg() {
// 	return 85;
// });
