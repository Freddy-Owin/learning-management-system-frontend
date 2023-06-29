import React, { useEffect, useState } from 'react'
import Apiservice from '../../services/Apiservice'
import DashboardCards from '../../components/admin/dashboard/DashboardCards';

function Home() {
    let [data, setData] = useState(null)
    useEffect(() => {
        getData();
    }, []);
    let getData = () => {
        Apiservice.get("/admin")
            .then(res => setData(res.data.data))
            .catch(err => console.log(err));
    }
    return (
        <div >
            <div className='py-5 bg-white shadow-sm shadow-gray-300 pl-5 text-xl font-semibold'>Dashboard</div>
            <div className='w-[95%] mx-auto'>
                <DashboardCards data={data}></DashboardCards>
            </div>
            
        </div>
    )
}

export default Home