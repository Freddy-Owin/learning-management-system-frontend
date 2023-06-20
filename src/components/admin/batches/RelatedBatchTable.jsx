import { MaterialReactTable } from 'material-react-table';
import React, { useMemo } from 'react'
import batchColums from '../../../services/table_columns/batch';
import { Box, Button, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faLockOpen, faTrash, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useParams } from 'react-router-dom';

function RelatedBatchTable(props) {
    let course = useParams();
    let nevigate = useNavigate();
    let columns = useMemo(() => batchColums);
    let statusHandler = (info, param) => {
        props.statusChange(info, param)
    }
    let deleteHandler = (id) => {
        props.deleteBatch(id)
    }
    return (
        <div>
            <MaterialReactTable 
            data={props.data} columns={columns}
            enableRowActions
            positionActionsColumn='last'
            renderTopToolbarCustomActions={({table}) => {
                return (
                    <div>
                        <div className='flex gap-10 mb-5'>
                            <div>
                            <Button onClick={() => props.showForm()} variant='contained'>Create New Batch</Button>
                            </div>
                            <div>
                                <Link to={"/admin/courses"}>
                                    <Button color='warning' variant='contained'>Back to Courses</Button>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <p className='text-3xl italic'>{props.course ? props.course.name : ""}</p>
                        </div>
                        
                        
                    </div>
                )
            }}
            displayColumnDefOptions={{
                'mrt-row-actions': {
                    muiTableHeadCellProps: {
                        align: 'center',
                    },
                    size: 120,
                },
            }}
            renderRowActions={({row}) => {
                return (
                    <Box className="flex justify-center gap-3">
                        <IconButton color='success'>
                            <Link to={`/admin/courses/${course.id}/batch/${row.original._id}`}>
                                <div className='text-xs text-orange-600'>
                                    <p>lessons</p>
                                    <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
                                </div>
                            </Link>
                            
                        </IconButton>
                        <IconButton onClick={() => statusHandler(!row.original.status, row.original._id)}>
                            {
                                row.original.status == true ?
                                <div className='text-xs text-green-600'>
                                    <p>finish batch</p>
                                    <FontAwesomeIcon icon={faTrophy}></FontAwesomeIcon>
                                </div> :
                                <div className='text-xs text-blue-500'>
                                    <p>reopen</p>
                                    <FontAwesomeIcon icon={faLockOpen}></FontAwesomeIcon>
                                </div>
                            }
                        </IconButton>
                        <IconButton onClick={() => deleteHandler(row.original._id)} color='error'>
                            <div className='text-xs'>
                                <p>delete</p>
                                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                            </div>
                        </IconButton>
                    </Box>
                )
            }}
            ></MaterialReactTable>
        </div>
    )
}

export default RelatedBatchTable;