import Image from 'next/image'
import { ShoppingCart } from "lucide-react"
import React from 'react'
import { Wrapper } from '../Shared/Wrapper'
import Logo from "../assets/logo_ecom.svg"

export const NavBar = () => {
    return (
        <Wrapper>
            <header className=' flex justify-between items-center'>
                
                <div className='w-1/3 pl-10'>
                    {/* menu */}
                    <ul className='flex gap-x-5 font-semibold'>
                        <li>Home</li>
                        <li>Collections</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className=' w-1/3'>
                    <div className='flex items-center justify-center'>
                        {/* logo */}
                        <div className='w-[15%] h-[15%] pt-2'>
                            <Image src={Logo} alt="logo" />
                        </div>
                        <div>
                            <p className='font-bold text-3xl pl-1'>Green Mart</p>
                        </div>
                    </div>

                </div>
                <div className='w-1/3 '>

                    {/* cart */}
                    <div className='flex justify-end pr-10'>
                        <button >
                            <ShoppingCart className="mr-2 h-5 w-5 " />
                        </button>
                    </div>
                </div>
            </header>
        </Wrapper>
    )
}
