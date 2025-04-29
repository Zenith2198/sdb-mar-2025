const favFoods = ["pasta", "chocolate", "pizza", "chick fil a"];

//for...of
console.log("for...of:");
for (let food of favFoods) {
	console.log(food);
}

//forEach
console.log("\nforEach:");
favFoods.forEach((food) => console.log(food));

const nums = [1, 2, 3, 4, 5];
nums.forEach((n) => n++); //you can't change the element in an array like this!
console.log(nums);

//map
console.log("\nmap");
const newNums = nums.map((n) => n + 1);
console.log(newNums);

//filter
console.log("\nfilter");
console.log(nums.filter((n) => n >= 5));

//reduce
console.log("\nreduce");
console.log(nums.reduce((acc, n) => acc + n));

const strs = ["hello", "world", "how", "are", "you"];
console.log(strs.reduce((acc, s) => acc.toUpperCase() + " " + s.toUpperCase()));

//find
console.log("\nfind");
console.log(nums.find((n) => n === 4));

function ourReduce(arr) {
	if (Array.isArray(arr)) {
		return arr.reduce((acc, e) => acc + e);
	}

	throw new Error("OOPS!");
}

console.log(ourReduce([1, 2, 3]));
console.log(ourReduce(7));