import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";

function App() {
	return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/signUp" element={<SignUp />} />
		</Routes>
	</BrowserRouter>
	);
}

export default App;
