import { faBookBookmark, faChalkboardTeacher, faDashboard, faPenToSquare, faPeopleGroup, faSchool, faSuitcase } from '@fortawesome/free-solid-svg-icons'

const menu = [
    {
        id: 1,
        name: "Dashboard",
        icon: faDashboard,
        url: "/admin",
    },
    {
        id: 2,
        name: "Courses",
        icon: faSchool,
        url: "/admin/courses",
    },
    {
        id: 3,
        name: "Students",
        icon: faPeopleGroup,
        url: "/admin/students",
    },
    {
        id: 4,
        name: "Enrollments",
        icon: faPenToSquare,
        url: "/admin/enrollments",
    },
    {
        id: 5,
        name: "Instructors",
        icon: faChalkboardTeacher,
        url: "/admin/instructors",
    },
    {
        id: 6,
        name: "Career Options",
        icon: faSuitcase,
        url: "/admin/careers",
    },
    {
        id: 7,
        name: "Application Form",
        icon: faBookBookmark,
        url: "/admin/applications",
    }
];

export default menu;