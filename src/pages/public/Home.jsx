import { useEffect } from "react";
import Contact from "../../components/public/home/Contact";
import Courses from "../../components/public/home/Courses";
import MainPart from "../../components/public/home/MainPart";
import SecondPart from "../../components/public/home/SecondPart";
import UpperNavbar from "../../components/public/home/UpperNavbar";
import Footer from "../../layouts/public/Footer";
import AOS from "aos";
import 'aos/dist/aos.css';

function Home() {
    useEffect(() => {
        AOS.init();
    }, []);
    return ( 
        <div className="w-screen overflow-x-hidden">
            <UpperNavbar/>
            <MainPart/>
            <SecondPart/>
            <Courses/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default Home;