import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import Button from './Button';

const NAVBAR_HEIGHT = 80; // নেভবারের উচ্চতা px (যেমন তুমি সেট করো)

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
        style={{ height: `${NAVBAR_HEIGHT}px` }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center gap-5">
            <img src={Logo} alt="logo" />
            <h1 className="font-bold text-2xl sm:text-3xl text-[#313131]">Pacific Corp.</h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10">
            <li><a href="#home" className="text-[#676767] hover:text-black">Home</a></li>
            <li><a href="#benefits" className="text-[#676767] hover:text-black">Pages</a></li>
            <li><a href="#services" className="text-[#676767] hover:text-black">Services</a></li>
            <li><a href="#quote" className="text-[#676767] hover:text-black">Portfolio</a></li>
            <li><a href="#blog" className="text-[#676767] hover:text-black">Blog</a></li>
            <li><a href="#Contact" className="text-[#676767] hover:text-black">Contact Us</a></li>
          </ul>

          {/* Button */}
          <div className="hidden lg:block">
            <Button>Call Now</Button>
          </div>

          {/* Hamburger Icon */}
          <div className="lg:hidden" onClick={() => setOpen(!open)}>
            <span className="text-2xl cursor-pointer">{open ? '✕' : '☰'}</span>
          </div>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed left-0 w-1/2 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
            ${open ? 'translate-x-0' : '-translate-x-full'}`}
          style={{
            top: `${NAVBAR_HEIGHT}px`,
            height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
          }}
        >
          <div className="p-6 flex flex-col h-full">
            {/* × বাটনটি এখানে নেই */}

            {/* Menu items */}
            <ul className="flex flex-col gap-6 text-lg">
              <li><a href="#home" onClick={() => setOpen(false)} className="hover:text-black text-[#676767]">Home</a></li>
              <li><a href="#benefits" onClick={() => setOpen(false)} className="hover:text-black text-[#676767]">Pages</a></li>
              <li><a href="#services" onClick={() => setOpen(false)} className="hover:text-black text-[#676767]">Services</a></li>
              <li><a href="#quote" onClick={() => setOpen(false)} className="hover:text-black text-[#676767]">Portfolio</a></li>
              <li><a href="#blog" onClick={() => setOpen(false)} className="hover:text-black text-[#676767]">Blog</a></li>
              <li><a href="#Contact" onClick={() => setOpen(false)} className="hover:text-black text-[#676767]">Contact Us</a></li>
            </ul>

            {/* Button at bottom */}
            <div className="mt-auto">
              <Button />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
