const mina = {
	species: "cat",
	"fur color": "black",
	weight: 16,
	age: 4
};

console.log(mina);
console.log(mina.age);
console.log(mina["fur color"]);

let stateCapitals = {
	California: "Sacramento",
	"New Hampshire": "Concord",
	Texas: "Austin",
	"South Carolina": "Columbia",
	Illinois: "Springfield",
	Georgia: "Tallahassee"
};

stateCapitals.Georgia = "Atlanta";
console.log(stateCapitals.Georgia);

const carter = {
	name: "Carter Rollins",
	age: 26,
	hairColor: "brown",
	pets: ["Mina", "Goose"],
	homeAddress: {
		street: "Sesame Street",
		houseNumber: 227,
		city: "Philadelphia"
	},
	scream: () => console.log("AAAAAAAAAAAAAAAAAAAAA")
}

carter.scream();
console.log(carter.homeAddress.city);

delete carter.scream;
console.log(carter);

const obj1 = {
	a: 1,
	b: 2,
	c: 3
}

const obj2 = {
	d: 4,
	e: 5,
	f: 6,
	c: 0
}

console.log({ ...obj1, ...obj2 });