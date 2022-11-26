import React, { useEffect, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import axios from 'axios'

const clientID = `?client_id=${import.meta.env.VITE_APP_API_KEY}`
const mainURL = `https://api.unsplash.com/photos/`
const searchURL = `https://api.unsplash.com/search/photos/`

const Photos = () => {

    const [loading, setLoading] = useState(false)
    const [images, setImages] = useState([])
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState('')

    const fetchImages = async () => {
        setLoading(true)
        let url;
        const urlPage = `&page=${page}`
        const urlQuery = `&query=${query}`

        if (query) {
            url = `${searchURL}${clientID}${urlPage}${urlQuery}`
        }
        else {
            url = `${mainURL}${clientID}${urlPage}`
        }

        try {
            const res = await axios.get(`url`)
            console.log(res.data)

            setImages(prevImages => {
                if (query && page === 1) {
                    return data.results
                }
                else if (query) {
                    return [...prevImages, ...data.results]
                }
                else{
                    return [...prevImages, ...data]
                }

            })


            setLoading(false)
            setImages(data)
            console.log(images)

        }
        catch (error) {
            console.log(error)
            setLoading(false)
        }
    }



    useEffect(() => {
        fetchImages()
    }, [page])




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
