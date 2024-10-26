import { Router } from 'express';
import { userRegisterSchema } from '../validation/users.js';
import { validateBody } from '../utils/validatebody.js';
import { userRegisterController } from '../controllers/users.js';

const router = Router();
router.post(
  '/register',
  validateBody(userRegisterSchema),
  userRegisterController,
);
export default router;
