document.getElementById("exForm").addEventListener("submit", (e) => {
	e.preventDefault();

	console.log(e.currentTarget.first.value);
	console.log(e.currentTarget.last.value);
	console.log(e.currentTarget.email.value);
	console.log(e.currentTarget.password.value);
	console.log(e.currentTarget.dobInput.value);

	// e.currentTarget.reset();
});

document.getElementById("resetFormBtn").addEventListener("click", (e) => {
	e.currentTarget.form.reset();
})