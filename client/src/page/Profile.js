import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Button, Col, Form, Input, Row, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import TextArea from "antd/es/input/TextArea";
import { updateUser } from "../redux/actions/userAction";
import { useDispatch } from "react-redux";
const Profile = () => {
    const [personalinfosubmit, setPersonalinfoSubmit] = useState();
    const dispatch = useDispatch();
    
    // set active tab for next button
    const [activeTab, setActiveTab] = useState("1");

    // Personalinfosubmit function
    const Personalinfosubmit = (values) => {
        setPersonalinfoSubmit(values);
        console.log(values);
        setActiveTab("2");
    }
    // OnFinalFinish function
    const onFinalFinish = (values) => {
        const finalObj = {...personalinfosubmit, ...values};
        console.log(finalObj);
        dispatch(updateUser(finalObj));
    }
    const user = JSON.parse(localStorage.getItem("user"))
    return(
        <div>
            <DefaultLayout>
                <Tabs defaultActiveKey="1" activeKey={activeTab}>
                    <TabPane tab="Personal Information" key="1">
                        <Form layout="vertical" onFinish={Personalinfosubmit} initialValues={user}>
                            <Row gutter={20}>
                                <Col lg={8} sm={24}>
                                    <Form.Item label="First Name" required rules={[{required : true}]} name="firstName">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col lg={8} sm={24}>
                                    <Form.Item label="Last Name" required rules={[{required : true}]} name="lastName">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col lg={8} sm={24}>
                                    <Form.Item label="Email" required rules={[{required : true}]} name="email">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col lg={8} sm={24}>
                                    <Form.Item label="Phone Number" required rules={[{required : true}]} name="phoneNumber">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col lg={8} sm={24}>
                                    <Form.Item label="Portfolio" required rules={[{required : true}]} name="portfolio">
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col lg={24} sm={24}>
                                    <Form.Item label="Address" required rules={[{required : true}]} name="address">
                                        <TextArea rows={6}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button className="next-btn" htmlType="submit">Next</Button>
                        </Form>
                    </TabPane>
                    <TabPane tab="Skills and Education Information" key="2">
                        <Form initialValues={user} layout="vertical" onFinish={onFinalFinish}>
                            <Row>
                                <Col lg={24} sm={24}>
                                    <Form.List name="education">
                                        {(education, { add, remove }) => (
                                            <div>
                                                {education?.map((field, index) => (
                                                    <div className="flex">
                                                        <Form.Item required {...field} label="Education" style={{width:"80%"}} rules={[{required : true}]}>
                                                            <TextArea rows={4}/>
                                                        </Form.Item>
                                                        {/* add and delete button */}
                                                        <Button className="add-btn" onClick={()=> add()}>Add</Button>
                                                        {index !== 0 && (<Button className="delete-btn" onClick={()=> remove(index)}>Delete</Button>)}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </Form.List>
                                </Col>
                                {/* skills */}
                                <Col lg={24} sm={24}>
                                    <Form.List name="skills">
                                        {(skills, { add, remove }) => (
                                            <div>
                                                {skills?.map((field, index) => (
                                                    <div className="flex">
                                                        <Form.Item required {...field} label="Skills" style={{width:"80%"}} rules={[{required : true}]}>
                                                            <TextArea rows={4}/>
                                                        </Form.Item>
                                                        <Button className="add-btn" onClick={()=> add()}>Add</Button>
                                                        {index !== 0 && (<Button className="delete-btn" onClick={()=> remove(index)}>Delete</Button>)}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </Form.List>
                                </Col>
                                {/* experience */}
                                <Col lg={24} sm={24}>
                                    <Form.List name="experience">
                                        {(experience, { add, remove }) => (
                                            <div>
                                                {experience?.map((field, index) => (
                                                    <div className="flex">
                                                        <Form.Item required {...field} label="Experience" style={{width:"80%"}} rules={[{required : true}]}>
                                                            <TextArea rows={4}/>
                                                        </Form.Item>
                                                        <Button className="add-btn" onClick={()=> add()}>Add</Button>
                                                        {index !== 0 && (<Button className="delete-btn" onClick={()=> remove(index)}>Delete</Button>)}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </Form.List>
                                </Col>
                                {/* project */}
                                <Col lg={24} sm={24}>
                                    <Form.List name="project">
                                        {(project, { add, remove }) => (
                                            <div>
                                                {project?.map((field, index) => (
                                                    <div className="flex">
                                                        <Form.Item required {...field} label="Project" style={{width:"80%"}} rules={[{required : true}]}>
                                                            <TextArea rows={4}/>
                                                        </Form.Item>
                                                        <Button className="add-btn" onClick={()=> add()}>Add</Button>
                                                        {index !== 0 && (<Button className="delete-btn" onClick={()=> remove(index)}>Delete</Button>)}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </Form.List>
                                </Col>
                            </Row>
                            <Button className="previous-btn" onClick={()=> setActiveTab("1")}>Previous</Button>
                            <Button className="update-btn" htmlType="submit">Update</Button>
                        </Form>
                    </TabPane>
                </Tabs>
            </DefaultLayout>
        </div>
    )
}

export default Profile;