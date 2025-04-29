const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// i. Use filter() to create an array of even numbers.
console.log(numbers.filter((n) => n % 2 === 0));

// ii. Use map() to create an array where each number is doubled.
console.log(numbers.map((n) => n * 2));

// iii. Use find() to get the first number greater than 7.
console.log(numbers.find((n) => n > 7));

// iv. Use forEach() to log each number and its square to the console.
numbers.forEach((n) => console.log(n));

// v. Use reduce() to calculate the sum of all numbers.
console.log(numbers.reduce((acc, n) => acc + n));

// vi. Use method chaining to create an array of the squares of odd numbers.
console.log(numbers.filter((n) => n % 2 === 1).map((n) => n ** 2));
console.log(numbers.reduce((acc, n) => {
	if (n % 2 === 1) {
		// return [...acc, n ** 2]
		acc.push(n ** 2); //same thing as above
	}
	return acc;
}, []));

// vii. Bonus: Sum of squares of even numbers
console.log(
	numbers.filter((n) => n % 2 === 0).reduce((acc, n) => acc + n ** 2, 0)
);
console.log(
	numbers.reduce((acc, n) => {
		if (n % 2 === 0) {
			return acc + n ** 2;
		}
		return acc;
	}, 0)
);
