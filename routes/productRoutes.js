const express = require("express");
const {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct
} = require("../Controllers/productController");

const router = express.Router();

router.get("/getProducts", getProducts);
router.post("/addProduct", addProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.put("/updateProduct/:id", updateProduct);

module.exports = router;
