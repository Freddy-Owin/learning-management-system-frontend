import React, { useState } from 'react'
import logo from "../../assets/images/firstpng.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import menu from '../../services/sidebarmenu';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../../stores/actionCreator';
import { useDispatch } from 'react-redux';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    let dispatch = useDispatch();
    let {logout} = bindActionCreators(actionCreator, dispatch);
    
    return (
        <div className='w-full sticky top-0 py-5 flex justify-between shadow-md shadow-black h-screen '>
            <div className='w-[99%]'>
                <Link to={"/"}>
                    <div className='w-[80%] mb-5 mx-auto'>
                        <img src={logo} alt="logo" />
                    </div>
                </Link>
                
                    {
                        menu.map((item, id) => {
                            return (
                                <Link to={item.url} key={id}>
                                    <div className='text-blue-600 w-[100%]gap-5 my-3 py-3 hover:cursor-pointer hover:shadow-inner hover:shadow-gray-200'>
                                        <div className="w-[80%] flex gap-5 mx-auto">
                                            <div><FontAwesomeIcon icon={item.icon}/></div>
                                            <p className='text-sm'>{item.name}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                    <div className='h-[1px] bg-gray-700 w-[80%] mx-auto'></div>
                    <div onClick={() => logout()} className='text-red-600 w-[100%]gap-5 my-3 py-3 hover:cursor-pointer hover:shadow-inner hover:shadow-gray-200'>
                        <div className="w-[80%] flex gap-5 mx-auto">
                            <div><FontAwesomeIcon icon={faDoorOpen}/></div>
                            <p className='text-sm'>Logout</p>
                        </div>
                    </div>
                </div>
            </div>
            
    )
}

export default Sidebar