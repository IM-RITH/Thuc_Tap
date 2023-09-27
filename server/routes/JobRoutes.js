const express = require("express");
const router = express.Router();
const Job = require("../model/JobModel");
const User = require("../model/UserModel");
const dayjs = require("dayjs");
// Get all jobs
router.get("/getalljobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.send(jobs);
  } catch (error) {
    return res.status(400).json({ error });
  }
});
// Post Job
router.post("/jobpost", async (req, res) => {
  try {
    const newjob = new Job(req.body);
    await newjob.save();
    res.send("Job Posted Successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

// Edit job
router.post("/editjob", async (req, res) => {
  try {
    const updateJob = await Job.findOneAndUpdate(
      { _id: req.body._id },
      req.body
    );
    res.send("Job Updated Successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

// Apply job now
router.post("/applyjob", async (req, res) => {
  const { user, job } = req.body;
  try {
    const jobDetails = await Job.findOne({ _id: job._id });
    const appliedCandidate = {
      userid: user._id,
      appliedDate: dayjs().format("DD - MMMM - YYYY"),
    };
    // push candidates who have applied the job
    jobDetails.appliedcandidates.push(appliedCandidate);
    await jobDetails.save();

    // user applied job
    const userDetails = await User.findOne({ _id: user._id });
    const appliedjob = {
      jobid: job._id,
      appliedDate: dayjs().format("DD - MMMM - YYYY"),
    };
    userDetails.appliedJobs.push(appliedjob);
    await userDetails.save();
    res.send(`Applied for ${jobDetails.title} Successfully`);
  } catch (error) {
    return res.status(400).json({ error });
  }
});
module.exports = router;
