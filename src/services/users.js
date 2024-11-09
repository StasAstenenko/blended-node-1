import { UserCollection } from '../db/models/User.js';
// import { SessionCollection } from '../db/models/Session.js';
// import { createSession } from '../utils/createSession.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { env } from '../utils/env.js';

export const findUserByEmail = (email) => UserCollection.findOne({ email });

export const updateUserWithToken = async (userId) => {
  const token = jwt.sign({ id: userId }, env('JWT_SECRET'));
  const updatedUser = await UserCollection.findOneAndUpdate(
    { _id: userId },
    { token },
    { new: true },
  );
  return updatedUser;
};

export const createUser = async (userData) => {
  const password = await bcrypt.hash(userData.password, 10);
  const user = await UserCollection.create({ ...userData, password });
  return updateUserWithToken(user._id);
};

export const findUserById = async (id) => await UserCollection.findById(id);

export const resetToken = async (userId) =>
  UserCollection.findByIdAndUpdate(userId, { token: '' });
// export const createActiveSession = async (userId) => {
//   await SessionCollection.deleteOne({ userId });

//   return SessionCollection.create({ userId, ...createSession() });
// };
// export const deleteSession = (sessionId, sessionToken) => {
//   SessionCollection.deleteOne({ _id: sessionId, refreshToken: sessionToken });
// };
