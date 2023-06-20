import React, { useEffect, useState } from 'react'
import CoursesTable from '../../components/admin/courses/CoursesTable'
import CourseCreateForm from '../../components/admin/courses/CreateForm';
import Apiservice from '../../services/Apiservice';

function Courses() {
    let [showForm, setShowForm] = useState(false);
    let [courses, setCourses] = useState([]);
    let [newData, setNewData] = useState({});
    let createForm = (confirm) => {
        setShowForm(confirm);
    }
    useEffect(() => {
        getData();
    }, []);
    useEffect(() => {
        getData();
    }, [newData]);
    let getData = () => {
        Apiservice.get("/admin/courses")
            .then(res => {
                setCourses(res.data.data)
            })
            .catch(err => console.log(err));
    }
    let createCourse = (data) => {
        Apiservice.post("/admin/courses", data)
            .then(res => {
                setNewData(res.data.data);
                setShowForm(false);
            })
            .catch(err => console.log(err));
    }
    let availableCourse = (condition, param) => {
        let data = {available : condition};
        Apiservice.patch("/admin/courses/available/" + param, data)
            .then(res => {
                setNewData(res.data.data);
            }).catch(err => console.log(err))

    }
    return (
        <div className='w-full'>
            <CoursesTable courses={courses} availableCourse={availableCourse} createForm={createForm}/>
            {showForm && <CourseCreateForm createCourse={createCourse} createForm={createForm}/>}
        </div>
    )
}

export default Courses