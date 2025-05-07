async function doFetch() {
	try {
		const response = await fetch("https://www.youtube.com/robots.txt");
		const result = await response.json();
		console.log(result);
	} catch(error) {
		console.log(error.message);
	}
}

doFetch();