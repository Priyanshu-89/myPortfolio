import React, { useState } from 'react';
import pic from '../../public/logo.png';
import { LuSquareMenu } from 'react-icons/lu';
import { RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-scroll';

function Navbar() {
  const [menu, setMenu] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => setMenu(!menu);

  const navItem=[
    {
        id:1,
        text:"Home"
    },

    {
        id:2,
        text:"About"
    },

    {
        id:3,
        text:"Portfolio"
    },

    {
        id:4,
        text:"Experiance"
    },

    {
        id:5,
        text:"Contacts"
    },

  ]

  return (
    <>
      <nav className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 right-0">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} className="h-16 w-16 rounded-full" alt="Logo" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Priy<span className="text-green-500 text-2xl">a</span>Shu
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <ul className="flex space-x-8">
             {
                navItem.map(({id, text})=>(
                    <li key={id} className='hover:scale-105 duration-200 cursor-pointer'>
                      <Link 
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass='active'
                      >{text}</Link>
                    </li>
                ))
             }
            </ul>
          </div>

          {/* Mobile menu toggle */}
          <div onClick={toggleMenu} className="md:hidden cursor-pointer">
            {menu ? <RiCloseFill size={30} /> : <LuSquareMenu size={30} className='cursor-pointer'/>}
          </div>
        </div>

        {/* Mobile menu items */}
        {menu && (
          <div
            className="md:hidden absolute top-0 left-0 w-full h-screen  flex flex-col  items-center justify-center bg-white opacity-85 space-y-8 text-black"
            onClick={() => setMenu(false)} // This ensures the menu closes when clicking outside
          >
            <ul>
            {
                navItem.map(({id, text})=>(
                    <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                       <Link 
                       onClick={()=>setMenu(!menu)}
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass='active'
                      >{text}</Link>
                    </li>
                ))
             }
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
