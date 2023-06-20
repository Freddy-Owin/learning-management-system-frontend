import React, { useEffect, useState } from 'react'
import StudentTable from '../../components/admin/students/StudentTable'
import Apiservice from '../../services/Apiservice'

function Student() {
    let [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);useEffect(() => {
        getData();
    }, [data]);
    let getData = () => {
        Apiservice.get("/admin/students")
            .then(res => {
                res.data.data.map(data => {
                    data.created = new Date(data.created).toDateString();
                });
                setData(res.data.data);
            })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <StudentTable data={data}></StudentTable>
        </div>
    )
}

export default Student