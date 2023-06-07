'use client'
import React, { useState } from 'react'

export default function AddQuantityButtton() {
    const [value, setValue] = useState(1)

    return (
        <div className='flex gap-x-4'>
            <button onClick={() => {
                if (value > 0) {
                    setValue(value - 1)
                } else
                    setValue(0)
            }}
                className='flex justify-center items-center rounded-full bg-green-300 text-xl w-6 h-6'>-</button>
            <div>{value}</div>
            <button onClick={() => setValue(value + 1)}
                className='flex justify-center items-center rounded-full bg-green-300 text-xl w-6 h-6'>+</button>

        </div >
    )
}
