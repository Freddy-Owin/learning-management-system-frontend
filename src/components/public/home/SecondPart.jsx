import React from 'react'
import content1 from "../../../assets/images/content1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktopAlt, faLaptopCode, faPeopleArrows, faSuitcase } from '@fortawesome/free-solid-svg-icons';

function SecondPart() {
    return (
        <div className="my-20 max-sm:my-5 w-full max-sm:block flex justify-around w-[" style={{fontFamily: ['Poppins', "sans-serif"]}}>
            <div className="w-[45%] max-sm:w-[90%] max-sm:mx-auto text-[20px]">
                <div data-aos="fade-right" data-aos-duration="1500" className="text-blue-700">
                    Learn how you want, where you want
                </div>
                <div data-aos="fade-left" data-aos-duration="1500"className="font-[500] text-[30px]">
                    Write your content about your courses
                </div>
                <div data-aos="fade-right" data-aos-duration="1500" className="max-sm:my-5 text-[16px] text-gray-700 my-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ullam officiis tempora blanditiis non, iste atque aspernatur neque nam necessitatibus, ea incidunt commodi repellendus id. Praesentium quo architecto incidunt officia!
                </div>
                <div data-aos="fade-left" data-aos-duration="1500" className="flex justify-between my-10">
                    <div className="w-[49%] ">
                        <FontAwesomeIcon className="text-blue-800 px-2" icon={faDesktopAlt}/>
                        Online Classes
                    </div>
                    <div className="w-[49%]">
                        <FontAwesomeIcon className="text-blue-800 px-2" icon={faPeopleArrows}/>
                        Offline Classes
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="1500" className="flex justify-between my-10">
                    <div className="w-[49%]">
                        <FontAwesomeIcon className="text-blue-800 px-2" icon={faLaptopCode}/>
                        Job Trainings
                    </div>
                    <div className="w-[49%]">
                        <FontAwesomeIcon className="text-blue-800 px-2" icon={faSuitcase}/>
                        Career Options
                    </div>
                </div>
            </div> 
            <div data-aos="fade-left" data-aos-duration="1500" className="w-[45%] max-sm:w-full">
                <img src={content1} className='w-full mx-auto' alt="" />
            </div>
        </div>
    )
}

export default SecondPart