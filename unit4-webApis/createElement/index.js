const letters = ["a", "b", "c", "d", "e", "f"];
const headers = [1, 2, 3];

const gridElement = document.getElementById("grid");

for (let h of headers) {
	const newElement = document.createElement("div");
	newElement.textContent = h;
	newElement.classList.add("header");
	gridElement.appendChild(newElement);
}

for (let l of letters) {
	const newElement = document.createElement("div");
	newElement.textContent = l;
	newElement.classList.add("letter");
	newElement.addEventListener("click", (e) => {
		e.currentTarget.textContent = l + l;
	});
	gridElement.appendChild(newElement);
}