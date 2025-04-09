const globalScope = "globalScope";
console.log(globalScope);

for (let i = 0; i < 1; i++) {
	console.log(globalScope + " inside of our for loop");
	console.log(i);
	const loopScope = "loopScope";
}

//this does not work
// console.log(i);
// console.log(loopScope);

const var1 = "global";

if (true) {
	const var1 = "if statement";
	console.log(var1); // "if statement"
	//this does not work
	// console.log(loopScope);
}

console.log(var1); // "global"

function someFunc(str) {
	console.log(var1); // "global"
	console.log(str);
	console.log(var2);
}

// this works
const var2 = "global 2";

someFunc("function string arg");
//this does not work
// console.log(str);
// const var2 = "global 2";

func2();
//this does not work
// func3();

function func2() {
	console.log("func2");

	function func3() {
		console.log("func3");
	}

	func3();
}

function func4() {
	console.log("func4");

	//this works (recursion)
	// func4();
}

func4();

for (let i = 0; i < 5; i++) {
	console.log(i);
	for (i; i < 5; i++) { //this is bad! use j instead
		console.log(i);
	}
}