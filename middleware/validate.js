const validate = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  });

  if (error) {
    return next(error);
  }

  req.body = value;
  next();
const AppError = require('../utils/appError');

const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    
    if (error) {
      const errorMessage = error.details.map((detail) => detail.message).join('. ');
      return next(new AppError(errorMessage, 400));
    }
    
    next();
  };
};
}
module.exports = validate;