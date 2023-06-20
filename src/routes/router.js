import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/public/Home";
import Courses from "../pages/public/Courses";
import Register from "../pages/public/Register";
import Login from "../pages/public/Login";
import Enrollment from "../pages/public/Enrollment";
import CareerDetail from "../pages/public/CareerDetail";
import Career from "../pages/public/Career";
import Dashboard from "../layouts/admin/Dashboard";
import Homepage from "../pages/admin/Home";
import StudentProfile from "../layouts/student/Profile";
import AdminCourses from "../pages/admin/Courses";
import CareersOptions from "../pages/admin/CareersOptions";
import Applications from "../pages/admin/Applications";
import Instructors from "../pages/admin/Instructors";
import RelatedBatch from "../pages/admin/RelatedBatch";
import Weeks from "../pages/admin/Weeks";
import Lessons from "../pages/admin/Lessons";
import LessonDetail from "../pages/admin/LessonDetail";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../stores/actionCreator";
import { getAuthToken } from "../services/Tokenservice";
import ProfilePage from "../pages/students/ProfilePage";
import AdminRegister from "../pages/public/AdminRegister";
import StudentEnrollment from "../pages/admin/StudentEnrollment";
import Student from "../pages/admin/Student";

let Routing = () => {
    let isAuthenticated = getAuthToken();
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/courses" element={<Courses></Courses>}></Route>
                <Route path="/courses/:id" element={<Enrollment></Enrollment>}></Route>
                <Route path="/careers/" element={<Career></Career>}></Route>
                <Route path="/careers/:id" element={<CareerDetail></CareerDetail>}></Route>
                <Route path="/register" element={!isAuthenticated ? <Register></Register> : <Navigate to={"/"}></Navigate>}></Route>
                <Route path="/admin/register" element={!isAuthenticated ? <AdminRegister></AdminRegister> : <Navigate to={"/"}></Navigate>}></Route>
                <Route path="/login" element={!isAuthenticated ? <Login></Login> : <Navigate to={"/"}></Navigate>}></Route>
                <Route path="/admin" element={isAuthenticated ? <Dashboard></Dashboard> : <Navigate to={"/login"}></Navigate>}>
                    <Route index element={<Homepage></Homepage>}></Route>
                    <Route path="courses" element={<AdminCourses></AdminCourses>}></Route>
                    <Route path="courses" element={<AdminCourses></AdminCourses>}></Route>
                    <Route path="courses/:id" element={<RelatedBatch></RelatedBatch>}></Route>
                    <Route path="courses/:course/batch/:batch" element={<Weeks></Weeks>}></Route>
                    <Route path="courses/:course/batch/:batch/weeks/:week" element={<Lessons></Lessons>}></Route>
                    <Route path="courses/:course/batch/:batch/weeks/:week/lessons/:lesson" element={<LessonDetail></LessonDetail>}></Route>
                    <Route path="instructors" element={<Instructors></Instructors>}></Route>
                    <Route path="students" element={<Student></Student>}></Route>
                    <Route path="enrollments" element={<StudentEnrollment></StudentEnrollment>}></Route>
                    <Route path="careers" element={<CareersOptions></CareersOptions>}></Route>
                    <Route path="applications" element={<Applications></Applications>}></Route>
                </Route>
                <Route path="/student" element={isAuthenticated ? <StudentProfile></StudentProfile>:<Navigate to={'/login'}></Navigate>}>
                    <Route index element={<ProfilePage></ProfilePage>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;