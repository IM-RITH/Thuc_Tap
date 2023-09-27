import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";

const ApplyJob = () => {
    const {jobs} = useSelector(state => state.jobReducer);
    const user = JSON.parse(localStorage.getItem("user"));
    const userAppliedJobs = [];

    for(var job of jobs) {
        if(job?.appliedcandidates.find(candidate => candidate.userid === user._id)) {
            var jobObj = {
                title: job.title,
                company: job.company,
                appliedDate: job?.appliedcandidates.find(candidate => candidate.userid === user._id).appliedDate
            }
            userAppliedJobs.push(jobObj)
        }
    }

    const columns = [
        {
            title : "Job Title",
            dataIndex:"title"
        },
        {
            title :"Company Name",
            dataIndex: "company"
        },
        {
            title: "Applied Date",
            dataIndex: "appliedDate"
        }
    ]
    return(
        <div>
            <DefaultLayout>
                <Table columns={columns} dataSource={userAppliedJobs}/>
            </DefaultLayout>
        </div>
    )
}

export default ApplyJob;