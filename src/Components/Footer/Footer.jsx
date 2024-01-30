import React from 'react'
import { FaFacebookF,FaInstagram,FaTwitter,FaYoutube } from "react-icons/fa";
import './Footer.css'

function Footer() {
  return (
    <div className=' sm:max-w-screen-sm lg:max-w-screen-lg md:max-w-screen-md px-4 mx-auto  text-[0.75rem] text-gray-400'>
        <div className='social-medias flex text-2xl mb-4 text-white'>
        <FaFacebookF className='mr-6 cursor-pointer'/>
        <FaInstagram className='mr-6 cursor-pointer' />
        <FaTwitter className='mr-6 cursor-pointer'/>
        <FaYoutube  className='mr-6 cursor-pointer'/>

        </div>
        <ul className='links grid grid-cols-4 flex-wrap '>
            <li className='flex-basis-1/4 mb-5 cursor-pointer'>Audio Deacription</li>
          
            <li className='flex-basis-1/4 mb-3 cursor-pointer'>Help Centre</li>
            <li className='flex-basis-1/4 mb-3 cursor-pointer'>Gift Cards</li>
            <li className='flex-basis-1/4 mb-3 cursor-pointer'>Media Centre</li>
            <li className='flex-basis-1/4 mb-3 cursor-pointer'>Investor Relations</li>
            <li className='flex-basis-1/4 mb-3 cursor-pointer'>Jobs</li>
            <li className='flex-basis-1/4 mb-3 cursor-pointer'>Terms of Use</li>
            <li className='flex-basis-1/4 mb-3 cursor-pointer'>Privacy</li>
            <li className='flex-basis-1/4 mb-3 cursor-pointer'>Legal Notices</li>
            <li className='flex-basis-1/4 mb-3 cursor-pointer'>Cookie Preferences</li>
            <li className='flex-basis-1/4 mb-3 cursor-pointer'>Corporate Information</li>
            <li className='flex-basis-1/4 mb-3 cursor-pointer'>Contact Us</li>
          
        </ul>
        <div className='services'>
            <button className='my-5'>Service Code</button>
        </div>
        <div className=' mb-4'>&copy; 1997-2024 Netflix, inc.</div>
    </div>
  )
}

export default Footer
