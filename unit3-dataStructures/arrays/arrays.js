const students = ["Sarah", "Nicolas", "Molly", "Juan", "Lamont"];

let numbers = [1, 2, 3, 4, 5];

const mix = ["welcome", 42, "hello!", true, () => {}, [true, false, false], numbers];

//be careful with mixing element types!
for (let i = 0; i < mix.length; i++) {
	// mix[i] += 1; //casts all non-primitives to strings
	console.log(mix[i]);
}

for (let i = 0; i < numbers.length; i++) {
	numbers[i] += 1;
}

console.log(numbers);

//this errors, because const lets you change the array, but not reassign it
// mix = numbers;

const pets = [];
//add elements to the end of an array
pets.push("Mina");
pets.push("Goose");
console.log(pets)

//removes the last element from an array
pets.pop();
console.log(pets)

pets.push("Goose");
//removes the first element from an array
pets.shift();
console.log(pets);

//adds an element to the start of an array
pets.unshift("Mina");
console.log(pets);

pets.push("Charlie");
//remove an element by value from an array
pets.splice(pets.indexOf("Goose"), 1);
console.log(pets)

const counting = [];
for (let i = 0; i < 100; i++) {
	// counting[i] = i;
	counting.push(i);
}
// console.log(counting)
// console.log(Array.from(Array(100).keys())) //this does the same as lines 29-34

//converts an array to a string and separates each element in the array with the character provided as an argument
console.log(pets.join(","));

//opposite of join
console.log("Hello, world! How are you?".split(" "));

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

//adds an array to the end of another array (creates new array, doesn't change existing)
console.log(arr1.concat(arr2));
console.log([...arr1, ...arr2]); //spread operator