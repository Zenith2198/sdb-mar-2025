import { Outlet } from "react-router";
import NewContactButton from "../components/NewContactButton";
import ContactList from "../components/ContactList";
import { useEffect, useState } from "react";

export default function Contacts() {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		async function doFetch() {
			const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/contacts`);
			if (response.ok) {
				const result = await response.json();
				setContacts(result);
			}
		}

		doFetch()
	}, []);

	return (
		<div className="h-screen w-screen grid grid-cols-3">
			<div className="flex flex-col bg-base-200 border-r-2 border-base-300">
				<div className="flex px-5 py-3 gap-3 border-b-2 border-base-300">
					<input placeholder="Search" className="input" />
					<NewContactButton contacts={contacts} setContacts={setContacts} />
				</div>
				<ContactList contacts={contacts} />
			</div>
			<div className="col-span-2">
				<Outlet />
			</div>
		</div>
	);
}