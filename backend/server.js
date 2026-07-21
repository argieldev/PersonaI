const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

// middlewares
app.use(express.json());
app.use(cors());

// import routes
const auth = require("./routes/auth");

// register routes
app.use("/auth", auth);

console.log(process.env.JWT_SECRET);

const port = 3000;

app.listen(port, () => {
  console.log({port});
})