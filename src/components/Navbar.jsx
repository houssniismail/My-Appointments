import React from 'react'
import { Link } from 'react-router-dom';
import {Plus } from 'lucide-react'

function Navbar({visible, setVisible}) {
    return (
        <>
            <nav className='class="bg-white border-gray-200 w-[80vw] mx-auto sm:px-4 py-2.5 rounded dark:bg-gray-800"'>
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link className="flex" to={"/Ismail_HOUSSNI/"}>
                        <svg className="mr-3 h-10" viewBox="0 0 52 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z" fill="#76A9FA" />
                            <path d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z" fill="#A4CAFE" />
                            <path d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z" fill="#1C64F2" /></svg>
                        <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">FlowBite</span>
                    </Link>
                        <Plus onClick={()=>setVisible(!visible)} strokeWidth={3} size={40} className="inline-flex items-center ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" />
                    <div className='hidden w-full md:block md:w-auto'>
                        <ul className=' flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
                            <li><div className='block py-2 pr-4 pl-3 rounded md:bg-transparent text-gray-500 md:p-0 hover:bg-gray-100 dark:text-white'><Plus onClick={()=>setVisible(!visible)} strokeWidth={3} size={40} /></div></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;