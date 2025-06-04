import { Schema, model } from "mongoose";

const postsSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	}
});

export default model("Post", postsSchema);