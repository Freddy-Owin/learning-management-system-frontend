import React from 'react'

function Contact() {
    return (
        <div className='w-full my-5'>
            <div className='w-[95%] flex max-sm:block mx-auto text-gray-700'>
                <div data-aos="fade-right" data-aos-duration="1500" className='w-[50%] max-sm:w-[95%]'>
                    <h1 className='text-center text-3xl my-3'>Contact Us</h1>
                    <ul className='w-[90%] mx-auto my-10'>
                        <li className='my-10'>
                            Email :
                            <a href="" className='text-blue-700 hover:underline'> 
                                admin@gmail.com
                            </a>
                        </li>
                        <li className='my-10'>
                            Phone : <span className='text-blue-700'>+959 987 654 321</span>
                        </li>
                        <li className='my-10 '>
                            Address : <span className='text-blue-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </li>
                        <li className='my-10'>
                            Telegram :
                            <a href="" className='text-blue-700 hover:underline'> 
                                https://tme/blablabla
                            </a>
                        </li>
                        <li className='my-10'>
                            Linkedin :
                            <a href="" className='text-blue-700 hover:underline'> 
                                https://linkedinblablabla.com
                            </a>
                        </li>
                    </ul>
                </div>
                <div data-aos="fade-left" data-aos-duration="1500" className='w-[50%] max-sm:w-[95%] mx-auto'>
                    <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.59084786050144!2d96.04702328185208!3d16.902904491540248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1be12d5dcd87f%3A0x17370c30dc8a6ab2!2sW23W%2B5R3%2C%20Yangon!5e0!3m2!1sen!2smm!4v1685525004218!5m2!1sen!2smm" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact