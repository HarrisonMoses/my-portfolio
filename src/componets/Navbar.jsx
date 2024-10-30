import React from 'react'
import logo from '../assets/logo.png'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className=' mb-6 flex center-items justify-between py-2'>
        <div className="flex flex-shrink-0 items-center size-20 ">
            <img src={logo} alt="logo"  className='sm:mx-2 w-10'/>
        </div>
      <div className="flex  items-center justify-center gap-4 px-6 text-xl">
        <FaFacebook/>
        <FaGithub/>
        <FaLinkedin/>
      </div>
    </div>
  )
}

export default Navbar
