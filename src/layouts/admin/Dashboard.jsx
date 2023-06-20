import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import Apiservice from '../../services/Apiservice';
import { getAuthToken } from '../../services/Tokenservice';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../../stores/actionCreator';

function Dashboard() {
    let [user, setUser] = useState({});
    let dispatch = useDispatch();
    let {logout} = bindActionCreators(actionCreator, dispatch)
    let navigate = useNavigate();
    useEffect(() => {
        Apiservice.get("/auth/authData")
            .then(res => {
                if(res.data.data.role.name == "admin") {
                    setUser(res.data.data);
                } else {
                    navigate("/login");
                }
            })
            .catch(err => {
                logout();
            });
    },[]);
    useEffect(() => {
        Apiservice.get("/auth/authData")
            .then(res => {
                if(res.data.data.role.name == "admin") {
                    setUser(res.data.data);
                } else {
                    navigate("/login");
                }
            })
            .catch(err => {
                logout();
            });
    },[getAuthToken()]);
    let logoutHandler = () => {
        logout();
    }
    return (
        <div className='w-full justify-between flex'>
            <div className='w-[15%] h-screen sticky top-0'>
                <Sidebar/>
            </div>
            <div className='w-[85%]'>
                <Outlet/>
            </div>
        </div>
    )   
}

export default Dashboard