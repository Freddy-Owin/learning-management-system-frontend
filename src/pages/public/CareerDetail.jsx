import React, { useEffect, useState } from 'react'
import Navbar from '../../layouts/public/Navbar'
import Footer from '../../layouts/public/Footer'
import CareerDetailComponent from '../../components/public/careers/CareerDetailComponent'
import Apiservice from '../../services/Apiservice'
import { useParams } from 'react-router-dom'
import ApplicationForm from '../../components/public/careers/ApplicationForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function CareerDetail() {
    let [showForm, setShowForm] = useState(false);
    let [completed, setCompleted] = useState(null);
    let param = useParams();
    let [data, setData] = useState([]);
    useEffect(() => {
        Apiservice.get(`/careers/${param.id}`)
            .then((res) => {
                res.data.data.deadline = new Date(res.data.data.deadline).toDateString();
                res.data.data.published_on = new Date(res.data.data.published_on).toDateString();
                setData(res.data.data);
            }) .catch ((err) => {
                console.log(err);
            })
    }, []);
    let apply = (form) => {
        form.append("career",data._id);
        Apiservice.post("/careers/application", form)
            .then(res => {
                window.location.reload();
                setCompleted(res.data.message);
            }).catch (err => {
                console.log(err);
            })
    }
    let showFormHandler = (confirm) => {
        setShowForm(confirm);
    }
    return (
        <div>
            <Navbar/>
            <CareerDetailComponent showForm={showFormHandler} data={data}/>
            {showForm == true? <ApplicationForm apply={apply} showForm={showFormHandler}/>: <div></div>}
            {
                completed == null ? <div></div> : 
                <div className='w-full text-pink-200 max-sm:py-2 fixed top-0 left-0 z-50 bg-opacity-90 bg-green-600'>
                    <div onClick={() => setCompleted(null)} className='text-xl pr-5 cursor-pointer text-end' >
                        <FontAwesomeIcon icon={faXmark}/>
                    </div>
                    
                    <p className='text-center max-sm:text-sm pb-5 text-xl'>{completed}</p>
                </div>
            }
            <Footer/>
        </div>
    )
}

export default CareerDetail