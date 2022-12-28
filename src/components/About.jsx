import React from 'react'
import Timeline from './Timeline'

const About = () => {
  return (
    <>
    <p className='mr-auto my-6 underline text-3xl text-white font-bold font-poppins tracking-widest uppercase' id='about'>about me</p>
    <div className='shadow-lg rounded-r-3xl mb-6 flex flex-row  grid grid-cols-5'>
        <div className='flex flex-col items-start bg-[#5765bda1] justify-center p-14 col-span-3 '>
            <span className='border-l-[6px] border-white'><p className='tracking-wider text-xl font-semibold uppercase ml-5'>who am i?</p></span>
            <p className='mt-2 text-lg font-normal text-start '>I love to learn new technologies through which I can pursue my knowledege and problem solving skills which matters most in daily life scenarios </p>
            <p className='mt-2 text-lg font-normal text-start '>There is a vast knowledege which is flowing for Computer science as it updates Everyday. So i can't declare myself master of all. That is the reason I choose ML </p>
            <p className='mt-2 text-lg font-normal text-start '>Projects are attached below. This is not all about me just somepoints in bullet. </p>
        </div>

        <div className=' bg-white flex-col items-center justify-center py-3 col-span-2'>
            <Timeline/>
        </div>
    </div>
    </>
  )
}

export default About