const Joi = require('joi');

const createCompanySchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  description: Joi.string().min(10).required(),
  industry: Joi.string().required(),
  email: Joi.string().email().required(),
  location: Joi.string().required()
});

const updateCompanySchema = Joi.object({
  name: Joi.string().min(2).max(100),
  description: Joi.string().min(10),
  industry: Joi.string(),
  email: Joi.string().email(),
  location: Joi.string()
});

module.exports = {
  createCompanySchema,
  updateCompanySchema
};