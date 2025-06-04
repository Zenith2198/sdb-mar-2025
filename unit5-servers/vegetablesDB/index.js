import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import vegRouter from "./routers/vegRouter.js";
import recipeRouter from "./routers/recipeRouter.js";

const app = express();

//connect to database
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.once("open", () => {
	console.log("Database connected");
});

//middlewares
app.use(cors());
app.use(express.json());

//routers
app.use(vegRouter);
app.use(recipeRouter);

app.listen(process.env.PORT, () => {
	console.log("Listening at port " + process.env.PORT);
});