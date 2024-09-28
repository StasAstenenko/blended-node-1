import fs from "node:fs/promises";
import { PATH_DB } from "../constants/path.js";
import { createFakeProduct } from "../utils/createFakeProduct.js";

const generateProducts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, "utf-8");
    const products = JSON.parse(data);

    for (let i = 1; i <= number; i += 1) {
      products.push(createFakeProduct());
    }

    await fs.writeFile(PATH_DB, JSON.stringify(products, undefined, 2));
  } catch (error) {
    console.log(error);
  }
};

generateProducts(5);
