import React from 'react'
import ProfileComponent from '../../components/students/ProfileComponent';
import { useOutletContext } from 'react-router-dom';
function ProfilePage() {
    let user = useOutletContext();
    return (
        <div className='w-full'>
            <ProfileComponent user={user}></ProfileComponent>
        </div>
    )
}
export default ProfilePage