import fs from "node:fs/promises";
import { PATH_FOLDER, PATH_DB } from "../constants/path.js";
import path from "node:path";
import { fi } from "@faker-js/faker";

const createFiles = async () => {
  const data = await fs.readFile(PATH_DB, "utf-8");
  const products = JSON.parse(data);
  products.forEach((product) => {
    const productTitle =
      product.name.split(" ").join("-").toLowerCase() + ".json";
    const filePath = path.join(PATH_FOLDER, productTitle);
    fs.writeFile(filePath, JSON.stringify(product, null, 2));
  });
};
createFiles();
