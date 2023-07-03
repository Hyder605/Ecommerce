'use client'
import { urlForImage } from "@/sanity/lib/image"
import Image from "next/image"
import { Carousel } from "react-responsive-carousel"


export const CarouselNew=({props}:any)=>{
    return(
        <Carousel
                autoPlay={true}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                showArrows={false}
              >

                <div>
                  <Image src={urlForImage(props[0]).url()} width={300} height={300} alt="Slide 1" />
                </div>
                <div>
                  <Image src={urlForImage(props[1]).url()} width={300} height={300} alt="Slide 2" />
                </div>
                <div>
                  <Image src={urlForImage(props[2]).url()} width={300} height={300} alt="Slide 3" />
                </div>


              </Carousel>
    )
}