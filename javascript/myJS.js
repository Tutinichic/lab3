const express = require("express");
const app = express();

app.get("/", (req, res) => res.json('hello to me <3'));

app.listen(8080, () => {
  console.log("server running on port 8080");
});
