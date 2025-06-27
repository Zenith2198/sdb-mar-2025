import { useEffect, useState } from "react";

export default function PokeDisplay({ search }) {
	const [pokemon, setPokemon] = useState({});

	useEffect(() => {
		async function doFetch() {
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
			//TODO: check if search was successful
			const ditto = await response.json();

			setPokemon(ditto);
		}

		doFetch();
	}, [search]);

	return <>
	search: {search} result: {pokemon.name} has a height of {pokemon.height}</>
}