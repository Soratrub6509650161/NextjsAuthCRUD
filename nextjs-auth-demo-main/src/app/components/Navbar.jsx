"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react';

function Navbar() {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className='bg-[#181414] sticky top-0 z-50 shadow-md'>
            <div className='flex flex-wrap items-center justify-between  p-4'>
                <Link href="/" className='flex items-center space-x-3 rtl:space-x-reverse'>
                    <span className='self-center text-4xl font-semibold whitespace-nowrap dark:text-white'>WIZ</span>
                </Link>
                <button
                    className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                    onClick={toggleMenu}
                    aria-controls="navbar-default"
                    aria-expanded={isOpen ? "true" : "false"}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
                    <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0'>
                        {!session ? (
                            <>
                                <li>
                                    <Link href="/login" className='block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:p-0 hover:text-[#fe4a59] dark:text-white dark:hover:text-[#fe4a59] dark:hover:bg-[#484444] md:dark:hover:bg-transparent'>
                                        LOGIN
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/register" className='block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:p-0 hover:text-[#fe4a59] dark:text-white dark:hover:text-[#fe4a59] dark:hover:bg-[#484444] md:dark:hover:bg-transparent'>
                                        REGISTER
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li><Link href="/welcome" className='bg-gray-500 text-white border py-2 px-3 rounded-md text-lg my-2'>Profile</Link></li>
                                <li><Link href="/Product" className='bg-gray-500 text-white border py-2 px-3 rounded-md text-lg my-2'>Product</Link></li>
                                <li><a onClick={() => signOut()} className='bg-red-500 text-white border py-2 px-3 rounded-md text-lg my-2'>Logout</a></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
