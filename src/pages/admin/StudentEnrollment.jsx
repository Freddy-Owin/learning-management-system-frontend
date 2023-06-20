import React, { useEffect, useState } from 'react'
import EnrollmentTable from '../../components/admin/enrollments/EnrollmentTable'
import Apiservice from '../../services/Apiservice'

function StudentEnrollment() {
    let [data, setData] = useState([]);
    let [message, setMessage] = useState("");
    useEffect(() => {
        getEnrollment();
    }, []);
    useEffect(() => {
        getEnrollment();
    }, [data]);
    let getEnrollment = () => {
        Apiservice.get("/admin/enrollments")
            .then(res => setData(res.data.data))
            .catch(err => console.log(err));
    }
    let acceptHandler = (info) => {
        Apiservice.post("/admin/students/", info)
            .then(res => window.location.reload())
            .catch(err => console.log(err))
    }
    let removeHandler = (data) => {
        Apiservice.drop("/admin/enrollments/" + data)
            .then(res => setMessage(res.data.message))
            .catch(err => setMessage(err.response.data.msg));
    }
    console.log(data)
    return (
        <div>
            <EnrollmentTable acceptHandler={acceptHandler} removeHandler={removeHandler} data={data}></EnrollmentTable>
        </div>
    )
}

export default StudentEnrollment