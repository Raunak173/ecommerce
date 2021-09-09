//This file consists of all the routes and specifies what function is to be executed on a particular route.

const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controllers/productControllers.js");

router.get("/", getProducts);
router.get("/:id", getProductById);

module.exports = router;
