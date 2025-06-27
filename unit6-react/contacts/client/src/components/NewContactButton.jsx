import { useRef } from "react";

export default function NewContactButton({ contacts, setContacts }) {
	const dialogRef = useRef(null);

	async function handleSubmit(event) {
		event.preventDefault();

		const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/contacts`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name: event.currentTarget.name.value
			})
		});

		if (response.ok) {
			const newContact = await response.json();
			setContacts([...contacts, newContact]);
			dialogRef.current.close();
		}
	}

	return (
		<>
			<button
				className="btn btn-primary"
				onClick={() => dialogRef.current.showModal()}>
				New
			</button>
			<dialog ref={dialogRef} className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">Add new contact</h3>
					<form onSubmit={handleSubmit}>
						<fieldset className="fieldset">
							<legend className="fieldset-legend">
								Contact name:
							</legend>
							<input
								type="text"
								className="input"
								required
								name="name"
							/>
						</fieldset>

						<button className="btn btn-success">Add New Contact</button>
					</form>

					<div className="modal-action">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn btn-error">Close</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
}
