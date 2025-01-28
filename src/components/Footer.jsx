import React from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'

function Footer() {
    return (
        <>
            <hr />
            <footer className="py-12 bg-slate-900">
                <div className="max-w-screen-2xl container mx-auto px-4 bg-slate-900 md:px-20">
                    <div className="flex items-center justify-center flex-col text-[#EF83B9]">
                        <div className="flex space-x-4 text-2xl">
                            <FaFacebookF />
                            <FaGithub />
                            <FaInstagram />
                            <FaLinkedin />
                        </div>
                       
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer