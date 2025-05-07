const alertButton = document.getElementById("alertButton");
alertButton.addEventListener("click", () => {
	alert("Hello, world!");
});

const emptyDiv = document.getElementById("emptyDiv");
emptyDiv.textContent = "Hello, world!";

const submitInput = document.getElementById("submitInput");
const submitButton = document.getElementById("submitButton");
const submitContent = document.getElementById("submitContent");

submitButton.addEventListener("click", () => {
	submitContent.textContent = submitInput.value;
})
