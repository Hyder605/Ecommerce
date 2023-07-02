
import Image from 'next/image'
import React from 'react'
import { CartButton } from '../Shared/CartButton'
import { Wrapper } from '../Shared/Wrapper'
import {GalleryHeroSec} from '../Shared/NextButton'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'


async function getProductData() {
    const res = await client.fetch(`*[_type=='heroslide'][0]`)
    const imagedata = res
    return imagedata
  }


export const Hero = async() => {
    const data=  await getProductData()

    return (
        <section >
            <Wrapper>
                <main className='flex sm:flex-row flex-col-reverse items-center sm:items-stretch 2xl:pb-8 bg-green-200 '>
                    <div className=' sm:w-[50%]'>
                        <div className=' px-12 pt-[420px] sm:py-24 md:px-16 md:py-32 lg:px-20 lg:py-36'>
                            <h1 className="scroll-m-20  text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl pr-12 md:pr-16">
                                Find Your Perfect Shoes
                            </h1>

                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                The king, seeing how much happier his subjects were, realized the error of
                                his ways and repealed the joke tax.
                            </p>
                            <div className='py-6'>
                                <Link href={"/collections"}>
                                <CartButton />
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className='w-[50%] relative'>
                        {/* image */}
                        <div>
                            <div className=' absolute top-16 -left-36 z-10 ml-6  '>
                                <div>
                                    {/* @ts-ignore */}
                                <GalleryHeroSec props={data} />
                                </div>
                            </div>
                            <div className='w-96 h-96 rounded-full bg-green-200/60 md:absolute top-5 blur-3xl hidden md:block '></div>

                        </div>
                    </div>
                </main>

            </Wrapper>
        </section>
    )
}