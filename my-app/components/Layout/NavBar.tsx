import Image from 'next/image'
import { ShoppingCart } from "lucide-react"
import { Menu } from "lucide-react"

import React from 'react'
import { Wrapper } from '../Shared/Wrapper'
import Logo from "../assets/logo_ecom.svg"

export const NavBar = () => {
    return (
        <section>
            <Wrapper>
                <header className=' flex justify-between items-center'>

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
                        <div className='flex pr-10 justify-center'>
                            <button >
                                <ShoppingCart className="mr-2 h-5 w-5 " />
                            </button>
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
