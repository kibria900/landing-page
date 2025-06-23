import React from 'react'
import Logo from '../assets/logo.svg'
import Button from './Button'

const NavBar = () => {
    return (
        <>
            <nav className='container mx-auto fixed top-0 left-0 right-0 z-50 bg-white'>
                <div className='flex justify-between items-center mt-[50px]'>
                    <div className='flex items-center gap-5'>
                        <img src={Logo} alt="#" />
                        <h1 className='font-bold text-4xl text-[#313131]'>Pacific Corp.</h1>
                    </div>
                    <div>
                        <ul className='flex items-center gap-10'>
                            <li className='text-[16px] text-[#676767]'> <a href="#home">Home</a></li>
                            <li className='text-[16px] text-[#676767]'> <a href="#benefits">Pages</a> </li>
                            <li className='text-[16px] text-[#676767]'> <a href="#servics">Services</a> </li>
                            <li className='text-[16px] text-[#676767]'> <a href="">Portfolio</a> </li>
                            <li className='text-[16px] text-[#676767]'> <a href="#quote">Blog</a> </li>
                            <li className='text-[16px] text-[#676767]'> <a href=""> Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <Button>Call Now</Button>
                    </div>
                </div>
            </nav>
            
        </>
    )
}

export default NavBar
