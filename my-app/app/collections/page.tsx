
import { HeroSecImageList } from '@/components/data/heroSecImages'
import CardNewArrival from '@/components/Shared/CardNewArrival'
import { Wrapper } from '@/components/Shared/Wrapper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Collections() {
    const data = HeroSecImageList
    return (

        <section>
            <Wrapper>
                <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-16 py-16 items-center content-between">

                    {data.map((item) => (
                        <Link href={`./product/${item.id}`} key={item.id}>
                            <div className='border w-full rounded-md  shadow-2xl flex flex-col items-center bg-white'>
                                <div className='flex items-center justify-center h-72 w-full ' >
                                    <Image src={item.url} alt="" className='w-80 md:w-96' />
                                </div>
                                <div className='bg-slate-200 text-center w-full'>
                                    <span className='font-extrabold text-lg  text-gray-600 '>{item.shoeName}</span>
                                    <p className='font-extrabold text-lg  text-gray-600'>${item.Price}</p>
                                </div>


                            </div>

                        </Link>
                    ))}
                </div>
            </Wrapper>
        </section>
    )
}
