import { Footer } from '@/components/Layout/Footer'
import { NavBar } from '@/components/Layout/NavBar'
import CatBanner from '@/components/Sections/CatBanner'
import CatSection from '@/components/Sections/CatSection'
import { Hero } from '@/components/Sections/Hero'
import NewArrivals from '@/components/Sections/NewArrivals'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    {/* @ts-ignore */}
    <Hero/>
    <CatBanner/>
    {/* @ts-ignore */}
    <CatSection/>
    {/* @ts-ignore */}
    <NewArrivals/>
    </>
  )
}
