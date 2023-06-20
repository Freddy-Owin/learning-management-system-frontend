import React, { useEffect, useState } from 'react'
import LessonTable from '../../components/admin/lessons/LessonTable'
import Apiservice from '../../services/Apiservice';
import { useParams } from 'react-router-dom';
function Lessons() {
    let param = useParams();
    let [data, setData] = useState([]);
    useEffect(() => {
        getData();
    },[]);
    useEffect(() => {
        getData();
    },[data]);
    let getData = () => {
        Apiservice.get("/admin/lessons/" + param.week)
            .then(res => {
                res.data.data.map(data => {
                    data.created = new Date(data.created).toDateString();
                })
                setData(res.data.data);
                console.log(res)
            }).catch(err => console.log(err));
    }
    let deleteHandelr = (param) => {
        Apiservice.drop("/admin/lessons/delete/" + param)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <LessonTable deleteHandelr={deleteHandelr} data={data}></LessonTable>
        </div>
    )
}

export default Lessons