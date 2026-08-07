const Joi = require('joi');

const objectId = Joi.string()
  .pattern(/^[0-9a-fA-F]{24}$/)
  .messages({ 'string.pattern.base': '{{#label}} must be a valid MongoDB ObjectId' });

const createApplicationSchema = Joi.object({
  job: objectId.required(),
  user: objectId.required(),
  coverLetter: Joi.string().trim().max(1000).allow('', null),
});

const updateApplicationSchema = Joi.object({
  status: Joi.string().valid('pending', 'accepted', 'rejected'),
  coverLetter: Joi.string().trim().max(1000).allow('', null),
}).min(1);

module.exports = { createApplicationSchema, updateApplicationSchema };