const express = require('express');
const path = require("path");

const app = express();

const PORT = 3000;
const words = {
    adjective: null,
    verb: null,
    properNoun: null,
    noun: null,
    adverb: null
};

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get("/first-word", (req, res) => {
    //sending with javascript
    // res.send("<span>Hello world!</span>");
    //sending it with sendFile
    res.sendFile(path.join(__dirname, "public/first-word.html"));
});

app.post("/second-word", (req, res) => {
    words.adjective = req.body.adjective;

    res.sendFile(path.join(__dirname, "public/second-word.html"));
});

app.post("/third-word", (req, res) => {
    words.verb = req.body.verb;

    res.sendFile(path.join(__dirname, "public/third-word.html"));
});

app.post("/fourth-word", (req, res) => {
    words.properNoun = req.body.properNoun;

    res.sendFile(path.join(__dirname, "public/fourth-word.html"));
});

app.post("/fifth-word", (req, res) => {
    words.noun = req.body.noun;

    res.sendFile(path.join(__dirname, "public/fifth-word.html"));
});

app.post("/done", (req, res) => {
    words.adverb = req.body.adverb;

    res.redirect("/story");
});

app.get("/story", (req, res) => {
    res.send(
        "<div>" +
            `There once was a ${words.adjective} student. ` +
            "They decided to take a programming course! It was really hard. " +
            `It made them ${words.verb} :(. ` +
            `They had to do a project. It was called ${words.properNoun}. ` +
            "They did not like this project. It was much too hard! " +
            `But they persevered! They tried really hard because they wanted to learn ${words.noun}. ` +
            "After a lot of long nights of working, they managed to do it! Their hard work paid off! " +
            `The student ${words.adverb} cheered in joy! Hurray!` +
            "<a href='/reset'><button>Reset</button></a>" +
        "</div>"
    );
});

app.get("/reset", (req, res) => {
    words.adjective = null;
    words.verb = null;
    words.properNoun = null;
    words.noun = null;
    words.adverb = null;

    res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});