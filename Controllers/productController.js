const { readProducts, writeProducts } = require("../utils/fileHandler");

// GET - Show all products
exports.getProducts = (req, res) => {
  const products = readProducts();
  res.json(products);
};

// POST - Add a new product
exports.addProduct = (req, res) => {
  const products = readProducts();
  const newProduct = req.body;

  products.push(newProduct);
  writeProducts(products);

  res.json({
    message: "Product added successfully",
    data: newProduct
  });
};

// DELETE - Delete specific product
exports.deleteProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  let products = readProducts();

  const newList = products.filter(p => p.productId !== productId);
  writeProducts(newList);

  res.json({ message: `Product ID ${productId} deleted` });
};

// UPDATE - Update description of product
exports.updateProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const { description } = req.body;

  let products = readProducts();
  const product = products.find(p => p.productId === productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  product.description = description;

  writeProducts(products);

  res.json({
    message: `Product ${productId} updated`,
    updatedProduct: product
  });
};
