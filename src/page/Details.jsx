import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { BiSolidStar, BiHome, BiCameraMovie, BiLogOut, BiSolidMoviePlay } from 'react-icons/bi'
import { PiTelevision, PiTelevisionBold } from 'react-icons/pi'
import { MdOutlineCalendarMonth } from 'react-icons/md'





const Details = () => {
    // const {id} = useParams();
    const API_DETAIL = `https://api.themoviedb.org/3/movie/${id}?api_key=e0638008799910efda66a9cf613f9d53`;

    const [newMovie, setNewMovie] = useState(null)

    const searchMovieById = async() => {
        try {
            const res = await fetch(API_DETAIL);
            const data = await res.json();
            setNewMovie(data.results)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        searchMovieById()
    }, [])

    return (
        <section className='w-full min-h-screen flex'>
            <nav className="side__bar w-[15%]">
                <ul className="h-full flex flex-col justify-around items-center px-4 border rounded-r-[3rem]">
                    <div className='flex gap-4 items-center'>
                        <div className='bg-rose-700 w-[50px] h-[50px] rounded-full grid place-content-center'>
                            <PiTelevisionBold className='text-white text-xl' />
                        </div>
                        <span className='font-semibold'>MovieBox</span>
                    </div>
                    <li className=''>
                        <a href="" className='text-[#666666]'>
                            <BiHome className='text-[25px]' />
                            <span>Home</span>

                        </a>
                    </li>
                    <li className=''>
                        <a href="" className='text-[#666666]'>
                            <BiCameraMovie className='text-[25px]' />
                            <span>Movies</span>
                        </a>
                    </li>
                    <li className=''>
                        <a href="" className='text-[#666666]'>
                            <PiTelevision className='text-[25px]' />
                            <span>TV Series</span>
                        </a>

                    </li>
                    <li className=''>
                        <a href="" className='text-[rgb(102,102,102)] flex border'>
                            <MdOutlineCalendarMonth className='text-[25px]' />
                            <span>Upcoming</span>
                        </a>

                    </li>
                    <div className="p-3 m-4 border border-pink-900 rounded-2xl">
                        <h3 className='text-sm'>Play movie quizes and earn free tickets</h3>
                        <p className='text-[10px]'>50k people are playing now</p>
                        <span className='text-[10px] text-pink-900 bg-gray-300 p-1 rounded-lg'>Start playing</span>
                    </div>
                    <li className=''>
                        <a href="" className='text-[#666666]'>
                            <BiLogOut className='text-[25px]' />
                            <span>Log out</span>
                        </a>

                    </li>
                </ul>
            </nav>
            <div className="">
                <div>
                    <img src="" alt="" />
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <div className="flex">
                            <div className="flex">
                                <span>Meg 2</span>
                                <span>2022</span>
                                <span>PG-13</span>
                                <span>2h 10m</span>
                            </div>
                            <div className="flex">
                                <span>Action</span>
                                <span>Drama</span>
                            </div>
                        </div>
                        <p className="">movie details</p>
                        <div className="flex flex-col">
                            <p>Genres: <span></span></p>
                            <p>Budget: <span></span></p>
                            <p>Revenue: <span></span></p>
                        </div>
                        <div className="border rounded-md">
                            <span>Top rated movie #65</span>
                            <span>Awards 9 nominations</span>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex">
                            <BiSolidStar className="bg-[gold]" />
                            <span>8.5</span>
                            <span>350k</span>
                        </div>
                        <div className="flex flex-col">
                            <button>See Showtimes</button>
                            <button>More watch options</button>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Details