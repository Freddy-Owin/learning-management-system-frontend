import { MaterialReactTable } from 'material-react-table'
import React from 'react'
import studentColumns from '../../../services/table_columns/students'
import { Button, IconButton, ListItemIcon, MenuItem } from '@mui/material'
import { AccountCircle, Delete, Mail, Send } from '@mui/icons-material'

function StudentTable(props) {
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
                <MenuItem key={2} onClick={()=>console.log(row)}>
                    <Button color='error' className='flex gap-3'>
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