# Capitalize

# Objective

## Learning

In this exercise we will be practicing string manipulation and initializing variables. We will also learn the utility of `console.log()`

Topics

- [`.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- [`.toUpperCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [`.toLowerCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
- `console.log()`

## Achieving

In this exercise, we will be achieving a piece of software that takes a word or phrase and converts it to have a capitalized first letter with the rest in lowercase.

Your work will result in:

- Variables `word`, `firstLetter`, `restOfWord`, and `fullWord` to manipulate our string and create its capitalized version.

# Procedure

## Create the String Variables
- [ ] Create a `word` variable and assign it a string value you want to capitalize
    - ex. "LeTTuCe"
- [ ] Initialize a `firstLetter` variable and assign it the value of our string's first index
- [ ] Initialize a `restOfWord` variable and assign it the value of the rest of our string's indexes. 
    - ex. For the word "LeTTuCe",  `restOfWord` would be "eTTuCe"
    - hint: use `.slice()` to achieve this
- [ ] Make the `firstLetter` variable uppercase, make the `restOfWord` variable lowercase
- [ ] Concatenate the resulting strings and assign them to a `fullWord` variable
- [ ] Pring the `fullWord` variable

# Review

In this exercise, we have written code that takes a string and converts it to have a capitalized first letter with the rest in lowercase. 

## Going Further

To take your software further:

- Try to chain methods together to reduce the total lines of code

```js
someWord.slice(0, 1).toUpperCase()
```
