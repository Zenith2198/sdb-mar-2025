import { useParams } from "react-router";

export default function RoomId() {
	let { id } = useParams();

	return <>Room {id}</>
}