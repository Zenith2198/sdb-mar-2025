import "./ProductRow.css";

export default function ProductRow({ className, name, price, stocked }) {
	return (
		<div className={`${className} ProductRow`}>
			{stocked ? (
				<span>{name}</span>
			) : (
				<span className="outOfStock">{name}</span>
			)}
			<span>{price}</span>
		</div>
	);
}
