import axios from "axios";
import { message } from "antd";

export const getAllJobs = () => async (dispatch) => {
  // show loading
  dispatch({
    type: "LOADING",
    payload: true,
  });

  try {
    const response = await axios.get("/api/jobs/getalljobs");
    dispatch({
      type: "GET_ALLJOBS",
      payload: response.data,
    });
    // hiding the loading
    dispatch({
      type: "LOADING",
      payload: false,
    });
  } catch (error) {
    console.log(error);
    // hiding the loading
    dispatch({
      type: "LOADING",
      payload: false,
    });
  }
};

// Post job
export const postJobs = (values) => async (dispatch) => {
  values.postedBy = JSON.parse(localStorage.getItem("user"))._id;
  // show loading
  dispatch({
    type: "LOADING",
    payload: true,
  });

  try {
    const response = await axios.post("/api/jobs/jobpost", values);
    dispatch({
      type: "LOADING",
      payload: false,
    });
    message.success("Job Posted Successfully");
    setTimeout(() => {
      window.location = "/";
    }, 1000);
  } catch (error) {
    console.log(error);
    dispatch({
      type: "LOADING",
      payload: false,
    });
  }
};

// edit job
export const EditJobs = (values) => async (dispatch) => {
  dispatch({
    type: "LOADING",
    payload: true,
  });

  try {
    const response = await axios.post("/api/jobs/editjob", values);
    dispatch({
      type: "LOADING",
      payload: false,
    });
    message.success("Job Updated Successfully");
    setTimeout(() => {
      window.location = "/";
    }, 1000);
  } catch (error) {
    console.log(error);
    dispatch({
      type: "LOADING",
      payload: false,
    });
  }
};

// apply job now
export const ApplyNow = (job) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("user"));
  dispatch({
    type: "LOADING",
    payload: true,
  });

  try {
    const response = await axios.post("/api/jobs/applyjob", { job, user });
    dispatch({
      type: "LOADING",
      payload: false,
    });
    message.success("Applied Successfully");
    setTimeout(() => {
      window.location = "/";
    }, 1000);
  } catch (error) {
    console.log(error);
    dispatch({
      type: "LOADING",
      payload: false,
    });
  }
};

// search job
export const searchJob = (searchKey) => async (dispatch) => {
  // show loading
  dispatch({
    type: "LOADING",
    payload: true,
  });

  try {
    const response = await axios.get("/api/jobs/getalljobs");
    const jobs = response.data;
    const filterJobs = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchKey.toLowerCase())
    );
    dispatch({
      type: "GET_ALLJOBS",
      payload: filterJobs,
    });
    // hiding the loading
    dispatch({
      type: "LOADING",
      payload: false,
    });
  } catch (error) {
    console.log(error);
    // hiding the loading
    dispatch({
      type: "LOADING",
      payload: false,
    });
  }
};

// filter job
export const filterJob = (values) => async (dispatch) => {
  // show loading
  dispatch({
    type: "LOADING",
    payload: true,
  });

  try {
    const response = await axios.get("/api/jobs/getalljobs");
    const jobs = response.data;
    var filterJobs = jobs;
    if (values.experience !== undefined) {
      filterJobs = jobs.filter((job) => job.experience == values.experience);
    }
    if (values.salary !== undefined) {
      filterJobs = jobs.filter((job) => job.salaryFrom >= values.salary);
    }
    if (values.jobType !== undefined) {
      filterJobs = jobs.filter((job) => job.jobType == values.jobType);
    }
    dispatch({
      type: "GET_ALLJOBS",
      payload: filterJobs,
    });
    // hiding the loading
    dispatch({
      type: "LOADING",
      payload: false,
    });
  } catch (error) {
    console.log(error);
    // hiding the loading
    dispatch({
      type: "LOADING",
      payload: false,
    });
  }
};
