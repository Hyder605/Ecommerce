'use client'
import Image from 'next/image';
import { useState } from 'react';
import { HeroSecImageList  } from '../../components/data/heroSecImages';

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
      <button onClick={handleNextClick}>
        Next
      </button>
      <h3>
        ({index + 1} of {HeroSecImageList.length})
      </h3>
      <Image
        src={ShoeImage.url} alt="image"
      />
    </>
  );
}
