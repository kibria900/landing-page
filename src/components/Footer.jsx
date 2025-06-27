import React from 'react';
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        
        {/* Left Section */}
        <div>

            <div className='flex items-center gap-5'>

             <img src={Logo} alt="#" />
          <h2 className="text-xl font-bold flex items-center gap-2"> Pacific Corp.
          </h2>

          </div>
          <p className="mt-2 text-sm">Build a modern and creative website with crealand</p>
          <div className="flex gap-3 mt-4">
            <button className="p-2 bg-gray-100 rounded-full text-gray-500 hover:text-black">
              <FaGoogle />
            </button>
            <button className="p-2 bg-gray-100 rounded-full text-gray-500 hover:text-black">
              <FaTwitter />
            </button>
            <button className="p-2 bg-gray-100 rounded-full text-gray-500 hover:text-black">
              <FaInstagram />
            </button>
            <button className="p-2 bg-gray-100 rounded-full text-gray-500 hover:text-black">
              <FaLinkedin />
            </button>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className=" mb-3 font-bold">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>Landingpage</li>
            <li>Features</li>
            <li>Documentation</li>
            <li>Referral Program</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Documentation</li>
            <li>Design</li>
            <li>Themes</li>
            <li>Illustrations</li>
            <li>UI Kit</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h3 className="font-bold mb-3">More</h3>
          <ul className="space-y-2 text-sm">
            <li>Documentation</li>
            <li>License</li>
            <li>Changelog</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
