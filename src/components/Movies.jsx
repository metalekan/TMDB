import React from 'react'

import MovieCard from './MovieCard'

const Movies = ({ movieList }) => {

  return (
    <main className='flex flex-col p-1 md:p-8 mb-[4rem]'>
      <h1 className='text-gray-900 text-xl text-start font-bold my-6'>My Movies</h1>
      <div className='grid grid-cols-2 xl:grid-cols-5 min-h-screen gap-8 p-2 md:p-4'>
        {
          movieList ? movieList.slice(0, 10).map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
            : <div className="honeycomb self-center border-2 justify-self-end">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
        }
      </div>
    </main>
  )
}

export default Movies