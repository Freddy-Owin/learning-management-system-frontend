import { MaterialReactTable } from 'material-react-table'
import React, { useMemo, useState } from 'react'
import applicationColums from '../../../services/table_columns/applications'
import { Box, IconButton } from '@mui/material';
import Apiservice from '../../../services/Apiservice';

import { Delete, Email } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

function ApplicationTable(props) {
    let columns = useMemo(() => applicationColums);
    let [collectData, setCollectData] = useState({});
    let [password, setPassword] = useState("");
    let showPdf = (file) => {
        window.open(Apiservice.showPdf(file));
    }
    let confirmAsInstructor = (event) => {
        event.preventDefault();
        let data = {
            application: collectData._id,
            name: collectData.name, 
            email: collectData.email,
            cv: collectData.cv,
            password: password,
            role: "instructor",
        }
        props.confirm(data);
    }
    let collectDataHandler = (data) => {
        setCollectData(data);
        props.showPasswordHandler(true);
    }
    let deleteHandler = (param) => {
        props.dropApp(param);
    }
    return (
        <div>
            <MaterialReactTable 
            columns={columns} 
            data={props.data}
            enableRowActions
            positionActionsColumn='last'
            renderRowActions={({row}) =>(
                    <Box className="flex gap-5">
                        <IconButton onClick={() => collectDataHandler(row.original)} color='success'>
                            <div>
                                <p className='text-xs'>confirm as instructor</p>
                                <FontAwesomeIcon className='text-sm' icon={faUserCheck}></FontAwesomeIcon>
                            </div>
                            
                        </IconButton>
                        <IconButton onClick={() => showPdf(row.original.cv)} color='primary' variant='contained'>
                            <div>
                                <p className='text-xs'>cv form</p>
                                <Email></Email>
                            </div>
                        </IconButton>
                        <IconButton onClick={() => deleteHandler(row.original._id)} color='error' variant="contained">
                            <div>
                                <p className='text-xs'>cancel</p>
                                <Delete></Delete>
                            </div>
                        </IconButton>
                    </Box>
                )
            }
            />
            {
                props.showPassword == true ? 
                <div className='z-50 bg-opacity-50 py-32 h-screen w-full left-0 top-0 bg-black fixed'>
                    <div className='w-[40%]  mx-auto '>
                        <div onClick={() => props.showPasswordHandler(false)} className='text-xl text-end cursor-pointer text-white'>
                            <FontAwesomeIcon icon={faXmarkCircle}></FontAwesomeIcon>
                        </div>
                        <form onSubmit={(e) => confirmAsInstructor(e)} className='m-4 py-5 bg-gray-200 rounded-lg'>
                            <div className='w-[90%] mx-auto'>
                                <label className='' htmlFor="password">Set password for instructor</label>
                                <input onClick={(e) => setPassword(e.target.value)} type="text" className='text-sm w-full py-2 my-5 rounded-lg px-5 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400' placeholder='password'/>
                            </div>
                            <div className='w-[90%] mx-auto flex justify-end'>
                                <button className='hover:bg-green-800 px-2 text-sm text-white rounded-md bg-green-600 py-1'>
                                    confirm 
                                </button>
                            </div>
                        </form>
                    </div>
                </div> :
                <div></div>
            }
            
        </div>
    )
}

export default ApplicationTable