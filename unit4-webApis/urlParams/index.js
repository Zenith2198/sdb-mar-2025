const keyInp = document.getElementById("key");
const valInp = document.getElementById("val");

document.getElementById("btn").addEventListener("click", () => {
	const searchString = document.location.search;
	const searchParams = new URLSearchParams(searchString);

	searchParams.set(keyInp.value, valInp.value);

	document.location.search = searchParams.toString();
});
