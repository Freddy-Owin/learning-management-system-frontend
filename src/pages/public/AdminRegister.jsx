import React from 'react'
import Navbar from '../../layouts/public/Navbar'
import Footer from '../../layouts/public/Footer'
import AdminRegisterComponent from '../../components/public/auth/AdminRegisterComponent'
import Apiservice from '../../services/Apiservice'
import { setAuthToken } from '../../services/Tokenservice'

function AdminRegister() {
    let submit = (data) => {
        Apiservice.post("/auth/admin/register", data)
            .then(res => {
                setAuthToken(res.data.data.token);
                window.location.assign("http://localhost:3000/admin")
            })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <Navbar></Navbar>
            <AdminRegisterComponent submit={submit}></AdminRegisterComponent>
            <Footer></Footer>
        </div>
    )
}

export default AdminRegister