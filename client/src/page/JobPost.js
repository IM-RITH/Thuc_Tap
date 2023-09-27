import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Button, Col, Form, Input, Row, Select, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import TextArea from "antd/es/input/TextArea";
import { useDispatch } from "react-redux";
import { postJobs } from "../redux/actions/jobAction";
const { Option } = Select;
const JobPost = () => {
  const [jobInfo, setJobInfo] = useState();
  const [activeTab, setActiveTab] = useState("0");
  const dispatch = useDispatch();
  const onFirstFinish = (values) => {
    setJobInfo(values);
    setActiveTab("1");
  };
  // onfinal finish form function
  const onFinalFinishForm = (values) => {
    const finalObj = { ...jobInfo, ...values };
    console.log(finalObj);
    dispatch(postJobs(finalObj));
  };
  return (
    <DefaultLayout>
      <Tabs defaultActiveKey="0" activeKey={activeTab}>
        <TabPane tab="Job Information" key="0">
          <Form layout="vertical" onFinish={onFirstFinish}>
            <Row gutter={20}>
              <Col lg={8} sm={24}>
                <Form.Item
                  label="Title"
                  name="title"
                  required
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col lg={8} sm={24}>
                <Form.Item
                  label="Department"
                  name="department"
                  required
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col lg={8} sm={24}>
                <Form.Item
                  label="Experience"
                  name="experience"
                  required
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col lg={8} sm={24}>
                <Form.Item
                  label="Salary From ($)"
                  name="salaryFrom"
                  required
                  rules={[{ required: true }]}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>
              <Col lg={8} sm={24}>
                <Form.Item
                  label="Salary To ($)"
                  name="salaryTo"
                  required
                  rules={[{ required: true }]}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>
              <Col lg={8} sm={24}>
                <Form.Item
                  label="Skills Required"
                  name="skillsRequired"
                  required
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col lg={24} sm={24}>
                <Form.Item
                  label="Short Description"
                  name="shortDescription"
                  required
                  rules={[{ required: true }]}
                >
                  <TextArea rows={3} />
                </Form.Item>
              </Col>
              <Col lg={24} sm={24}>
                <Form.Item
                  label="Full Description"
                  name="fullDescription"
                  required
                  rules={[{ required: true }]}
                >
                  <TextArea rows={4} />
                </Form.Item>
              </Col>
            </Row>
            <Button className="next-btn-jobPost" htmlType="submit">
              Next
            </Button>
          </Form>
        </TabPane>
        <TabPane tab="Company Information" key="1">
          <Form layout="vertical" onFinish={onFinalFinishForm}>
            <Row gutter={20}>
              <Col lg={8} span={24}>
                <Form.Item
                  label="Company Name"
                  name="company"
                  required
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col lg={8} span={24}>
                <Form.Item
                  label="Company Email"
                  name="email"
                  required
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col lg={8} span={24}>
                <Form.Item
                  label="Phone Number"
                  name="phoneNumber"
                  required
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col lg={8} span={24}>
                <Form.Item
                  label="Job Type"
                  name="jobType"
                  required
                  rules={[{ required: true }]}
                >
                  <Select>
                    <Option value={"Full Time"}>Full Time</Option>
                    <Option value={"Part Time"}>Part Time</Option>
                    <Option value={"Internship"}>Internship</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col lg={24} span={24}>
                <Form.Item
                  label="Company Description"
                  name="companyDescription"
                  required
                  rules={[{ required: true }]}
                >
                  <TextArea rows={4} />
                </Form.Item>
              </Col>
              <Col lg={24} span={24}>
                <Form.Item
                  label="Company Location"
                  name="location"
                  required
                  rules={[{ required: true }]}
                >
                  <TextArea rows={3} />
                </Form.Item>
              </Col>
            </Row>
            <Button
              className="previous-btn-jobPost"
              onClick={() => setActiveTab("0")}
            >
              Previous
            </Button>
            <Button className="post-btn-jobPost" htmlType="submit">
              Post
            </Button>
          </Form>
        </TabPane>
      </Tabs>
    </DefaultLayout>
  );
};

export default JobPost;
