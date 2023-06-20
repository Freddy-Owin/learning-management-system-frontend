import { faArrowDown, faXmarkSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
function CourseEditForm(props) {
    let [name, setName] = useState(props.data.name);
    let [age, setAge] = useState(props.data.age);
    let [fee, setFee] = useState(props.data.fee);
    let [status, setStatus] = useState(props.data.status);
    let [description, setDescription] = useState(props.data.description);
    let [selectedFile, setSelectedFile] = useState()
    let [preview, setPreview] = useState()
    useEffect(() => {
        if (!selectedFile) {
            setPreview(props.data.image)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])
    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(props.data.image)
            return
        }
        setSelectedFile(e.target.files[0])
    }
    let setForm = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("name", name);
        formData.append("status", status);
        formData.append("age", age);
        formData.append("fee", fee);
        if (selectedFile) {
            formData.append("image", selectedFile);
        } else {
            formData.append("image", props.data.image);
        }
        formData.append("description", description);
        props.editCourse(formData);
    }
    return (
        <div className='fixed left-0 py-5 top-0 z-50 w-full bg-opacity-80 bg-black h-screen'>
            <div className='w-[80%] mx-auto text-4xl text-end'>
                <FontAwesomeIcon className='text-white cursor-pointer' onClick={() => props.closeEditHandler(false)} icon={faXmarkSquare}/>
            </div>
                <div className="w-[70%] overflow-y-scroll h-[80%] rounded-lg mx-auto bg-gray-200">
                    <form onSubmit={(e) => setForm(e)} className='w-[90%] mx-auto'>
                        <div className='py-3 flex justify-between'>
                            <div className='w-[48%]'>
                                <label>Name</label>
                                <input defaultValue={props.data.name} onChange={(e) => setName(e.target.value)} type="text" className='w-full py-2 px-5' />
                            </div>
                            <div className='w-[48%]'>
                                <label>Status</label>
                                <select defaultValue={props.data.status} onChange={(e) => setStatus(e.target.value)}  className='w-full py-2 px-5 bg-white'>
                                    <option value="online">online</option>
                                    <option value="offline">offline</option>
                                    <option value="internship">internship</option>
                                </select>
                            </div>
                        </div>
                        <div className="py-3 flex justify-between">
                            <div className='w-[48%]'>
                                <label>Age</label>
                                <input defaultValue={props.data.age} onChange={(e) => setAge(e.target.value)} type="text" className='w-full py-2 px-5' />
                            </div>
                            <div className='w-[48%]'>
                                <label>Fee</label>
                                <input defaultValue={props.data.fee}  onChange={(e) => setFee(e.target.value)} type="text" className='w-full py-2 px-5' />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='w-[48%] py-3'>
                                <label>Description</label>
                                <ReactQuill onChange={setDescription} value={props.data.description} className='bg-white' theme='snow'/>
                            </div>
                            <div className='w-[48%] py-3'>
                                <label>Image</label>
                                <input onChange={onSelectFile} type="file" className='bg-white py-1 w-full'/>
                                {selectedFile ? <img src={preview} className='py-2 w-[50%]'/> : <img src={"http://localhost:5000/images/courses/" + props.data.image} className='py-2 w-[50%]'/>}
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
export default CourseEditForm;