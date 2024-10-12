import { ProductModel } from '../db/models/Product.js';

export const getAllProducts = () => ProductModel.find();
