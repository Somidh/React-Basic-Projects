import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AboutMovie = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const [movieDetail, setMovieDetail] = useState([])
    const apiKey = import.meta.env.VITE_APP_MOVIE_API_KEY
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=6cd1b828745bc502298b15a5b7951e4d&language=en-US`

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setMovieDetail(res.data)
            })
    }, [url])

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div className='flex item-center justify-center w-[60vw] mx-auto gap-8 my-20'>
            <div className='w-[50em] h-[30em] object-cover'>
                <img className='h-full w-full object-cover' src={`https://image.tmdb.org/t/p/original/${movieDetail?.poster_path}`} alt="" />
            </div>
            <div className='flex items-start justify-start gap-2 flex-col'>
                <h1 className='font_open_sans font-extrabold text-4xl '>{movieDetail?.title}</h1>
                <p className='text-[rgb(50,77,103)] text-lg'>{movieDetail?.overview}</p>
                <span>{movieDetail?.release_date?.slice(0,4)}</span>

                <button onClick={handleClick} className='bg-[#49a6e9] py-2 px-4 rounded-md text-white'>Back to Movies</button>
            </div>
        </div>
    )
}

export default AboutMovie
