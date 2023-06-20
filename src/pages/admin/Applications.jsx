import React, { useEffect, useState } from 'react'
import ApplicationTable from '../../components/admin/careers/ApplicationTable'
import Apiservice from "../../services/Apiservice";
function Applications() {
    let [data, setData] = useState([]);
    let [showPassword, setShowPassword] = useState(false);
    useEffect(() => {
        Apiservice.get("/admin/applications")
            .then(res => {
                res.data.data.map(data => {
                    data.created = new Date(data.created).toDateString();
                });
                setData(res.data.data);
            }).catch(err => console.log(err))
    }, []);
    let showPasswordHandler = (data) => {
        setShowPassword(data);
    }
    let confrimInstructor = (data) => {
        Apiservice.post("/admin/applications/", data)
            .then(res => {
                alert(res.data.message);
                window.location.reload();
            })
            .catch(err => console.log(err));
    }
    let deleteApplication = (param) => {
        Apiservice.drop("/admin/applications/"+param, data)
            .then(res => window.location.reload())
            .catch(err => console.log(err));
    }
    return (
        <div>
            <ApplicationTable showPassword={showPassword} showPasswordHandler={showPasswordHandler} data={data} confirm={confrimInstructor} dropApp={deleteApplication}/>
        </div>
    )
}

export default Applications