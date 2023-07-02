import Link from 'next/link'
import React from 'react'

export default function MobileMenu({props}:any) {
    const {setMenubutton}=props
    return (
        <ul className='flex flex-col text-sm lg:text-lg gap-x-3 lg:gap-x-5 font-semibold gap-y-5'>
            <li>
                <Link href={"./"} onClick={() => {setMenubutton(!setMenubutton)}}>Home</Link>
            </li>
            <li>
                <Link href={"./collections"}  onClick={() => {setMenubutton(!setMenubutton)}}>Collections</Link>
            </li>
            <li>Contact</li>
        </ul>
    )
}
