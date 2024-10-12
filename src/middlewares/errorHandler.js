import { HttpError } from 'http-errors';
export const errorHandler = (error, req, res, next) => {
  if (error instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: err,
    });
      return;
  }
    res.status(500).json({
    message: 'Something went wrong',
    error: err.message,
  });
};
