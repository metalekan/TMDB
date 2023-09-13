import React from 'react'

import MovieCard from './MovieCard'

const Movies = ({ movieList }) => {

  return (
    <main className='bg-[gol] flex flex-col p-8 bg-[#F4F5F7]'>
      <h1 className='text-gray-900 text-xl text-start font-bold my-6'>My Movies</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 min-h-screen gap-8 p-4 border-2'>
        {
          movieList ? movieList.slice(0, 10).map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
            : <div className="spinner self-center justify-self-center"></div>
        }
      </div> 
    </main>
  )
}

export default Movies