function asyncDelay(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

async function main() {
	console.log("starting...");
	await asyncDelay(2000);
	console.log("2 seconds has passed");
	await asyncDelay(1000);
	console.log("1 more second has passed");
	console.log("finished");
}

console.log("before calling main");
main();
console.log("after calling main");