import React, { useEffect, useState } from 'react'
import RelatedBatchTable from '../../components/admin/batches/RelatedBatchTable'
import { useParams } from 'react-router-dom';
import Apiservice from '../../services/Apiservice';
import BatchCreateForm from '../../components/admin/batches/BatchCreateForm';

function RelatedBatch() {
    let param = useParams();
    let [data, setData] = useState();
    let [course, setCourse] = useState();
    let [instructors, setInstructors] = useState([]);
    let [create, setCreate] = useState(false);
    let [newData, setNewData] = useState({});
    useEffect(() => {
        getData();
    },[]);
    useEffect(() => {
        getData();
    },[newData]);
    let getData = () => {
        Apiservice.get("/admin/courses/batch/" + param.id)
            .then(res => setData(res.data.data))
            .catch(err => console.log(err));
        Apiservice.get("/admin/courses/" + param.id)
            .then(res => setCourse(res.data.data))
            .catch(err => console.log(err)); 
    };
    let createBatch = (data) => {
        data.course = param.id;
        Apiservice.post("/admin/batches", data)
            .then(res => {
                setNewData(res.data.data);
                setCreate(false);
            }).catch(err => console.log(err));
    }
    let statusChange = (info, parameter) => {
        let data = {status: info};
        Apiservice.patch("/admin/batches/status/"+ parameter, data)
            .then(res => {
                setNewData(res.data.data);
            })
            .catch(err => console.log(err));
    }
    let showForm = () => {
        Apiservice.get("/admin/instructors")
            .then(res => setInstructors(res.data.data))
            .catch(err => console.log(err));
        setCreate(true);
    }
    let closeForm = () => {
        setCreate(false);
    }
    let deleteBatch = (id) => {
        Apiservice.drop("/admin/batches/delete/"+id)
            .then(res => {
                setNewData(res.data.data);
            })
    }
    return (
        <div>
            {
                data ? <RelatedBatchTable deleteBatch={deleteBatch} course={course} showForm={showForm} data={data} statusChange={statusChange}></RelatedBatchTable>
                : ""
            }
            {create && <BatchCreateForm createBatch={createBatch} instructors={instructors} closeForm={closeForm}></BatchCreateForm>}
            
        </div>
    )
}

export default RelatedBatch