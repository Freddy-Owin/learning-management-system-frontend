import React from 'react'
import Navbar from '../../layouts/public/Navbar'
import Footer from '../../layouts/public/Footer'
import LoginComponent from '../../components/public/auth/LoginComponent'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreator } from '../../stores/actionCreator'

function Login() {
    let err = useSelector(state => state.auth.err);
    let dispatch = useDispatch();
    let {login} = bindActionCreators(actionCreator, dispatch);

    let loginHandler = (credential) => {
        login(credential);
    }

    return (
        <div>
            <Navbar/>
            <LoginComponent error={err} loginHandler={loginHandler}/>
            <Footer/>
        </div>
    )
}

export default Login