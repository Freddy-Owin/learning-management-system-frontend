import React from 'react'
import RegisterComponent from '../../components/public/auth/RegisterComponent'
import Navbar from "../../layouts/public/Navbar"
import Footer from "../../layouts/public/Footer"
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreator } from '../../stores/actionCreator'

function Register() {
    let dispatch = useDispatch();
    let {register} = bindActionCreators(actionCreator, dispatch);
    let error = useSelector(state => state.auth.err);
    let registerHandler = (data) => {
        register(data)
    }
    return (
        <div>
            <Navbar/>
            <RegisterComponent error={error} registerHandler={registerHandler}/>
            <Footer/>
        </div>
    )
}

export default Register