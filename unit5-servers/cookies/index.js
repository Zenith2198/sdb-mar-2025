import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());

app.get("/", (req, res) => {
	console.log(req.cookies);
	res.send("Cookies received!");
});

app.post("/login", (req, res) => {
	//log in the user
	//check username and password

	res.cookie("sessionToken", "12345");
	res.send("Cookie set!");
});

app.get("/login", (req, res) => {
	//log in the user
	//check username and password

	res.cookie("sessionToken", "12345");
	res.send("Cookie set!");
});

app.listen(3000, () => {
	console.log("Now listening on port 3000");
});