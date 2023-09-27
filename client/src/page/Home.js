import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { getAllJobs } from "../redux/actions/jobAction";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const Home = () => {
  const { jobs } = useSelector((state) => state.jobReducer);
  // const jobs = jobData.jobs;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  return (
    <div>
      <DefaultLayout>
        <h3
          style={{
            height: "auto",
            textAlign: "center",
            paddingBottom: "10px",
            paddingTop: "10px",
            border: "1px solid gray",
            borderRadius: "10px",
            fontFamily: "Poppins",
            fontWeight: "600",
            boxShadow: "2px 2px 2px black",
          }}
        >
          All Of Job You Can Find Here
        </h3>
        <Row gutter={20}>
          {jobs.map((jobs) => {
            return (
              <Col lg={12} sm={24}>
                <div className="job-div boxshadow m-2 p-2">
                  <h3 className="title-name">{jobs?.title}</h3>
                  <p
                    style={{
                      color: "#46a9c2",
                      fontWeight: "bold",
                    }}
                  >
                    {jobs?.company} / {jobs?.location} / {jobs?.jobType}
                  </p>
                  <hr
                    style={{
                      backgroundColor: "black",
                      boxShadow: "2px 1px 2px black",
                    }}
                  />
                  <p>{jobs?.shortDescription}</p>
                  <div className="flex">
                    <p>
                      Salary: {jobs.salaryFrom} - {jobs.salaryTo} /
                    </p>
                    <p style={{ marginLeft: "10px" }}>
                      Experience: {jobs.experience} Years
                    </p>
                  </div>
                  <hr
                    style={{
                      backgroundColor: "black",
                      boxShadow: "2px 1px 2px black",
                    }}
                  />
                  <div className="flex justify-content-between">
                    {console.log(jobs)}
                    <Link to={`/jobs/${jobs._id}`}>
                      <Button className="view-btn" type="primary">
                        View
                      </Button>
                    </Link>
                    <p>
                      Posted on: {dayjs(jobs.createdAt).format("MMMM, DD-YYYY")}
                    </p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </DefaultLayout>
    </div>
  );
};

export default Home;
