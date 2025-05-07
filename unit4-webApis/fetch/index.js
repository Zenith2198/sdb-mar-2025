async function doFetch() {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
	const result = await response.json();
	console.log(result.name);
}

doFetch();

async function doTxtFetch() {
	const response = await fetch("https://www.youtube.com/robots.txt");
	const result = await response.text();
	console.log(result)
}

// doTxtFetch();