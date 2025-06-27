import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import "./ProductTable.css";

export default function ProductTable({ search, showStocked }) {
	const inventory = [
		{ category: "Fruits", price: "$1", stocked: true, name: "Apple" },
		{ category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
		{
			category: "Fruits",
			price: "$2",
			stocked: false,
			name: "Passionfruit"
		},
		{ category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
		{
			category: "Vegetables",
			price: "$4",
			stocked: false,
			name: "Pumpkin"
		},
		{ category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
	];

	//convert inventory into object, where keys are the category, and values are arrays of objects
	const inventoryByCategory = {};
	for (let item of inventory) {
		if (inventoryByCategory[item.category]) {
			//array already exists in object
			inventoryByCategory[item.category].push(item);
		} else {
			//array doesn't exist yet
			inventoryByCategory[item.category] = [item];
		}
	}

	return (
		<main className="ProductTable">
			<div className="grid">
				<span>Name</span>
				<span>Price</span>
			</div>

			{Object.entries(inventoryByCategory).map(([category, items]) => (
				<div key={category}>
					<ProductCategoryRow title={category} />
					{items.reduce((acc, i) => {
						if (i.name.toLowerCase().includes(search.toLowerCase()) && !(showStocked && !i.stocked)) {
							acc.push(
								<ProductRow
									key={i.name}
									className="grid"
									name={i.name}
									price={i.price}
									stocked={i.stocked}
								/>
							);
						}

						return acc;
					}, [])}
				</div>
			))}
		</main>
	);
}
