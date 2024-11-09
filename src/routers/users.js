import { Router } from 'express';
import { userRegisterSchema, userLoginSchema } from '../validation/users.js';
import { validateBody } from '../utils/validatebody.js';
import {
  userLoginController,
  userLogoutController,
  userRegisterController,
  userCurrentController,
} from '../controllers/users.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { checkToken } from '../middlewares/checkToken.js';

const router = Router();
router.post(
  '/signup',
  validateBody(userRegisterSchema),
  ctrlWrapper(userRegisterController),
);
router.post(
  '/login',
  validateBody(userLoginSchema),
  ctrlWrapper(userLoginController),
);
router.post('/logout', checkToken, ctrlWrapper(userLogoutController));

router.get('/current', checkToken, ctrlWrapper(userCurrentController));
export default router;
