
import Image from 'next/image'
import React from 'react'
import { CartButton } from '../Shared/CartButton'
import { Wrapper } from '../Shared/Wrapper'
import ShoeHero from '../../components/assets/shoe_hero.png'
import Gallery from '../Shared/NextFunction'
import GalleryHeroSec from '../Shared/NextFunction'

export const Hero = () => {
    return (
        <section>
            <Wrapper>
                <main className='flex sm:flex-row flex-col-reverse items-center sm:items-stretch '>
                    <div className=' sm:w-[50%]'>
                        <div className=' px-12 py-24 md:px-16 md:py-32 lg:px-20 lg:py-36'>
                            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pr-12 md:pr-16">
                                Find Your Perfect Match
                            </h1>

                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                The king, seeing how much happier his subjects were, realized the error of
                                his ways and repealed the joke tax.
                            </p>
                            <div className='py-6'>
                                <CartButton />
                            </div>

                        </div>
                    </div>
                    <div className='w-[50%] relative'>
                        {/* image */}
                        <div>
                            <div className=' sm:absolute top-20 -left-36 z-10 ml-6  '>
                                <div>
                                <GalleryHeroSec />
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