import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Apiservice from '../../../services/Apiservice'
function Courses() {
    let [courses, setCourses] = useState([]);
    useEffect(() => {
        Apiservice.get("/courses")
            .then((res) => {
                res.data.data.map((data) => {
                    data.image = "http://localhost:5000/images/courses/" + data.image;
                });
                setCourses(res.data.data);
            })
            .catch((err) => console.log(err));
    },[]);
    return (
        <div>
            {
                courses.map((data, id) => {
                    return (
                        <div key={id} className="w-[80%] flex justify-center max-sm:block my-10 mx-auto shadow-lg border p-5 max-sm:p-3">
                            <div className='w-[40%] max-sm:w-full'>
                                <img src={data.image} className='w-[80%] max-sm:w-full rounded-lg' alt="" />
                                <Link className='max-sm:hidden' to={`/courses/${data._id}`} >
                                    <button className="my-3 rounded-lg hover:text-green-600 hover:bg-white border-2 border-green-600 text-white w-[80%] text-center bg-green-600 h-10">Enroll Now</button>
                                </Link>
                            </div>
                            <div className='w-[60%] max-sm:w-full'>
                                <div className='max-sm:block items-center justify-between'>
                                    <h1 className=" mb-10 max-sm:mb-3 max-sm:text-lg text-4xl">{data.name}</h1>
                                    <h1 className='my-3 text-sm'>Status - <span className='underline text-blue-600'>{data.status}</span></h1>
                                </div>
                                <div className="my-5 max-sm:my-2 max-sm:text-sm flex max-sm:block gap-20 text-green-700">
                                    <h1>Available Age - {data.age}</h1>
                                </div>
                                <div className="max-sm:text-sm w-[70%] max-sm:w-full max-sm:block gap-10 flex my-5 max-sm:my-2 text-red-600">
                                    <div className="w-full max-sm:w-full my-3">
                                        Fee - {data.fee} MMK
                                    </div>
                                </div>
                                <Link to={`/courses/${data._id}`} className='sm:hidden'>
                                    <button className="my-3 rounded-lg hover:text-green-600 hover:bg-white border-2 border-green-600 text-white w-[80%] text-center bg-green-600 h-10">Detail</button>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default Courses