import fs from "node:fs/promises";
import { PATH_DB } from "../constants/path.js";

const getExpensiveProducts = async () => {
  const PRICE = 500;
  try {
    const data = await fs.readFile(PATH_DB, "utf-8");
    const products = JSON.parse(data);
    const filteredProducts = products.filter(
      (product) => product.price > PRICE
    );
    console.log(filteredProducts);
  } catch (error) {
    console.log(error);
  }
};

getExpensiveProducts();
