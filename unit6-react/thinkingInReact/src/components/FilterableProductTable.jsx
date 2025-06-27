import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default function FilterableProductTable() {
	const [search, setSearch] = useState("");
	const [showStocked, setShowStocked] = useState(false);

	return (
		<>
			<SearchBar search={search} setSearch={setSearch} showStocked={showStocked} setShowStocked={setShowStocked} />
			<ProductTable search={search} showStocked={showStocked} />
		</>
	);
}
