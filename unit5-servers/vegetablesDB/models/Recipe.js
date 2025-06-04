import { Schema, model, Types } from "mongoose";

const schema = new Schema({
	name: {
		type: String,
		required: true
	},
	ingredients: [{
		type: Types.ObjectId,
		ref: "Vegetable"
	}]
});

export default model("Recipe", schema);