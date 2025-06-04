import { Router } from "express";
import fs from "fs";

const pokemonRouter = Router();

pokemonRouter.get("/pokemon", (req, res) => {
	try {
		fs.readFile("pokemon.json", { encoding: "utf8" }, (err, data) => {
			const pokemon = JSON.parse(data);

			res.json(pokemon);
		});
	} catch (err) {
		res.json({ error: err.message });
	}
});

pokemonRouter.get("/pokemon/:id", (req, res) => {
	try {
		fs.readFile("pokemon.json", { encoding: "utf8" }, (err, data) => {
			const pokemon = JSON.parse(data);
			//check if database is an array
			if (typeof pokemon !== "array") {
				res.json({ error: "Invalid database configuration" });
				return;
			}

			//checked if id from params is a number
			const id = parseInt(req.params.id);
			if (isNaN(id)) {
				//id was not a number
				res.json({ error: "Invalid ID" });
				return;
			}

			//find pokemon with id in database
			const foundPoke = pokemon.find((poke) => poke.id === id);
			//check if pokemon was in database
			if (!foundPoke) {
				//foundPoke is undefined
				res.json({ error: `Pokemon with ID ${id} not found` });
				return;
			}

			//send user the found pokemon
			res.json(foundPoke);
		});
	} catch (err) {
		res.json({ error: err.message });
	}
});

pokemonRouter.post("/pokemon", (req, res) => {
	try {
		fs.readFile("pokemon.json", { encoding: "utf8" }, (err, data) => {
			const pokemon = JSON.parse(data);

			pokemon.push(req.body);

			fs.writeFile("pokemon.json", JSON.stringify(pokemon, undefined, 4), (err) => {});

			res.json({ response: "Success" });
		});
	} catch (err) {
		res.json({ error: err.message });
	}
});

export default pokemonRouter;
