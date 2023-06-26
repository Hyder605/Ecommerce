'use client'
import { addToCart, removeItemFromCart } from '@/store/slice/cartSlice';
import React, { useState } from 'react';
import { Image as IImage } from 'sanity'

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export interface CartItem {
  product: any;
  quantity:number
  totalPrice:number
} 
export interface CartState {
  cart: {
    items: CartItem[];
    totalAmount: number;
    totalQuantity: number;
  }

}

interface AddQuantityButtonProps {
  props: {
    _id: string,
    title: string,
    image: IImage,
    price: number
  }
}

export default function AddQuantityButton({ props }: AddQuantityButtonProps) {
  const { items } = useSelector((state: CartState) => state.cart)
  const AddToCart = props

  const productQuantity = useSelector(
    (state: CartState) =>
      state.cart.items.find(
        (item) => item.product._id===AddToCart._id
      ));
  const [value, setValue] = useState(productQuantity?.quantity||1);
  const dispatch = useDispatch()
  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
      dispatch(removeItemFromCart(AddToCart._id));

    } else {
      setValue(0);
    }
  };

  const increment = () => {
    setValue(value + 1);
    dispatch(addToCart({ product: AddToCart, quantity: 1 }));

  };

  return (
    <div className="flex gap-x-4">
      <button
        onClick={decrement}
        className="flex justify-center items-center rounded-full bg-green-300 text-xl w-6 h-6"
      >
        -
      </button>
      <div>{value}</div>
      <button
        onClick={increment}
        className="flex justify-center items-center rounded-full bg-green-300 text-xl w-6 h-6"
      >
        +
      </button>
    </div>
  );
}
