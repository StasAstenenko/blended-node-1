import fs from "node:fs/promises";
import { PATH_DB } from "../constants/path.js";
const getProductsByCategory = async (category) => {
  try {
    const data = await fs.readFile(PATH_DB, "utf-8");
    const products = JSON.parse(data);
    const filteredProductsByCategory = products.filter(
      (product) => product.category === category
    );
    console.log(filteredProductsByCategory);
  } catch (error) {
    console.log(error);
  }
};
getProductsByCategory("Movies");
