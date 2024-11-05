const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());
// app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
  res.json({ message: "manaja server start!" });
});

app.listen(port, () => {
  console.log(`manaja server listening on port ${port}`);
});
