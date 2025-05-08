const nameElement = document.getElementById("name");
const idElement = document.getElementById("id");
const pokeHeaderElement = document.getElementById("pokeHeader");
const spriteElement = document.getElementById("sprite");
const heightElement = document.getElementById("height");
const weightElement = document.getElementById("weight");

document.getElementById("searchForm").addEventListener("submit", async (e) => {
	e.preventDefault();

	//get input element
	const searchInput = e.currentTarget.searchInput;

	//check if search is empty
	if (!searchInput.value) {
		return;
	}

	//set url parameters
	// document.location.search = new URLSearchParams({ search: searchInput.value });

	try {
		//fetch from pokeAPI
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput.value}`);
		//check if there's an error in our response
		if (!response.ok) {
			searchInput.labels[0].textContent = "Something went wrong!";
			return;
		}
		//clear any previous errors
		searchInput.labels[0].textContent = "";
		//parse JSON from the response
		const pokemon = await response.json();

		//display data on the page
		nameElement.textContent = pokemon.name[0].toUpperCase() + pokemon.name.slice(1).toLowerCase();
		idElement.textContent = "ID: " + pokemon.id;
		pokeHeaderElement.classList.add("pokeHeader");
		spriteElement.src = pokemon.sprites.front_default;
		heightElement.textContent = "Height: " + pokemon.height;
		weightElement.textContent = "Weight: " + pokemon.weight;
	} catch(err) {
		console.log(err);
	}
});