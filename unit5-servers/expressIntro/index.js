import express from "express"; // <-- new "module" way
// const express = require("express"); <-- old way

const app = express();

app.get("/", (req, res) => {
	console.log("GET request at home route!");
	res.send("Hello, home!");
});

app.get("/info", (req, res) => {
	res.send("Hello, here's some info.");
});

app.get("/info/moreInfo", (req, res) => {
	res.send("Here's some more info!");
});

app.get("/info/:car", (req, res) => {
	res.send("car: " + req.params.car);
});

app.get("/info/:car/:model", (req, res) => {
	try {
		res.send(req.params.car + " " + req.params.model);
	} catch {
		res.status(400).send();
	}
});

app.listen(3000, () => {
	console.log("Express app now listening at port 3000.");
});