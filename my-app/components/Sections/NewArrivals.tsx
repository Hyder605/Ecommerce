import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { Wrapper } from "../Shared/Wrapper";
import CardNewArrival from "../Shared/CardNewArrival";
import { client } from '@/sanity/lib/client'
import { Image as IImage } from 'sanity'
import { urlForImage } from '@/sanity/lib/image'
import Link from "next/link";
import { CarouselNew } from "../Shared/CarouselNew";



interface IProduct {
  _id: string,
  title: string,
  image: IImage,
  price: number,
  Product_category: string
}


async function getProductData() {
  const res: IProduct[] = await client.fetch(`*[_type=='product']{_id,title,image,price,'Product_category':category->name}[0...4]`)
  const imagedata = res
  return imagedata
}

export default async function NewArrivals() {
  const data = await getProductData();
  const slidedata = data.map((item) => item.image)

  return (
    <section>
      <Wrapper>
        <div className="pt-64">
          <div className="font-extrabold text-lg px-10">
            New Arrivals
          </div>
          <div className="flex flex-col-reverse gap-y-4 lg:flex-row py-4 px-8">
            <div className="grid md:grid-cols-2 gap-y-3 md:gap-x-3 lg:w-1/2">
              {data.map((item) => {
                return (
                  <Link key={item._id} href={`./product/${item._id}`} className="grid gap-2 lg:px-2 items-center content-between">
                    <CardNewArrival props={item} />

                  </Link>
                )
              })}
            </div>


            <div className="rounded-lg flex justify-center items-center bg-green-200 lg:w-1/2">
              <CarouselNew props={slidedata}/>
            </div>
          </div>

        </div>

      </Wrapper>
    </section>
  )
}
