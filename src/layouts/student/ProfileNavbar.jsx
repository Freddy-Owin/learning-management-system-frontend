import React from 'react'
import ProfileSidebar from './ProfileSidebar'
import logo from "../../assets/images/firstpng.png"
import { Link } from 'react-router-dom'
function ProfileNavbar(props) {
    return (
        <div className='py-2 max-sm:w-screen '>
            <div className='flex justify-between max-sm:items-start items-center w-[90%] mx-auto'>
                <div className='w-[60%] flex gap-5 items-center max-sm:block my-auto max-sm:text-sm text-2xl max-sm:w-[70%]'>
                    <Link to={'/'}>
                        <img className='max-sm:w-[60%] w-[30%]' src={logo} alt="" />
                    </Link>
                </div>
                <div className='sm:hidden'>
                    <ProfileSidebar></ProfileSidebar>
                </div>
            </div>
        </div>
    )
}

export default ProfileNavbar