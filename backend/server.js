const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db.js");

dotenv.config();

const app = express();

const port = process.env.PORT || 8000;

connectDB();

app.listen(port, () => {
  console.log(`Server running on Port ${port}`);
});
