import React from 'react'
import {SiPython,SiCplusplus,SiMongodb} from 'react-icons/si'
import {FaJava,FaNodeJs,FaReact,FaCss3Alt} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {GiEarthAmerica} from 'react-icons/gi'
import {GrMysql} from 'react-icons/gr'
import {AiFillHtml5} from 'react-icons/ai'
const Skills = () => {
  return (
    <div>
        <p className='items-center jsu my-6 underline text-3xl text-white font-bold font-poppins tracking-widest uppercase' id='skill'>Skills</p>
        <div className='shadow-lg bg-[#5765bda1] p-8 items-center justify-center flex flex-row flex-wrap gap-10 rounded-md '>
            <div className='w-36 h-36 shadow-md hover:rotate-[30deg] duration-300 hover:cursor-help transition-all shadow-[#202547]  bg-white rounded-md '>
                <center><SiCplusplus className='text-[#0b144e] shadow-[#202547] mt-2 w-32 h-32'/></center> <p className="mt-3 ">C++</p>
            </div>
            <div className='w-36 h-36 shadow-md hover:rotate-[30deg] duration-300 hover:cursor-help transition-all shadow-[#202547]  bg-white rounded-md '>
                <center><FaJava className='text-[#0b144e] shadow-[#202547] mt-2 w-32 h-32'/></center><p className="mt-3 ">Java</p>
            </div>
            <div className='w-36 h-36 shadow-md hover:rotate-[30deg] duration-300 hover:cursor-help transition-all shadow-[#202547]  bg-white rounded-md '>
                <center><GrMysql className='text-[#0b144e] shadow-[#202547] mt-2 w-32 h-32'/></center><p className="mt-3 ">MySQL</p>
            </div>
            <div className='w-36 h-36 shadow-md hover:rotate-[30deg] duration-300 hover:cursor-help transition-all shadow-[#202547]  bg-white rounded-md '>
                <center><AiFillHtml5 className='text-[#0b144e] shadow-[#202547] mt-2 w-32 h-32'/></center><p className="mt-3 ">Html</p>
            </div>
            <div className='w-36 h-36 shadow-md hover:rotate-[30deg] duration-300 hover:cursor-help transition-all shadow-[#202547]  bg-white rounded-md '>
                <center><FaCss3Alt className='text-[#0b144e] shadow-[#202547] mt-2 w-32 h-32'/></center><p className="mt-3 ">Css</p>
            </div>
            <div className='w-36 h-36 shadow-md hover:rotate-[30deg] duration-300 hover:cursor-help transition-all shadow-[#202547]  bg-white rounded-md '>
                <center><IoLogoJavascript className='text-[#0b144e] shadow-[#202547] mt-2 w-32 h-32'/></center><p className="mt-3 ">JavaScript</p>
            </div>
            <div className='w-36 h-36 shadow-md hover:rotate-[30deg] duration-300 hover:cursor-help transition-all shadow-[#202547]  bg-white rounded-md '>
                <center><FaReact className='text-[#0b144e] shadow-[#202547] mt-2 w-32 h-32'/></center><p className="mt-3 ">ReactJS</p>
            </div>
            <div className='w-36 h-36 shadow-md hover:rotate-[30deg] duration-300 hover:cursor-help transition-all shadow-[#202547]  bg-white rounded-md '>
                <center><FaNodeJs className='text-[#0b144e] shadow-[#202547] mt-2 w-32 h-32'/></center><p className="mt-3 ">NodeJS</p>
            </div>
           
            <div className='w-36 h-36 shadow-md hover:rotate-[30deg] duration-300 hover:cursor-help transition-all shadow-[#202547]  bg-white rounded-md '>
                <center><SiMongodb className='text-[#0b144e] shadow-[#202547] mt-2 w-32 h-32'/></center><p className="mt-3 ">MongoDB</p>
            </div>
            
            <div className='w-36 h-36 shadow-md hover:rotate-[30deg] duration-300 hover:cursor-help transition-all shadow-[#202547]  bg-white rounded-md '>
                <center><SiPython className='text-[#0b144e] shadow-[#202547] mt-2 w-32 h-32'/></center><p className="mt-3 ">Python</p>
            </div>
        </div>
    </div>
  )
}

export default Skills