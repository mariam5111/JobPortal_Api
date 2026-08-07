const express = require("express");

const router = express.Router();

const {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
  closeJobController,
} = require("../controllers/job.controller");

router.post("/", createJob);

router.get("/", getAllJobs);

router.get("/:id", getJobById);

router.put("/:id", updateJob);

router.delete("/:id", deleteJob);

router.patch("/:id/close", closeJobController);

module.exports = router;