import fs from "node:fs/promises";
import { PATH_FOLDER, PATH_DB } from "../constants/path.js";
import path from "node:path";

const createFiles = async () => {
  const data = await fs.readFile(PATH_DB, "utf-8");
  const products = JSON.parse(data);
  products.forEach((product) => {
    //  const productTitle = product.name.split(" ").join("-").toLowerCase() + ".json";
    // returns bespoke-bronze-shirt.json
    const productTitle = product.name.split(" ").join("") + ".json";
    const fileName =
      productTitle.charAt(0).toLowerCase() + productTitle.slice(1);
    //   returns bespokeBronzeShirt.json

    const filePath = path.join(PATH_FOLDER, fileName);
    fs.writeFile(filePath, JSON.stringify(product, null, 2));
  });
};
createFiles();
