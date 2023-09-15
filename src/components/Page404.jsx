import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <main className='h-screen flex flex-col justify-center p-4'>
        <h1 className='text-gray-800 text-[8rem]'>404</h1>
        <h2 className='text-gray-800 text-[2rem]'>Oops! This Page Could Not Be Found</h2>
        <p className='flex uppercase'>Sorry but the page you are looking for does not exist, have been removed, name changed, or is temporarily unavailable</p>
        <Link to="/" className='my-4 bg-rose-600 w-fit p-2 rounded-lg text-white'>
            Go to Movies
        </Link>
    </main>
  )
}

export default Page404