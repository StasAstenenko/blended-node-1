import { Router } from 'express';
import { getAllProductsController } from '../controllers/products.js';

const router = Router();

router.get('/products', getAllProductsController);

export default router;
