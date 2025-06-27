import { useState } from "react";

export default function SignUpFormless() {
	const [nameOfUser, setNameOfUser] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit() {
		console.log("name:", nameOfUser)
		console.log("email:", email)
		console.log("password:", password)
	}

	return (
		<div>
			<h1>Sign Up Formless</h1>
			<input name="name" placeholder="Name" onChange={(e) => setNameOfUser(e.currentTarget.value)} value={nameOfUser} />

			<input name="email" placeholder="Email" onChange={(e) => setEmail(e.currentTarget.value)} value={email} />

			<input name="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.currentTarget.value)} value={password} />

			<button onClick={handleSubmit}>Submit</button>

			<div>Hello {nameOfUser}, Welcome to our site!</div>
		</div>
	);
}