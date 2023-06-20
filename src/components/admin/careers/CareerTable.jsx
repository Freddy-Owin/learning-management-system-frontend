import { MaterialReactTable } from 'material-react-table';
import React, { useMemo, useState } from 'react'
import careerColums from '../../../services/table_columns/careers';
import { Box, Button, IconButton } from '@mui/material';
import CareerForm from './CareerForm';
import { Delete } from '@mui/icons-material';

function CareerTable(props) {
    const columns = useMemo(() => careerColums);
    let [form, setForm] = useState(false);
    let createForm = (data) => {
        setForm(data);
    }
    let catchForm = (data) => {
        props.createCareer(data);
    }
    return (
        <div>
            <MaterialReactTable 
            columns={columns} 
            data={props.data}
            renderTopToolbarCustomActions={(table) => {
                return (
                    <Button onClick={() => createForm(true)} variant='contained'>Create new career option</Button>
                )
            }}
            enableRowActions
            positionActionsColumn='last'
            renderRowActions={({row}) => [
                <Box>
                    <IconButton color='error'>
                        <div className='text-center text-xs'>
                            <p>delete career</p>
                            <Delete/>
                        </div>
                    </IconButton>
                    
                </Box>
                
            ]}
            />
            {form && <CareerForm catchForm={catchForm} createForm={createForm}></CareerForm>}
        </div>
    )
}

export default CareerTable;