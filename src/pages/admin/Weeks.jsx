import React, { useEffect, useState } from 'react'
import WeekComponent from '../../components/admin/weeks/WeekComponent'
import Apiservice from '../../services/Apiservice';
import { useParams } from 'react-router-dom';
function Weeks() {
    let param = useParams();
    let [data, setData] = useState([]);
    let [newData, setNewData] = useState({});
    let serverData = () => {
        Apiservice.get("/admin/weeks/courses/" + param.course + "/batch/" + param.batch)
            .then(res => setData(res.data.data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        serverData();
    },[]);
    useEffect(() => {
        serverData();
    },[newData]);
    let addWeek = (data) => {
        Apiservice.post("/admin/weeks", data)
            .then(res => setNewData(res.data.data))
            .catch(err => console.log(err));
    }
    let deleteWeek = (info) => {
        Apiservice.drop("/admin/weeks/delete/" + info)
            .then(res => setNewData(res.data.data))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <WeekComponent deleteWeek={deleteWeek} addWeek={addWeek} data={data}></WeekComponent>
        </div>
    )
}

export default Weeks