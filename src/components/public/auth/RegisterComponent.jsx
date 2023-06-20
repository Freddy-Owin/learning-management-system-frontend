    import React, { useEffect, useState } from 'react'
    import image from "../../../assets/images/firstedu.jpg";
    import person from "../../../assets/images/person.png"
    import { Link } from 'react-router-dom';


    function RegisterComponent(props) {
        let [name, setName] = useState("");
        let [file, setFile] = useState();
        let [email, setEmail] = useState("");
        let [password, setPassword] = useState("");
        let [phone, setPhone] = useState("");
        let [gender, setGender] = useState("");
        let [education, setEducation] = useState("");
        let [address, setAddress] = useState("");
        let [dob, setDob] = useState();
    
        let loadFile = function(event) {   
            console.log(event.target) 
            let file = event.target.files[0];
            let output = document.getElementById('preview_img');
            output.src = URL.createObjectURL(event.target.files[0]);
            output.onload = function() {
                URL.revokeObjectURL(output.src) // free memory
            }
            setFile(file);
        };
        let registerHandler = (e) => {
            e.preventDefault();
            let formData = new FormData();
            formData.append("name", name);
            formData.append("image", file);
            formData.append("email", email);
            formData.append("password", password);
            formData.append("phone", phone);
            formData.append("education", education);
            formData.append("gender", gender);
            formData.append("address", address);
            formData.append("dob", dob);
            props.registerHandler(formData)
        }
        return (
            <div>
                <div className="w-full">
                    <div className="w-[60%] max-sm:w-[90%] shadow-md  shadow-blue-400 my-10 py-10 mx-auto">
                        <div className="w-[90%] justify-around items-center flex mx-auto">
                            <div className='w-[70%]'>
                                <img src={image} className='w-[50%]' alt="First Edu" />
                            </div>
                            <div className='w-[30%] max-sm:text-sm text-2xl'>
                                Register Here
                            </div>
                            
                        </div>
                        {
                            props.error ? 
                            <div className='w-full left-0 max-sm:text-xs z-50 fixed top-0 text-xl mx-auto bg-red-500 bg-opacity-90 rounded-md'>
                                <ul className='w-[70%] mx-auto text-center py-5  list-disc text-white'>
                                    <li>{props.error}</li>
                                </ul>
                            </div> : <div></div>
                        }
                        
                        <form onSubmit={registerHandler} className="w-[90%] my-10 mx-auto">
                            <div className="w-[80%] mx-auto my-3">
                                <div className="shrink-0">
                                    <img id='preview_img' className="h-16 w-16 object-cover rounded-full" src={person} alt="Current profile photo" />
                                </div>
                                <label className="block">
                                    <span className="sr-only">Choose profile photo</span> 
                                </label>
                                <div className='flex max-sm:block justify-between'>
                                    <input type="file" onChange={(e) => { loadFile(e) }} className="max-sm:block max-sm:w-full w-[49%] border rounded-sm text-xs text-slate-500
                                        file:mr-4 file:py-2 file:px-4
                                        file:rounded-full file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-violet-50 file:text-violet-700
                                        hover:file:bg-violet-100
                                    "/>
                                    <input onChange={(e) => setName(e.target.value)} type="text" className="max-sm:block border text-xs inline-block max-sm:w-full max-sm:my-5 py-2 w-[49%] focus:outline-none focus:border-blue-700 focus:ring-1  rounded-sm px-5" placeholder="Name"/>  
                                </div>
                            </div>
                            <div>
                                <div className="w-[80%] mx-auto my-5 text-sm max-sm:block flex justify-between">
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="text-xs max-sm:block border max-sm:w-full max-sm:my-5 w-[49%] py-2 rounded-sm px-5 focus:outline-none focus:border-blue-700 focus:ring-1" placeholder="Email"/>  
                                    <input onChange={(e) => setPassword(e.target.value)}  type="password" className="max-sm:block border text-xs max-sm:w-full w-[49%] max-sm:my-5 py-2 rounded-sm px-5 focus:outline-none focus:border-blue-700 focus:ring-1" placeholder="Password"/>
                                </div>
                                <div className="w-[80%] mx-auto my-5 text-sm max-sm:block flex justify-between">
                                    <input onChange={(e) => setPhone(e.target.value)} type="text" className="text-xs max-sm:block border max-sm:w-full max-sm:my-5 w-[49%] py-2 rounded-sm px-5 focus:outline-none focus:border-blue-700 focus:ring-1" placeholder="Phone"/>  
                                    <input onChange={(e) => setEducation(e.target.value)}  type="text" className="max-sm:block border text-xs max-sm:w-full w-[49%] max-sm:my-5 py-2 rounded-sm px-5 focus:outline-none focus:border-blue-700 focus:ring-1" placeholder="Education"/>
                                </div>
                                <div className="w-[80%] mx-auto my-5 text-sm max-sm:block flex justify-between">
                                    <div className='w-[49%] max-sm:w-full'>
                                        <label className="ml-2 font-medium text-sm text-gray-600">Gender</label>
                                        <select onChange={(e) => setGender(e.target.value)} className="border py-2 w-full rounded-sm text-xs px-5 focus:outline-none focus:border-blue-700 focus:ring-1">
                                            <option disabled selected>Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Custom">Custom</option>
                                        </select> 
                                    </div>
                                    <div className="w-[49%] max-sm:w-full">
                                        <label className="ml-2 font-medium text-sm text-gray-600">Date of Birth</label>
                                        <input onChange={(e) => setDob(e.target.value)} type="date" className="focus:outline-none text-xs w-full focus:border-blue-700 focus:ring-1 border py-2 rounded-sm px-5"/>
                                    </div>
                                </div>
                                <div className="w-[80%] my-5 mx-auto">
                                    <label className="ml-2 font-medium text-sm text-gray-600">Address</label>
                                    <textarea onChange={(e) => setAddress(e.target.value)} className="border w-[100%] text-xs rounded-md px-5 py-3 focus:outline-none focus:border-blue-700 focus:ring-1"/>
                                </div>
                                <div className="w-[80%] mx-auto flex justify-between">
                                    <div className="flex items-center">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-sm text-gray-900">Remember Me</label>
                                    </div>
                                    <Link to="/login" className="text-blue-700  hover:text-red-700">
                                        <span>Login</span> 
                                    </Link>
                                </div>
                                <div className="rounded-sm w-[80%] text-center hover:bg-white border-2 border-green-600 my-10 bg-green-600 mx-auto">
                                    <button className="rounded-md text-white w-full hover:text-green-600 p-2">Register Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    export default RegisterComponent