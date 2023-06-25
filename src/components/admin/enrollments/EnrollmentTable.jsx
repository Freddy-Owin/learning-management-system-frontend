import React, { useState } from 'react'
import enrollmentColumns from '../../../services/table_columns/enrollment'
import { MaterialReactTable } from 'material-react-table';
import { Box, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Apiservice from '../../../services/Apiservice';

function EnrollmentTable(props) {
    let navigate = useNavigate();
    let [profile, setProfile] = useState("");
    let [courseId, setCourseId] = useState("");
    let [studentId, setStudentId] = useState("");
    let [showImage, setShowImage] = useState(false);
    let [showAccept, setShowAccept] = useState(false);
    let [acceptCourse, setAcceptCourse] = useState("");
    let [selectBatch, setSelectBatch] = useState("");
    let [enrollmentId, setEnrollmentId] = useState("");
    let [batchId, setBatchId] = useState("");
    let [batch, setBatch] = useState([]);
    let columns = enrollmentColumns;
    let getbatch = (course) => {
        Apiservice.get("/admin/batches/get-to-accept/" + course._id)
            .then(res => setBatch(res.data.data))
            .catch(err => console.log(err))
    }
    let showAcceptHandler = (row) => {
        setShowAccept(true);
        setCourseId(row.course._id);
        setAcceptCourse(row.course.name);
        setStudentId(row.user._id);
        setEnrollmentId(row._id);
        getbatch(row.course);
    };

    let submitHandler = (e) => {
        e.preventDefault();
        let info = {
            course: courseId, batch: batchId, user: studentId, id: enrollmentId
        }
        props.acceptHandler(info);
    }
    return (
        <div>
            <MaterialReactTable 
            data={props.data} 
            columns={columns}
            enableRowActions
            displayColumnDefOptions={{
                'mrt-row-actions': {
                    muiTableHeadCellProps: {
                        align: 'center',
                    },
                    size: 120,
                },
            }}
            positionActionsColumn='last'
            renderRowActions={({row}) => {
                return (
                    <Box className="flex justify-center gap-3">
                        <IconButton onClick={() => showAcceptHandler(row.original)}>
                            <div className='text-xs text-green-500'>
                                <p>accept</p>
                                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                            </div>
                        </IconButton>
                        <IconButton onClick={() => props.removeHandler(row.original._id)}>
                            <div className='text-xs text-red-500'>
                                <p>remove</p>
                                <FontAwesomeIcon icon={faXmarkCircle}></FontAwesomeIcon>
                            </div>
                        </IconButton>
                    </Box>
                )
            }}
            renderDetailPanel={({row}) => {
                return (
                    <Box className="w-[90%] flex items-center justify-around mx-auto">
                        <div onClick={() => {setShowImage(true); setProfile(`http://localhost:5000/images/profiles/${row.original.user.image}`)}} style={{'--image-url': `url(http://localhost:5000/images/profiles/${row.original.user.image})`}} className='bg-[image:var(--image-url)] w-36 h-36 max-sm:w-24 max-sm:h-24 bg-no-repeat bg-cover bg-center hover:border-green-500 border-4 border-red-600 cursor-pointer rounded-full bg-green-500'>
                        </div>
                        <div className=''>
                            <p className='my-5'>Name - <span className='text-yellow-600'>{row.original.user.name}</span></p>
                            <p className='my-5'>Email - <span className='text-yellow-600'>{row.original.user.email}</span></p>
                            <p className='my-5'>Phone - <span className='text-yellow-600'>{row.original.user.phone}</span></p>
                        </div>
                        <div className=''>
                            <p className='my-5'>Education - <span className='text-yellow-600'>{row.original.user.education}</span></p>
                            <p className='my-5'>Date of Birth - <span className='text-yellow-600'>{new Date(row.original.user.dob).toDateString()}</span> </p>
                            <p className='my-5'>Address - <span className='text-yellow-600'>{row.original.user.address}</span></p>
                        </div>
                        <div className=''>
                        </div>
                    </Box>
                )
            }}
            ></MaterialReactTable>
            {
                showImage == true ? 
                <div className='w-full fixed py-10 bg-black h-screen top-0 z-50 left-0 bg-opacity-40'>
                    <div onClick={() => setShowImage(false)} className='w-[50%] mx-auto text-end text-3xl text-white'>
                        <FontAwesomeIcon className='cursor-pointer' icon={faXmarkCircle}></FontAwesomeIcon>
                    </div>
                    <div className='w-[20%] mx-auto my-5'>
                        <img src={profile} className='w-full h-full' alt="image" />
                    </div>
                </div> :
                <div></div>
            }
            {
                showAccept == true ?
                <div className='w-full fixed py-10 bg-black h-screen top-0 z-50 left-0 bg-opacity-40'>
                    <div onClick={() => setShowAccept(false)} className='w-[80%] mx-auto text-end text-3xl text-white'>
                        <FontAwesomeIcon className='cursor-pointer' icon={faXmarkCircle}></FontAwesomeIcon>
                    </div>
                    <div className='w-[70%] flex justify-between mx-auto my-5'>
                        <form onSubmit={(e) => {submitHandler(e)}} className='py-5 w-[60%] bg-gray-200 '>
                            <div className='w-[80%] mx-auto'>
                                <label className='text-2xl'>Choose Batch</label>
                                <input value={selectBatch} disabled type="text" className='bg-white w-full px-5 my-5 py-1 focus:ring-1 focus:ring-sky-500 focus:outline-none' />
                            </div>
                            <div className='w-[80%] mx-auto'>
                                <button className='px-5 py-2 rounded-md bg-blue-500 text-white'>Save</button>
                            </div>
                        </form>
                        <div className='w-[30%]'>
                            <div className=' bg-white'>
                                <h1 className='text-center bg-green-700 text-white text-xl py-5'>{acceptCourse}</h1>
                                {
                                    batch.map((data, id) => {
                                        return (
                                            <div onClick={() => {setSelectBatch(data.name); setBatchId(data._id)}} key={id} className='py-5 cursor-pointer hover:bg-gray-200'>
                                                <p className='text-gray-800 text-center'>{data.name}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div> : 
                <div></div> 
            }
            
        </div>
    )
}

export default EnrollmentTable