import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const UserInfo = () => {
  const params = useParams();
  const { users } = useSelector((state) => state.userReducer);
  const user = users.find((user) => user._id === params.id);
  return (
    <div>
      <DefaultLayout>
        {user && (
          <div>
            <h3>
              <strong>Personal Information</strong>
            </h3>
            <hr style={{ backgroundColor: "blueviolet", height: "1.5px" }} />
            <p>
              First Name:<strong> {user.firstName}</strong>
            </p>
            <hr />
            <p>
              Last Name:<strong> {user.lastName}</strong>
            </p>
            <hr />
            <p>
              Email:<strong> {user.email}</strong>
            </p>
            <hr />
            <p>
              Phone Number:<strong> {user.phoneNumber}</strong>
            </p>
            <hr />
            <p>
              Adress:<strong> {user.address}</strong>
            </p>
            <hr />
            <p>
              Portfolio:<strong> {user.portfolio}</strong>
            </p>
            <hr />
            <h3>
              <strong>Skills Information</strong>
            </h3>
            <hr style={{ backgroundColor: "blueviolet", height: "1.5px" }} />
            <p>
              <strong>
                {user.skills.map((skills) => {
                  return <li>{skills}</li>;
                })}
              </strong>
            </p>
            <hr />
            <h3>
              <strong>Education Information</strong>
            </h3>
            <hr style={{ backgroundColor: "blueviolet", height: "1.5px" }} />
            <p>
              <strong>
                {user.education.map((edu) => {
                  return <li>{edu}</li>;
                })}
              </strong>
            </p>
            <hr />
            <h3>
              <strong>Project Information</strong>
            </h3>
            <hr style={{ backgroundColor: "blueviolet", height: "1.5px" }} />
            <p>
              <strong>
                {user.project.map((project) => {
                  return <li>{project}</li>;
                })}
              </strong>
            </p>
          </div>
        )}
      </DefaultLayout>
    </div>
  );
};

export default UserInfo;
