import { MaterialReactTable } from 'material-react-table'
import React, { useMemo, useState } from 'react'
import lessonColumns from '../../../services/table_columns/lessons'
import { Box, Button, IconButton } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate, useParams } from 'react-router-dom'
import LessonCreateForm from './LessonCreateForm'
import Apiservice from '../../../services/Apiservice'

function LessonTable(props) {
    let navigate = useNavigate();
    let param = useParams();
    let columns = useMemo(() => lessonColumns);
    let [showForm, setShowForm] = useState(false);
    let formHandler = (info) => {
        setShowForm(info);
    }
    let lessonCreate = (formData) => {
        Apiservice.post("/admin/lessons", formData)
            .then(res => setShowForm(false))
            .catch(err => console.log(err));
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
                    <Box className="flex justify-center">
                        <IconButton>
                            <Link to={`/admin/courses/${param.course}/batch/${param.batch}/weeks/${param.week}/lessons/${row.original._id}`}>
                                <div className='text-xs text-sky-500'>
                                    <p>detail</p>
                                    <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                                </div>
                            </Link>
                        </IconButton>
                        <IconButton onClick={() => {props.deleteHandelr(row.original._id)}}>
                            <div className='text-xs text-red-500'>
                                <p>delete</p>
                                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                            </div>
                        </IconButton>
                    </Box>
                )
            }}
            renderTopToolbarCustomActions={() => {
                return (
                    <div className='flex gap-5'>
                        <Button onClick={() => setShowForm(true)} color='success' variant='contained'>Create New Lesson</Button>
                        <Button onClick={() => navigate(-1)} color='secondary' variant='contained'>Back to Related Week</Button>
                    </div>
                )
            }}
            ></MaterialReactTable>
            {showForm && <LessonCreateForm lessonCreate={lessonCreate} formHandler={formHandler}></LessonCreateForm>}
        </div>
    )
}

export default LessonTable