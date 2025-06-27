import { NavLink, Outlet } from "react-router";
import "./Dashboard.css"

export default function Dashboard() {
	return (
		<div className="Dashboard">
			<header>
				<NavLink className="navLink" to="/">Home</NavLink>
				<NavLink className="navLink" to="/about">About</NavLink>
			</header>
			<Outlet />
		</div>
	)
}