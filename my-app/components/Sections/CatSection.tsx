import Link from 'next/link'
import React from 'react'
import CatCard from '../Shared/CatCard'
import { Wrapper } from '../Shared/Wrapper'
import { client } from '@/sanity/lib/client'
import { Image as IImage } from 'sanity'

interface ICategory {
  _type: string,
  name: string,
  _id: string,
  image: IImage
  slug: string
}

async function getProductData() {
  const res = await client.fetch(`*[_type=='category']{_id,name,image,slug}`)
  const imagedata: ICategory[] = res
  return imagedata
}



export default async function CatSection() {
  const data = await getProductData()
  // console.log(data)
  return (
    <div>
      <Wrapper>
        <div className="grid  sm:grid-cols-[repeat(2,auto)] md:grid-cols-[repeat(3,auto)] gap-y-[300px] md:gap-y-[340px] lg:gap-y-[370px] gap-x-4 md:gap-x-8 px-5 md:px-10">
          {data.map((item) => {
            return (
              <Link key={item._id}  href={`/category/${item.slug}`} className="w-full ">
                <CatCard props={item} />
              </Link>
            )
          })}


        </div>
      </Wrapper>
    </div>

  )
}
