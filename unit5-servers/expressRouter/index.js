import "dotenv/config";
import express from "express";
import usersRouter from "./routers/usersRouter.js";

//create express app
const app = express();

//add middlewares
app.use(express.json());

//add routers
app.use(usersRouter);

//start app
app.listen(process.env.PORT, () => {
	console.log(`Now listening on port ${process.env.PORT}`);
});