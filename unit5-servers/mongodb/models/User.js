import { Schema, model } from "mongoose";

const usersSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	}
});

export default model("User", usersSchema);