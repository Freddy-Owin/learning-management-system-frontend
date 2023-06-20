import React from 'react'
import logo from "../../assets/images/logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className='w-full mt-10 border-t-2 text-gray-600'>
            <div className='max-sm:block w-[95%] mx-auto flex justify-between'>
                <div className="max-sm:w-full w-[33.33%] my-5">
                    <h1 className='text-center font-black italic text-xl underline'>Company</h1>
                    <div className='w-[60%] mx-auto my-10'>
                        First ICT Solution
                    </div>
                    <div className='w-[60%] ml-auto'>
                        <img src={logo} alt="logo" className='w-[40%]' />
                    </div>
                    <div className='w-[60%] mx-auto my-5'>
                        <Link className='mx-3 text-lg'><FontAwesomeIcon icon={faFacebook}/></Link>
                        <Link className='mx-3 text-lg'><FontAwesomeIcon icon={faGithub}/></Link>
                        <Link className='mx-3 text-lg'><FontAwesomeIcon icon={faLinkedin}/></Link>
                        <Link className='mx-3 text-lg'><FontAwesomeIcon icon={faTelegram}/></Link>
                    </div>
                </div>
                <div className="max-sm:w-full w-[33.33%] my-5">
                    <h1 className='text-center font-black italic text-xl underline'>Services</h1>
                    <ul className='list-disc my-10 w-[70%] ml-auto'>
                        <li>Linux and Window Server Administration</li>
                        <li>Web Services</li>
                        <li>Hardware Services</li>
                        <li>Graphic Design Services</li>
                        <li>Financial Services</li>
                    </ul>
                </div>
                <div className="max-sm:w-full w-[33.33%] my-5">
                    <h1 className='text-center font-black italic text-xl underline'>About Us</h1>
                    <p className='text-center w-[80%] mx-auto my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci maiores eveniet! Omnis, iste? Cumque nemo eaque amet! Eos ad quaerat numquam distinctio ratione doloremque quibusdam libero quidem, sunt optio.</p>
                </div>
                
            </div>

            <div className='w-[95%] mx-auto h-[1px] bg-gray-600'></div>
            <div className='w-[95%] mx-auto my-5 text-sm text-center'>
                Privacy Policy | Cookie Policy | Do Not Sell My Personal Information | Terms
                <br />
                Made with love in 2023 <span>&copy;</span> Frist Edu
            </div>
        </div>
    )
}

export default Footer;