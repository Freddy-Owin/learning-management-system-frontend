import React, { useMemo, useState } from 'react'
import { MaterialReactTable } from 'material-react-table';
import { Box, Button, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faLock, faLockOpen, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import coursesColumns from '../../../services/table_columns/courses';
import CourseEditForm from './CourseEditForm';
import Apiservice from '../../../services/Apiservice';
import { Link } from 'react-router-dom';

function CoursesTable(props) {
    let [courseEdit, setCourseEdit] = useState(false);
    let [editData, setEditData] = useState({});
    let editHandler = (data) => {
        setEditData(data);
        setCourseEdit(true);    
    }
    let closeEditHandler = () => {
        setCourseEdit(false)
    }
    let editCourse = (info) => {
        Apiservice.patch("/admin/courses/" + editData._id, info)
            .then(res => {
                window.location.reload();
            })
            .catch(err => console.log(err))
    }
    const colums = useMemo(() => coursesColumns);
    return (
        <div>
            <MaterialReactTable 
            columns={colums} 
            data={props.courses}
            renderTopToolbarCustomActions={(table) => {
                return (
                    <Button variant='contained' color='primary' onClick={() => props.createForm(true)}>Create new course</Button>
                )
            }}
            enableRowActions
            positionActionsColumn='last'
            displayColumnDefOptions={{
                'mrt-row-actions': {
                    muiTableHeadCellProps: {
                        align: 'center',
                    },
                    size: 120,
                },
            }}
            renderRowActions={({row}) => 
                [
                    <Box key={row.original._id} className="flex justify-center gap-3">
                        <IconButton color='primary'>
                            <Link to={`/admin/courses/${row.original._id}`}>
                                <div>
                                    <p className='text-xs'>related batches</p>
                                    <FontAwesomeIcon className='text-sm' icon={faLink}/>
                                </div>
                            </Link>
                        </IconButton>
                        <IconButton onClick={() => editHandler(row.original)} color='warning'>
                            <div>
                                <p className='text-xs'>edit course</p>
                                <FontAwesomeIcon className='text-sm' icon={faPenToSquare}/>
                            </div>
                        </IconButton>
                    
                        {
                            row.original.available == true ?
                            <IconButton onClick={() => props.availableCourse(false, row.original._id)} color='error'>
                                <div>
                                    <p className='text-xs'>close</p>
                                    <FontAwesomeIcon className='text-sm' icon={faLock}/>
                                </div> 
                            </IconButton> :
                            <IconButton onClick={() => props.availableCourse(true, row.original._id)} color='success'>
                                <div>
                                    <p className='text-xs'>open</p>
                                    <FontAwesomeIcon className='text-sm' icon={faLockOpen}/>
                                </div>
                            </IconButton>       
                        }
                    </Box>
                ]
            }
            />
            {
                courseEdit && <CourseEditForm editCourse={editCourse} data={editData} closeEditHandler={closeEditHandler}></CourseEditForm>
            }
        </div>
        
    )
}

export default CoursesTable