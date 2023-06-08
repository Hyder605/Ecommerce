import Image from 'next/image'
import React from 'react'
import ShoeHero from '../../components/assets/shoe_hero.png'
import { urlForImage } from '@/sanity/lib/image'


interface ICategory {
    _type: string,
    name: string,
    _id: string,
  }


export default function CatCard({ props }: { props: ICategory }) {
    console.log(props)    
    return (
        <main>
            <div className='bg-green relative '>
                <div className='border h-56 lg:h-64 absolute -top-36 z-10 w-full rounded-md  px-12 py-16 shadow-2xl flex flex-col items-center bg-white'>
                    <h4 className="font-bold text-lg"></h4>
                    <div className='absolute top-[85px] md:top-[130px] lg:top-[120px]'><Image src={ShoeHero} alt="" className='w-80 md:w-96'/></div>
                    <p className='mt-2 text-slate-600'></p>
                    <span className='absolute transform -rotate-90 right-1 -z-10 font-extrabold text-lg  text-gray-600'>{props.name}</span>


                </div>
                <div className='border h-56 lg:h-64 w-full absolute -top-32 bg-green-200/80 left-3 rounded-md  px-12 py-16  flex flex-col items-center'>
                    <h4 className="font-bold text-lg"></h4>
                    <p className='mt-2 text-slate-600'></p>

                </div>
            </div>

        </main>
    )
}
