import React, { useEffect, useState } from 'react'
import Apiservice from '../../services/Apiservice'
import { getAuthToken } from '../../services/Tokenservice'
import { bindActionCreators } from 'redux'
import { actionCreator } from '../../stores/actionCreator'
import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import ProfileNavbar from './ProfileNavbar'
import ProfileSideMenu from './ProfileSideMenu'
import Footer from '../public/Footer'
function Profile() {
    let dispatch = useDispatch();
    let {logout} = bindActionCreators(actionCreator, dispatch);
    let [user, setUser] = useState({});
    let navigate = useNavigate();
    useEffect(() => {
        Apiservice.get("/auth/authData")
            .then(res => {
                if(res.data.data.role.name == "student")  {
                    setUser(res.data.data);
                } else {
                    navigate('/');
                }
            })
            .catch(err => {
                alert(err.response.data.msg);
                logout();
            });
    },[]);
    useEffect(() => {
        Apiservice.get("/auth/authData")
            .then(res => setUser(res.data.data))
            .catch(err => {
                alert(err.response.data.msg);
                logout();
            });
    },[getAuthToken()]);
    let logoutHandler = () => {
        logout();
    }
    return (
        <div className='w-full'>
            <div className="flex">
                <div className='w-[80%] max-sm:w-[95%]'>
                    <ProfileNavbar  data={user}></ProfileNavbar>
                    <Outlet></Outlet>
                </div>
                <div className="max-sm:hidden w-[20%] max-sm:w-[15%] h-screen shadow-md shadow-gray-500">
                    <ProfileSideMenu logoutHandler={logoutHandler}></ProfileSideMenu>
                </div>
                
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Profile
