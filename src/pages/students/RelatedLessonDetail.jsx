import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Apiservice from '../../services/Apiservice';
import parse from "html-react-parser"
function RelatedLessonDetail() {
    let navigate = useNavigate();
    let param = useParams();
    let [data, setData] = useState(null);
    useEffect(() => {
        Apiservice.get("/students/courses/lesson-detail/" + param.lesson)
            .then(res => {
                res.data.data.file = "http://localhost:5000/lessons/" + res.data.data.file;
                res.data.data.created = new Date (res.data.data.created).toDateString();
                res.data.data.description = parse(res.data.data.description);
                setData(res.data.data);
            })
            .catch(err => console.log(err.response.data.msg));
    },[]);
    return (
        <div className='w-[80%] max-sm:w-[90%] mx-auto'>
            <div className='flex justify-between max-sm:block items-center'>
                <p className='text-2xl font-extrabold text-blue-500 max-sm:my-5'>{data && data.name}</p>
            </div>
            <div className='w-[90%] my-5'>
                {
                    data ? 
                    <video controls>
                        <source src={data.file} type='video/mp4'></source>
                    </video> : <div></div>
                }
            </div>
            <div className='w-[90%] my-5'>
                <h1 className='text-2xl text-indigo-600'>Description</h1>
                <p className='py-5'>
                    {data && data.description}
                </p>
            </div>
            <div className='w-[90%] flex gap-10'>
                <button className='bg-gray-200 px-5 py-2 hover:bg-white hover:underline'>Go to next item</button>
                <button onClick={() => navigate(-1)} className='bg-indigo-500 px-5 py-2 text-white'>Back</button>
            </div>
        </div>
    )
}

export default RelatedLessonDetail