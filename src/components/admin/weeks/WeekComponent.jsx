import { MaterialReactTable } from 'material-react-table'
import React, { useMemo } from 'react'
import weekColumns from '../../../services/table_columns/weeks'
import { Box, Button, IconButton, Tooltip } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useParams } from 'react-router-dom';

function WeekComponent(props) {
    let navigate = useNavigate();
    let columns = useMemo(() => weekColumns);
    let param = useParams();
    let weekHandler = () => {
        let data = {
            course: param.course, batch: param.batch
        }
        props.addWeek(data);
    };
    let deleteWeekHandler = (info) => {
        props.deleteWeek(info);
    }
    return (
        <div>
            <MaterialReactTable 
            columns={columns} 
            data={props.data}
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
            renderRowActions={({row}) => {
                return (
                    <Box className="flex  justify-center">
                        <Tooltip arrow placement='left'>
                           <IconButton>
                                <Link to={`/admin/courses/${param.course}/batch/${param.batch}/weeks/${row.original._id}`}>
                                    <div className='text-sm text-sky-500'>
                                        <p>lessons</p>
                                        <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>  
                                    </div>
                                </Link>
                                
                            </IconButton> 
                        </Tooltip>
                        <Tooltip arrow placement='right'>
                            <IconButton onClick={() => {deleteWeekHandler(row.original._id)}}>
                                <div className='text-sm text-red-600'>
                                    <p>delete</p>
                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                </div>
                            </IconButton> 
                        </Tooltip>
                    </Box>
                )
            }}
            renderTopToolbarCustomActions={() => {
                return (
                    <div className='flex gap-5'>
                        <Button onClick={() => weekHandler()} color='success' variant='contained'>Create New Week</Button>
                        <Button onClick={() => navigate(-1)} color='secondary' variant='contained'>Back to Related Batch</Button>
                    </div>
                )
            }}
            ></MaterialReactTable>
        </div>
    )
}

export default WeekComponent