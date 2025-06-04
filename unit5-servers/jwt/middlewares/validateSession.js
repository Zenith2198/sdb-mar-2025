import jwt from "jsonwebtoken";
import User from "../models/User.js";

export default async function validateSession(req, res, next) {
	try {
		const sessionToken = req.headers.authorization;
		const decoded = jwt.verify(sessionToken, process.env.JWT_SECRET);

		const user = await User.findById(decoded._id);
		//error handling
		req.user = user;

		return next();
	} catch (err) {
		console.log(err);
		res.json({ error: "An error occurred with authentication" });
	}
}