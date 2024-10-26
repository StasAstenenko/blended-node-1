import { UserCollection } from '../db/models/User.js';
import { SessionCollection } from '../db/models/Session.js';
import { createSession } from '../utils/createSession.js';
import bcrypt from 'bcrypt';

export const findUserByEmail = (email) => UserCollection.findOne({ email });

export const createUser = async (userData) => {
  const password = await bcrypt.hash(userData.password, 10);
  return UserCollection.create({ ...userData, password });
};

export const createActiveSession = async (userId) => {
  await SessionCollection.deleteOne({ userId });

  return SessionCollection.create({ userId, ...createSession() });
};
export const deleteSession = (sessionId, sessionToken) => {
  SessionCollection.deleteOne({ _id: sessionId, refreshToken: sessionToken });
};
