'use client'
import Image from 'next/image'
import { ShoppingCart, X } from "lucide-react"
import { Menu } from "lucide-react"
import React, { useState } from 'react'
import { Wrapper } from '../Shared/Wrapper'
import Logo from "../assets/logo_ecom.svg"
import MobileMenu from './MenuMobile'
import Link from 'next/link'
import { useSelector } from 'react-redux'

interface CartItem {
    product: any;
    quantity: number;
}

interface CartState {
    cart: {
        items: CartItem[];
        totalAmount: number;
        totalQuantity: number;
    }

}



export const NavBar = () => {
    const [Menubutton, setMenubutton] = useState(true)

    const { items,totalAmount,totalQuantity } = useSelector((state:CartState) => state.cart)


    return (

        <div className='sticky top-0 z-20'>
            <Wrapper>
                <header className=' flex justify-between items-center pt-3 bg-green-100 '>

                    <div className='w-1/3 sm:pl-3 md:pl-5 lg:pl-10 hidden sm:block'>
                        {/* menu */}
                        <ul className='flex text-sm lg:text-lg gap-x-3 lg:gap-x-5 font-semibold'>
                            <li>
                                <Link href={"./"}>Home</Link>
                            </li>
                            <li>
                                <Link href={"./collections"}>Collections</Link>
                            </li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className=' w-1/3'>
                        <Link href={"./"} className='flex items-center justify-center '>
                            {/* logo */}
                            <div className='w-[15%] lg:h-[15%] '>
                                <Image src={Logo} alt="logo" />
                            </div>
                            <div>
                                <p className='font-bold  sm:text-xl md:text-2xl lg:text-3xl pl-1 text-green-600'>Green Mart</p>
                            </div>
                        </Link>


                    </div>
                    <div className='w-1/3 flex justify-end md:justify-center '>

                        {/* cart icon */}
                        <div className='flex pr-10 justify-center relative'>
                            <Link href='/cart'>
                                <button >
                                    <ShoppingCart className="mr-2 h-5 w-5 " />
                                </button>
                            </Link>

                            {totalQuantity> 0 && (
                                <p className='"h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-[-10px] left-3 md:left-3 
                                text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]'>{totalQuantity}</p>
                            )}

                        </div>
                        {/* menu icon */}
                        <div className='flex pr-10 justify-center sm:hidden '>
                            <button onClick={() => { setMenubutton(!Menubutton) }} className="z-10" >
                                {Menubutton ? <Menu className="mr-2 h-5 w-5 " /> : <X className="mr-2 h-5 w-5 " />}
                            </button>
                            {!Menubutton && (
                                <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-300 flex flex-col items-center pt-16">

                                    <MobileMenu props={[Menubutton,setMenubutton]} />
                                </div>
                            )}
                        </div>

                    </div>
                </header>
            </Wrapper>
        </div>
    )
}
