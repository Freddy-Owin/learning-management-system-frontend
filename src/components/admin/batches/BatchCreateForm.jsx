import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function BatchCreateForm(props) {
    let [selectInstructor, setSelectInstructor] = useState("");
    let [instructorId, setInstructorId] = useState();
    let [name, setName] = useState("");
    let [date, setDate] = useState("");
    let [startTime, setStartTime] = useState("");
    let [endTime, setEndTime] = useState("");
    let submitHandler = (e) => {
        e.preventDefault();
        let data = {
            name: name, date: date, start_time:startTime, end_time: endTime, instructors: instructorId,
        }
        props.createBatch(data);
    }
    return (
        <div className='w-full py-10 h-screen fixed top-0 left-0 bg-black bg-opacity-70 z-50'>
            <div className='w-[60%] h-[100%] mx-auto'>
                <div onClick={() => props.closeForm()} className='text-end cursor-pointer text-2xl text-white'>
                    <FontAwesomeIcon icon={faXmark}/>
                </div>
                <div className='my-5 h-[70%] flex justify-between'>
                    <form onSubmit={(e) => submitHandler(e)} className='w-[70%] py-5 bg-gray-200'>
                        <h1 className='py-5 text-center text-2xl italic text-blue-700'>Create New Batch</h1>
                        <div className='my-5 w-[90%] mx-auto'>
                            <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Batch Name @example - Batch 1, Batch 2, Batch 3 ....' className='w-full px-5 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-sky-700'/>
                        </div>
                        <div className='my-5 w-[90%] mx-auto'>
                            <input defaultValue={selectInstructor} placeholder='Choose your instructor in the menu nearby' type="text" className='w-full px-5 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-sky-700'/>
                        </div>
                        <div className='my-5 w-[90%] mx-auto'>
                            <input onChange={(e) => setDate(e.target.value)} type="text" placeholder='@example - Weekdays or Weekends of Monday to ....' className='w-full px-5 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-sky-700'/>
                        </div>
                        <div className='my-5 flex justify-between w-[90%] mx-auto'>
                            <div className='w-[45%]'>
                                <label className='text-gray-600'>Start Time</label>
                                <input onChange={(e) => setStartTime(e.target.value)}  type='text' placeholder='@example : 1pm, 9am' className='w-full px-5 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-sky-700'/>
                            </div>
                            <div className='w-[45%]'>
                                <label className='text-gray-600'>End Time</label>
                                <input onChange={(e) => setEndTime(e.target.value)}  type='text' placeholder='@example : 1pm, 9am' className='w-full px-5 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-sky-700'/>
                            </div>
                        </div>
                        <div className='w-[90%] py-5 flex justify-end mx-auto'>
                            <button className='bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-1'>Save</button>
                        </div>
                    </form>
                    <div className='w-[27%] overflow-y-scroll bg-gray-200'>
                        <h1 className='text-lg py-3 text-center bg-black text-gray-200 italic'>Instructors</h1>
                        {
                            props.instructors.map((data, id) => {
                                return (
                                    <div key={id} onClick={() => {setInstructorId(data._id); setSelectInstructor(data.name)}} className='py-3 px-3 hover:bg-gray-300 cursor-pointer'>
                                        <p className='text-md text-gray-700'>{data.name}</p>
                                        <p className='text-xs text-yellow-600'>{data.email}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BatchCreateForm