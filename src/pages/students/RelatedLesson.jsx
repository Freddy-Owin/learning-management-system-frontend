import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Apiservice from '../../services/Apiservice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
function RelatedLesson() {
    let param = useParams();
    let navigate = useNavigate();
    let [data, setData] = useState(null);
    useEffect(() => {
        Apiservice.get("/students/courses/lessons/" + param.week)
            .then(res => setData(res.data.data))
            .catch(err => console.log(err))
    },[]);
    return (
        <div className='w-[80%] max-sm:w-[90%] mx-auto'>
            <div className='flex justify-between items-center'>
                {
                    data?
                    <p className='text-2xl text-blue-600'>{data.week.name}</p>: ""
                }
                <button onClick={() => navigate(-1)} className='bg-indigo-500 px-5 py-2 text-white'>Back</button>
            </div>
            <div className='w-full my-3'>
                {
                data ? (
                    data.lessons.map((data, id) => {
                        return (
                            <Link key={id}  to={'lessons/' + data._id}>
                                <div className='w-full hover:text-blue-700 hover:bg-blue-200 cursor-pointer'>
                                    <div className='w-[80%] flex justify-between items-center mx-auto py-5'>
                                        <p>{data.name}</p>
                                        <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
                                    </div>
                                    <hr />
                                </div>
                            </Link>
                        );
                    })
                ) : (
                    <div>No Lesson has found!</div>
                )}
            </div>
        </div>
    )
}

export default RelatedLesson