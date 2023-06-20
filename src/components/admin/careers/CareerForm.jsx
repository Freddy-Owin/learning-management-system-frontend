import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
function CareerForm(props) {
    let [name, setName] = useState("");
    let [salary, setSalary] = useState("");
    let [salary_period, setSalaryPeriod] = useState("");
    let [age, setAge] = useState("");
    let [gender, setGender] = useState("");
    let [vacancy, setVacancy] = useState("");
    let [employment_status, setEmploymentStatus] = useState("");
    let [deadline, setDeadline] = useState("");
    let [jd, setJd] = useState("");
    let [jr, setJr] = useState("");
    let submitForm = (e) => {
        e.preventDefault();
        let data = {
            name, salary, salary_period, gender, age, vacancy, employment_status, deadline, jd, jr
        };
        props.catchForm(data);
    }
    return (
        <div className='p-5 fixed w-full h-screen top-0 left-0 z-50 bg-black bg-opacity-70'>
            <div className='text-end text-3xl w-[90%] mx-auto text-white cursor-pointer'>
                <FontAwesomeIcon icon={faXmark} onClick={() => props.createForm(false)}></FontAwesomeIcon>
            </div>
            <form onSubmit={submitForm} className='w-[85%] h-[90%] overflow-y-scroll p-5 mx-auto bg-gray-200'>
                <div className='w-full my-5 text-sm flex justify-between'>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' className='focus:outline-none focus:border-sky-500 focus:border px-5 w-[32%] py-1'/>
                    <input onChange={(e) => setSalary(e.target.value)}  type="text" placeholder='Salary' className='focus:outline-none focus:border-sky-500 focus:border px-5 w-[32%] py-1'/>
                    <input onChange={(e) => setSalaryPeriod(e.target.value)}  type="text" placeholder='Salary Period' className='focus:outline-none focus:border-sky-500 focus:border px-5 w-[32%] py-1'/>
                </div>
                <div className='w-full my-5 text-sm flex justify-between'>
                    <input onChange={(e) => setAge(e.target.value)}  type="text" placeholder='Age' className='focus:outline-none focus:border-sky-500 focus:border px-5 w-[32%] py-1'/>
                    <input onChange={(e) => setGender(e.target.value)}  type="text" placeholder='Gender' className='focus:outline-none focus:border-sky-500 focus:border px-5 w-[32%] py-1'/>
                    <input onChange={(e) => setVacancy(e.target.value)}  type="text" placeholder='Vacancy' className='focus:outline-none focus:border-sky-500 focus:border px-5 w-[32%] py-1'/>
                </div>
                <div className='w-[66%] text-gray-600 my-5 text-sm flex justify-between'>
                    <div className='w-[48.5%]'>
                        <label>Employment Status</label>
                        <input onChange={(e) => setEmploymentStatus(e.target.value)}  type="text" placeholder='@example : part time, full time, ...' className='focus:outline-none focus:border-sky-500 focus:border px-5 w-full py-1'/>
                    </div>
                    <div className='w-[48.5%]'>
                        <label>Deadline</label>
                        <input onChange={(e) => setDeadline(e.target.value)}  type="date" className='focus:outline-none focus:border-sky-500 focus:border px-5 w-full py-1'/>
                    </div>
                </div>
                <div className="w-full text-sm text-gray-600 flex justify-between">
                    <div className='w-[49%]'>
                        <label>Job Description</label>
                        <ReactQuill onChange={setJd}  className='bg-white' theme='snow'></ReactQuill>
                    </div>
                    <div className='w-[49%]'>
                        <label>Job Requirement</label>
                        <ReactQuill onChange={setJr}  className='bg-white' theme='snow'></ReactQuill>
                    </div>
                </div>
                <div className='w-full mt-5 flex justify-end'>
                    <button className='bg-blue-500 hover:bg-blue-700 rounded-md text-white px-3 py-2'>
                        Click to Create
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CareerForm