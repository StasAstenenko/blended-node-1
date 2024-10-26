import { UserCollection } from '../db/models/User';
import bcrypt from 'bcrypt';

export const findUserByEmail = (email) => UserCollection.findOne({ email });

export const createUser = async (userData) => {
  const password = await bcrypt.hash(userData.password, 10);
  return UserCollection.create({ ...userData, password });
};
