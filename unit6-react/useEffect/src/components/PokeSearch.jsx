export default function PokeSearch({ search, setSearch }) {
	return (
		<form onSubmit={(e) => {
			e.preventDefault();
			setSearch(e.currentTarget.search.value);
		}}>
			<input name="search" placeholder="Search Pokemon..." />
			<button>Search</button>
		</form>
	)
}