import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarChart, faBars, faDoorClosed, faDoorOpen, faFilePen, faGraduationCap, faList, faPhone, faSchool, faSchoolCircleCheck, faTrash, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../../stores/actionCreator';
import { Link } from 'react-router-dom';

export default function ProfileSidebar() {
    let dispatch = useDispatch();
    let {logout} = bindActionCreators(actionCreator, dispatch);
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
        <List className=''>
            <ListItem>
                <Link to={"/student"}>
                    <ListItemButton>
                        <ListItemIcon>
                            <FontAwesomeIcon className='text-xl text-blue-400' icon={faUserCircle}></FontAwesomeIcon>
                        </ListItemIcon>
                        <p>Profile</p>
                    </ListItemButton>
                </Link>
                
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <FontAwesomeIcon className='text-blue-400' icon={faSchool}></FontAwesomeIcon>
                    </ListItemIcon>
                    <p>Courses</p>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <FontAwesomeIcon className='text-blue-400' icon={faFilePen}></FontAwesomeIcon>
                    </ListItemIcon>
                    <p>Grades</p>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <FontAwesomeIcon className='text-blue-400' icon={faGraduationCap}></FontAwesomeIcon>
                    </ListItemIcon>
                    <p>Certificates</p>
                </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <FontAwesomeIcon className='text-green-500' icon={faPhone}></FontAwesomeIcon>
                    </ListItemIcon>
                    <p>Contact Us</p>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton onClick={() => logout()}>
                    <ListItemIcon>
                        <FontAwesomeIcon className='text-red-400' icon={faDoorOpen}></FontAwesomeIcon>
                    </ListItemIcon>
                    <p>Logout</p>
                </ListItemButton>
            </ListItem>
        </List>
        </Box>
    );

    return (
        <div className=''>
        {['right'].map((anchor) => (
            <React.Fragment key={anchor}>
            <button className='bg-indigo-700 shadow-lg text-white px-3 rounded-sm py-1 ' onClick={toggleDrawer(anchor, true)}>
                <FontAwesomeIcon className='text-xl mt-1 max-sm:text-lg' icon={faBars}></FontAwesomeIcon>
            </button>
            <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
            >
                {list(anchor)}
            </Drawer>
            </React.Fragment>
        ))}
        </div>
    );
}