import { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from './Components/Cards'
import { FidgetSpinner } from  'react-loader-spinner'

import Pagination from './Components/Pagination'

function App() {

  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const cardPerPage = 10



  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const res = await axios.get('https://api.github.com/users/john-smilga/followers?per_page=100')
      setCards(res.data)
      setLoading(false)
    }

    fetchData()
  }, [])

  const indexOfLastData = currentPage * cardPerPage
  const indexOfFirstData = indexOfLastData - cardPerPage
  const currentData = cards.slice(indexOfFirstData, indexOfLastData)

  const paginate = (number) => {
    setCurrentPage(number)
  }

  const handleNext = () => {
    setCurrentPage(prev => prev + 1)
  }
  const handlePrev = () => {
    setCurrentPage(prev => prev - 1)

  }


  if (!loading) {
    return <FidgetSpinner
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
    ballColors={['#ff0000', '#00ff00', '#0000ff']}
    backgroundColor="#F4442E"
  />
}

  return (
    <div className="  flex flex-col items-center justify-center text-white text-2xl w-full">
      <h2 className='text-center'>Pagination</h2>
      <div className='w-full flex items-center justify-center flex-col'>
        <Cards data={currentData} />
        <Pagination
          cardPerPage={cardPerPage}
          totalCards={cards.length}
          paginate={paginate}
          handleNext={handleNext}
          handlePrev={handlePrev}

        />
      </div>

    </div>
  )
}

export default App
