import { useNavigate } from "react-router";

export default function SignUp() {
	const navigate = useNavigate();

	if (localStorage.getItem("sessionToken")) {
		return <>Can't sign up when already logged in. Please log out to create a new account.</>;
	}

	async function handleSignUp(event) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/signUp`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(Object.fromEntries(formData))
		});

		if (response.ok) {
			const result = await response.json();
			localStorage.setItem("sessionToken", result.sessionToken);
			navigate("/");
		} else {
			const result = await response.json();
			console.log(result.error);
		}
	}

	return (
		<form onSubmit={handleSignUp}>
			<h1>Sign Up</h1>

			<div>
				<label htmlFor="username">Enter Username</label>
				<input
					name="username"
					id="username"
					placeholder="Username"
					required
				/>
			</div>

			<div>
				<label htmlFor="password">Enter Password</label>
				<input
					name="password"
					id="password"
					type="password"
					placeholder="Password"
					required
				/>
			</div>

			<button>Sign Up</button>
		</form>
	);
}
