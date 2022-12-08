import React, { useState, useEffect } from 'react'
// import './App.css'
import axios from 'axios'
import MovieCard from './MovieCard'

const Home = () => {

    const apiKey = import.meta.env.VITE_APP_MOVIE_API_KEY
    const mainUrl = 'https://api.themoviedb.org/3/search/movie?'
    

    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    // const ref = useRef(query)

    // let lastValue = ref.current
    // const url = `${mainUrl}api_key=${apiKey}&language=en-US&query=${query ? query : ''}&page=1&include_adult=false`

    const url = `${mainUrl}api_key=${apiKey}&language=en-US&${query ? `query=${query}` : 'query=batman'}`

    const fetchMovies = async () => {

        try {
            const res = await axios.get(url)
            const data = res.data.results
            setMovies(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [query])




    console.log(movies)

    return (
        <div className="App  w-[60vw] mx-auto my-20">
            <div className='flex flex-col justify-start items-start gap-2 mb-20'>
                <h1 className='font_open_sans text-4xl tracking-wider font-extrabold'>Search Movies</h1>
                <input className=' font_open_sans bg-[white] outline-none w-[30em] px-5 py-3 shadow-sm rounded-md' type="text" value={query} placeholder='eg:batman' onChange={e => setQuery(e.target.value)} />
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {movies.map((item, idx) => (
                    <MovieCard key={idx} {...item} />
                ))}
            </div>

        </div>
    )
}

export default Home
