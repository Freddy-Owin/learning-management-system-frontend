import React from 'react'

function ProfileComponent({user}) {
    return (
        <div className='w-full py-10'>
            <div className='w-[90%] max-sm:w-[95%] mx-auto'>
                <div className='w-[95%] max-sm:w-full py-5 max-sm:py-0 mx-auto flex max-sm:block justify-around max-sm:justify-between'>
                    <div className='w-[35%] max-sm:mb-5 max-sm:w-[70%]  max-sm:mx-auto'>
                        <div style={{'--image-url': `url(http://localhost:5000/images/profiles/${user.image})`}} className='bg-[image:var(--image-url)] w-60 h-60 max-sm:w-52 max-sm:h-52 bg-no-repeat bg-cover border-4 border-green-600 bg-center rounded-full bg-green-500'>
                        </div>
                    </div>
                    <div className="w-[65%] max-sm:w-[70%] max-sm:mx-auto py-5 max-sm:py-0">
                        <div className='flex justify-between'>
                            <p className='text-2xl max-sm:text-sm'>{user.name}</p>
                            <p className='text-xl max-sm:text-xs text-blue-500'>ID ({user.user_id})</p>
                        </div>
                        <div className='py-5 max-sm:py-3 italic max-sm:text-[10px]'>
                            <p className="my-3 max-sm:my-1">Email - {user.email}</p>
                            <div className='w-full h-[1px] bg-red-500'></div>
                            <p className="my-3 max-sm:my-1">Registration Date - {new Date(user.created).toDateString()}</p>
                        </div>
                        <p className='max-sm:text-xs'>Registered as - <span className='text-green-500 underline'>{user.role ? user.role.name: ""}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent