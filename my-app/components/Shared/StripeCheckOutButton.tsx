'use client'

import React from 'react'
import { Button } from '../ui/button'

export default function StripeCheckOutButton() {

    function handleCheckOut(){ }


    return (
        <div>
            <Button onClick={handleCheckOut}>
                CheckOut
            </Button>
        </div>
    )
}
