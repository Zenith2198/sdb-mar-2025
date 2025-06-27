import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import User from "./models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validateSession from "./middlewares/validateSession.js";
import cors from "cors";

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.once("open", () => {
	console.log("Database connected");
});

const app = express();

app.use(express.json());
app.use(cors());

app.post("/signUp", async (req, res) => {
	try {
		const passwordHash = bcrypt.hashSync(req.body.password, 10);
		const newUser = new User({
			...req.body,
			password: passwordHash
		});

		const sessionToken = jwt.sign(
			{ _id: newUser._id },
			process.env.JWT_SECRET,
			{ expiresIn: 60 * 60 * 24 }
		);

		await newUser.save();
		res.json({ message: "Sign up successful", sessionToken });
	} catch (err) {
		console.log(err);
		res.status(400).json({error: "An error occurred"});
	}

});

app.post("/signIn", async (req, res) => {
	try {
		//validate the shape of the request
		const user = await User.findOne({
			username: req.body.username
		});

		if (!bcrypt.compareSync(req.body.password, user.password)) {
			res.json({ error: "Incorrect password" });
		}

		const sessionToken = jwt.sign(
			{ _id: user._id },
			process.env.JWT_SECRET,
			{ expiresIn: 60 * 60 * 24 }
		);

		res.json({ message: "Login successful", sessionToken });
	} catch (err) {
		console.log(err);
		res.json({error: "An error occurred"});
	}
});

app.post("/post", validateSession, (req, res) => {
	console.log(req.user);

	res.json({ message: "Post made successfully" });
});

app.listen(3000, () => {
	console.log("Server running on port 3000");
});