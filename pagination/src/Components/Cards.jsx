import React from 'react'

const Cards = ({ data }) => {
   

    return (
        <div className='flex flex-wrap gap-5 px-20  items-center justify-start max-w-7xl mx-auto w-full'>
            {data.map(item => (
                <div key={item.id} className="w-56 px-1 py-5 gap-1 rounded-lg  bg-white flex flex-col items-center justify-center ">
                    <img className='w-32 rounded-full' src={item.avatar_url} alt="" />
                    <h2 className='text-[#617D98] capitalize font-extrabold font-poppins text-sm tracking-widest'>{item.login}</h2>
                    <a  className='bg-[]' href={item.html_url}><button className='bg-transparent'>View Profile</button></a>
                </div>

            ))}
        </div>
    )
}

export default Cards
