class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // نحدد أن الخطأ متوقع وناتج عن عملية عمل وليس خطأ غير متوقع في الكود

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;