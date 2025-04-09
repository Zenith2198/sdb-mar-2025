function xByx(x) {
	for (let i = 0; i < x; i++) {
		let row = "";
		for (let j = 0; j < x; j++) {
			row += ".";
		}
		console.log(row);
	}
}

xByx(5);
console.log();
xByx(10);
console.log();
xByx(2);
console.log();

function xByy(x, y) {
	for (let i = 0; i < x; i++) {
		let row = "";
		for (let j = 0; j < y; j++) {
			row += ".";
		}
		console.log(row);
	}
}

xByy(5, 10);