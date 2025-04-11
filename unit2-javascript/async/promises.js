console.log("starting..."); //first

// use the new keyword to create a new Promise, a new Promise takes as argument a function that has 2 arguments. The first argument is a function to call to resolve the promise (success), the second argument is a function to reject the promise (failure).
const myPromise = new Promise((resolve) => {
	console.log("promise has started"); //second (sorta) (race condition!!!!)
	// set timeout to do a thing, first argument is thing to do, second argument is how long to wait before doing the thing
	setTimeout(() => {
		console.log("setTimeout has finished"); //sixth
		// resolve the promise (success)
		resolve("Done!");
	}, 2000);
	console.log("setTimeout has started"); //third (sorta) (race condition!!!!)
});

console.log("after the promise has been created"); //fourth

// wait for promise to resolve (success) with .then
myPromise.then((result) => {
	console.log(result); //seventh
});

console.log("after .then"); //fifth