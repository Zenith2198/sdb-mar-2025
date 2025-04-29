const menu = {
	burger: 15,
	fries: 6,
	shake: 5,
	salad: 12.50,
	order: function (orderPlaced) {
		const orderSplit = orderPlaced.split(" ");
		let sum = 0;

		for (let item of orderSplit) {
			if (this[item] !== undefined) {
				sum += this[item];
			} else {
				console.log("Sorry, we don't have " + item + " on this menu.");
				return;
			}
		}

		console.log(`Your price totals to $${sum}.`);
	}
};

menu.order("burger fries");
menu.order("salad");
menu.order("fries shake");
menu.order("burger burger burger");
menu.order("fries shake shake");
menu.order("burger coke fries");
menu.order("shake");
menu.order("order");