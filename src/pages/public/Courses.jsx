import React from 'react'
import CoursesComponent from '../../components/public/courses/Courses'
import Navbar from '../../layouts/public/Navbar'
import Footer from '../../layouts/public/Footer'
function Courses() {
    return (
        <div>
            <Navbar/>
            <CoursesComponent/>
            <Footer></Footer>
        </div>
    )
}

export default Courses