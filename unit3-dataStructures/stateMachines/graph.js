const states = {
	one: ["four", "ten"],
	two: ["three", "six", "four"],
	three: ["two"],
	four: ["one", "two", "ten"],
	five: ["six", "seven"],
	six: ["two", "five"],
	seven: ["five", "eight", "eleven"],
	eight: ["seven"],
	nine: ["twelve"],
	ten: ["one", "four", "twelve"],
	eleven: ["seven"],
	twelve: ["nine", "ten"]
}

let currentState = "one";

function transition(newState) {
	if (states[currentState].includes(newState)) {
		currentState = newState;
		console.log(`Transitioned to ${newState}!`);
	} else {
		console.log(`Can't transition from ${currentState} to ${newState}.`);
	}
}

transition("four");
transition("ten");
transition("twelve");
transition("nine");
transition("eight");