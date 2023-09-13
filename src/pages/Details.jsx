import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { BiSolidStar, BiHome, BiCameraMovie, BiLogOut } from 'react-icons/bi'
import { PiTelevision, PiTelevisionBold } from 'react-icons/pi'
import { MdOutlineCalendarMonth } from 'react-icons/md'


const Details = () => {
    const navigate = useNavigate()
    const delay = () => {
        navigate("*");
    };

    const [findMovie, setFindMovie] = useState("")
    const { id } = useParams();

    const API_DETAIL = `https://api.themoviedb.org/3/movie/${id}?api_key=e0638008799910efda66a9cf613f9d53`;

    const searchMovieById = async () => {
        try {
            const res = await fetch(API_DETAIL);
            const data = await res.json();
            setFindMovie(data)
        } catch (error) {
            delay();
        }
    }

    useEffect(() => {
        setTimeout(() => { searchMovieById() }, 500)
    }, [])

    const { title, genres, overview, poster_path, release_date, runtime, revenue, budget, status } = findMovie

    return (
        <section className='w-full min-h-screen flex items-center'>
            <nav className="w-[16%] hidden xl:flex">
                <ul className="h-full flex flex-col justify-around items-center px-4 border rounded-r-[3rem]">
                    <div className='flex gap-4 items-center'>
                        <div className='bg-rose-700 w-[50px] h-[50px] rounded-full grid place-content-center'>
                            <PiTelevisionBold className='text-white text-xl' />
                        </div>
                        <span className='font-semibold'>MovieBox</span>
                    </div>
                    <li>
                        <a href="" className='text-[#666666] flex gap-4'>
                            <BiHome className='text-[25px]' />
                            <span>Home</span>

                        </a>
                    </li>
                    <li>
                        <a href="" className='text-[#666666] flex gap-4'>
                            <BiCameraMovie className='text-[25px]' />
                            <span className='text-rose-700 font-bold text-md'>Movies</span>
                        </a>
                    </li>
                    <li>
                        <a href="" className='text-[#666666] flex gap-4'>
                            <PiTelevision className='text-[25px]' />
                            <span>TV Series</span>
                        </a>

                    </li>
                    <li>
                        <a href="" className='text-[#666666] flex gap-4'>
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
                        <a href="" className='text-[#666666] flex gap-4'>
                            <BiLogOut className='text-[25px]' />
                            <span>Log out</span>
                        </a>

                    </li>
                </ul>
            </nav>
            <div className="w-full h-full flex items-center justify-center p-4">
                {
                    findMovie ?
                        <div className="w-full">
                            <div className='mb-8'>
                                <img className='flex object-cover md:h-[50vh] w-full rounded-lg' src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" />
                            </div>
                            <div className="flex flex-col md:flex-row">
                                <div className="basis-[70%] flex flex-col justify-between">
                                    <div className="flex md:flex-row flex-col items-center">
                                        <div className="flex md:flex-row flex-col items-center font-semibold gap-4 me-4">
                                            <span className=' text-lg'>{title}</span>
                                            <span>{release_date}</span>

                                            <span>{`${Math.floor(runtime / 60)}h`}</span>
                                        </div>
                                        <div className="flex gap-3">
                                            {
                                                genres.map((genre, index) => (
                                                    <span key={index} className='text-rose-700 text-sm font-semibold p-1 border border-rose-200 rounded-full'>{genre.name}</span>
                                                ))
                                            }


                                        </div>
                                    </div>
                                    <p className="leading-8 my-4">{overview}</p>
                                    <div className="flex flex-col gap-4">

                                        <p>Budget : <span className='text-rose-600'>{`$${budget.toLocaleString()}`}</span></p>
                                        <p>Revenue : <span className='text-rose-600'>{`$${revenue.toLocaleString()}`}</span></p>
                                    </div>
                                    <div className="border rounded-md py-2">
                                        <span className='p-2 w-full bg-rose-700 rounded-md'>Top rated movie</span>
                                        <span className='p-2'>Awards & nominations</span>
                                    </div>
                                </div>
                                <div className="basis-[30%] p-6 flex flex-col justify-between">
                                    <div className="flex justify-end items-center gap-4">
                                        <BiSolidStar className="text-[gold]" />
                                        <span>{status}</span>
                                        <span>350k</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <button className='p-2 w-full bg-rose-700 rounded-md'>See Showtimes</button>
                                        <button className='p-2 w-full bg-rose-200 border border-rose-700 rounded-md'>More watch options</button>
                                    </div>
                                </div>
                            </div>
                        </div> : <div className="spinner self-center justify-self-center"></div>
                }

            </div>

        </section>
    )
}

export default Details;