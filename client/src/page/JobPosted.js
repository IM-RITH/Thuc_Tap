import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { Table, Modal } from "antd";
import dayjs from "dayjs";
import { EditFilled, OrderedListOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
const JobPosted = () => {
  const alljobs = useSelector((state) => state.jobReducer).jobs;
  const allusers = useSelector((state) => state.userReducer).users;
  const userid = JSON.parse(localStorage.getItem("user"))._id;
  const userPostedJobs = alljobs.filter((job) => job.postedBy === userid);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisble] = useState(false);
  const [selectedJob, setSelectedJob] = useState();

  const colums = [
    {
      title: "Job Tittle",
      dataIndex: "title",
    },
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Applied Candidates",
      dataIndex: "appliedcandidates",
    },
    {
      title: "Posted On",
      dataIndex: "createdAt",
    },
    {
      title: "Action",
      render: (text, data) => {
        return (
          <div className="flex">
            <EditFilled
              onClick={() => {
                navigate(`/editjob/${data.completedJobData._id}`);
              }}
            />
            <OrderedListOutlined
              style={{ paddingLeft: "15px" }}
              onClick={() => {
                ShowModal(job);
              }}
            />
          </div>
        );
      },
    },
  ];

  const dataSource = [];
  for (var job of userPostedJobs) {
    var obj = {
      title: job.title,
      company: job.company,
      appliedcandidates: job.appliedcandidates.length, //get the number of candidates who have applied to this job
      createdAt: dayjs(job.createdAt).format("DD - MMMM - YYYY"),
      completedJobData: job,
    };
    dataSource.push(obj);
  }

  const ShowModal = (job) => {
    setIsModalVisble(true);
    setSelectedJob(job);
  };
  const handleOK = () => {
    setIsModalVisble(false);
  };
  const handleCancel = () => {
    setIsModalVisble(false);
  };

  function candidateList() {
    const candidateColoums = [
      {
        title: "Candidate ID",
        dataIndex: "candidateId",
        render: (text, data) => {
          return (
            <Link to={`/users/${data.candidateId}`}>{data.candidateId}</Link>
          );
        },
      },
      {
        title: "Candidate Name",
        dataIndex: "fullname",
      },
      {
        title: "Applied Date",
        dataIndex: "appliedDate",
      },
    ];
    var candidateData = [];

    if (
      selectedJob &&
      selectedJob.appliedcandidates &&
      typeof selectedJob.appliedcandidates === "object"
    ) {
      for (var candidate of selectedJob?.appliedcandidates) {
        var user = allusers.find((user) => user._id === candidate.userid);
        var obj = {
          candidateId: user._id,
          fullname: user.firstName + " " + user.lastName,
          appliedDate: candidate.appliedDate,
        };
        candidateData.push(obj);
      }
    }
    return <Table columns={candidateColoums} dataSource={candidateData} />;
  }

  console.log(userPostedJobs);
  return (
    <div className="jobPosted-table">
      <DefaultLayout>
        {/* <h1 className="posted">Job Posted</h1> */}
        <Table columns={colums} dataSource={dataSource} />
        {/* Using Modal antd */}
        <Modal
          title="Applied Candidates List"
          open={isModalVisible}
          closable={false}
          onOk={handleOK}
          onCancel={handleCancel}
          width={900}
        >
          {candidateList()}
        </Modal>
      </DefaultLayout>
    </div>
  );
};

export default JobPosted;
