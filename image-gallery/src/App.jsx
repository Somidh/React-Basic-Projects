import { useEffect, useState } from 'react'
// import './App.css'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import Image from './Component/Image'
import {AiOutlineSearch} from 'react-icons/ai'


function App() {
  const [query, setQuery] = useState('nature')
  const [photos, setPhotos] = useState([])

  console.log(query)
  useEffect(() => {
    fetchImages()
  }, [])

  function handleClick() {
    useEffect(() => {
      fetchImages()
    }, [])
  }


  const fetchImages = () => {
    const apiKey = import.meta.env.VITE_APP_API_KEY
    const apiRoot = `https://api.unsplash.com/search/photos`
    const url = `${apiRoot}?page=1&query=${query}&client_id=${apiKey}&count=10`

    axios.get(url)
      .then(res => {
        console.log(res.data)
        setPhotos([...photos, ...res.data.results])
      })
  }

  return (
    <div className="h-full w-[80em] p-10 ">
      <div className='flex'>
        <input type="text" placeholder='Search' onChange={e => setQuery(e.target.value)} />
        <AiOutlineSearch onClick={handleClick} />
      </div>
      <InfiniteScroll
        dataLength={photos.length}
        next={fetchImages}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {photos.map((item, idx) => (
          <Image url={item.urls.small} key={idx} />
        ))}
      </InfiniteScroll>

    </div>
  )
}

export default App
