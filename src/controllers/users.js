import {
  findUserByEmail,
  createUser,
  deleteSession,
} from '../services/users.js';
import { createActiveSession } from '../services/users.js';
import { setUpSession } from '../utils/setUpSession.js';
import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';

export const userRegisterController = async (req, res) => {
  const user = await findUserByEmail(req.body.email);
  if (user) {
    throw createHttpError(409, 'Email in use');
  }
  await createUser(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: { name: req.body.name, email: req.body.email },
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
  const newSession = await createActiveSession(user._id);
  setUpSession(res, newSession);
  res.status(200).json({
    status: 200,
    message: 'Successfully logged in an user!',
    data: { accessToken: newSession.accessToken },
  });
};
export const userLogoutController = async (req, res) => {
  await deleteSession(req.cookies.sessionId, req.cookies.refreshToken);
  res.clearCookie('sessionId');
  res.clearCookie('refreshToken');
  res.status(204).end();
};
