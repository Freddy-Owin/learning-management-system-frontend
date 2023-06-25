import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useOutletContext } from 'react-router-dom'
import Apiservice from '../../services/Apiservice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function StudentCoursePage() {
    let user = useOutletContext();
    let [course, setCourse] = useState(null);
    const navActiveStyle = ({isActive}) => {
        return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "blue" : "black",
            textDecoration: isActive ? "underline" : "none"
        }
    }
    useEffect(() => {
        if(user._id) {
            Apiservice.get("/students/courses/course/" + user._id)
                .then(res => setCourse(res.data.data))
                .catch(err => console.log(err));
        } 
    }, [user]);
    return (
        <div className='w-full'>
            <div className='w-[90%] mx-auto'>
                <Link to={"/courses"}>
                    <button className='rounded-lg px-3 py-2 bg-blue-700 hover:bg-blue-800 font-semibold text-white'>
                        <FontAwesomeIcon icon={faSearch} className='px-2'></FontAwesomeIcon>
                        Explore Courses
                    </button>
                </Link>
                <div className='my-5 flex justify-around max-sm:block font-semibold'>
                    <NavLink to={"/student/courses/"} style={navActiveStyle}>
                        <p className='py-3'>All Courses</p>
                    </NavLink>
                    <NavLink to={"/student/courses/in-progress"} style={navActiveStyle}>
                        <p className='py-3'>In Progress</p>
                    </NavLink>
                    <NavLink to={"/student/courses/completed"} style={navActiveStyle}>
                        <p className='py-3'>Completed</p>
                    </NavLink>
                </div>
                <Outlet context={course}></Outlet>
            </div>
        </div>
    )
}

export default StudentCoursePage