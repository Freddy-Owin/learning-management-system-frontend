import React, { useEffect, useState } from 'react'
import Navbar from '../../layouts/public/Navbar'
import Footer from '../../layouts/public/Footer'
import CareerComponents from '../../components/public/careers/CareerComponents'
import Apiservice from '../../services/Apiservice'

function Career() {
    let [data, setData] = useState([]);
    useEffect(() => {
        Apiservice.get("/careers")
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
    return (
        <div>
            <Navbar/>
            <CareerComponents data={data}/>
            <Footer/>
        </div>
    )
}

export default Career