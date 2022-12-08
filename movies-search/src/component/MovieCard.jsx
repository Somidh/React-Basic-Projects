import React from 'react'
import {Link} from 'react-router-dom'

const MovieCard = ({ poster_path, original_title, release_date,id }) => {
    return (
        <Link to={`/about/${id}`}>
            <div className=' movieCard w-80 h-[30em] relative overflow-hidden '>
                <img className='w-full h-full object-cover ' src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" />
                <div className='movieName absolute bg-[rgba(0,0,0,.5)] bottom-0 text-white translate-y-full transition-all duration-500 w-full p-4 '>
                    <h3 className='font_open_sans font-bold tracking-widest'>{original_title}</h3>
                    <p className='font_open_sans'>{release_date?.slice(0,4)}</p>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard
