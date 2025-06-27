export default function SignUp({ nameOfUser, setNameOfUser }) {
	function handleSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		console.log(formData)

		setNameOfUser("New User");
		// console.log(event.currentTarget.name.value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<h3>Sign Up</h3>
			<input name="name" placeholder="Name" onChange={(e) => setNameOfUser(e.currentTarget.value)} value={nameOfUser} />
			<input name="email" placeholder="Email" />
			<input name="password" type="password" placeholder="Password" />
			<button>Submit</button>
		</form>
	);
}