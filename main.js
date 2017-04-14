///
/// \file   main.js
/// \brief  The application's entry point.
///

// Imports
const Path          = require("path");
const Express       = require("express");
const BodyParser    = require("body-parser");
const Timestamp     = require("./source/timestamp");

// Express
const App           = Express();

// Body Parser Middleware
App.use(BodyParser.json());
App.use(BodyParser.urlencoded({ extended: true }));

// Static Files
App.use(Express.static(Path.join(__dirname, "public")));

// Gets the current date.
App.get("/now", (req, res) => {
    res.json(Timestamp(Date.now()));
});

// Parse the given string in order to produce a date.
App.get("/:dateString", (req, res) => {
    res.json(Timestamp(req.params.dateString));
});

// Index Page
App.get("/", (req, res) => {
    res.sendFile("index.html");
});

// Listen...
const Port = process.env.port || 3000;
const Server = App.listen(Port, () => {
    console.log(`Listening on Port # ${Server.address().port}`);
});