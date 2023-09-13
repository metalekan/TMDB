import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
    return (
        <Link to={`/${movie.id}`}>
            <div className='rounded-b-xl hover:scale-105 duration-500'>
                <img className='w-full object-contain' loading='lazy' data-testid="movie-poster" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                <div className="flex flex-col gap-2 mt-2">
                    <span className='text-gray-400' data-testid="movie-release-date">Release Date : {movie.release_date}</span>
                    <span className='text-gray-900 text-md font-bold' data-testid="movie-title">Title : {movie.title}</span>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard