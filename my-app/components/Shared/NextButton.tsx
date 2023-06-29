'use client'


import Image from 'next/image';
import { StepForward } from "lucide-react"
import { useEffect, useState } from 'react';
import { HeroSecImageList } from '../../components/data/heroSecImages';
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'


export const GalleryHeroSec=({props}:any)=> {
  const data=props
  
  const [index, setIndex] = useState(1);
  const hasNext = index < 3

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(1);
    }
  }

  
  let ShoeImage;
  if(index===1){
    ShoeImage = data.slide2;

  }else if(index==2){
    ShoeImage = data.slide1;

  }else{
    ShoeImage = data.slide3;

  }


  return (
    <>
      {/* Next button on Hero Section */}
      <button
        onClick={handleNextClick}
        className="relative left-[25%] sm:left-[370px]  md:left-[430px] lg:left-[540px] top-[220px]  sm:top-[180px] xl:left-[580px] rounded-full bg-blue-400 "
      >
        <StepForward className="mr-2 h-14 w-12 " />
      </button>
      <div className=' w-[125%] sm:max-w-[95%] md:max-w-[85%] lg:max-w-[100%] sm:pl-16 md:pl-8 mb-5'>
        <Image
          src={urlForImage(ShoeImage).url()} alt="image" width={500} height={500}
        />
      </div>
    </>
  );
}

