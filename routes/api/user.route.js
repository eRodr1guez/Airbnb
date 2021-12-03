const User = require("../../models/user.model");

module.exports = function (app) {
  app.get("/api/getUsers", function (req, res) {
    User.find({})
      .then((data) => {
        res.json(data);
      })
      .catch(console.error);
  });

  app.post("/api/createUser", (req, res) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    newUser
      .save()
      .then((response) => res.json(response))
      .catch(console.error);
  });
};
