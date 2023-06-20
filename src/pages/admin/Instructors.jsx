import React, { useEffect, useState } from 'react'
import InstructorTable from '../../components/admin/instructors/InstructorTable'
import Apiservice from '../../services/Apiservice';

function Instructors() {
    let [instructors, setInstructors] = useState([]);
    useEffect(() => {
        Apiservice.get("/admin/instructors")
            .then(res => setInstructors(res.data.data))
            .catch(err => console.log(err));
    }, []);
    console.log(instructors)
    return (
        <div>
            <InstructorTable instructors={instructors}></InstructorTable>
        </div>
    )
}

export default Instructors