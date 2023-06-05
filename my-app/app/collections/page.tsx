
import CardNewArrival from '@/components/Shared/CardNewArrival'
import { Wrapper } from '@/components/Shared/Wrapper'
import React from 'react'

export default function Collections() {
    return (
        <section>
            <Wrapper>
                <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-16 py-16 w-full items-center content-between">
                    <CardNewArrival />
                    <CardNewArrival />
                    <CardNewArrival />
                    <CardNewArrival />
                    <CardNewArrival />
                    <CardNewArrival />
                    <CardNewArrival />
                    <CardNewArrival />
                </div>
            </Wrapper>
        </section>
    )
}
