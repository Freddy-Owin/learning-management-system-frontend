import { faBook, faBookmark, faChalkboardTeacher, faFilePen, faFileSignature, faSigning, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function DashboardCards(props) {
    let navigate = useNavigate();
    return (
        <div>
            {
                props.data? 
                <div className='w-[95%] mx-auto'>
                    <div className='w-full flex my-5 justify-between'>
                        <div onClick={() => navigate("/admin/instructors")} className='hover:shadow-inner cursor-pointer w-[18%] shadow-md shadow-gray-600 text-white bg-blue-500 flex items-center'>
                            <div className='w-full py-10 text-center'>
                                <FontAwesomeIcon className='text-4xl' icon={faChalkboardTeacher}></FontAwesomeIcon>
                                <p className='text-2xl font-bold my-2'>{props.data.instructors}</p> 
                                <p className='text-sm'>Instructors</p>   
                            </div>
                        </div>
                        <div onClick={() => navigate("/admin/students")} className='hover:shadow-inner cursor-pointer w-[18%] shadow-md shadow-gray-600 bg-green-500 text-white'>
                            <div className='w-full py-10 text-center'>
                                <FontAwesomeIcon className='text-4xl' icon={faUserGroup}></FontAwesomeIcon>
                                <p className='text-2xl font-bold my-2'>{props.data.students}</p> 
                                <p className='text-sm'>Students</p>   
                            </div>    
                        </div>
                        <div onClick={() => navigate("/admin/enrollments")} className='hover:shadow-inner cursor-pointer w-[18%] shadow-md shadow-gray-600 bg-yellow-500 text-white'>
                            <div className='w-full py-10 text-center'>
                                <FontAwesomeIcon className='text-4xl' icon={faFileSignature}></FontAwesomeIcon>
                                <p className='text-2xl font-bold my-2'>{props.data.enrollments}</p> 
                                <p className='text-sm'>Enrollments</p>   
                            </div> 
                        </div>
                        <div onClick={() => navigate("/admin/applications")} className='hover:shadow-inner cursor-pointer w-[18%] shadow-md shadow-gray-600 bg-red-500 text-white'>
                            <div className='w-full py-10 text-center'>
                                <FontAwesomeIcon className='text-4xl' icon={faFilePen}></FontAwesomeIcon>
                                <p className='text-2xl font-bold my-2'>{props.data.applications}</p> 
                                <p className='text-sm'>Application Forms</p>   
                            </div> 
                        </div>
                    </div>
                </div>: <div>No Data Yet!</div>
            }
        </div>
    )
}

export default DashboardCards