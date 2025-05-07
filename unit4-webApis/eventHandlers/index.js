document.getElementById("btn").addEventListener("click", (event) => {
	console.log(event);
});

//bubbling
document.getElementById("outer").addEventListener("click", (event) => {
	console.log("outer:", event.target.id, event.currentTarget.id);
});
document.getElementById("inner").addEventListener("click", (event) => {
	console.log("inner:", event.target.id);
});
document.getElementById("bubbleBtn").addEventListener("click", (event) => {
	event.stopPropagation(); //prevents bubbling
	console.log("bubbleBtn:", event.target.id);
});