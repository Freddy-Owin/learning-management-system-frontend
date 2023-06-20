import React from 'react'
import { Link } from 'react-router-dom'
import parse from "html-react-parser"
function CareerDetailComponent(props) {
    return (
        <div className='w-[80%] max-sm:[97%] max-sm:block py-10 flex justify-between mx-auto'>
            <div className="w-[70%] max-sm:w-[95%] text-gray-800 max-sm:p-5 p-10 border shadow-lg">
                <div className='flex items-center justify-between'>
                    <h1 className="w-[80%] max-sm:text-lg text-[30px] font-serif font-semibold">{props.data.name}</h1>
                </div>
                <div className='max-sm:text-sm my-10 '>
                    <h1 className='my-5 text-2xl'>Job Descriptions</h1>
                    <p>{props.data.jd ? parse(props.data.jd): ""}</p>
                </div>
                <div className='max-sm:text-sm my-10'>
                    <h1 className='my-5 text-2xl'>Job Requirements</h1>
                    <p>{props.data.jr ? parse(props.data.jr): ""}</p>
                </div>
            </div>
            <div className="w-[25%] max-sm:w-[95%] max-sm:my-10 shadow-2xl border-2 text-sm text-gray-700">
                <h1 className='text-center text-white bg-green-500 py-2 text-xl italic'>Job Summery</h1>
                <div className='w-[80%] my-5 mx-auto'>
                    <p>Vacancy : {props.data.vacancy} {props.data.vacancy > 1 ? "posts" : "post"}</p>
                    <div className='w-full my-2 h-[1px] bg-slate-500'></div>
                </div>
                <div className='w-[80%] my-5 mx-auto'>
                    <p>Salary : {props.data.salary}</p>
                    <div className='w-full my-2 h-[1px] bg-slate-500'></div>
                </div>
                <div className='w-[80%] my-5 mx-auto'>
                    <p>Salary Period : {props.data.salary_period}</p>
                    <div className='w-full my-2 h-[1px] bg-slate-500'></div>
                </div>
                <div className='w-[80%] my-5 mx-auto'>
                    <p>Gender : {props.data.gender}</p>
                    <div className='w-full my-2 h-[1px] bg-slate-500'></div>
                </div>
                <div className='w-[80%] my-5 mx-auto'>
                    <p>Age : {props.data.age}</p>
                    <div className='w-full my-2 h-[1px] bg-slate-500'></div>
                </div>
                <div className='w-[80%] my-5 mx-auto'>
                    <p>Employment Status : {props.data.employment_status}</p>
                    <div className='w-full my-2 h-[1px] bg-slate-500'></div>
                </div>
                <div className='w-[80%] my-5 mx-auto'>
                    <p>Published On : {props.data.published_on}</p>
                    <div className='w-full my-2 h-[1px] bg-slate-500'></div>
                </div>
                <div className='w-[80%] my-5 mx-auto'>
                    <p>Application Deadline : {props.data.deadline}</p>
                    <div className='w-full my-2 h-[1px] bg-slate-500'></div>
                </div>
                <div className='w-[80%] my-5 mx-auto'>
                    <button onClick={() => props.showForm(true)} className='w-full bg-red-600 py-3 rounded-lg text-white'>Apply Here</button>
                </div>
            </div>
        </div>
    )
}

export default CareerDetailComponent