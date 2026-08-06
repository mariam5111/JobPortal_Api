const express = require('express');
const applicationController = require('../controllers/application.controller');
const validate = require('../middleware/validate');
const {
  createApplicationSchema,
  updateApplicationSchema,
} = require('../validators/application.validator');

const router = express.Router();

router
  .route('/')
  .get(applicationController.getAllApplications)
  .post(validate(createApplicationSchema), applicationController.createApplication);

router
  .route('/:id')
  .get(applicationController.getApplicationById)
  .put(validate(updateApplicationSchema), applicationController.updateApplication)
  .delete(applicationController.deleteApplication);

module.exports = router;