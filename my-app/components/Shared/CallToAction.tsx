"use client";
import React, { FC } from 'react'

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from '@/store/slice/cartSlice'
import { Image as IImage } from 'sanity'
import { ShoppingCart } from 'lucide-react';
import { Button } from '../ui/button';


interface IProduct {
    _id: string;
    title: string;
    image: IImage;
    price: number;
}


const CallToAction: FC<{ props: any }> = ({ props }) => {
    const [counter, setCounter] = useState<number>(1);
    const data:IProduct=props

    useEffect(() => {
        return () => {
            setCounter(1);
        };
    }, [data]);

    const dispatch = useDispatch();

    function addToCartHandler() {
        dispatch(addToCart({ product: data, quantity: counter }));
    }

    function increment() {
        if (counter < 10) {
            setCounter((prev) => prev + 1);
        }
    }
    function decrement() {
        if (counter > 1) {
            setCounter((prev) => prev - 1);
        }
    }

    function onInputNumberChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        if (+e.currentTarget.value >= 1 && +e.currentTarget.value <= 10) {
            setCounter(+e.currentTarget.value);
        }
    }

    return (
        <div className="flex flex-col items-center flex-grow sticky top-10 md:top-36 max-w-[350px] mt-8 ml-auto px-6 py-4 sm:p-4 xl:p-6  shadow-lg">
            <div className="flex gap-x-4">
            <button
                onClick={decrement}
                className="flex justify-center items-center rounded-full bg-green-300 text-xl w-6 h-6"
            >-</button>
            <div>{counter}</div>
            <button
                onClick={increment}
                className="flex justify-center items-center rounded-full bg-green-300 text-xl w-6 h-6"
            >
                +
            </button>
            </div>
            
            <div className="mt-4">

                <Button onClick={addToCartHandler}>
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
            </div>
        </div>
    );
};

export default CallToAction;
