import { Router } from 'express';
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  updateProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
const router = Router();

router.get('/', ctrlWrapper(getAllProductsController));
router.delete('/:productId', ctrlWrapper(deleteProductController));
router.post('/', ctrlWrapper(createProductController));
router.patch('/:productId', ctrlWrapper(updateProductController));

export default router;
