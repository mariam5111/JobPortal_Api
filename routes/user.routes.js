const express = require('express');
const userController = require('../controllers/user.controller');
const validate = require('../middleware/validate');
const {
  createUserSchema,
  updateUserSchema,
} = require('../validators/user.validator');

const router = express.Router();

router
  .route('/')
  .get(userController.getAllUsers)
  .post(validate(createUserSchema), userController.createUser);

router
  .route('/:id')
  .get(userController.getUserById)
  .put(validate(updateUserSchema), userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;