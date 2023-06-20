import React from 'react';

function LessonDetailCcomponent(props) {
    return (
        <div className='w-full'>
            <div className='w-[90%] flex justify-between py-10 mx-auto'>
                <div className='w-[70%]'>
                    {
                        props.data.file? 
                        <video controls>
                            <source src={props.data.file} type='video/mp4' />
                        </video>:
                        <div></div>
                    }
                </div>
                <div className='w-[20%]'>
                    <div className='py-5'>
                        <h1>Course</h1>
                        <p className='text-xl text-blue-700'>{props.data.course ?props.data.course.name: ""}</p>
                    </div>
                    <div className='py-5'>
                        <h1>Batch</h1>
                        <p className='text-xl text-blue-700'>{props.data.batch ?props.data.batch.name: ""}</p>
                    </div>
                    <div className='py-5'>
                        <h1>Week</h1>
                        <p className='text-xl text-blue-700'>{props.data.week ?props.data.week.name: ""}</p>
                    </div>
                </div>
            </div>
            <div className='w-[90%] py-10 mx-auto'>
                <h1 className='text-4xl'>{props.data.name}</h1>
                <p className='text-sm py-5 text-justify w-[70%]'>{props.data.description}</p>
            </div>
        </div>
    )
}

export default LessonDetailCcomponent