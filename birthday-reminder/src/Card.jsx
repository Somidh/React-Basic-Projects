import React from 'react'

export default function card(props) {



    return (
        <div>
            <div className="w-full flex item-center justify-start gap-3">
                <img className='w-20 h-20 rounded-full bg-center bg-cover ' src={props.avatar} alt="" />
                <div className="flex flex-col item-center justify-center">
                    <h1 className='font-bold tracking-widest text-[#102a42]'>{props.name}</h1>
                    <p className='text-[#617d98]'>{props.age} Years</p>
                </div>
            </div>
        </div>
    )
}