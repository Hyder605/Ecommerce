'use client'
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Image as IImage } from 'sanity'




// interface ImageUrl {
//     src: string;
//     height: number;
//     width: number;
//     blurDataURL: string;
//     blurWidth: number;
//     blurHeight: number;
//   }
  
//   interface VariationImage {
//     name: string;
//     imageurl: ImageUrl;
//   }
  
//   interface Product {
//     id: number;
//     slug: string;
//     url: ImageUrl;
//     shoeName: string;
//     Price: number;
//     Catergory: string;
//     variationsImage: VariationImage[];
//   }

  
interface IProduct{
    _id: number,
    title: string,
    image: IImage[],
    price: number
}


export default function SliderEffect({ props }:any) {
    const Productdetail:IProduct=props
    console.log(Productdetail)

    const [sliderImage, setSliderImage] = useState("front")
    const SImage = Productdetail.image.find((item) => item.name == sliderImage)
    return (
        <div className='flex gap-x-4 pr-6 pl-16'>

            <div className="w-[15%] space-y-6">
                {Productdetail.variationsImage.map((item) => {

                    return (
                        <button onClick={() => setSliderImage(item.name)}
                            key={item.name} className="w-full h-[70px] bg-green-500 flex justify-center items-center">
                            <Image src={item.imageurl} alt={item.name} />
                        </button>
                    )
                })}
            </div>
            <div className=" w-full bg-slate-300 h-fit">
                {SImage && <Image src={SImage.imageurl} alt="shoe" />}
            </div>
        </div>
    )
}
