const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db.js");
const productRoutes = require("./routes/productRoutes");

dotenv.config();

const app = express();

const port = process.env.PORT || 8000;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
}); //This the default home route

app.use("/api/products", productRoutes); //This is for all the other api routes.

app.listen(port, () => {
  console.log(`Server running on Port ${port}`);
});
