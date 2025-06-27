import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Dashboard from "./routes/Dashboard";
import RoomId from "./routes/RoomId";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="rooms/:id" element={<RoomId />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
