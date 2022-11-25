import React from 'react'

const Pagination = ({ cardPerPage, totalCards, paginate, handleNext, handlePrev }) => {
    const cardNumber = []

    for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
        cardNumber.push(i)
    }



    return (
        <nav>
            <ul className='flex items-center justify-center gap-10 flex-wrap mt-20'>
                <p onClick={handlePrev} className='cursor-pointer'>Prev</p>
                {cardNumber.map(number => (
                    <li onClick={() => paginate(number)} className='text-white' key={number}>
                        <a className='text-white' href="#">{number}</a>
                    </li>
                ))}
                <button onClick={handleNext} className='cursor-pointer'>Next</button>
            </ul>
        </nav>
    )
}

export default Pagination
