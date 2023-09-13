import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io'



const Footer = () => {
  return (
    <footer className='w-full flex justify-center my-[rem] bg-[#F4F5F7]'>
      <div className='w-[492px] h-[145.43px] flex flex-col items-center justify-between'>
        <ul className="flex gap-8 text-gray-900">
          <a href="/">
            <IoLogoFacebook />
          </a>
          <a href="/">
            <IoLogoInstagram />
          </a>
          <a href="/">
            <IoLogoTwitter />
          </a>
          <a href="/">
            <IoLogoYoutube />
          </a>
        </ul>

        <ul className='w-full flex justify-between font-semibold text-gray-900'>
          <li>Conditions of Use</li>
          <li>Privacy & Policy</li>
          <li>Press Room</li>
        </ul>
        <p className='text-gray-500 text-sm'>{`©${new Date().getFullYear()} Showbox by metalekan`}</p>
      </div>
    </footer>
  )
}

export default Footer