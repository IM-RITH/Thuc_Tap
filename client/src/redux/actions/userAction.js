import axios from "axios";
import { message } from "antd";

// register user action
export const registerUser = (values) => async (dispatch) => {
  dispatch({
    type: "LOADING",
    payload: true,
  });
  try {
    await axios.post("/api/users/register", values);
    message.success("User Register Successfully");
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
    dispatch({
      type: "LOADING",
      payload: false,
    });
  } catch (error) {
    message.error("Opp!! Something wrong");
    dispatch({
      type: "LOADING",
      payload: false,
    });
  }
};
// login user action
export const loginUser = (values) => async (dispatch) => {
  dispatch({
    type: "LOADING",
    payload: true,
  });
  try {
    const user = await axios.post("/api/users/login", values);
    message.success("User Logged in Successfully");
    localStorage.setItem("user", JSON.stringify(user.data));
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
    dispatch({
      type: "LOADING",
      payload: false,
    });
  } catch (error) {
    message.error("Invalid Credential");
    dispatch({
      type: "LOADING",
      payload: false,
    });
  }
};
// update user profile
export const updateUser = (values) => async (dispatch) => {
  const userid = JSON.parse(localStorage.getItem("user"))._id;
  values._id = userid;
  dispatch({
    type: "LOADING",
    payload: true,
  });
  try {
    const user = await axios.post("/api/users/update", values);
    message.success("User Update Info Successfully");
    localStorage.setItem("user", JSON.stringify(user.data));
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    dispatch({
      type: "LOADING",
      payload: false,
    });
  } catch (error) {
    message.error("Opp! something wrong");
    dispatch({
      type: "LOADING",
      payload: false,
    });
  }
};

// Get all users
export const getAllUser = () => async (dispatch) => {
  dispatch({
    type: "LOADING",
    payload: true,
  });

  try {
    const response = await axios.get("/api/users/getallusers");
    dispatch({
      type: "GET_ALL_USERS",
      payload: response.data,
    });
    dispatch({
      type: "LOADING",
      payload: false,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "LOADING",
      payload: false,
    });
  }
};
