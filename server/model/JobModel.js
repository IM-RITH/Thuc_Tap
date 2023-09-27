const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    salaryFrom: {
      type: Number,
      required: true,
    },
    salaryTo: {
      type: Number,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    fullDescription: {
      type: String,
      required: true,
    },
    skillsRequired: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      default: "Full Time",
    },
    companyDescription: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    appliedcandidates: {
      type: [],
      required: true,
    },
    postedBy: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const JobModel = new mongoose.model("jobs", JobSchema);
module.exports = JobModel;
