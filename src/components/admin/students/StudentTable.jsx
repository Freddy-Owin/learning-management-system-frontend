import { MaterialReactTable } from 'material-react-table'
import React from 'react'
import studentColumns from '../../../services/table_columns/students'
import { Button, MenuItem } from '@mui/material'
import { AccountCircle, Delete, Mail } from '@mui/icons-material'
import Apiservice from '../../../services/Apiservice'

function StudentTable(props) {
    let removeHandler = (id) => {
        Apiservice.drop("/admin/students/" + id) 
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    return (
        <div>
            <MaterialReactTable 
            data={props.data} 
            columns={studentColumns}
            enableRowActions
            positionActionsColumn='last'
            renderRowActionMenuItems={({row}) => [
                <MenuItem key={0} onClick={()=>console.log(row)}>
                    <Button color='primary' className='flex gap-3'>
                        <AccountCircle/> 
                        profile
                    </Button>
                </MenuItem>,
                <MenuItem key={1} onClick={()=>console.log(row)}>
                    <Button color='secondary' className='flex gap-3'>
                        <Mail></Mail>
                        notification
                    </Button>
                    
                </MenuItem>,
                <MenuItem key={2}>
                    <Button onClick={() => removeHandler(row.original._id)} color='error' className='flex gap-3'>
                        <Delete></Delete>
                        remove
                    </Button>
                    
                </MenuItem>,
            ]}
            >
            </MaterialReactTable>
        </div>
    )
}

export default StudentTable