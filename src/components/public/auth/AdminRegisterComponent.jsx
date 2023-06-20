import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../assets/images/firstpng.png";
function AdminRegisterComponent(props) {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let submitHandler = (e) => {
        e.preventDefault();
        let data = {name, email, password, role : "admin"};
        props.submit(data);
    }
    return (
        <div className="w-full">
            <div className="w-[40%] max-sm:w-[90%] shadow-md shadow-black py-10 rounded-xl mx-auto  my-10">
                <img src={logo} className="w-[40%] max-sm:w-[70%] mx-auto" alt="logo" />
                <div className="text-center my-3 text-[30px] text-blue-700">
                    Sign in to your account
                </div>
                
                <form onSubmit={(e) => submitHandler(e)} className="w-[60%] text-sm max-sm:w-[90%] mx-auto " action="">
                    {
                        props.error != null ? <p className='text-xs text-red-600 bg-red-600 bg-opacity-40 rounded-lg py-1 px-5'>{props.error}</p> :
                        <div></div>
                    }
                    <input onChange={(e) => setName(e.target.value)} type="text" className="w-full border-yellow-500 my-3 h-10 border-2 px-5 " placeholder="name"/>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="w-full border-yellow-500 my-3 h-10 border-2 px-5 " placeholder="email"/>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="w-full border-yellow-500 my-3 h-10 border-2 px-5 " placeholder="password" />
                    <div className="my-3 w-full flex justify-between">                      
                        <div className="flex items-center">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label className="ml-2 text-sm text-gray-900 ">Remember Me</label>
                        </div>
                        <Link to="/register" className="text-sm text-blue-700 hover:text-gray-700">
                            create account?
                        </Link>
                    </div>
                    <button className="my-5 rounded-lg hover:border-blue-700 border-2 hover:bg-white hover:text-blue-700 flex items-center w-full h-10 bg-blue-700">
                        <FontAwesomeIcon icon={faLock} className=" ml-5"/>
                        <span className="hover:text-blue-700 text-white w-[85%]">Sign in</span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AdminRegisterComponent