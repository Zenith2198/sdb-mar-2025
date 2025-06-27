import { Button, Card, CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap";
import "./App.css";

function App() {
	return (
		<>
			<Card
				className="text-start"
				style={{
					width: "18rem",
					padding: 0
				}}>
				<img alt="Sample" src="https://picsum.photos/300/200" />
				<CardBody>
					<CardTitle tag="h5">Card title</CardTitle>
					<CardSubtitle className="mb-2 text-muted" tag="h6">
						Card subtitle
					</CardSubtitle>
					<CardText>
						Some quick example text to build on the card title and
						make up the bulk of the card‘s content.
					</CardText>
					<Button>Button</Button>
				</CardBody>
			</Card>
		</>
	);
}

export default App;
