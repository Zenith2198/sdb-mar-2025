import express from "express";
const database = [
	{ id: 1, name: "Sally", email: "sjones93@gmail.com"  },
	{ id: 2, name: "Bill", email: "rocketjones23@hotmail.com" }
];

const app = express();

//middleware to expose the json request object on the body
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello home!");
});

app.get("/users", (req, res) => {
	res.json(database);
});

app.post("/users", (req, res) => {
	//TODO: validate request body to make sure it has:
	//all 3 fields that we need
	//no duplicate ids
	database.push(req.body);
	res.json({ message: "Success" });
});

app.get("/users/:id", (req, res) => {
	try {
		//parse request id from string to number
		const id = parseInt(req.params.id);
		//check if id was a number
		if (isNaN(id)) {
			res.json({ error: "Invalid id: " + req.params.id });
			return;
		}

		//get user with id from request
		const user = database.find((user) => user.id === id);
		//check if user was found
		if (!user) {
			res.json({ error: "User not found: " + id });
			return;
		}

		//respond with user from database
		res.json(user);
	} catch {
		res.status(400).json("Error")
	}
});

app.listen(3000, () => {
	console.log("Server is now listening on port 3000");
});