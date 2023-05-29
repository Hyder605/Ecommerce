import React, { FC, ReactNode } from 'react'

export const Wrapper:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className='max-w-screen-2xl mx-auto px-4 bg-red-200'>
        {children}
    </div>
  )
}