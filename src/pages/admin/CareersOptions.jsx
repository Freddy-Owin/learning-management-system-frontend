import React, { useEffect, useState } from 'react'
import CareerTable from '../../components/admin/careers/CareerTable'
import Apiservice from '../../services/Apiservice';

function CareersOptions() {
    let [data, setData] = useState([]);
    useEffect(() => {
        Apiservice.get("/admin/careers")
            .then((res) => {
                res.data.data.map(data => {
                    data.deadline = new Date(data.deadline).toDateString();
                    data.published_on = new Date(data.published_on).toDateString();
                })
                setData(res.data.data);
            }) .catch ((err) => {
                console.log(err);
            })
    }, []);
    let createCareer = (data) => {
        Apiservice.post("/admin/careers", data)
            .then(res => {
                alert(res.data.message);
                window.location.reload();
            }).catch(err => console.log(err));
    }
    return (
        <div>
            <CareerTable createCareer={createCareer} data={data}/>
        </div>
    )
}

export default CareersOptions