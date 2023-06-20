import React from 'react'
import { Link } from 'react-router-dom'

function CareerComponents(props) {
    return (
        <div>
            {
                props.data.map((data, id) => {
                    return (
                        <div key={id} className="w-[80%] my-10 mx-auto p-10 border shadow-lg">
                            <div className='flex items-center justify-between'>
                                <h1 className="w-[80%] max-sm:text-lg text-[30px] font-serif font-semibold">{data.name}</h1>
                            </div>
                            <div className="my-5 max-sm:text-[10px] flex max-sm:block gap-20 text-blue-700">
                                <h1>Vacancy : {data.vacancy} {data.vacancy >1 ? "posts" : "post"}</h1>
                                <h1>Gender : {data.gender} </h1>
                                <h1>Age : {data.age} </h1>
                                <h1>Employment Status : {data.employment_status}</h1>
                            </div>
                            <Link to={`/careers/${data._id}`}>
                                <button className="max-sm:text-[10px] max-sm:w-full max-sm:py-2 hover:text-red-600 hover:bg-white border-2 border-red-600 text-white w-[20%] text-center bg-red-600 py-1">Detail</button>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CareerComponents