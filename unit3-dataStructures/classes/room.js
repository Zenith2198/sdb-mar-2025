class Item {
	constructor(name, description) {
		this.name = name;
		this.description = description;
		this.actions = ["look at"];
	}

	lookAt() {
		console.log(this.description);
	}
}

class MoveableItem extends Item {
	constructor(name, description) {
		super(name, description);
		this.actions.push("pick up");
	}

	pickUp() {
		console.log(`You picked up the ${this.name}!`);
	}
}

class InteractibleItem extends Item {
	constructor(name, description) {
		super(name, description);
		this.actions.push("interact");
	}
}

class Room {
	constructor(items) {
		this.items = items;
	}
}

const room1 = new Room([new MoveableItem("key", "A key"), new InteractibleItem("door", "A locked door")]);
room1.items.find((i) => i.name === "key").pickUp();

//this is identical to room1
const room2 = {
	items: [
		{
			name: "key",
			description: "A key",
			actions: ["look at", "pick up"]
		},
		{
			name: "door",
			description: "A locked door",
			actions: ["look at"]
		}
	]
}

const REALlookupExample = {
	exampleRoom: new Room([new Item("some name", "example desc")])
}

const lookupExample = {
	exampleRoom: { //room class
		items: [
			{ //item class
				name: "some name",
				description: "example desc"
			}
		]
	}
}

REALlookupExample["exampleRoom"].items.find((e) => e.name === "some name").description;
console.log("1", REALlookupExample)
console.log("2", REALlookupExample["exampleRoom"])
console.log("3", REALlookupExample["exampleRoom"].items)
console.log("4", REALlookupExample["exampleRoom"].items.find)
console.log("5", REALlookupExample["exampleRoom"].items.find((e) => e.name === "some name"))
console.log("6", REALlookupExample["exampleRoom"].items.find((e) => e.name === "some name").description)