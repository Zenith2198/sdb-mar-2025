import { model, Schema } from "mongoose";

export default model("Contact", new Schema({
	name: String
}));