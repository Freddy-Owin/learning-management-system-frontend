import { faArrowDown, faXmarkSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactQuill from 'react-quill';
import React, { useEffect, useState } from 'react'
import 'react-quill/dist/quill.snow.css';

function CourseCreateForm(props) {
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [fee, setFee] = useState("");
    let [status, setStatus] = useState("");
    let [description, setDescription] = useState("");
    let [selectedFile, setSelectedFile] = useState()
    let [preview, setPreview] = useState()
    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])
    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }
    let setForm = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("name", name);
        formData.append("status", status);
        formData.append("age", age);
        formData.append("fee", fee);
        formData.append("image", selectedFile);
        formData.append("description", description);
        props.createCourse(formData);
    }

    return (
        <div className='fixed left-0 py-5 top-0 z-50 w-full bg-opacity-80 bg-black h-screen'>
            <div className='w-[90%] mx-auto text-4xl text-end'>
                <FontAwesomeIcon className='text-white cursor-pointer' onClick={() => props.createForm(false)} icon={faXmarkSquare}/>
            </div>
                <div className="w-[90%] overflow-y-scroll h-[80%] rounded-lg mx-auto bg-gray-200">
                    <form onSubmit={(e) => setForm(e)} className='w-[95%] mx-auto'>
                        <div className='py-3 flex justify-between'>
                            <div className='w-[48%]'>
                                <label>Name</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" className='w-full py-2 px-5' />
                            </div>
                            <div className='w-[48%]'>
                                <label>Status</label>
                                <select defaultValue={undefined} onChange={(e) => setStatus(e.target.value)}  className='w-full py-2 px-5 bg-white'>
                                    <option value={undefined} disabled>choose status</option>
                                    <option value="online">online</option>
                                    <option value="offline">offline</option>
                                    <option value="internship">internship</option>
                                </select>
                            </div>
                        </div>
                        <div className="py-3 flex justify-between">
                            <div className='w-[48%]'>
                                <label>Age</label>
                                <input onChange={(e) => setAge(e.target.value)} type="text" className='w-full py-2 px-5' />
                            </div>
                            <div className='w-[48%]'>
                                <label>Fee</label>
                                <input onChange={(e) => setFee(e.target.value)} type="text" className='w-full py-2 px-5' />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='w-[48%] py-3'>
                                <label>Description</label>
                                <ReactQuill onChange={setDescription} className='bg-white' theme='snow'/>
                            </div>
                            <div className='w-[48%] py-3'>
                                <label>Image</label>
                                <input onChange={onSelectFile} type="file" className='bg-white py-1 w-full'/>
                                {selectedFile && <img src={preview} className='py-2 w-[50%]' alt="image" />}
                            </div>
                        </div>
                        
                        <button className='bg-blue-700 hover:bg-blue-800 text-white py-2 text-lg w-full my-5'>
                            <FontAwesomeIcon className='px-3' icon={faArrowDown}/>
                            Save
                        </button>
                    </form>
                </div>
            </div>
    )
}

export default CourseCreateForm