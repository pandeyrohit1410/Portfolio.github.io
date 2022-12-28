import React from "react";
import {FaUserGraduate} from 'react-icons/fa'

const Timeline = () => {
  return (
    <>
      <div>
        <ol class="relative border-l border-gray-200 dark:border-gray-700 text-start">
          <li class="mb-10 ml-6">
            
            <FaUserGraduate class="flex absolute -left-3 justify-center items-center w-7 h-7 p-1 bg-blue-900 rounded-full ring-8 ring-white"/>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white ml-2">
              Matriculation{" "}
            </h3>
            <time class="block mb-1 text-sm font-normal leading-none text-gray-800 dark:text-gray-500 ml-2 ">
              June 2013
            </time>
            <p class="mb-4 text-base font-normal text-gray-900 dark:text-gray-400 ml-2">
             Hari Narayan High School, Shahpur
            </p>
          </li>


          
          <li class="mb-10 ml-6">
          <FaUserGraduate class="flex absolute -left-3 justify-center items-center w-7 h-7 p-1 bg-blue-900 rounded-full ring-8 ring-white"/>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white ml-2">
              Intermediate
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-800 dark:text-gray-500 ml-2">
              May 2015
            </time>
            <p class="text-base font-normal text-gray-900 dark:text-gray-400 ml-2">
              Hari Narayan Inter College,Shahpur
            </p>
          </li>


          <li class="ml-6">
          <FaUserGraduate class="flex absolute -left-3 justify-center items-center w-7 h-7 p-1 bg-blue-900 rounded-full ring-8 ring-white"/>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white ml-2">
            Undergraduate
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-800 dark:text-gray-500 ml-2">
              May 2019
            </time>
            <p class="text-base font-normal text-gray-900 dark:text-gray-400 ml-2">
              Thakur Prashad Singh College,Patna
            </p>
          </li>

          <li class="mb-10 ml-6">
            
          <FaUserGraduate class="flex absolute -left-3 justify-center items-center w-7 h-7 p-1 bg-blue-900 rounded-full ring-8 ring-white"/>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white ml-2">
            Postgraduate
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-800 dark:text-gray-500 ml-2">
              Present
            </time>
            <p class="text-base font-normal text-gray-900 dark:text-gray-400 ml-2">
              Pondicherry University,Pondicherry
            </p>
          </li>


        </ol>
      </div>
    </>
  );
};

export default Timeline;
