const states = {
	green: ["yellow"],
	yellow: ["red"],
	red: ["green"]
}

let currentLight = "red";

function transition(newLight) {
	if (states[currentLight].includes(newLight)) {
		console.log(`Transitioned to ${newLight}!`);
		currentLight = newLight;
	} else {
		console.log(`Can't transition from ${currentLight} to ${newLight}.`);
	}
}

console.log(currentLight);
transition("yellow"); //shouldn't work
console.log(currentLight);
transition("green"); //should work
console.log(currentLight);
