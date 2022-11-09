import React, { useState } from 'react'
import data from '../data'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function Questions({ id, question, answer }) {
    const [viewAnswer, setViewAnswer] = useState(false)

   const handleClick = () => {
    setViewAnswer(prev => !prev)
   }

    return (
        <div className='text-black bg-[white] shadow-lg px-4 mb-5'>
            <div className='flex justify-between py-5 px-1'>
                <h1 className='font-semibold text-xl tracking-widest'>{question}</h1>
                <div>

                <button onClick={handleClick}>{ viewAnswer && <RemoveIcon />}</button>
                <button onClick={handleClick}>{ !viewAnswer && <AddIcon  />}</button>
                </div>
                
            </div>
            {viewAnswer && <p className='text-[#324d67] pb-5' >{answer}</p>}

        </div>
    )
}

export default Questions
