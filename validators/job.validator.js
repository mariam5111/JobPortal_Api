const Joi = require('joi');

const createJobSchema = Joi.object({
  title: Joi.string().trim().required().messages({
    'string.empty': 'Job title is required',
  }),
  description: Joi.string().required().messages({
    'string.empty': 'Job description is required',
  }),
  company: Joi.string().hex().length(24).required().messages({
    'string.empty': 'Company ID is required',
    'string.length': 'Invalid Company ID format',
  }),
  location: Joi.string().optional(),
  salary: Joi.number().min(0).optional(),
  jobType: Joi.string().valid('full-time', 'part-time', 'remote', 'internship').default('full-time'),
});

const updateJobSchema = Joi.object({
  title: Joi.string().trim().optional(),
  description: Joi.string().optional(),
  location: Joi.string().optional(),
  salary: Joi.number().min(0).optional(),
  jobType: Joi.string().valid('full-time', 'part-time', 'remote', 'internship').optional(),
});

module.exports = {
  createJobSchema,
  updateJobSchema,
};