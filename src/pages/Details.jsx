import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

import { BiSolidStar, BiHome, BiCameraMovie, BiLogOut } from 'react-icons/bi'
import { PiTelevision, PiTelevisionBold, PiDotOutlineFill, PiTagFill } from 'react-icons/pi'
import { MdOutlineCalendarMonth, MdMenu } from 'react-icons/md'
import ReactPlayer from 'react-player/youtube'


const Details = () => {
    const navigate = useNavigate()
    const delay = () => {
        navigate("*");
    };

    const [findMovie, setFindMovie] = useState("")
    const [trailer, setTrailer] = useState("")
    const { id } = useParams();

    const API_DETAIL = `https://api.themoviedb.org/3/movie/${id}?api_key=e0638008799910efda66a9cf613f9d53`;
    const VIDEO_DETAIL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=e0638008799910efda66a9cf613f9d53&append_to_response=videos`;

    const searchMovieById = async () => {
        try {
            const res = await fetch(API_DETAIL);
            const data = await res.json();
            setFindMovie(data)
        } catch (error) {
            delay();
        }
    }
    const searchTrailerById = async () => {
        try {
            const res = await fetch(VIDEO_DETAIL);
            const data = await res.json();
            setTrailer(data.results[0].key)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setTimeout(() => { searchMovieById() }, 2000)
        searchTrailerById()
    }, [])

    const { title, genres, overview, release_date, runtime, revenue, budget, status } = findMovie

    return (
        <main className='w-screen min-h-screen flex items-center bg-[#F4F5F7]'>
            <nav className="w-[16%] h-screen hidden xl:flex">
                <ul className="h-full flex flex-col justify-around items-center shadow-xl px-4 border rounded-r-[3rem]">
                    <Link to="/" className='flex gap-4 items-center'>
                        <div className='bg-rose-700 w-[50px] h-[50px] rounded-full grid place-content-center'>
                            <PiTelevisionBold className='text-white text-xl' />
                        </div>
                        <span className='font-semibold'>MovieBox</span>
                    </Link>
                    <li>
                        <a href="/" className='text-[#666666] flex gap-4 md:w-[150px]'>
                            <BiHome className='text-[25px]' />
                            <span>Home</span>

                        </a>
                    </li>
                    <li>
                        <a href="/" className='text-[#666666] flex gap-4 md:w-[150px]'>
                            <BiCameraMovie className='text-[25px]' />
                            <span className='text-rose-700 font-bold text-md'>Movies</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className='text-[#666666] flex gap-4 md:w-[150px]'>
                            <PiTelevision className='text-[25px]' />
                            <span>TV Series</span>
                        </a>

                    </li>
                    <li>
                        <a href="/" className='text-[#666666] flex gap-4 md:w-[150px]'>
                            <MdOutlineCalendarMonth className='text-[25px]' />
                            <span>Upcoming</span>
                        </a>

                    </li>
                    <div className="p-3 m-4 border border-rose-900 rounded-2xl bg-rose-100">
                        <h3 className='text-[12px]'>Play movie quizes and earn free tickets</h3>
                        <p className='text-[10px]'>50k people are playing now</p>
                        <span className='text-[10px] text-rose-900 bg-gray-300 p-1 rounded-lg'>Start playing</span>
                    </div>
                    <li>
                        <a href="/" className='text-[#666666] flex gap-4 md:w-[150px]'>
                            <BiLogOut className='text-[25px]' />
                            <span>Log out</span>
                        </a>

                    </li>
                </ul>
            </nav>
            <div className="w-full h-full flex items-center justify-center p-1 xl:p-4">
                {
                    findMovie ?
                        <div className="w-full">
                            <div className='w-full mb-4 overflow-hidden'>
                                <ReactPlayer url={`https://www.youtube.com/watch?v=${trailer}`} />
                            </div>
                            <div className="flex flex-col md:flex-row px-3 md:p-0">
                                <div className="basis-[70%] flex flex-col justify-between">
                                    <div className="flex md:flex-row flex-col items-center text-[#333333]">
                                        <div className="flex flex-row items-center text-sm md:text-md font-semibold gap-4 me-4">
                                            <span data-testid="movie-title">{title}</span>
                                            <PiDotOutlineFill/>
                                            <span data-testid="movie-release-date">{release_date}</span>
                                            <PiDotOutlineFill/>
                                            <span data-testid="movie-runtime">{`${Math.floor(runtime / 60)}h  ${runtime % 60}m`}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-3 mt-2 md:mt-0">
                                            {
                                                genres.map((genre, index) => (
                                                    <span key={index} className='text-rose-700 text-sm font-semibold p-1 px-2 border border-rose-200 rounded-full'>{genre.name}</span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <p className="leading-8 my-4 text-sm md:text-md text-[#333333]" data-testid="movie-overview">{overview}</p>
                                    <div className="flex flex-col text-sm md:text-md gap-4">

                                        <p>Budget : <span className='text-rose-600 '>{
                                            budget ? `$${budget.toLocaleString()}` : `Not available`
                                        }</span></p>
                                        <p>Revenue : <span className='text-rose-600'>{
                                            revenue ? `$${revenue.toLocaleString()}` : `Not available`
                                        }</span></p>
                                    </div>
                                    <div className="border rounded-md py-2 my-4 text-sm md:text-md">
                                        <span className='p-2 w-full bg-rose-700 rounded-md text-white'>Top rated movie</span>
                                        <span className='p-2'>Awards & nominations</span>
                                    </div>
                                </div>
                                <div className="basis-[30%] p-6 flex flex-col justify-between text-sm md:text-md">
                                    <div className="flex justify-end items-center gap-4">
                                        <BiSolidStar className="text-[gold]" />
                                        <span>{status}</span>
                                        <span>350k</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <button className='p-2 w-full bg-rose-700 rounded-md text-white flex items-center justify-center gap-1'><PiTagFill/>See Showtimes</button>
                                        <button className='p-2 w-full bg-rose-200 border border-rose-700 rounded-md flex items-center justify-center gap-1'><MdMenu/>More watch options</button>
                                    </div>
                                </div>
                            </div>
                        </div> : <div className="honeycomb">
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

export default Details;