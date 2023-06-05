'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ShoeHero from '../../components/assets/shoe_hero.png'
import ShoeHero2 from "../assets/shoe_hero2.png"
import ShoeHero3 from "../assets/shoe_hero3.png"
import { StepForward } from "lucide-react"
import { StepBack } from "lucide-react"


import React from 'react'
import Image from "next/image";
import { Wrapper } from "../Shared/Wrapper";
import CardNewArrival from "../Shared/CardNewArrival";

export default function NewArrivals() {
  return (
    <section>
      <Wrapper>
        <div className="pt-64">
          <div className="font-extrabold text-lg px-10">
            New Arrivals
          </div>
          <div className="flex flex-col-reverse gap-y-4 lg:flex-row py-4 px-8 ">
            <div className="grid grid-cols-2 gap-2 lg:px-2 items-center content-between lg:w-1/2">
              <CardNewArrival />
              <CardNewArrival />
              <CardNewArrival />
              <CardNewArrival />
            </div>
            <div className="rounded-lg flex justify-center items-center bg-green-600/50 lg:w-1/2">
              <Carousel 
                autoPlay={true}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                showArrows={false}
              >
                <div >
                  <Image src={ShoeHero} alt="Slide 1" />
                </div>
                <div>
                  <Image src={ShoeHero2} alt="Slide 2" />
                </div>
                <div>
                  <Image src={ShoeHero3} alt="Slide 3" />
                </div>
              </Carousel>
            </div>
          </div>

        </div>

      </Wrapper>
    </section>
  )
}
