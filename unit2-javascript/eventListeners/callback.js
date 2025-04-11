function someFunc(cb) {
	console.log("hi")
	console.log("hello")
	console.log("im doing stuff")

	cb();
}

function callbackFunc() {
	console.log("we are in callbackFunc now!")
}

someFunc(callbackFunc) //don't do this
someFunc(() => { //do this instead!
	console.log("we are in the arrow function callback now!")
})
someFunc(() => {
	console.log("2nd arrow function")
})

function someOtherFunc(cb) {
	console.log("im checking your taxes, one moment please")

	cb("your taxes were fine!")
}

someOtherFunc((result) => {
	if (result === "your taxes were fine!") {
		console.log("phew! im glad")
	} else {
		console.log("OH NO")
	}
})
