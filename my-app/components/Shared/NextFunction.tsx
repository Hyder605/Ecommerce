'use client'
import Image from 'next/image';
import { StepForward } from "lucide-react"

import { useState } from 'react';
import { HeroSecImageList } from '../../components/data/heroSecImages';

export default function GalleryHeroSec() {
  const [index, setIndex] = useState(0);
  const hasNext = index < HeroSecImageList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }



  let ShoeImage = HeroSecImageList[index];
  return (
    <>
    {/* Next button on Hero Section */}
      <button onClick={handleNextClick} className="relative left-[25%] sm:left-[370px]  md:left-[430px] lg:left-[540px] top-[220px]  sm:top-[180px] xl:left-[580px] rounded-full bg-blue-400 ">
        <StepForward className="mr-2 h-14 w-12 " />

      </button>
      <div className=' w-[125%] sm:max-w-[95%] md:max-w-[85%] lg:max-w-[100%] sm:pl-16 md:pl-8 '>
        <Image
          src={ShoeImage.url} alt="image" 
        />
      </div>

    </>
  );
}
