const pizzaMenu = {
	cheese: ["tomato sauce", "mozzarella"],
	tomato: ["tomato sauce", "roasted garlic"],
	alfredo: ["mozzarella", "creamy white sauce", "sauteed broccoli", "grilled chicken"],
	arrabiata: ["spicy marinara", "mozzarella", "pepperoni", "onion", "olives"]
};

console.log("\nfor...in");
for (let pizza in pizzaMenu) {
	console.log(pizza + ":", pizzaMenu[pizza].join(", "));
}

console.log("\nObject.keys");
for (let pizza of Object.keys(pizzaMenu)) {
	console.log(pizza);
}

console.log("\nObject.values");
for (let ingredients of Object.values(pizzaMenu)) {
	console.log(ingredients);
}

console.log("\nObject.entries");
//using destructuring to name each element in the array
for (let [pizza, ingredients] of Object.entries(pizzaMenu)) {
	console.log(pizza, ingredients);
}