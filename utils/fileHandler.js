const fs = require("fs");

function readProducts() {
  const data = fs.readFileSync("./products.json");
  return JSON.parse(data);
}

function writeProducts(data) {
  fs.writeFileSync("./products.json", JSON.stringify(data, null, 2));
}

module.exports = { readProducts, writeProducts };
