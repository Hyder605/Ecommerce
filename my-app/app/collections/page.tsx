
import { Wrapper } from '@/components/Shared/Wrapper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { client } from '@/sanity/lib/client'
import { Image as IImage } from 'sanity'

interface IProduct{
    _id: string,
    title: string,
    image: IImage[],
    price: number
}


async function getProductData() {
    const res:IProduct[]= await client.fetch(`*[_type=='product']{_id,title,image,price}`)
    const imagedata = res
    return imagedata
  }

export default async function Collections() {
    const data=  await getProductData()
    // console.log(data)

    return (

        <section>
            <Wrapper>
                <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-16 py-16 items-center content-between">

                    {data.map((item) => (
                        <Link href={`./product/${item._id}`} key={item._id}>
                            <div className='border w-full rounded-md  shadow-2xl flex flex-col items-center bg-white'>
                                <div className='flex items-center justify-center h-72 w-full ' >
                                    {/* <Image src={item.url} alt="" className='w-80 md:w-96' /> */}
                                </div>
                                <div className='bg-slate-200 text-center w-full'>
                                    <span className='font-extrabold text-lg  text-gray-600 '>{item.title}</span>
                                    <p className='font-extrabold text-lg  text-gray-600'>${item.price}</p>
                                </div>


                            </div>

                        </Link>
                    ))}
                </div>
            </Wrapper>
        </section>
    )
}
