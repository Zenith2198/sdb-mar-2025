function triangle(x) {
	for (let i = 0; i < x; i++) {
		let row = "";
		for (let j = 0; j < i + 1; j++) {
			row += ".";
		}
		console.log(row);
	}
}

triangle(5);
console.log();
triangle(10);