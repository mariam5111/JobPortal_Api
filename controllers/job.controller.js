const Job = require("../models/Job");
const Company = require("../models/Company");
const { closeJob } = require("../services/job.service");

// Create Job
const createJob = async (req, res) => {
  try {
    const company = await Company.findById(req.body.company);

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    const job = await Job.create(req.body);

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Jobs
const getAllJobs = async (req, res) => {
  try {
    const { page = 1, limit = 10, status, location, jobType } = req.query;

    let filter = {};

    if (status) filter.status = status;
    if (location) filter.location = location;
    if (jobType) filter.jobType = jobType;

    const jobs = await Job.find(filter)
      .populate("company")
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Job By Id
const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate("company");

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Job
const updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Job
const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Close Job
const closeJobController = async (req, res) => {
  try {
    const job = await closeJob(req.params.id);

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
  closeJobController,
};