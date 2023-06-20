import React, { useEffect, useState } from 'react'
import Apiservice from '../../../services/Apiservice';
import { Link, useNavigate } from 'react-router-dom';

function Courses() {
    let [courses, setCourses] = useState([]);
    let nevigate = useNavigate();
    useEffect(() => {
        Apiservice.get("/courses/home")
            .then(res => {
                res.data.data.map(data => {
                    data.image = "http://localhost:5000/images/courses/" + data.image
                });
                setCourses(res.data.data);
            }).catch((err) => console.log(err));
    },[]);
    return (
        <div className='w-full my-10 max-sm:my-4 py-5 bg-gray-50'>
            <h1 className='text-3xl text-center underline'>Latest Courses</h1>
            <div className='w-[95%] flex max-sm:block justify-between mx-auto my-10 max-sm:my-3'>
                {
                    courses.map((data, id) => {
                        return (
                            <div data-aos="zoom-in" data-aos-duration="1500" onClick={() => nevigate("/courses/" + data._id)} key={id} className='w-[24%] my-5 max-sm:flex max-sm:justify-between max-sm:items-center max-sm:w-[95%] hover:shadow-gray-700 cursor-pointer rounded-md shadow-md hover:shadow-inner shadow-gray-400 max-sm:shadow-none'>
                                <div className='w-[90%] max-sm:w-[50%] max-sm:my-2 my-5 mx-auto'>
                                    <img src={data.image} className='w-full rounded-md' alt="course" />
                                </div>
                                <div className='font-black flex max-sm:block items-center justify-between text-md max-sm:text-sm  max-sm:w-[40%] w-[90%] mx-auto'>
                                    <h1 className='w-[75%] py-2'>{data.name}</h1>
                                    <p className='my-3 text-sm max-sm:text-[12px] text-red-600 '> {data.status} </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Link to={"/courses"}>
                <div className='w-[95%] mx-auto'>
                    <button className='max-sm:px-5 max-sm:py-3 max-sm:text-lg bg-white border-2 border-blue-700 text-[12px] rounded-lg px-3 font-black py-1 text-blue-700 hover:text-sky-500 hover:border-sky-500'>Show More</button>
                </div>
            </Link>
            
        </div>
    )
}

export default Courses