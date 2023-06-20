import { faFacebook, faLinkedin, faTelegram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { logout } from "../../../stores/actions/authActions";

const leftSidebar = [
    {
        id: 1, 
        text: "Documentation",
        url: "",
    },
    {
        id: 2, 
        text: "Contact Us",
        url: "",
    },
]
const rightSidebar = [
    {
        id: 1,
        icon: faYoutube,
        url: "",
        className: "text-white p-3"
    },
    {
        id: 2,
        icon: faTelegram,
        url: "",
        className: "text-white p-3"
    },
    {
        id: 3,
        icon: faFacebook,
        url: "",
        className: "text-white p-3"
    },
    {
        id: 4,
        icon: faLinkedin,
        url: "",
        className: "text-white p-3"
    }
]

function UpperNavbar() {
    return ( 
        <div className="bg-gray-900 py-4 text-md max-sm:hidden items-center w-screen flex justify-between">
            <div className="w-[30%] ml-10 flex max-sm:block justify-evenly text-white">
                {
                    leftSidebar.map((item) => {
                        return (
                            <Link className="hover:text-gray-500" to={item.url} key={item.id}>
                                <h1>{item.text}</h1>
                            </Link>
                        )
                    })
                }
            </div>
            <div className="w-[20%] mr-10 flex justify-around">
                {
                    rightSidebar.map((item) => {
                        return (
                            <Link to={item.url} key={item.id}>
                                <FontAwesomeIcon icon={item.icon} className={item.className}/>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
}

// export default connect(null, { logout })(Navbar);
export default UpperNavbar
