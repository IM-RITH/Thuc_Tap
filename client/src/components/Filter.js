import React, { useState } from "react";
import { Button, Form, Input, Modal, Select } from "antd";
import { FilterFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { filterJob, searchJob } from "../redux/actions/jobAction";
const { Search } = Input;
const { Option } = Select;
const Filter = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // filter job function
  const filter = (values) => {
    dispatch(filterJob(values));
    // close Modal
    handleCancel();
  };
  return (
    <div className="flex">
      <FilterFilled onClick={showModal} />
      <Modal
        title="Select Filter"
        footer={false}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
      >
        <Form layout="vertical" onFinish={filter}>
          <Form.Item name="experience" label="Experience">
            <Select>
              <Option value={0}>Fresher</Option>
              <Option value={1}>1 Year</Option>
              <Option value={2}>2 Years</Option>
              <Option value={3}>3 Years</Option>
              <Option value={4}>4 Years</Option>
              <Option value={5}>5 Years</Option>
            </Select>
          </Form.Item>
          <Form.Item name="salary" label="Salary">
            <Select>
              <Option value={100}>100+</Option>
              <Option value={200}>200+</Option>
              <Option value={300}>300+</Option>
              <Option value={500}>500+</Option>
              <Option value={700}>700+</Option>
              <Option value={1000}>1000+</Option>
            </Select>
          </Form.Item>
          <Form.Item name="jobType" label="Job Type">
            <Select>
              <Option value={"Full Time"}>Full Time</Option>
              <Option value={"Part Time"}>Part Time</Option>
              <Option value={"Internship"}>Internship</Option>
            </Select>
          </Form.Item>
          <Button htmlType="submit" className="filter-btn">
            Filter
          </Button>
        </Form>
      </Modal>
      <Search
        placeholder="Search"
        onSearch={(value) => dispatch(searchJob(value))}
      />
    </div>
  );
};

export default Filter;
