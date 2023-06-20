import { faFilePen, faGraduationCap, faSchool, faUserCircle } from "@fortawesome/free-solid-svg-icons";

let profileMenu = [
    {
        id: 1,
        url: "/student",
        icon: faUserCircle,
        name: "Profile",
    },
    {
        id: 2,
        url: "/student/courses",
        icon: faSchool,
        name: "Courses",
    },{
        id: 3,
        url: "/student/grades",
        icon: faFilePen,
        name: "Grades",
    },{
        id: 4,
        url: "/student/certificates",
        icon: faGraduationCap,
        name: "Certificates",
    },
]
export default profileMenu;