import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Movies from '../components/Movies'
import Footer from '../components/Footer'

import { PiTelevisionBold } from 'react-icons/pi'
import { HiMenuAlt4, HiSearch } from 'react-icons/hi'



const Home = () => {
    const navigate = useNavigate()
    const delay = () => {
        navigate("*");
    };
    const API_URL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=e0638008799910efda66a9cf613f9d53';
    const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=e0638008799910efda66a9cf613f9d53&query';

    const [movieList, setMovieList] = useState('')
    const [searchedMovie, setSearchedMovie] = useState('')

    const fetchMovie = async () => {
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setMovieList(data.results)
        } catch (error) {
            delay();
        }
    }

    const searchMovie = async () => {
        setMovieList('')
        if (searchedMovie == '') {
            alert("Please enter a title...")
            fetchMovie();
        } else if (searchedMovie) {
            try {
                const res = await fetch(`${API_SEARCH}=${searchedMovie}`);
                const data = await res.json();
                setMovieList(data.results)
                setSearchedMovie("")
            } catch (error) {
                delay();
            }
        }
    }

    useEffect(() => {
        setTimeout(() => { fetchMovie() }, 1500)
    }, [])


    return (
        <div className='flex flex-col bg-[#F4F5F7] min-h-screen'>
            <header className='px-2 md:px-8 py-4 bg-slate-50'>
                <nav className='flex items-center justify-between'>
                    <div className='flex items-center md:gap-2 md:basis-1/4'>
                        <div className='bg-rose-700 w-[50px] h-[50px] rounded-full grid place-content-center'>
                            <PiTelevisionBold className='text-white text-xl' />
                        </div>
                        <span className='font-semibold md:text-lg ms-2'>MovieBox</span>
                    </div>
                    <div className="group ms-4 md:basis-1/2">
                        <input placeholder="Search movie by title..." className="input" value={searchedMovie} onChange={(event) => { setSearchedMovie(event.target.value.toLowerCase()) }} />
                        <HiSearch className='icon cursor-pointer ' onClick={searchMovie} />
                    </div>
                    <div className="hidden md:flex items-center justify-end gap-2 md:basis-1/4">
                        <span className='font-semibold'>Sign in</span>
                        <div className='bg-rose-700 w-[36px] h-[36px] rounded-full grid place-content-center'>
                            <HiMenuAlt4 className='text-white' />
                        </div>
                    </div>
                </nav>
            </header>
            <Movies movieList={movieList} />
            <Footer />
        </div>
    )
}


export default Home