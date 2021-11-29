const express = require("express");
const connectMongo = require("./config/connectMongo");
const app = express();

require("dotenv").config();
const uri = process.env.MONGODB_URI;

// Connect Mongo Database
connectMongo(uri);

app.get("/", (req, res) => res.send("Hello World!"));

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT));
