import Image from 'next/image'
import { ShoppingCart } from "lucide-react"
import { Menu } from "lucide-react"

import React, { useState } from 'react'
import { Wrapper } from '../Shared/Wrapper'
import Logo from "../assets/logo_ecom.svg"

export const NavBar = () => {
    const[MobileMenu,SetMobileMenu]=useState(false)

    return (

        <section className='sticky top-0 z-20'>
            <Wrapper>
                <header className=' flex justify-between items-center pt-3 '>

                    <div className='w-1/3 md:pl-5 lg:pl-10 hidden md:block'>
                        {/* menu */}
                        <ul className='flex text-sm lg:text-lg gap-x-3 lg:gap-x-5 font-semibold'>
                            <li>Home</li>
                            <li>Collections</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className=' w-1/3'>
                        <div className='flex items-center justify-center '>
                            {/* logo */}
                            <div className='w-[15%] lg:h-[15%] '>
                                <Image src={Logo} alt="logo" />
                            </div>
                            <div>
                                <p className='font-bold  sm:text-xl md:text-2xl lg:text-3xl pl-1 text-green-600'>Green Mart</p>
                            </div>
                        </div>

                    </div>
                    <div className='w-1/3 flex justify-end md:justify-center '>

                        {/* cart icon */}
                        <div className='flex pr-10 justify-center relative'>
                            <button >
                                <ShoppingCart className="mr-2 h-5 w-5 " />
                            </button>
                            <p className='"h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-[-10px] left-3 md:left-3 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]'>0</p>
                        </div>
                        {/* menu icon */}
                        <div className='flex pr-10 justify-center md:hidden'>
                            <button >
                                <Menu className="mr-2 h-5 w-5 " />
                            </button>
                        </div>
                        
                    </div>
                </header>
            </Wrapper>
        </section>
    )
}
