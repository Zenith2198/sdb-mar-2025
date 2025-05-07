async function doFetch() {
	const response = await fetch("/presidents.json");
	const result = await response.json();
	console.log(result);
}

doFetch();