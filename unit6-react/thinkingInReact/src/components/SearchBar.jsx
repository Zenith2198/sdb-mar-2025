export default function SearchBar({ search, setSearch, showStocked, setShowStocked }) {
	return (
		<header>
			<input placeholder="Search..." value={search} onChange={(e) => setSearch(e.currentTarget.value)} />
			<div>
				<input type="checkbox" checked={showStocked} onChange={(e) => setShowStocked(e.currentTarget.checked)} />
				<span>Only show products in stock</span>
			</div>
		</header>
	);
}
