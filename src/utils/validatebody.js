import createHttpError from 'http-errors';
import { errorHandler } from '../middlewares/errorHandler';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const validationsError = createHttpError(400, 'Bad request', {
      error: error.details,
    });
    next(validationsError);
  }
};
