import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Apiservice from '../../services/Apiservice';
import { actionCreator } from '../../stores/actionCreator';
import { getAuthToken } from '../../services/Tokenservice';
import ProfileComponent from '../../components/students/ProfileComponent';
function ProfilePage() {
    let dispatch = useDispatch();
    let {logout} = bindActionCreators(actionCreator, dispatch);
    let [user, setUser] = useState({});
    useEffect(() => {
        getUser();
    },[]);
    useEffect(() => {
        getUser();
    },[getAuthToken()]);
    let getUser = () => {
        Apiservice.get("/auth/authData")
            .then(res => setUser(res.data.data))
            .catch(err => {
                logout();
            });
    }
    let logoutHandler = () => {
        logout();
    }
    return (
        <div className='w-full'>
            <ProfileComponent user={user}></ProfileComponent>
        </div>
    )
}
export default ProfilePage