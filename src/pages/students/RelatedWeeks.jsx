import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom'
import Apiservice from '../../services/Apiservice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

function RelatedWeeks() {
    let navigate = useNavigate();
    let user = useOutletContext();
    let param = useParams();
    let [data, setData] = useState(null);
    
    useEffect(() => {
        getWeek();
    },[user])
    let getWeek = () => {
        if(user._id) {
            Apiservice.get("/students/courses/week/"+ user._id +"/"+ param.course)
                .then(res => setData(res.data.data))
                .catch(err => console.log(err));
        } 
    }
    
    return (
        <div className='w-[80%] max-sm:w-[90%] mx-auto'>
            <div className='flex justify-between'>
                <p className='text-2xl font-extrabold text-blue-500'>{data && data.batch}</p>
                <button onClick={() => navigate(-1)} className='bg-indigo-500 px-5 py-2 text-white'>Back</button>
            </div>
            <div className='w-full my-3'>
                {data ? (
                data.week.map((week, id) => {
                    return (
                        <Link key={id}  to={'weeks/' + week._id}>
                            <div className='w-full hover:text-blue-700 hover:bg-blue-200 cursor-pointer'>
                                <div className='w-[80%] flex justify-between items-center mx-auto py-5'>
                                    <p>{week.name}</p>
                                    <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
                                </div>
                                <hr />
                            </div>
                        </Link>
                        
                    );
                })
                ) : (
                <div>No Week has found!</div>
                )}
            </div>
        </div>
      );
}

export default RelatedWeeks