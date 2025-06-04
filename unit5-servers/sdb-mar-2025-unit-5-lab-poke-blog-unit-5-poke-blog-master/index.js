import express from "express";
import pokemonRouter from "./routers/pokemonRouter.js";
import searchRouter from "./routers/searchRouter.js";

const app = express();

app.use(express.json());

app.use(pokemonRouter);
app.use(searchRouter);

app.get("/", (req, res) => {
    res.send("App is listening");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});