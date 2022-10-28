import React from 'react'
import { useState } from 'react'

const Card = (props) => {

    const [visible, setVisible] = useState(true)


    function handleClick() {
        setVisible(false)
    }

    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true)
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore)
        }

        return (
            <p>
                {isReadMore ? text.slice(0, 150) : text}
                <span onClick={toggleReadMore} className="text-[#49a6e9] cursor-pointer">
                    {isReadMore ? "...Read More" : " Show Less"}
                </span>
            </p>
        )
    }

    return (
        <>
        {
            visible &&
        <div className='w-[40em] mb-20 shadow-2xl'>
            <img className='bg-center bg-cover w-full h-[20em]' src={props.img} alt="" />
            <div className='p-10 flex flex-col item-center justify-center'>
                <div className='flex item-center justify-between mb-10'>
                    <h1 className='font-bold tracking-widest text-[#102A42]'>{props.about}</h1>
                    <span className='text-[#49a6e9] font-bold bg-[#dbedfb] p-1 tracking-widest  '>{props.price}</span>
                </div>
                <div>
                    <ReadMore className='text-[#617d982] mb-10'>{props.text}</ReadMore>
                </div>
                <button onClick={handleClick} className='text-[#bb2525] border border-solid border-[#bb2525] w-48 h-8 m-auto cursor-pointer rounded-md  focus:outline-none'>Not Interested</button>
            </div>
        </div>
        }
            </>
       
    )
}

export default Card
