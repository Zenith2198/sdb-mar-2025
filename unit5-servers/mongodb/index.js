import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import usersRouter from "./routers/usersRouter.js";
import postsRouter from "./routers/postsRouter.js";

//connect to database
mongoose.connect(process.env.DATABASE_URL + "/usersDB");
const db = mongoose.connection;

db.once("open", () => {
	console.log("Database connected");
});

//create express app
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//routers
app.use(usersRouter);
app.use(postsRouter);

app.listen(process.env.PORT, () => {
	console.log("Listening on port " + process.env.PORT);
});