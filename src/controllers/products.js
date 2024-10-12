import {
  getAllProducts,
  deleteProduct,
  createProduct,
  updateProduct,
} from '../services/products.js';
import createHttpError from 'http-errors';

export const getAllProductsController = async (req, res) => {
  const products = await getAllProducts();

  res.status(200).json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};
export const deleteProductController = async (req, res) => {
  const { productId } = req.params;
  const product = await deleteProduct(productId);
  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
  // res.status(204).end();
  res.sendStatus(204);
};

export const createProductController = async (req, res) => {
  const product = await createProduct(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};

export const updateProductController = async (req, res) => {
  const { productId } = req.params;
  const product = await updateProduct(productId, req.body);
  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
  res.status(200).json({
    status: 200,
    message: 'Successfully patched a product!',
    data: product,
  });
};
