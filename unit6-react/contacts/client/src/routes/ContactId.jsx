import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ContactId() {
	const { _id } = useParams();

	const [contact, setContact] = useState({});

	useEffect(() => {
		async function doFetch() {
			const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/contacts/${_id}`);
			if (response.ok) {
				const result = await response.json();
				setContact(result);
			}
		}

		doFetch();
	}, [_id]);

	return (
		<div className="p-10">
			<h1 className="text-3xl">{contact.name}</h1>
		</div>
	)
}