class Pizza {
	constructor(size, toppings) {
		this.size = size;
		this.toppings = toppings;
	}

	describe() {
		return `This is a ${this.size} inch pizza with ${this.toppings.join(", ")}.`;
	}

	static whatIs() {
		return "A pizza is a dish of Italian origin consisting of a flat, round base of dough baked with a topping of tomato sauce and cheese, typically with added meat or vegetables.";
	}
}

const pizza1 = new Pizza(12, ["cheese", "pepperoni"]);
console.log(pizza1.describe());

const pizza2 = new Pizza(16, ["cheese", "olives"]);
console.log(pizza2.describe());

console.log(Pizza.whatIs());
