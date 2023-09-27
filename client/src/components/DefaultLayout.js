import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProfileFilled,
  SoundFilled,
} from "@ant-design/icons";
import { SiHomeadvisor } from "react-icons/si";
import { ImProfile } from "react-icons/im";
import { FaShare } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import Filter from "./Filter";
const { Header, Sider, Content } = Layout;

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  render() {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{
            overflow: "auto",
            position: "sticky",
            height: "100vh",
            top: 0,
            bottom: 0,
          }}
        >
          <div className="logo">
            <Link to="/" style={{ color: "gold" }}>
              {this.state.collapsed ? <h1>JB</h1> : <h1>Jobify</h1>}
            </Link>
          </div>
          <div className="menu-sidebar">
            <Menu
              className="menu"
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[window.location.pathname]}
            >
              <Menu.Item key="/" icon={<SiHomeadvisor />}>
                <Link to="/">HOME</Link>
              </Menu.Item>
              <Menu.Item key="/profile" icon={<ImProfile />}>
                <Link to="/profile">PROFILE</Link>
              </Menu.Item>
              <Menu.Item key="/jobpost" icon={<FaShare />}>
                <Link to="/jobpost">POST JOB</Link>
              </Menu.Item>
              <Menu.Item key="/posted" icon={<SoundFilled />}>
                <Link to="/posted">POSTED</Link>
              </Menu.Item>
              <Menu.Item key="/appliedjob" icon={<ProfileFilled />}>
                <Link to="/appliedjob">APPLY JOB</Link>
              </Menu.Item>
              <Menu.Item key="/logout" icon={<IoMdLogOut />}>
                <Link onClick={this.logout}>LOGOUT</Link>
              </Menu.Item>
            </Menu>
          </div>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              position: "sticky",
              overflow: "auto",
              top: 0,
              zIndex: 999,
              backgroundColor: "#46a9c2",
              boxShadow: "2px 3px 5px gray",
            }}
          >
            <div className="flex justify-content-between">
              <div>
                {React.createElement(
                  this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: this.toggle,
                  }
                )}
              </div>
              <div className="filter">
                <Filter />
              </div>
              <div className="username-box">
                <h4>{user.username}</h4>
              </div>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{ margin: "24px 16px", padding: 24, minHeight: 280 }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default DefaultLayout;
