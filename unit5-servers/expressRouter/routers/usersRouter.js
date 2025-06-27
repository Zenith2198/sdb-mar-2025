import { Router } from "express";
import fs from "fs";

const usersRouter = Router();

usersRouter.get("/users", (req, res) => {
	try {
		fs.readFile(process.env.USERS_FILEPATH, { encoding: "utf8" }, (err, data) => {
			if (err) {
				res.json({ error: err });
				return;
			}

			res.json(JSON.parse(data));
		});
	} catch (err) {
		res.json({ error: err });
	}
});

usersRouter.get("/users/:id", (req, res) => {
	try {
		fs.readFile(process.env.USERS_FILEPATH, { encoding: "utf8" }, (err, data) => {
			if (err) {
				res.json({ error: err });
				return;
			}

			const users = JSON.parse(data);
			const id = parseInt(req.params.id);
			const foundUser = users.find((u) => u.id === id);

			res.json(foundUser);
		});
	} catch (err) {
		res.json({ error: err });
	}
});

usersRouter.post("/users", (req, res) => {
	//read the file
	fs.readFile(process.env.USERS_FILEPATH, { encoding: "utf8" }, (err, data) => {
		//handle error
		if (err) {
			res.json({ error: err });
			return;
		}

		try {
			//parse into array
			const users = JSON.parse(data);

			//add user to array
			//TODO: validate input
			//check for all the fields we want,
			//check to make sure no duplicate ids
			//OR disallow user provided ids, generate them ourselves
			users.push(req.body);

			//write back out to file
			fs.writeFile(process.env.USERS_FILEPATH, JSON.stringify(users, undefined, 4), (err) => {
				//handle error
				res.json({ error: err });
				return;
			});
		} catch (err) {
			res.json({ error: err });
			return;
		}
	});

	//respond success
	res.json({ message: "Success" });
});

export default usersRouter;