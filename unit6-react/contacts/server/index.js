import express from "express";
import mongoose from "mongoose";
import Contact from "./models/Contact.js";
import cors from "cors";

//mongoose
mongoose.connect("mongodb://localhost:27017/contactsDb");
const db = mongoose.connection;
db.once("open", () => {
	console.log("Database connected");
});

//express server
const app = express();

app.use(express.json());
app.use(cors());

app.get("/contacts", async (req, res) => {
	const allContacts = await Contact.find();

	res.json(allContacts);
});

app.get("/contacts/:_id", async (req, res) => {
	const contact = await Contact.findById(req.params._id);

	res.json(contact);
});

app.post("/contacts", async (req, res) => {
	const newContact = new Contact(req.body);
	await newContact.save();

	res.json(newContact);
});

app.listen(3000, () => {
	console.log("Now listening on port 3000");
});