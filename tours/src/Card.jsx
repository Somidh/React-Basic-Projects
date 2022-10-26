import React from 'react'
import { useState } from 'react'

const Card = (props) => {

    return (
        <div className='w-[40em] mb-20 shadow-2xl'>
            <img src={props.img} alt="" />
            <div className='p-10'>
                <div className='flex item-center justify-between'>
                    <h1>{props.about}</h1>
                    <span className=''>{props.price}</span>
                </div>
                <div>
                    <p>{props.text}</p>
                </div>
                <button>Not Interested</button>
            </div>
        </div>
    )
}

export default Card
