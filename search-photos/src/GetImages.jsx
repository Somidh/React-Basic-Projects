import React, { useEffect, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import axios from 'axios'
import * as dotenv from 'dotenv'



const Photos = () => {
    dotenv.config()
    
    const [loading, setLoading] = useState(false)
    const [images, setImages] = useState([])
    
    const mainURL = 'https://api.unsplash.com/photos/'
    const searchURL = 'https://api.unsplash.com/search/photos/'
    
    
    useEffect(() => {
        const fetchImages = async () => {

        const res = await axios.get(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_API_KEY}`)
        setImages(res.data)
        console.log(res.data)
    }
    fetchImages()
},[])

const NODE_ENV = process.env.NODE_ENV;
// useEffect(() => {
//     const fetchImages = async () => {
//         const res = await fetch(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
//         const data = await res.json()
//         setImages(data)
//         console.table(data)
//     }

//     fetchImages()
// },[])


    return (
        <div>
            <nav>
                <input type="text" placeholder='Search' />
                <BiSearchAlt2 />
            </nav>

            <div>
                <p></p>
            </div>
        </div>
    )
}

export default Photos
