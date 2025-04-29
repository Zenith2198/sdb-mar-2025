class Location {
	// your code here
	constructor(name, description) {
		this.name = name;
		this.description = description;
	}
}

let home = new Location("home", "You are at home");
let sidewalk = new Location("sidewalk", "You are on the sidewalk");
let store = new Location("store", "You are at the store");

let locationCurrent = "home";

let locationLookUp = {
	home,
	sidewalk,
	store
};

let locationStates = {
	home: ["sidewalk"],
	sidewalk: ["home", "store"],
	store: ["sidewalk"]
};

function moveLocation(newLocation) {
	// your code here
}

console.log("You're chillin at home but you got a little hungry and now you want to get a snack at the store.");

moveLocation("sidewalk");
// Prints 'You are on the sidewalk.'
moveLocation("store");
// Prints 'You are in the store.'
moveLocation("home");
// Prints 'You cannot go from store to home.'
moveLocation("sidewalk");
// Prints 'You are on the sidewalk.'
moveLocation("home");
// Prints 'You are at your house.'
moveLocation("park");
// Prints 'You cannot go from home to park.'
