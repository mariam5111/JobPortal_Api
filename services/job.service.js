const Job = require("../models/Job");
const AppError = require('../utils/appError');
const createJob = async (jobData) => {
     const job = await Job.create(jobData);
    return job;
};

const getAllJobs = async (filters, page, limit) => {
     const jobs = await Job.find(filters)
    .populate("company")
    .skip((page - 1) * limit)
    .limit(Number(limit));
    return jobs;
};

const getJobById = async (id) => {
     const job = await Job.findById(id).populate("company");
    return job;
};

const updateJob = async (id, jobData) => {
    const job = await Job.findByIdAndUpdate(id, jobData, {
        new: true,
        runValidators: true,
    });

    return job;
};

const deleteJob = async (id) => {
     const job = await Job.findByIdAndDelete(id);
    return job;
};

const closeJob = async (jobId) => {
  const job = await Job.findById(jobId);

  if (!job) {
    throw new Error("Job not found");
  }

  job.status = "Closed";

  await job.save();

  return job;
};

module.exports = {
    createJob,
    getAllJobs,
    getJobById,
    updateJob,
    deleteJob,
    closeJob,
};