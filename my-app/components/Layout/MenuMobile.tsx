import Link from 'next/link'
import React from 'react'

export default function MobileMenu() {
    return (
        <ul className='flex flex-col text-sm lg:text-lg gap-x-3 lg:gap-x-5 font-semibold gap-y-5'>
            <li>
                <Link href={"./"}>Home</Link>
            </li>
            <li>
                <Link href={"./collections"}>Collections</Link>
            </li>
            <li>Contact</li>
        </ul>
    )
}
