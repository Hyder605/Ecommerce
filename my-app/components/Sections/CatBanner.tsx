import React from 'react'
import CatCard from '../Shared/CatCard'
import { Wrapper } from '../Shared/Wrapper'

export default function CatBanner() {
    return (
        <section>
            <Wrapper>
                <div className='bg-slate-800 h-60 w-full pt-4 px-6 text-center'>
                    <div className='flex flex-col md:flex-row justify-center items-center'>
                        <p className='text-red-500 font-bold text-lg  '>Free Delivery :</p>
                        <p className='text-white'>To First-Time customers only, U.S Customers or Order over $200</p>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}
