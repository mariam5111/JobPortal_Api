const Application = require('../models/Application');
const Job = require('../models/Job');
const User = require('../models/User');
const AppError = require('../utils/appError');

const createApplication = async ({ job, user, coverLetter }) => {
  const [jobExists, userExists] = await Promise.all([
    Job.findById(job),
    User.findById(user),
  ]);

  if (!jobExists) {
    throw new AppError('Job not found', 404);
  }

  if (!userExists) {
    throw new AppError('User not found', 404);
  }

  const alreadyApplied = await Application.findOne({ job, user });
  if (alreadyApplied) {
    throw new AppError('This user has already applied to this job', 409);
  }

  const application = await Application.create({ job, user, coverLetter });
  return application.populate(['job', 'user']);
};

const getAllApplications = async () => {
  return Application.find().populate('job').populate('user');
};

const getApplicationById = async (id) => {
  const application = await Application.findById(id)
    .populate('job')
    .populate('user');

  if (!application) {
    throw new AppError('Application not found', 404);
  }
  return application;
};

const updateApplication = async (id, updateData) => {
  const application = await Application.findByIdAndUpdate(id, updateData, {
    returnDocument: 'after',
    runValidators: true,
  })
    .populate('job')
    .populate('user');

  if (!application) {
    throw new AppError('Application not found', 404);
  }
  return application;
};

const deleteApplication = async (id) => {
  const application = await Application.findByIdAndDelete(id);
  if (!application) {
    throw new AppError('Application not found', 404);
  }
  return application;
};

module.exports = {
  createApplication,
  getAllApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
};