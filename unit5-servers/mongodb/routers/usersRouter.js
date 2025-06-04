import { Router } from "express";
import User from "../models/User.js";

const usersRouter = Router();

usersRouter.get("/users", async (req, res) => {
	const allUsers = await User.find();

	res.json(allUsers);
});

export default usersRouter;