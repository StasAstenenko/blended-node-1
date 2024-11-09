import {
  findUserByEmail,
  createUser,
  updateUserWithToken,
  resetToken,
  //   deleteSession,
} from '../services/users.js';
// import { createActiveSession } from '../services/users.js';
// import { setUpSession } from '../utils/setUpSession.js';
import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';

export const userRegisterController = async (req, res) => {
  const user = await findUserByEmail(req.body.email);
  if (user) {
    throw createHttpError(409, 'Email in use');
  }
  const newUser = await createUser(req.body);
  res.status(201).json({
    user: { name: newUser.name, email: newUser.email },
    token: newUser.token,
  });
};
export const userLoginController = async (req, res) => {
  const user = await findUserByEmail(req.body.email);
  if (!user) {
    throw createHttpError(401, 'Invalid data');
  }
  const isCorrectPassword = await bcrypt.compare(
    req.body.password,
    user.password,
  );
  if (!isCorrectPassword) {
    throw createHttpError(401, 'Invalid data');
  }
  const updatedUser = await updateUserWithToken(user._id);
  //   const newSession = await createActiveSession(user._id);
  //   setUpSession(res, newSession);
  res.status(200).json({
    user: { name: updatedUser.name, email: updatedUser.email },
    token: updatedUser.token,
  });
};
export const userLogoutController = async (req, res) => {
  const userId = req.user._id;
  resetToken(userId);
  res.status(204).end();
};
export const userCurrentController = (req, res) => {
  const user = req.user;
  res.status(200).json({ user: { name: user.name, email: user.email } });
};
