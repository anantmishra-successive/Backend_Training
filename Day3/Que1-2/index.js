const express = require("express");
const { signupSchema } = require("./validator");
const app = express();
app.use(express.json());

// Middleware
const validaateUser = (req, res, next) => {
  const { error } = signupSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details);
  }
  next();
};


// RouteHandler
app.get("", (req, res) => {
  res.send("<h1>Welcome to home Page</h1>");
});

app.post("/user", validaateUser, (req, res) => {
  const { error, value } = signupSchema.validate(req.body);
  console.log(value);

  res.send(value);
});

app.listen(8000, () => {
  console.log("server started at localhost 8000");
});
