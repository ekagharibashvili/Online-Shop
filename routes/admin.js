const express = require("express");

const productsController = require("../controllers/products")

const router = express.Router();

// Get
router.get("/add-product", productsController.getAddProduct);

// Post
router.post("/add-product", productsController.postAddProduct);

module.exports = router;
