import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "projects"
        },
        {
            id: 3,
            link: "contact"
        }
    ]

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div>
            <h1 className='text-2xl ml-2'>
               Joshua Strudwick 
            </h1>
        </div>
        <ul className='hidden md:flex'>

        {links.map(({id, link}) => (
            <li key={id} className='text-2xl px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200'>
                {link}
            </li>
        ))}
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {nav && (
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-grey-500 text-gray-500'>
            {links.map(({id, link}) => (
                <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                    {link}
                </li>
        ))}
        </ul>  
        )}


        
    </div>
  )
}

export default NavBar