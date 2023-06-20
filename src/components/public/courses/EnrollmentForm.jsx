import React, { useEffect, useState } from 'react'
import logo from "../../../assets/images/logo.jpg";
import {  faLongArrowAltRight, faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function EnrollmentForm(props) {
    return (
        <div>
            <div className="w-full">
                <div className="w-[90%] mx-auto  mt-5">
                    <img src={logo} className="w-[10%] max-sm:w-[50%]" alt="First Edu" />
                    <h1 className="text-4xl my-10 tracking-widest">{props.data.name}</h1>
                    
                    <div className="max-sm:block flex justify-between w-[80%] my-5 max-sm:text-[12px] font-black">
                        <div className='my-5'>
                            Course Status: <span className="text-blue-700">{props.data.status}</span>
                        </div>
                        <div className='my-5'>
                            Age: <span className="text-green-700">{props.data.age}</span>
                        </div>
                        <div className='my-5'>
                            Fee: <span className="text-violet   -700">{props.data.fee}</span>
                        </div>
                        {
                            props.data.available == true? <div></div> :
                            <div className="my-5">
                                <p className="text-red-700">Temporary Closed</p>
                            </div>
                        }
                    </div>
                    <div className="w-[75%] my-5 text-lg max-sm:text-[12px]">
                        {props.data.description}
                    </div>
                    <div className="w-[75%] max-sm:w-[95%] max-sm:text-[11px] flex justify-between text-md">
                        <button onClick={() => props.enroll()}  className="bg-yellow-800 hover:bg-yellow-700 text-white max-sm:py-2 max-sm:px-2 px-10 py-3 shadow-2xl font-black rounded-lg">
                            <FontAwesomeIcon icon={faLongArrowAltRight} className="px-3"/>
                            <span>Enroll Now</span>
                        </button>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default EnrollmentForm