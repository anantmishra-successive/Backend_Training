//4.Write a middleware function to validate user input for a registration form. Check if the required fields are present and if they meet certain criteria
// (e.g., password strength, email format).

const express = require("express");
const bodyparser = require("body-parser");
const validationMiddleware = require("./validationmiddleware");
const app = express();

app.use(bodyparser.json());
app.use(validationMiddleware);

app.post("/", (req, res) => {
  res.send("everything uptodate");
  console.log(res);
});
app.listen("8100");