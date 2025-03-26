// basic, obvious operators
console.log("Basic operators:")
console.log(2 + 2);
console.log(2-2);
console.log(2 * 2);
console.log(2 / 2);

// modulo
console.log("\nModulo:");
console.log(2 % 2);
console.log(2 % 3);
console.log(3 % 2);

// odd or even?
console.log("\nOdd or even?");
console.log(1 % 2);
console.log(2 % 2);
console.log(3 % 2);
console.log(4 % 2);
console.log(5 % 2);

// assignment operator (=)
const variable = "value";

// combined assignment operators
console.log("\nCombined assignment operators:");
let num = 0;
num++; //add one to the variable num
console.log(num);
num = num + 1; //add one to the variable num
console.log(num);
num += 1 //add one to the variable num
console.log(num);

// comparison operators
console.log("\nComparison operators:");
console.log(2 == 2);
console.log(2 != 2);

// triple equals
console.log("\nTriple Equals:");
console.log(2 == 2); //true
console.log(2 === 2); //true
console.log(2 == "2"); //true
console.log(2 === "2"); //false
console.log(1 == true); //true
console.log(1 === true); //false
console.log(1 !== true); //true

// logical operators
console.log("\nLogical operators");
console.log(2 === 2 && 3 === 3); //true
console.log(2 === 2 && 2 === 3); //false
console.log(2 === 2 || 3 === 3); //true
console.log(2 === 2 || 2 === 3); //true
console.log(!(2 === 2)); //false
console.log(2 !== 2); //false
console.log(!(4 === 17 && 3 === 3)); //false
console.log(4 !== 17 || 3 !== 3); //the same as the previous one