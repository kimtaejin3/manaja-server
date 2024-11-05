const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("manaja server start!");
});

app.listen(port, () => {
  console.log(`manaja server listening on port ${port}`);
});
