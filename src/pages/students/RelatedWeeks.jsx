import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import Apiservice from '../../services/Apiservice';

function RelatedWeeks() {
    let user = useOutletContext();
    let param = useParams();
    let [data, setData] = useState(null);
    useEffect(() => {
        getWeek();
    },[user])
    let getWeek = () => {
        if(user._id) {
            Apiservice.get("/students/courses/"+ user._id +"/"+ param.course)
                .then(res => setData(res.data.data))
                .catch(err => console.log(err));
        } 
    }
    console.log(data)
    return (
        <div className='w-[80%] mx-auto'>
            <p className='text-2xl font-extrabold text-blue-500'>{data && data.batch}</p>
            <div className='w-full bg-gray-200 my-3' >
            {
                data ? 
                data.week.map((week, id) => {
                    return (
                        <div className='w-full hover:bg-slate-300'>
                            <p key={id} className='w-[90%] mx-auto py-5'>{week.name}</p>
                        </div>
                        
                    )
                }) :
                <div>
                    No Week has found!
                </div>
            }
            </div>
        </div>
    )
}

export default RelatedWeeks