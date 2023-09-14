import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import imdb from '../assets/imdb.png';

import Movies from '../components/Movies'
import Footer from '../components/Footer'

import { PiTelevisionBold, PiPlayBold } from 'react-icons/pi'
import { HiMenuAlt4, HiSearch } from 'react-icons/hi'



const Home = () => {
    const navigate = useNavigate()
    const delay = () => {
        navigate("*");
    };

    const API_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=e0638008799910efda66a9cf613f9d53`;
    const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=e0638008799910efda66a9cf613f9d53&query`;

    const [movieList, setMovieList] = useState('')
    const [searchedMovie, setSearchedMovie] = useState('')
    const [isError, setIsError] = useState(false)

    const errorCheck = ()=> {
        setTimeout(() => { setIsError((prev) => !prev) }, 1000)
    }
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
        if (searchedMovie == '') {
            errorCheck();
            fetchMovie();
        } else if (searchedMovie) {
            try {
                const res = await fetch(`${API_SEARCH}=${searchedMovie}`);
                const data = await res.json();
                setMovieList(data.results)
                setTimeout(() => { setSearchedMovie("") }, 1500)
            } catch (error) {
                delay();
            }
        }
    }


    useEffect(() => {
        setTimeout(() => { fetchMovie() }, 1000)
    }, [])


    return (
        <div className='flex flex-col bg-[#F4F5F7] min-h-screen'>
            <header className='flex flex-col gap-[4rem] px-2 md:px-8 py-2'>
                <nav className='flex items-center justify-between text-white relative'>
                    <div className='flex items-center md:gap-2 md:basis-1/4'>
                        <div className='bg-rose-700 w-[50px] h-[50px] rounded-full grid place-content-center'>
                            <PiTelevisionBold className='text-xl' />
                        </div>
                        <span className='font-semibold md:text-lg ms-2'>MovieBox</span>
                    </div>
                    <div className="group ms-4 md:basis-1/2">
                        <input placeholder="Search for a movie..." className="input" value={searchedMovie} onChange={(event) => { setSearchedMovie(event.target.value.toLowerCase()) }} />
                        <HiSearch className='icon cursor-pointer ' onClick={searchMovie} />
                    </div>
                    <div className="hidden md:flex items-center justify-end gap-2 md:basis-1/4">
                        <span className='font-semibold'>Sign in</span>
                        <div className='bg-rose-700 w-[36px] h-[36px] rounded-full grid place-content-center'>
                            <HiMenuAlt4 />
                        </div>
                    </div>
                    {isError ? <div class="warning absolute top-0 right-0 animate__animated animate__bounceIn">
                        <div className="warning__icon">
                            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13 14h-2v-5h2zm0 4h-2v-2h2zm-12 3h22l-11-19z" fill="#393a37"></path></svg>
                        </div>
                        <div className="warning__title">You entered an empty value, try again!</div>
                        <div className="warning__close" onClick={errorCheck}><svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z" fill="#393a37"></path></svg></div>
                    </div> : null}
                </nav>
                <div className="text-white md:w-[40%] flex flex-col gap-3">
                    <h1 className='text-lg md:text-xl font-semibold'>John Wick 3 : <br /> Parabellum</h1>
                    <div className="flex gap-1 items-center">
                    <img src={imdb} className='w-[50px]' loading='lazy' />
                    <span className='text-[12px]'>7.4 / 10</span>
                    </div>
                    <p className='text-[12px] md:text-md'>Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.</p>
                    <button className='bg-rose-800 py-2 px-6 rounded-lg flex items-center w-fit gap-2 text-[12px] md:text-md'>
                        < PiPlayBold/>Watch Trailer</button>
                </div>
            </header>
            <Movies movieList={movieList} />
            <Footer />
        </div>
    )
}


export default Home;