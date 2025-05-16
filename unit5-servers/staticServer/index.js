import express from "express";

//initalize express app
const app = express();

//middlewares
//allows handling the body of the request object
app.use(express.urlencoded({ extended: true }));
//serves static files from the public folder
app.use(express.static("public"));

//route handlers
//overridden by index.html in the public folder
// app.get("/", (req, res) => {
// 	res.send("Hello home!");
// });

app.post("/formSubmit", (req, res) => {
	console.log(req.body);
	res.send("Submission successful!");
});

//start server
app.listen(3000, () => {
	console.log("Server is now listening on port 3000");
});