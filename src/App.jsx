import React, { useEffect, useState } from 'react'
// import { Route, Routes, useNavigate } from 'react-router-dom'

import Movies from './page/Movies'
import Footer from './components/Footer'
// import Details from './components/Details'

import { PiTelevisionBold } from 'react-icons/pi'
import { HiMenuAlt4, HiSearch } from 'react-icons/hi'



const App = () => {


  const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=e0638008799910efda66a9cf613f9d53';
  const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=e0638008799910efda66a9cf613f9d53&query';

  const [movieList, setMovieList] = useState(null)
  const [searchedMovie, setSearchedMovie] = useState(null)

  const fetchMovie = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setMovieList(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  const searchMovie = async () => {
    setMovieList(null)
    if (searchedMovie == null ) {
      alert("Please enter a title...")
    } else if (searchedMovie) {
      try {
        const res = await fetch(`${API_SEARCH}=${searchedMovie}`);
        const data = await res.json();
        setMovieList(data.results)
      } catch (error) {
        console.log('error')
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {fetchMovie()}, 2000)
  }, [])


  return (
      <div className='flex flex-col'>
        <header className='px-8 py-4'>
          <nav className='flex items-center justify-between'>
            <div className='flex items-center gap-2 md:basis-1/4'>
              <div className='bg-rose-700 w-[50px] h-[50px] rounded-full grid place-content-center'>
                <PiTelevisionBold className='text-white text-xl' />
              </div>
              <span className='font-semibold text-lg'>MovieBox</span>
            </div>
            <div className="group md:basis-1/2">
              <HiSearch className='icon cursor-pointer' onClick={searchMovie} />
              <input placeholder="Search movie by title" type="search" className="input" onChange={(event) => { setSearchedMovie(event.target.value.toLowerCase())}} />
            </div>
            <div className="flex items-center justify-end gap-2 md:basis-1/4">
              <span className='font-semibold'>Sign in</span>
              <div className='bg-rose-700 w-[36px] h-[36px] rounded-full grid place-content-center'>
                <HiMenuAlt4 className='text-white' />
              </div>
            </div>
          </nav>
        </header>
        <Movies movieList={movieList}/>
        <Footer />
      </div>

  )
}


export default App