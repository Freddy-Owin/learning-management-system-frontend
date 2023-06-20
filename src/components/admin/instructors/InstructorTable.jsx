import React, { useMemo } from 'react'
import instructorColums from '../../../services/table_columns/instructors'
import { MaterialReactTable } from 'material-react-table';
import { Box, ListItemIcon, MenuItem } from '@mui/material';
import { AccountCircle, Delete, Mail, Send } from '@mui/icons-material';

function InstructorTable(props) {
    let columns = useMemo(() => instructorColums);
    return (
        <div>
            <MaterialReactTable 
            columns={columns} 
            data={props.instructors}
            enableRowActions
            positionActionsColumn='last'
            renderRowActionMenuItems={({close}) => [
                <MenuItem key={0} onClick={()=>close()}>
                    <ListItemIcon>
                        <AccountCircle/> 
                    </ListItemIcon>
                    Profile
                </MenuItem>,
                <MenuItem key={1} onClick={()=>close()}>
                    <ListItemIcon>
                        <Mail/>
                    </ListItemIcon>
                    Send Mail
                </MenuItem>,
                <MenuItem key={2} onClick={()=>close()}>
                    <ListItemIcon>
                        <Delete/> 
                    </ListItemIcon>
                    Delete
                </MenuItem>
            ]}
            />
        </div>
    )
}

export default InstructorTable