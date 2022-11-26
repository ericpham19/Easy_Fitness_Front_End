import React from 'react'
import {Link} from 'react-router-dom';
import { useSelector} from "react-redux";

const Navbar = () => {
  const userToken = useSelector((state) => state.user.userToken)

  

  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="/" class="flex items-center">
            <img src="https://t4.ftcdn.net/jpg/04/22/12/95/360_F_422129557_tBylYldzJ5KjVTEdRLMkQIaYizThV1PE.jpg" class="h-12 w-10 mr-3 sm:h-9" alt="Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">EASY FITNESS</span>
        </a>
        <div class="flex items-center">
        <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                    <a href="/" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="/user" class="text-gray-900 dark:text-white hover:underline">User</a>
                </li>
                <li>
                    <a href="/sessions" class="text-gray-900 dark:text-white hover:underline">Session</a>
                </li>
                <li>
                    <a href="/records" class="text-gray-900 dark:text-white hover:underline">Record</a>
                </li>
            </ul>
          
        </div>
    </div>
   
</nav>


      

    
    
   
  )
}

export default Navbar
