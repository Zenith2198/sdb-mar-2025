import { Router } from "express";
import fs from "fs";

const searchRouter = Router();

searchRouter.get("/search", (req, res) => {
	try {
		fs.readFile("pokemon.json", { encoding: "utf8" }, (err, data) => {
			const pokemon = JSON.parse(data);

			const filteredPokemon = pokemon.filter((poke) => {
				return Object.entries(req.query).every(([field, value]) => {
					if (typeof poke[field] === "number") {
						return poke[field] === parseInt(value);
					} else if (typeof poke[field] === "string") {
						return poke[field].includes(value);
					} else if (typeof poke[field] === "array") {

					} else if (typeof poke[field] === "object") {

					} else {
						return poke[field] == value;
					}
				});
			});

			res.json(filteredPokemon);
		});
	} catch (err) {
		res.json({ error: err.message });
	}
});

export default searchRouter;