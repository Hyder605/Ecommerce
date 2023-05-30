import Link from 'next/link'
import React from 'react'
import CatCard from '../Shared/CatCard'

export default function CatSection() {
  return (
    <div>
  <div className="grid  sm:grid-cols-[repeat(2,auto)] md:grid-cols-[repeat(3,auto)] gap-y-[300px] md:gap-y-[340px] lg:gap-y-[370px] gap-x-4 md:gap-x-8 px-5 md:px-10">
    <Link href={""} className="w-full">
      <CatCard />
    </Link>
    <Link href={""} className="w-full">
      <CatCard />
    </Link>
    <Link href={""} className="w-full">
      <CatCard />
    </Link>
    <Link href={""} className="w-full">
      <CatCard />
    </Link>
    
  </div>
</div>

  )
}
