# Instructions  

## Menu Order

## Objective

In this exercise we will be using an object to represent a restaurant menu, and attaching a method that will take an human user's order and return the total price of items within the order.

We will be represent the following menu within an object:

| Item   | Price |
|--------|-------|
| Burger | $5.00 |
| Fries  | $3.50 |
| Shake  | $1.11 |
| Salad  | $4.25 |

## Learning

In this exercise, we will be practicing creating an Object with an attached method. We will also practice with the `for...of` iteration syntax.

Topics:

- Objects.
- [Object methods.](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
- [`for...of` Array iteration.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)


## Procedure


### Create a `menu` Object

- [ ] Create an Object named `menu`.
- [ ] Inside of `menu`, we will need a series of `key: value` pairs that represent the items on the menu and their cost.
- [ ] _Hint:_ `burger: 5.55`
- [ ] Have at least four entries to represent four different items on your menu. Each should have a different price.

### Create an `order` Method on the `menu` Object

- [ ] After the initial `key: value` pairs inside of `menu`, create a method named `order`.
- [ ] Hint: The key is `order` and the value is the function the method will run. Reference the link on `Object methods` in the topics section above 
- [ ] `order`'s anonymous function should take the parameter `orderPlaced`.

### Build the method `order`

- [ ] The `orderPlaced` will be coming in as a String of multiple items. Create a variable `orderSplit` to hold the result of splitting `orderPlaced` into an Array with each item its own index.
    -ex. `"fries salad shake"` will become `["fries", "salad", "shake"]`
- [ ] Create a `sum` variable to contain our order sum, starting at `0`.
- [ ] Set up a `for...of` iteration loop. It will need to iterate over every `item` of `orderSplit`.
- [ ] Within the code block of the `for...of` loop, reassign `sum` to be `sum` plus the cost of the item from the menu. You will need bracket notation here.
- [ ] After the loop completes, print the `sum` variable.

### Call the method `menu.order()`

- [ ] Invoke `order` on menu multiple times, passing in different combinations of menu items to see differing results printed to the console.

## Review

In this exercise, we created the `menu` Object that contains multiple menu items and the `order` method to sum up any orders placed to the menu. The software should:

- Be able to print the sum of an order to the console. An order is a String passed as an argument to `menu.order()` that contains multiple items that correlate to keys within the `menu` object.

## Going Further

- What if an order is placed that contains an item not on the menu? Create error handling for this scenario.