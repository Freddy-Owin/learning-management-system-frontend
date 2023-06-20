import React, { useEffect, useState } from 'react'
import LessonDetailCcomponent from '../../components/admin/lessons/LessonDetailCcomponent'
import { useParams } from 'react-router-dom';
import Apiservice from '../../services/Apiservice';
import parse from "html-react-parser";
function LessonDetail() {
    let param = useParams();
    let [data, setData] = useState({});
    useEffect(() => {
        getData();
    },[]);
    let getData = () => {
        Apiservice.get("/admin/lessons/detail/" + param.lesson)
            .then(res => {
                res.data.data.file = "http://localhost:5000/lessons/" + res.data.data.file;
                res.data.data.created = new Date (res.data.data.created).toDateString();
                res.data.data.description = parse(res.data.data.description);
                setData(res.data.data);
            }).catch(err => console.log(err))
    }
    return (
        <div>
            <LessonDetailCcomponent data={data}></LessonDetailCcomponent>
        </div>
    )
}

export default LessonDetail