const userService = require('../services/user.service');
const catchAsync = require('../utils/catchAsync');

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(201).json({
    success: true,
    message: 'User created successfully',
    data: user,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const users = await userService.getAllUsers();
  res.status(200).json({
    success: true,
    message: 'Users retrieved successfully',
    data: users,
  });
});

const getUserById = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  res.status(200).json({
    success: true,
    message: 'User retrieved successfully',
    data: user,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUser(req.params.id, req.body);
  res.status(200).json({
    success: true,
    message: 'User updated successfully',
    data: user,
  });
});

const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUser(req.params.id);
  res.status(200).json({
    success: true,
    message: 'User deleted successfully',
    data: null,
  });
});

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};