const applicationService = require('../services/application.service');
const catchAsync = require('../utils/catchAsync');

const createApplication = catchAsync(async (req, res) => {
  const application = await applicationService.createApplication(req.body);
  res.status(201).json({
    success: true,
    message: 'Application created successfully',
    data: application,
  });
});

const getAllApplications = catchAsync(async (req, res) => {
  const applications = await applicationService.getAllApplications();
  res.status(200).json({
    success: true,
    message: 'Applications retrieved successfully',
    data: applications,
  });
});

const getApplicationById = catchAsync(async (req, res) => {
  const application = await applicationService.getApplicationById(req.params.id);
  res.status(200).json({
    success: true,
    message: 'Application retrieved successfully',
    data: application,
  });
});

const updateApplication = catchAsync(async (req, res) => {
  const application = await applicationService.updateApplication(
    req.params.id,
    req.body
  );
  res.status(200).json({
    success: true,
    message: 'Application updated successfully',
    data: application,
  });
});

const deleteApplication = catchAsync(async (req, res) => {
  await applicationService.deleteApplication(req.params.id);
  res.status(200).json({
    success: true,
    message: 'Application deleted successfully',
    data: null,
  });
});

module.exports = {
  createApplication,
  getAllApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
};