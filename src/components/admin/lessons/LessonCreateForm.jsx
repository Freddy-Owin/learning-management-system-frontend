import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Apiservice from '../../../services/Apiservice';
import { useParams } from 'react-router-dom';
function LessonCreateForm(props) {
    let param = useParams();
    let [name, setName] = useState("");
    let [file, setFile] = useState();
    let [description, setDescription] = useState("");
    let saveForm = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("name", name);
        formData.append("file", file);
        formData.append("description", description);
        formData.append("week", param.week);
        formData.append("course", param.course);
        formData.append("batch", param.batch);
        props.lessonCreate(formData);
    }
    return (
        <div className='w-full py-5 bg-opacity-75 h-screen fixed left-0 top-0 bg-black z-50'>
            <div onClick={() => props.formHandler(false)} className='w-[55%] text-3xl cursor-pointer text-white text-end mx-auto'>
                <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </div>
            <form onSubmit={(e) => saveForm(e)} className="w-[50%] h-[80%] overflow-y-scroll rounded-lg py-3 bg-gray-200 mx-auto">
                <div className='w-[90%] my-5 mx-auto'>
                    <label className='block py-1 text-gray-500'>Name</label>
                    <input onChange={e => setName(e.target.value)} type="text" className='w-full py-2 focus:outline-none focus:ring-1 focus:ring-sky-600 px-5 rounded-lg'/>
                </div>
                <div className='w-[90%] my-5 mx-auto'>
                    <label className='block py-1 text-gray-500'>File ( .pdf / .mp4 )</label>
                    <input onChange={(e) => setFile(e.target.files[0])} type="file" className='w-full bg-white py-2 focus:outline-none focus:ring-1 focus:ring-sky-600 px-5 rounded-lg'/>
                </div>
                <div className='w-[90%] rounded-lg my-5 mx-auto'>
                    <label className='block py-1 text-gray-500'>Description</label>
                    <ReactQuill onChange={setDescription} theme='snow' className='bg-white rounded-lg'></ReactQuill>
                </div>
                <div className='w-[90%] my-5 mx-auto flex justify-end'>
                    <button className='py-2 bg-blue-600 px-5 text-white rounded-md'>
                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Save
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LessonCreateForm