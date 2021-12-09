const express = require("express");
const connectMongo = require("./config/connectMongo");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
require("dotenv").config();

// Connect Mongo Database
const uri = process.env.MONGODB_URI;
connectMongo(uri);

// API Routes
require("./routes/api/user.route")(app);

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT));
