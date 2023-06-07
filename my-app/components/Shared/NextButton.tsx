'use client'
import Image from 'next/image';
import { StepForward } from "lucide-react"

import { useState } from 'react';
import { HeroSecImageList } from '../../components/data/heroSecImages';
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'



export const getProductData = async () => {
  const res = await client.fetch(`*[_type=='heroslide']`)
  return res
}

async function GalleryHeroSec() {
  
  const data = await getProductData()
  console.log(data)

  const [index, setIndex] = useState(0);
  const hasNext = index < data.heroSecImages.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }



  let ShoeImage =data.heroSecImages[index];
  return (
    <>
    {/* Next button on Hero Section */}
      <button onClick={handleNextClick} className="relative left-[25%] sm:left-[370px]  md:left-[430px] lg:left-[540px] top-[220px]  sm:top-[180px] xl:left-[580px] rounded-full bg-blue-400 ">
        <StepForward className="mr-2 h-14 w-12 " />

      </button>
      <div className=' w-[125%] sm:max-w-[95%] md:max-w-[85%] lg:max-w-[100%] sm:pl-16 md:pl-8'>
        <Image
          src={urlForImage(ShoeImage).url()} alt="image" 
        />
      </div>

    </>
  );
}

export default GalleryHeroSec