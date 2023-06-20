import { faDoorOpen, faPhone, faSchool, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import profileMenu from '../../services/profileMenu'
import { Link } from 'react-router-dom'

function ProfileSideMenu(props) {
    return (
        <div className='w-full sticky top-0'>
            {
                profileMenu.map((item, id) => {
                    return (
                        <Link key={id} to={item.url}>
                            <div  className="hover:bg-gray-200">
                                <div className='flex w-[70%] mx-auto cursor-pointer py-5  items-center gap-10'>
                                    <FontAwesomeIcon className='text-xl w-[20%] text-blue-400' icon={item.icon}></FontAwesomeIcon>
                                    <p className='text-md w-[80%] text-gray-700'>{item.name}</p>
                                </div>
                            </div>
                        </Link>
                        
                    )
                })
            }
            <hr />
            <div className="hover:bg-gray-200">
                <div className='flex w-[70%] mx-auto cursor-pointer py-5  items-center gap-10'>
                    <FontAwesomeIcon className='text-xl w-[20%] text-green-500' icon={faPhone}></FontAwesomeIcon>
                    <p className='text-md w-[80%] text-gray-700'>Contact</p>
                </div>
            </div>
            <div onClick={() => props.logoutHandler()} className="hover:bg-gray-200">
                <div className='flex w-[70%] mx-auto cursor-pointer py-5  items-center gap-10'>
                    <FontAwesomeIcon className='text-xl w-[20%] text-red-500' icon={faDoorOpen}></FontAwesomeIcon>
                    <p className='text-md w-[80%] text-gray-700'>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileSideMenu