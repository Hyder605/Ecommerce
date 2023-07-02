'use client'

import React, { FC } from 'react'
import { Image as IImage } from 'sanity'
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDispatch } from 'react-redux'
import { NextResponse } from 'next/server'
import { addToCart } from '@/store/slice/cartSlice'


interface IProduct {
  _id: string,
  title: string,
  image: IImage,
  price: number
}



const AddToCartFunctionality: FC<{ props: any }> = ({ props }) => {
  const AddToCart: IProduct = props
  const dispatch = useDispatch()


  const handleAddtoCart = async () => {
    const res = await fetch('https://brown-author-vuowz.ineuron.app:3000/api/ecomcart', {
      method: "POST",
      body: JSON.stringify({
        product_id: AddToCart._id
      })
    })

    const result = await res.json();
    // Dispatch an action with the fetched data
    dispatch(addToCart({ product: AddToCart, quantity:1 }));


  };

  return (
    <Button onClick={handleAddtoCart}>
      <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
    </Button>
  )
}

export default AddToCartFunctionality
