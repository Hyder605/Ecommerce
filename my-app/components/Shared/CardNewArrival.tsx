import Image from 'next/image'
import React from 'react'
import ShoeHero from '../../components/assets/shoe_hero.png'
import { Image as IImage } from 'sanity'
import { urlForImage } from '@/sanity/lib/image'


interface IProduct {
    _id: string,
    title: string,
    image: IImage,
    price: number,
    Product_category: string
}

export default function CardNewArrival({ props }: any) {
    const data: IProduct = props
    return (
        <main>
            <div className='border w-full rounded-md  shadow-2xl flex flex-col items-center bg-white'>
                <h4 className="font-bold text-lg"></h4>
                <div className='px-4 py-16' ><Image src={urlForImage(data.image).url()} width={300} height={300} alt="" className='w-80 md:w-96 hover:scale-125 duration-300' /></div>
                <div className='bg-slate-200 text-center w-full'>
                    <p className='font-extrabold text-lg  text-gray-600 '>{data.Product_category}</p>
                    <div className='font-extrabold text-lg  text-gray-600'>${data.price}</div>
                </div>


            </div>
        </main>
    )
}
