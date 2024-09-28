import fs from "node:fs/promises";
import { PATH_DB } from "../constants/path.js";

const countPriceProduct = async () => {
  try {
    const data = await fs.readFile(PATH_DB, "utf-8");
    const products = JSON.parse(data);
    const totalPrice = products.reduce(
      (acc, product) => acc + Number(product.price),
      0
    );
    console.log(totalPrice.toFixed(2));
  } catch (error) {
    console.log(error);
  }
};

countPriceProduct();
