const express = require("express");
const PORT = process.env.PORT || 5001;
const app = express();

app.get("/:name", function (req, res) {
  res.send("Hello %s", req.params.name);
  res.send("hello world");
});

app.listen(PORT, function () {
  console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});
