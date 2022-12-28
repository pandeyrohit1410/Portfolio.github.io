import React from 'react'
import {BsDownload,BsFacebook,BsWhatsapp,BsGithub,BsInstagram,BsLinkedin} from 'react-icons/bs'
import {SiGeeksforgeeks} from 'react-icons/si'
   
const Hero = () => {
  return (
    <div className='container flex flex-row shadow-md rounded bg-[#5765bda1] p-15 mt-4 rounded-r-3xl' id='home'>
        <div className='bg-gray-200 items-center rounded-r-3xl shadow-lg overflow-x-auto'>
            <img src='../src/assets/Rohit.png' alt='Photo' className='rounded-r-md backdrop-blur-lg'/>
        </div>
        <div className='flex flex-1 flex-col justify-center items-center rounded-l-md'>
            <p className='font-poppins text-3xl break-normal font-bold tracking-wider'>Hey! I'm Rohit Pandey</p>
            <small className='text-gray-100 mt-2'>On a Mission To Code 2 Hours Everyday For 365 days</small>
            
                <a href="../src/assets/Rohit Pandey CV.pdf">
                    <button className='bg-[#282e47] flex flex-row gap-2 hover:bg-[#343744ab] text-white font-bold py-2 px-4 rounded-full mt-[20px]'>
               <BsDownload className='text-xl'/> <p>Download CV</p>
               </button></a>
        </div>    
        <div className='flex flex-col items-center justify-center gap-3 '>
        <a href="https://www.linkedin.com/in/rohit-pandey-95a742236"><p><BsLinkedin className='text-xl mr-3 border-[1px] rounded-full w-8 h-8 p-1 hover:scale-125 hover:cursor-pointer'/></p></a>

        <a href="https://github.com/pandeyrohit1410"><p><BsGithub className='text-xl mr-3 border-[1px] rounded-full w-8 h-8 p-1 hover:scale-125 hover:cursor-pointer'/></p></a>

        <a href="https://auth.geeksforgeeks.org/user/rohit_pandey/practice"><p><SiGeeksforgeeks className='text-xl mr-3 border-[1px] rounded-full w-8 h-8 p-1 hover:scale-125 hover:cursor-pointer'/></p></a>

        <a href="http://api.whatsapp.com/send?phone=917562909671"><p><BsWhatsapp className='text-xl mr-3 border-[1px] rounded-full w-8 h-8 p-1 hover:scale-125 hover:cursor-pointer'/></p></a>

        <a href=" https://www.facebook.com/profile.php?id=100007569347827&mibextid=ZbWKwL"><p><BsFacebook className='text-xl mr-3 border-[1px] rounded-full w-8 h-8 p-1 hover:scale-125 hover:cursor-pointer'/></p></a>
        
        <a href="https://instagram.com/r_rohit_pandey?igshid=YmMyMTA2M2Y="><p><BsInstagram className='text-xl mr-3 border-[1px] rounded-full w-8 h-8 p-1 hover:scale-125 hover:cursor-pointer'/></p></a>
        
        </div>
    </div>
  )
}

export default Hero