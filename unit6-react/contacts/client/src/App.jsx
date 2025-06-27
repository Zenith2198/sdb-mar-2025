import { BrowserRouter, Route, Routes } from "react-router";
import Contacts from "./routes/Contacts";
import ContactId from "./routes/ContactId";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<>Welcome to my contact book</>} />
				<Route path="contacts" element={<Contacts />}>
					<Route index element={<>Select a contact</>} />
					<Route path=":_id" element={<ContactId />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
