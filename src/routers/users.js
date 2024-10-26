import { Router } from 'express';
import { userLoginSchema, userRegisterSchema } from '../validation/users.js';
import { validateBody } from '../utils/validatebody.js';
import {
  userLoginController,
  userLogoutController,
  userRegisterController,
} from '../controllers/users.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();
router.post(
  '/register',
  validateBody(userRegisterSchema),
  ctrlWrapper(userRegisterController),
);
router.post(
  '/login',
  validateBody(userLoginSchema),
  ctrlWrapper(userLoginController),
);
router.post('/logout', ctrlWrapper(userLogoutController));
export default router;
