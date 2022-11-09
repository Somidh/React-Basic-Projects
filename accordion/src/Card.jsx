import React from 'react'
import Questions from './Components/Questions'
import data from './data'

function Card() {
    const questions =
        data.map(item => {
            return (
                <Questions
                    id={item.id}
                    question={item.question}
                    answer={item.answer}
                />
            )
        })

    return (
        <div className='bg-white flex justify-between w-[60em] p-5 shadow-xl '>
            <div className='flex flex-col w-[40em] m-auto'>
                {questions}
            </div>
        </div>
    )
}

export default Card
