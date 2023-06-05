import Image from 'next/image'
import React from 'react'
import ShoeHero from '../../components/assets/shoe_hero.png'


export default function CardNewArrival() {
    return (
        <main>
            <div>
                <div className='border w-full rounded-md  shadow-2xl flex flex-col items-center bg-white'>
                    <h4 className="font-bold text-lg"></h4>
                    <div className='px-4 py-16' ><Image src={ShoeHero} alt="" className='w-80 md:w-96' /></div>
                    <div className='bg-slate-200 text-center w-full'>
                        <span className='font-extrabold text-lg  text-gray-600 '>Trainer Shoes</span>
                        <p className='font-extrabold text-lg  text-gray-600'>$240</p>
                    </div>


                </div>

            </div>

        </main>
    )
}
