const express = require("express");
const validateLocation = require("./geo_middleware");
const app = express();
app.use(validateLocation);
app.get("/", (req, res) => {
  res.send("Ok now you are allowed to work as your IP address is validated");
});
app.listen(9000, () => {
  console.log("Server is running on port 9000");
});