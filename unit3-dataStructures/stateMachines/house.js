const house = {
	kitchen: ["livingRoom", "diningRoom", "bedroom"],
	diningRoom: ["kitchen", "basement"],
	livingRoom: ["kitchen"],
	bedroom: ["kitchen"],
	basement: ["diningRoom"]
}

let currentState = "kitchen";

function transition(newState) {
	if (house[currentState].includes(newState)) {
		console.log(`Transitioned from ${currentState} to ${newState}!`);
		currentState = newState;
	} else {
		console.log(`Can't transition from ${currentState} to ${newState}.`);
	}
}

transition("diningRoom");
transition("basement");
transition("diningRoom");
transition("kitchen");
transition("bedroom");