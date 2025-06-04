import { Router } from "express";
import Post from "../models/Post.js";

const postsRouter = Router();

postsRouter.post("/posts", async (req, res) => {
	try {
		const newPost = new Post(req.body);
		await newPost.save();

		res.json({ result: "Success" });
	} catch (err) {
		console.log(err);
		res.json({ error: "An error occurred" });
	}
});

export default postsRouter;