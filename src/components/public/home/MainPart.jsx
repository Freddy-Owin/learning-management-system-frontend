import item from "../../../assets/images/slider-item-1.png";
import Navbar from "../../../layouts/public/Navbar";
import image from "../../../assets/images/school.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function MainPart() {
    let navigate = useNavigate();
    return ( 
        <div style={{'--image-url': `url(${image})`}} className="w-full bg-[image:var(--image-url)] bg-cover max-sm:bg-normal bg-no-repeat max-sm:py-0 py-10">
            <div className="w-[95%] max-sm:pt-5 mx-auto">
                <Navbar></Navbar>
            </div>
            <div data-aos="fade-right" data-aos-duration="1500" className="w-[95%] mx-auto mt-20 max-sm:mt-0 md:bg-[image:var(--image-url)] bg-contain bg-no-repeat" style={{fontFamily: ['Poppins', "sans-serif"], '--image-url': `url(${item})`}}>
                <div  className="p-20 max-sm:p-5 w-full">
                    <h1 className="text-white my-3 text-[70px] max-sm:text-3xl max-sm:text-center font-black">Learn from the best.</h1>
                    <h1 className="text-white my-3 text-[70px] max-sm:text-3xl max-sm:text-center font-black">Learn for your future.</h1>
                    <h1 className="text-white max-sm:text-center max-sm:text-[14px] text-justify">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, blanditiis asperiores laborum error repellat sunt sequi ipsum omnis totam, facilis vitae consectetur deserunt culpa tempora aspernatur dicta iure, voluptates provident?
                    </h1>
                    <div className="flex gap-5 max-sm:gap-3 text-white my-10">
                        <button onClick={() => navigate("/register")} className="px-5 py-3 bg-blue-800 font-black text-sm rounded-md">
                            <FontAwesomeIcon icon={faUserPlus} className="px-3"/>
                            Sign Up
                        </button>
                        <button className="px-5 py-3 rounded-md bg-white font-bold text-sm text-black">Find Courses</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPart;