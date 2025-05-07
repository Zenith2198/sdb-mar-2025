const timeoutDisplay = document.getElementById("timeoutDisplay");
const startInterval = document.getElementById("startInterval");
const intervalDisplay = document.getElementById("intervalDisplay");

document.getElementById("startTimeout").addEventListener("click", (e) => {
	e.currentTarget.disabled = true;

	timeoutDisplay.textContent = "Getting ready...";
	setTimeout(() => {
		timeoutDisplay.textContent = "READY";
		timeoutDisplay.classList.remove("gettingReady");
		timeoutDisplay.classList.add("ready");
		startInterval.disabled = false;
	}, 5000);
});

startInterval.addEventListener("click", (e) => {
	e.currentTarget.disabled = true;

	let count = 5;
	intervalDisplay.textContent = count;

	const intervalId = setInterval(() => {
		count -= 1;
		intervalDisplay.textContent = count;

		if (count <= 0) {
			intervalDisplay.textContent = "GO!";
			clearInterval(intervalId);
		}
	}, 1000);
});