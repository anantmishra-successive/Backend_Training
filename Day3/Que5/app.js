const express = require("express");
const NumericMiddleware = require("./numeric_middleware");
const app = express();
app.use(NumericMiddleware);

app.get("/", (req, res) => {
  res.send("You have now searched in proper manner");
});
app.listen("6000");