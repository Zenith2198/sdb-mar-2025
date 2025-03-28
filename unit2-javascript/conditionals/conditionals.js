const userAge = 18;

//can this user vote?
if (userAge >= 18) { //true
	console.log("This user can vote!");
}

//can this user drink?
if (userAge >= 21) { //false
	console.log("This user can drink in the US!");
} else if (userAge >= 18) { //true
	console.log("This user can drink in Canada!");
} else if (userAge >= 16) { //true
	console.log("This user can drink in Europe!");
} else {
	console.log("This user can't drink in the US, Canada, or Europe!");
}

if (userAge >= 16) { //true
	console.log("This user can drink in Europe!");
}

if (userAge >= 18) { //true
	console.log("This user can drink in Canada!");
}

if (userAge >= 21) { //false
	console.log("This user can drink in the US!");
}

const catAge = 5;

if (catAge >= 6) {
	console.log("This cat can be neutered!");
} else {
	console.log("This cat is too young to be neutered");
}

const a = true;
const b = false;
const c = true;

if (a && b) { //false
	console.log("a && b");
}

if (a || b) { //true
	console.log("a || b");
}

if (!a) { //false
	console.log("!a");
}

if (!a || b) { //false
	console.log("!a || b");
}

if (a || b && c) { //true
	console.log("a || b && c");
}

if (a || (b && c)) { //true
	console.log("a || (b && c)");
}

//b && c is false, invert it (!) to be true, a && true is true!
if (a && !(b && c)) { //true
	console.log("a && !(b && c)");
}

if (0) { //false
	console.log("0 is true!");
}

if ("a string") { //true
	console.log("a string is true", !!"a string"); //bang bang!
}

if ("") { //false
	console.log('"" is true');
}

if (10000) { //true
	console.log("10000 is true");
}

if ("0") { //true
	console.log('"0" is true');
}

if ("false") { //true
	console.log('"false" is true');
}

//THIS IS BAD, DON'T USE BOOLEANS IN COMPARISONS
//this is the same as (!"false")
if ("false" == false) { //false
	console.log('"false" == false is true');
}

if ("0" == 0) { //true
	console.log('"0" == 0 is true');
}

if (NaN) { //false
	console.log("NaN is true");
}

if (null) { //false
	console.log("null is true");
}

if (undefined) { //false
	console.log("undefined is true");
}

let someVar;
if (someVar) { //false
	console.log("someVar is true");
}
someVar = 0;
if (someVar) { //false
	console.log("someVar is true now");
}

let someVar2
if (someVar2 !== undefined) { //false
	console.log("someVar2 is not undefined");
}
someVar2 = 0;
if (someVar2 !== undefined) { //true
	console.log("someVar2 is not undefined now");
}

console.log(true || false); //true
console.log(true || true); //true
console.log(true && false); //false
console.log(!!(true ^ false)); //true
console.log(!!(true ^ true)); //false

console.log(3 ^ 5);
"0011"
"0101"
"0110"

let var1 = 3;
let var2 = 5;

var1 = var1 ^ var2;
"011"
"101"
"110" //var 1 is now 6
var2 = var1 ^ var2;
"110"
"101"
"011" //var 2 is now 3
var1 = var1 ^ var2;
"110"
"011"
"101" //var 1 is now 5
console.log(var1, var2);