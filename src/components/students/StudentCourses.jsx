import { faArrowAltCircleRight, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'
function StudentCourses() {
    let course = useOutletContext();
    return (
        <div className='mx-auto'>
            {
                course ? 
                course.map((data, id) => {
                    return (
                        <div key={id} className="w-full flex justify-center max-sm:block mb-5 mx-auto shadow-lg border p-5 max-sm:p-3">
                            <div className='w-[40%] max-sm:w-full'>
                                <img src={`http://localhost:5000/images/courses/${ data.course.image }`} className='w-[80%] max-sm:w-full rounded-lg' alt="" />
                                <Link className='max-sm:hidden' to={`/student/courses/${data.course._id}/`} >
                                    <button className="my-3 rounded-lg hover:text-green-600 hover:bg-white border-2 border-green-600 text-white w-[80%] text-center bg-green-600 h-10">
                                        Continue
                                        <FontAwesomeIcon icon={faArrowCircleRight} className='px-2'></FontAwesomeIcon>
                                    </button>
                                </Link>
                            </div>
                            <div className='w-[60%] max-sm:w-full'>
                                <div className='max-sm:block items-center justify-between'>
                                    <h1 className=" mb-10 max-sm:mb-3 max-sm:text-lg text-4xl">{data.course.name}</h1>
                                    <h1 className='my-3 text-sm'>Status - <span className='underline text-blue-600'>{data.course.status}</span></h1>
                                </div>
                                <Link to={`/student/courses/${data.course._id}`} className='sm:hidden'>
                                    <button className="my-3 py-2 rounded-lg hover:text-green-600 hover:bg-white border-2 border-green-600 text-white w-full text-center bg-green-600">
                                        Continue 
                                        <FontAwesomeIcon icon={faArrowAltCircleRight} className='px-2'></FontAwesomeIcon>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )
                }) : 
                <div>No Courses are enrolled yet!</div>
            }
        </div>
    )
}

export default StudentCourses