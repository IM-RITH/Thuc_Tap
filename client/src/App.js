import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/Home";
import ApplyJob from "./page/ApplyJob";
import JobPost from "./page/JobPost";
import Profile from "./page/Profile";
import JobInfo from "./page/JobInfo";
import { getAllJobs } from "./redux/actions/jobAction";
// spinner
import ScaleLoader from "react-spinners/ScaleLoader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Register from "./page/Register";
import Login from "./page/Login";
import JobPosted from "./page/JobPosted";
import EditJob from "./page/EditJob";
import { getAllUser } from "./redux/actions/userAction";
import UserInfo from "./page/UserInfo";
function App() {
  const { loader } = useSelector((state) => state.loaderReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
    dispatch(getAllUser());
  }, []);
  return (
    <div className="App">
      {loader && (
        <div className="sweet-loading text-center">
          <ScaleLoader color={"#2F4E79"} />
        </div>
      )}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/jobpost"
            element={
              <ProtectedRoute>
                <JobPost />
              </ProtectedRoute>
            }
          />
          <Route
            path="/appliedjob"
            element={
              <ProtectedRoute>
                <ApplyJob />
              </ProtectedRoute>
            }
          />
          <Route
            path="/jobs/:id"
            element={
              <ProtectedRoute>
                <JobInfo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/posted"
            element={
              <ProtectedRoute>
                <JobPosted />
              </ProtectedRoute>
            }
          />
          <Route
            path="/editjob/:id"
            element={
              <ProtectedRoute>
                <EditJob />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/:id"
            element={
              <ProtectedRoute>
                <UserInfo />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// Protected Route
export const ProtectedRoute = (props) => {
  const user = localStorage.getItem("user");
  if (!user) {
    return <Navigate to={"/login"} />;
  } else {
    return props.children;
  }
};
