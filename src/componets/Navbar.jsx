import React from 'react'
import logo from '../assets/logo.png'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className=" mb-6 flex center-items justify-between py-2">
      <div className="flex flex-shrink-0 items-center size-20 ">
        <img src={logo} alt="logo" className="sm:mx-2 w-10" />
      </div>
      <div className="flex  items-center justify-center gap-4 px-6 text-xl">
        <a
          href="https://github.com/HarrisonMoses"
          className="hover:text-neutral-100"
          target='_blank'
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/moses-harrison/"
          className="hover:text-neutral-100"
          target='_blank'
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Navbar
