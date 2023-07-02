
import { Wrapper } from '@/components/Shared/Wrapper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { client } from '@/sanity/lib/client'
import { Image as IImage } from 'sanity'
import { urlForImage } from '@/sanity/lib/image'



interface IProduct {
    _id: string,
    title: string,
    image: IImage,
    price: number
}


async function getProductData() {
    const res: IProduct[] = await client.fetch(`*[_type=='product']{_id,title,image,price}`)
    const imagedata = res
    return imagedata
}

export default async function Collections() {
    const data = await getProductData()

    return (

        <section>
            <Wrapper>
                <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-5 lg:px-16 py-16 items-center content-between">

                    {data.map((item) => {
                        return (
                            <Link key={item._id} href={`./product/${item._id}`} className="hover:scale-105 duration-300">
                                <div className='border w-full rounded-md  shadow-2xl flex flex-col items-center bg-white'>
                                    <div className='flex items-center justify-center h-72 w-full ' >
                                        <Image src={urlForImage(item.image).url()} alt="" className='w-80 md:w-96' width={300} height={300} />
                                    </div>
                                    <div className='bg-slate-200 text-center w-full'>
                                        <p className='font-extrabold text-lg  text-gray-600 '>{item.title}</p>
                                        <p className='font-extrabold text-lg  text-gray-600'>${item.price}</p>
                                    </div>


                                </div>

                            </Link>
                        )

                    })}
                </div>
            </Wrapper>
        </section>
    )
}
