import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Tag } from "antd";
import dayjs from "dayjs";
import { ApplyNow } from "../redux/actions/jobAction";
const JobInfo = () => {
  const params = useParams();
  const { jobs } = useSelector((state) => state.jobReducer);
  const job = jobs.find((job) => job._id === params.id);
  const userid = JSON.parse(localStorage.getItem("user"))._id;
  // const appliedCandidates = job.appliedcandidates;
  const alreadyApplied = job?.appliedcandidates.find(
    (candidate) => candidate.userid === userid
  );
  const dispatch = useDispatch();

  // apply now
  const applynow = () => {
    dispatch(ApplyNow(job));
  };
  return (
    <DefaultLayout>
      {job && (
        <div>
          <p>
            <strong>Title:</strong> {job.title}
          </p>
          <hr />
          <p>
            <strong>Company:</strong> {job.company}
          </p>
          <hr />
          <p>
            <strong>Short Description:</strong> {job.shortDescription}
          </p>
          <hr />
          <p>
            <strong>Full Description:</strong> {job.fullDescription}
          </p>
          <hr />
          <p>
            <strong>Skills Required:</strong> {job.skillsRequired}
          </p>
          <hr />
          <p>
            <strong>Experience:</strong> {job.experience} Years
          </p>
          <hr
            style={{
              backgroundColor: "black",
              height: "2px",
              boxShadow: "2px 1px 2px black",
            }}
          />
          <p>
            <strong>Salary:</strong> {job.salaryFrom} $ - {job.salaryTo} $
          </p>
          <hr />
          <p>
            <strong>Department:</strong> {job.department}
          </p>
          <hr />
          <p>
            <strong>Company Description:</strong> {job.companyDescription}
          </p>
          <hr />
          <p>
            <strong>Company Email:</strong> {job.email}
          </p>
          <hr />
          <p>
            <strong>Company Phone Number:</strong> {job.phoneNumber}
          </p>
          <hr />
          <p>
            <strong>Company Location:</strong> {job.location}
          </p>
          <hr />
          <p>
            <strong>Total Candidates applied:</strong>{" "}
            {job.appliedcandidates.length}
          </p>
          <hr
            style={{
              backgroundColor: "black",
              height: "2px",
              boxShadow: "2px 1px 2px black",
            }}
          />
          <div className="flex justify-content-between">
            {job.postedBy === userid ? (
              <Button className="apply-btn">
                <Link to={`/editjob/${job._id}`}>Edit Now</Link>
              </Button>
            ) : alreadyApplied ? (
              <Tag color="volcano" style={{ fontWeight: "500" }}>
                Already Applied
              </Tag>
            ) : (
              <Button className="apply-btn" onClick={applynow}>
                Apply Now
              </Button>
            )}
            <p>
              <strong>Posted on: </strong>
              {dayjs(job.createdAt).format("DD - MMMM - YYYY")}
            </p>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};

export default JobInfo;
