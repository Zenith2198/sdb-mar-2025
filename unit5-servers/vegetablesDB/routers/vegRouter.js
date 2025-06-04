import { Router } from "express";
import Vegetable from "../models/Vegetable.js";

const vegRouter = Router();

vegRouter.get("/veg", (req, res) => {
	console.log("all the veg");

	res.json({ result: "all the veg" });
});

vegRouter.get("/veg/:id", async (req, res) => {
	const veg = await Vegetable.find({
		_id: req.params.id
	});

	res.json(veg);
});

vegRouter.post("/veg", async (req, res) => {
	try {
		const newVeg = new Vegetable(req.body);
		await newVeg.save();

		res.json(req.body);
	} catch {
		res.json({ error: "An error occurred." });
	}
});

vegRouter.post("/veg/:id", (req, res) => {
	console.log(req.params.id, req.body);

	res.json({ id: req.params.id, body: req.body });
});

vegRouter.delete("/veg/:id", (req, res) => {
	console.log(req.params.id);

	res.json({ id: req.params.id });
});

export default vegRouter;