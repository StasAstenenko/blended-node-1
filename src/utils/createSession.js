import { randomBytes } from 'node:crypto';
import { FIFTEEN_MINUTES, THIRTY_DAY } from '../constants/index.js';

export const createSession = () => {
  const accessToken = randomBytes(40).toString('base64');
  const refreshToken = randomBytes(40).toString('base64');

  return {
    accessToken,
    refreshToken,
    accessTokenValidUntil: Date.now() + FIFTEEN_MINUTES,
    refreshTokenValidUntil: Date.now() + THIRTY_DAY,
  };
};
