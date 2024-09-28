import fs from "node:fs/promises";
import { PATH_DB } from "../constants/path.js";

const updateProducts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, "utf-8");
    const products = JSON.parse(data);
    const updatedProducts = products.map(({ description, ...product }) => {
      return product;
    });
    const newData = JSON.stringify(updatedProducts, null, 2);
    await fs.writeFile(PATH_DB, newData);
  } catch (error) {
    console.log(error);
  }
};
updateProducts();
