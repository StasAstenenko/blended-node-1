import fs from "node:fs/promises";
import { PATH_DB } from "../constants/path.js";

const updateProductsPrice = async () => {
  const data = await fs.readFile(PATH_DB, "utf-8");
  const products = JSON.parse(data);
  const updatedProducts = products.map(({ price, ...product }) => {
    const newPrice = Number(Math.round(price));
    return { ...product, price: newPrice };
  });
  await fs.writeFile(PATH_DB, JSON.stringify(updatedProducts, null, 2));
};
updateProductsPrice();
