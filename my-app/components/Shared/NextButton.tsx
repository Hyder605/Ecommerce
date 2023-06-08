'use client'
import Image from 'next/image';
import { StepForward } from "lucide-react"
import { useEffect, useState } from 'react';
import { HeroSecImageList } from '../../components/data/heroSecImages';
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'

async function getProductData() {
  const res = await client.fetch(`*[_type=='heroslide']{heroSecImages}`)
  const imagedata = res[0]
  return imagedata
}



export const GalleryHeroSec=async()=> {
  const [index, setIndex] = useState(0);
  const data=  await getProductData()
  console.log(data)

 


  if (!data) {
    return null; // Render null or a loading indicator while data is being fetched
  }

  const hasNext = index < data.heroSecImages.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  const ShoeImage = data.heroSecImages[index];

  return (
    <>
      {/* Next button on Hero Section */}
      <button
        onClick={handleNextClick}
        className="relative left-[25%] sm:left-[370px]  md:left-[430px] lg:left-[540px] top-[220px]  sm:top-[180px] xl:left-[580px] rounded-full bg-blue-400 "
      >
        <StepForward className="mr-2 h-14 w-12 " />
      </button>
      <div className=' w-[125%] sm:max-w-[95%] md:max-w-[85%] lg:max-w-[100%] sm:pl-16 md:pl-8'>
        <Image
          src={urlForImage(ShoeImage).url()} alt="image" width={300} height={300}
        />
      </div>
    </>
  );
}

