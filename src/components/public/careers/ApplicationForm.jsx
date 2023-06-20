import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function ApplicationForm(props) {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [cv, setCV] = useState();
    let submit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("cv", cv);
        props.apply(formData);
    }
    return (
        <div className='w-full fixed max-sm:py-5 max-sm:px-10 py-20 px-80 top-0 left-0 h-screen z-50 bg-opacity-60 bg-black'>
            <div className='w-[95%] max-sm:w-[98%] mx-auto text-white text-end text-3xl cursor-pointer'>
                <FontAwesomeIcon onClick={() => props.showForm(false)} icon={faXmarkCircle}/>
            </div>
            <div className="w-[90%] max-sm:w-full mx-auto py-5 bg-gray-200 rounded-md">
                <form onSubmit={(e) => submit(e)} className='w-[80%] mx-auto'>
                    <div className='my-5'>
                        <input onChange={(e) => setName(e.target.value)} placeholder='name' type="text" className='w-full py-2 border px-5 text-sm rounded-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600'/>
                    </div>
                    <div className='my-5'>
                        <input onChange={(e) => setEmail(e.target.value)} placeholder='@gmail.com' type="text" className='w-full py-2 border px-5 text-sm rounded-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600'/>
                    </div>
                    <div className='my-5'>
                        <label htmlFor="cv" className='text-sm text-gray-500'>CV form</label>
                        <input onChange={(e) => setCV(e.target.files[0])} placeholder='cv form' type="file" className='w-full bg-white py-1 border px-5 text-sm rounded-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600'/>
                    </div>
                    <div className='my-5'>
                        <button className='px-3 text-white text-sm py-1 bg-red-600 max-sm:w-full'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ApplicationForm