'use client'
import Link from 'next/link'
import React from 'react'

interface MobileMenuProps {
    props: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ props }) => {
    const [Menubutton, setMenubutton] = props;
    return (
        <ul className='flex flex-col text-sm lg:text-lg gap-x-3 lg:gap-x-5 font-semibold gap-y-5'>
            <li>
                <Link href={"./"} onClick={() => {setMenubutton(!Menubutton)}}>Home</Link>
            </li>
            <li>
                <Link href={"./collections"}  onClick={() => {setMenubutton(!Menubutton)}}>Collections</Link>
            </li>
            <li>Contact</li>
        </ul>
    )
}


export default MobileMenu