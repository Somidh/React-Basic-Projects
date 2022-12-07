import './App.css'
// import InfiniteScroll from 'react-infinite-scroll-component'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Image from './Component/Image'
import { AiOutlineSearch } from 'react-icons/ai'
import { ThreeDots } from 'react-loader-spinner'

const clientID = `?client_id=${import.meta.env.VITE_APP_API_KEY}`
const mainUrl = `https://api.unsplash.com/photos`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [query, setQuery] = useState('')
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [newImages, setNewImages] = useState(false)
  const [loading, setLoading] = useState(false)
  const mounted = useRef(false)




  const fetchImages = async () => {
    let url

    const urlPage = `&page=${page}`
    const urlQuery = `&query=${query}`
    // const perPage = `&per_page=50`

    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`
    }
    else {
      url = `${mainUrl}${clientID}${urlPage}`
    }

    try {
      const res = await axios.get(url)
      const data = await res.data
      setImages(prev => {
        if (query && page === 1) {
          return data.results
        }
        else if (query) {
          return [...prev, ...data.results]
        }
        else {
          return [...prev, ...data]
        }
      })

      setNewImages(false)
      setLoading(false)
    }
    catch (error) {
      setNewImages(false)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [page])

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    if (!newImages) return
    if (loading) return

    setPage((prev) => {
      return prev + 1
    })
  }, [newImages])



  const event = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      setNewImages(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', event)
    return () => window.removeEventListener('scroll', event)
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!query) return
    if (page === 1) {
      fetchImages()
    }
    setPage(1)
  }

  return (
    <div className="h-full mt-20">
      <div className='flex flex-cols items-center justify-start '>
        <input
          type="text"
          placeholder='Search'
          value={query}
          onChange={e => setQuery(e.target.value)}
          className=' font w-96 px-4 py-4 bg-transparent border-b-2 border-w border-[#617d98] outline-none text-[#315b80] font-semibold text-2xl tracking-widest'
        />
        <button type='submit' onClick={handleSubmit} className='outline-none'>
          <AiOutlineSearch className='text-[#617d98] text-2xl' />
        </button>
      </div>
      <div className=''>
        <div className='w-[90vw] max-w-[1170px] my-0 mx-auto grid gap-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-20 '>
          {images.map((img, idx) => (
            <Image key={idx} {...img} />
          ))}
        </div>
      </div>
      <div className=' w-full flex items-center justify-center'>

        {!loading && <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#617d98"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />}
      </div>
      {/*  */}
      {/* <div className='grid grid-cols-2'>
        <div className='flex'>

          <InfiniteScroll
            dataLength={images.length}
            next={fetchImages}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {images.map((img, idx) => (
              <Image key={idx} {...img} />
            ))}
          </InfiniteScroll>
        </div>

        {loading && <h2>Loading...</h2>}
      </div> */}


    </div>
  )
}

export default App
