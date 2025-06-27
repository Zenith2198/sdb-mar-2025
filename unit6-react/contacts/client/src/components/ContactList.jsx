import { NavLink } from "react-router";

export default function ContactList({ contacts }) {
	return (
		<div className="px-5 py-3 flex flex-col gap-3">
			{contacts.map((c) => (
				<NavLink to={`/contacts/${c._id}`} key={c._id} className={({ isActive }) => `btn btn-ghost btn-primary justify-start ${isActive ? "bg-primary text-primary-content" : ""}`}>
					{c.name}
				</NavLink>
			))}
		</div>
	);
}