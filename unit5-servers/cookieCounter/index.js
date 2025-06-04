import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
	try {
		if (req.cookies.cookieCounter === undefined) {
			res.cookie("cookieCounter", 1);
			res.send("Number of times you've visited the site: 1");
			return;
		}

		let cookieCounter = parseInt(req.cookies.cookieCounter);
		if (isNaN(cookieCounter)) {
			res.send("Cookie cookieCounter is not a number.");
			return;
		}

		cookieCounter++;

		res.cookie("cookieCounter", cookieCounter);
		res.send("Number of times you've visited the site: " + cookieCounter);
	} catch (err) {
		console.log(err);
		res.send("An error occurred");
	}
});

app.listen(3000, () => {
	console.log("Now listening on port 3000");
});