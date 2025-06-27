import { useState } from "react";
import { Link } from "react-router";

export default function Home() {
	const [sessionToken, setSessionToken] = useState(localStorage.getItem("sessionToken"));

	return (
		<div>
			<header>
				{sessionToken ? (
					<>
						Hi user
						<button onClick={() => {
							localStorage.removeItem("sessionToken");
							setSessionToken("");
						}}>Sign Out</button>
					</>
				) : (
					<div>
						<Link to="/signUp"><button>Sign Up</button></Link>
						<Link to="/signIn"><button>Sign In</button></Link>
					</div>
				)}
			</header>
		</div>
	);
}