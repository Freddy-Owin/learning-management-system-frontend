import React, { useEffect, useState } from 'react'
import Navbar from '../../layouts/public/Navbar'
import Footer from '../../layouts/public/Footer'
import EnrollmentForm from '../../components/public/courses/EnrollmentForm'
import {  useNavigate, useParams } from 'react-router-dom'
import parse from "html-react-parser";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Apiservice from '../../services/Apiservice';
import { actionCreator } from '../../stores/actionCreator'
import { getAuthToken } from '../../services/Tokenservice'

function Enrollment() {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let [user, setUser] = useState(null);
    let {logout} = bindActionCreators(actionCreator, dispatch);
    let param = useParams();
    let [data, setData] = useState({});
    let [enrollSuccess, setEnrollSuccess] = useState(false);
    useEffect(() => {
        Apiservice.get(`/courses/detail/${param.id}`)
        .then(res => {
            res.data.data.description = parse(res.data.data.description);
            res.data.data.image = "http://localhost:5000/images/courses/"+data.image
            setData(res.data.data)
        }).catch(err => console.log(err));
        getAuthData();
    },[]);
    useEffect(() => {
        getAuthData();
    },[getAuthToken()]);
    let getAuthData = () => {
        Apiservice.get("/auth/authData")
            .then(res => setUser(res.data.data))
            .catch(err => {
                logout();
            });
    }
    let enroll = () => {
        if (user) {
            let enrollData = {
                user: user._id,
                course: data._id
            }
            Apiservice.post('/enrollments', enrollData)
                .then(res => setEnrollSuccess(true))
                .catch(err => console.log(err));
        } else {
            navigate('/login')
        }
        
    }
    return (
        <div>
            <Navbar/>
            <EnrollmentForm enroll={enroll} data={data}/>
            <Footer/>
            {
                enrollSuccess == true?
                <div className='w-full z-50 h-screen fixed top-0 left-0 bg-black bg-opacity-60'>
                    <div className='flex h-full items-center'>
                        <div className='w-[50%] max-sm:w-[90%] mx-auto border-4 border-green-600 bg-white bg-opacity-80 rounded-lg'>
                            <div className='w-[90%] mx-auto'>
                                <p className='py-3 text-lg text-center'>You have enrolled successfully! Wait for our response whether we will have accepted your enrollment.</p>
                            </div>
                            <div className='w-[90%] mx-auto flex justify-end'>
                                <button onClick={() => {setEnrollSuccess(false); navigate("/student/courses")}} className='bg-indigo-600 text-white hover:underline px-5 py-1 rounded-lg my-5'>Okay</button>
                            </div>
                            
                        </div>
                    </div>
                </div> : 
                <div></div>
            }
        </div>
    )
}

export default Enrollment