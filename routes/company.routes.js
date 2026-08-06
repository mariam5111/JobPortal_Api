const express = require('express');
const router = express.Router();
const companyController = require('../controllers/company.controller');
const validate = require('../middleware/validate');
const { createCompanySchema, updateCompanySchema } = require('../validators/company.validator');

router
  .route('/')
  .get(companyController.getAllCompanies)
  .post(validate(createCompanySchema), companyController.createCompany);

router
  .route('/:id')
  .get(companyController.getCompanyById)
  .put(validate(updateCompanySchema), companyController.updateCompany)
  .delete(companyController.deleteCompany);

module.exports = router;