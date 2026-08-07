const Joi = require('joi');

const createUserSchema = Joi.object({
  name: Joi.string().trim().min(2).max(50).required(),
  email: Joi.string().trim().email().required(),
  password: Joi.string().min(6).required(),
  phone: Joi.string()
    .trim()
    .pattern(/^[0-9+\-\s]{7,20}$/)
    .messages({ 'string.pattern.base': 'Phone must be a valid phone number' })
    .allow('', null),
});

const updateUserSchema = Joi.object({
  name: Joi.string().trim().min(2).max(50),
  email: Joi.string().trim().email(),
  password: Joi.string().min(6),
  phone: Joi.string()
    .trim()
    .pattern(/^[0-9+\-\s]{7,20}$/)
    .messages({ 'string.pattern.base': 'Phone must be a valid phone number' })
    .allow('', null),
}).min(1);

module.exports = { createUserSchema, updateUserSchema };