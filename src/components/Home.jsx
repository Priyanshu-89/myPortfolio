import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped, Typed } from "react-typed";
import pic from '../../public/main.png'

function Home() {
    
    return (
       <>
        <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/2 mt-12 md:mt-24 order-2 md:order-1 space-y-2'>
                    <span className='text-xl'>Step into my portfolio and see the magic I create with code.</span>
                    <div className="flex space-x-1 text-2xl md:text-4xl">
                        <h1>Hello, I'm a</h1>
                        {/* <div className="text-red-500 font-semibold">Developer</div> */}
                        <ReactTyped

                            strings={["Developer", "Programer", "Coder"]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop={true}
                            className='text-rose-700'
                        />

                    </div>
                    <br />
                    <p className='text-sm md:text-md text-justify'>
                        Welcome! I'm a web developer passionate about crafting clean, efficient code and building impactful digital experiences. Explore my portfolio to see how I bring creativity, functionality, and innovation to every project.
                    </p>
                    <br />
                    {/* social media icons  */}

                    <div className="flex flex-col py-5 md:py-0 md:flex-row justify-between items-center">
                        <div className='space-y-2'>
                            <h1 className='font-semibold'>Available on</h1>
                            <ul className="flex space-x-5">
                                <li>
                                  <a href="https://www.linkedin.com/in/priyanshu-kumari93933/" target='_blank'>
                                    <FaLinkedin className='text-2xl cursor-pointer' />
                                    </a>
                                </li>

                                <li>
                                    <a href="https://github.com/Priyanshu-89" target='_blank'>
                                    <FaGithub className='text-2xl cursor-pointer' />
                                    </a>
                                </li>

                                <li>
                                    {" "}
                                    <FaInstagram className='text-2xl cursor-pointer' />
                                </li>

                                <li>
                                    {" "}
                                    <FaFacebookF className='text-2xl cursor-pointer' />
                                </li>
                            </ul>

                        </div>
                        <div className='space-y-2 py-4 md:py-0'>
                            <h1 className='font-semibold'>Currently Working on</h1>
                            <div className="flex space-x-5">
                                <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                            </div>

                        </div>
                    </div>

                </div>
                <div className='md:w-1/2 md:ml-40 md:mt-20 order-1'>
                <img src={pic} className='rounded-full w-[300px] h-[300px] mx-auto   md:w-[450px] md:h-[450px]' alt="Loading" />
                </div>
            </div>
        </div>
       
        <hr />
       </>
    )
}

export default Home