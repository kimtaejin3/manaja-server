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

require("./app/routes/meeting.routes")(app);

app.listen(port, () => {
  console.log(`manaja server listening on port ${port}`);
});
