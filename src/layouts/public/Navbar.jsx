import logo from "../../assets/images/firstedu.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { faBars, faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { getAuthToken } from "../../services/Tokenservice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Apiservice from "../../services/Apiservice";
import { bindActionCreators } from "redux";
import { actionCreator } from "../../stores/actionCreator";


function Navbar() {
    let nevigate = useNavigate();
    let dispatch = useDispatch();
    let [user, setUser] = useState(null);
    let {logout} = bindActionCreators(actionCreator, dispatch);
    useEffect(() => {
        Apiservice.get("/auth/authData")
            .then(res => setUser(res.data.data))
            .catch(err => {

                logout();
            });
    },[]);
    useEffect(() => {
        Apiservice.get("/auth/authData")
            .then(res => setUser(res.data.data))
            .catch(err => {
                logout();
            });
    },[getAuthToken()]);
    return ( 
        <div className="w-full py-0 max-sm:py-2 z-50 sticky top-0 border shadow-xl rounded-md bg-white mx-auto flex justify-center items-center">
            <div className="w-[95%] flex justify-around">
                <img onClick={() => nevigate("/")} src={logo} className="w-[18%] cursor-pointer max-sm:w-[40%]" alt="logo" />
                <div className="menu w-[50%] max-sm:hidden text-[20px] text-blue-900 flex justify-around items-center">
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/courses">
                        Courses
                    </Link>
                    <Link to="/careers">
                        Career
                    </Link>
                </div>
                <div className="w-[20%] max-sm:text-sm  flex items-center justify-end">
                    {
                        user ? 
                        <Link to={`/${user.role.name}`} className="max-sm:text-3xl text-3xl text-blue-900">
                            <FontAwesomeIcon icon={faUserCircle}/>
                        </Link> : 
                        <Link to={"/login"} className="max-sm:text-3xl text-3xl text-blue-900">
                            <FontAwesomeIcon icon={faUserCircle}/>
                        </Link>  
                    }
                    
                </div>
                <div className="max-sm:text-3xl text-3xl flex items-center sm:hidden mx-5 text-blue-900 cursor-pointer">
                    <FontAwesomeIcon icon={faBars}/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;