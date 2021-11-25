const express = require("express");
const connectDB = require("./config/connectDB");

const app = express();

// Connect DB
connectDB();

app.get("/", (req, res) => res.send("Hello World!"));

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT));
