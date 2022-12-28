import React from 'react'
import {FaYinYang} from 'react-icons/fa'

const Header = () => {
  return (
    <>
    <div className='sticky absolute backdrop-blur-lg top-0 left-0 bg-[#5765bda1] w-[100] rounded-b-lg p-4 shadow-sm flex flex-row justify-between'>
        <div className='flex flex-row gap-2 items-center'>
        <p><FaYinYang className='text-2xl text-white'/></p>
        <p className='text-lg  sm:text-2xl font-semibold font-popins uppercase'> Rohit </p>
        </div>
        <div className='right'>
            <ul className='flex flex-row gap-4 font-medium'>
                <a href='#home'><li className='hover:font-bold hover:cursor-pointer hover:underline'>Home</li></a>
                <a href='#about'><li className='hover:font-bold hover:cursor-pointer hover:underline'>About</li></a>
                <a href='#project'><li className='hover:font-bold hover:cursor-pointer hover:underline'>Projects</li></a>
                <a href='#skill'><li className='hover:font-bold hover:cursor-pointer hover:underline'>Skills</li></a>
                <a href='#contact'><li className='hover:font-bold hover:cursor-pointer hover:underline'>Contact</li></a>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Header