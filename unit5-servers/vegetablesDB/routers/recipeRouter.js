import { Router } from "express";
import Recipe from "../models/Recipe.js";

const recipeRouter = Router();

recipeRouter.get("/recipe", (req, res) => {
	console.log("all the recipe");

	res.json({ result: "all the recipe" });
});

recipeRouter.get("/recipe/:id", (req, res) => {
	console.log(req.params.id);

	res.json({ recipe: req.params.id });
});

recipeRouter.post("/recipe", async (req, res) => {
	try {
		const newRecipe = new Recipe(req.body);
		await newRecipe.save();

		res.json(req.body);
	} catch {
		res.json({ error: "An error occurred." });
	}
});

recipeRouter.post("/recipe/:id", (req, res) => {
	console.log(req.params.id, req.body);

	res.json({ id: req.params.id, body: req.body });
});

recipeRouter.delete("/recipe/:id", (req, res) => {
	console.log(req.params.id);

	res.json({ id: req.params.id });
});

export default recipeRouter;