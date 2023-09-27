import React from "react";
import { Row, Col, Input, Form, Button } from "antd";
import { loginUser } from "../redux/actions/userAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import image from "../page/image/loginpic.jpg";

const Login = () => {
  const dispatch = useDispatch();
  const login = (values) => {
    dispatch(loginUser(values));
  };
  return (
    <div className="login">
      <h2 className="title-content">
        The <strong>future</strong> depends on what you do{" "}
        <strong>today</strong>. You wanna find job?{" "}
        <strong>Check it out!</strong>
      </h2>
      <Row justify="center" style={{ margin: "30px 0" }}>
        <img
          src={image}
          style={{
            width: "400px",
            height: "auto",
            paddingRight: "50px",
            boxShadow: "5px 10px 5px rgba(0, 0, 0, 0.3)",
            borderRadius: "15px",
          }}
        />
        <Col
          lg={11}
          sm={24}
          className="bs p-3 mt-2"
          style={{ marginLeft: "20px" }}
        >
          <h3>Login Page</h3>
          <hr style={{ backgroundColor: "gold" }} />
          <Form layout="vertical" onFinish={login}>
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
            <Button className="login-btn" htmlType="submit">
              LOGIN
            </Button>
            <Link className="link-to-register" to={"/register"}>
              CLICK TO REGISTER
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
