import React from "react";
import { Row, Col, Input, Form, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/userAction";
import { Link } from "react-router-dom";
const Register = () => {
  const dispatch = useDispatch();
  const register = (values) => {
    if (values.password !== values.confirmpassword) {
      message.error("Password does not match");
    } else {
      console.log(values);
      dispatch(registerUser(values));
    }
  };
  return (
    <div className="login">
      <Row justify="center">
        <Col lg={11} sm={24} className="bs p-3 mt-2">
          <h3>Register Page</h3>
          <hr style={{ backgroundColor: "white" }} />
          <Form layout="vertical" onFinish={register}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true }]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password" },
              ]}
            >
              <Input placeholder="Password" />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmpassword"
              rules={[{ required: true }]}
            >
              <Input placeholder="Confirm Password" />
            </Form.Item>
            <Button className="login-btn" htmlType="submit">
              REGISTER
            </Button>
            <Link className="link-to-register" to={"/login"}>
              BACK TO LOGIN
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
