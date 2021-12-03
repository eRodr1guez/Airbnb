const express = require("express");
const connectMongo = require("./config/connectMongo");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
require("dotenv").config();

// Connect Mongo Database
const uri = process.env.MONGODB_URI;
connectMongo(uri);

// API Routes
require("./routes/api/user.route")(app);

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT));
