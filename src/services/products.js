import { ProductModel } from '../db/models/Product.js';

export const getAllProducts = () => ProductModel.find();
// export const deleteProduct = (id) => ProductModel.findOneAndDelete({ _id: id });
export const deleteProduct = (id) => ProductModel.findByIdAndDelete(id);
export const createProduct = (productData) => ProductModel.create(productData);
export const updateProduct = (id, productData) =>
  ProductModel.findByIdAndUpdate(id, productData, { new: true });
