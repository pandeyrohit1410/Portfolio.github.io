import React from 'react'
import {FaYinYang} from 'react-icons/fa'
import {BsDownload,BsFacebook,BsWhatsapp,BsGithub,BsInstagram,BsLinkedin} from 'react-icons/bs'
import {SiGeeksforgeeks} from 'react-icons/si'

const Footer = () => {
  return (
    <div className='flex flex-row justify-between bg-[#5765bda1] my-6   '>
      <div className='flex flex-row gap-2 items-center m-2'>
        <p><FaYinYang className='text-2xl text-white'/></p>
        <p className='text-lg  sm:text-2xl font-semibold font-popins uppercase text-white'> Rohit </p>
        </div>

        <div className='flex flex-row gap-4 font-medium m-2'>
        <a href="https://www.linkedin.com/in/rohit-pandey-95a742236"><p><BsLinkedin className='text-xl mr-3 border-[1px] rounded-full w-8 h-8 p-1 hover:scale-125 hover:cursor-pointer bg-black'/></p></a>
        <a href="https://github.com/pandeyrohit1410"><p><BsGithub className='text-xl mr-3 border-[1px] rounded-full w-8 h-8 p-1 hover:scale-125 hover:cursor-pointer bg-black'/></p></a>
        <a href="https://auth.geeksforgeeks.org/user/rohit_pandey/practice"><p><SiGeeksforgeeks className='text-xl mr-3 border-[1px] rounded-full w-8 h-8 p-1 hover:scale-125 hover:cursor-pointer bg-black'/></p></a>
        <a href="http://api.whatsapp.com/send?phone=917562909671"><p><BsWhatsapp className='text-xl mr-3 border-[1px] rounded-full w-8 h-8 p-1 hover:scale-125 hover:cursor-pointer bg-black'/></p></a>
          <a href=' https://www.facebook.com/profile.php?id=100007569347827&mibextid=ZbWKwL'>
          <p><BsFacebook className='text-xl mr-3 border-[1px] rounded-full w-8 h-8 p-1 hover:scale-125 hover:cursor-pointer bg-black'/></p></a>
        
        <a href="https://instagram.com/r_rohit_pandey?igshid=YmMyMTA2M2Y"><p><BsInstagram className='text-xl mr-3 border-[1px] rounded-full w-8 h-8 p-1 hover:scale-125 hover:cursor-pointer bg-black'/></p></a>
        
        </div>
    </div>
    
  )
}

export default Footer