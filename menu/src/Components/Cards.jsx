import React from 'react'

function Cards({ title, category, price, img, detail }) {
    return (
        <div >

            <div className='flex items-center justify-between gap-11 mb-5 '>
                <div className='w-[30em] h-[5em] border-4 border-[#c59d5f]'>
                    <img className='' src={img} alt="" />
                </div>
                <div>
                    <div>
                        <h1>{title}</h1>
                        <p>${price}</p>
                    </div>
                    <div></div>
                    <p>
                        {detail}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cards
