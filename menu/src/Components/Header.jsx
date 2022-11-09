import React from 'react'

function Header() {
    return (
        <div className='flex flex-col items-center mb-10'>
            <div className='mb-1 flex flex-col items-center '>
                <h1 className=' text-[#102a42] text-[2.6em] tracking-wide font-semibold'>Our Menu</h1>
                <div className='bg-[#c59d5f] w-20 h-1 rounded '></div>
            </div>
            <nav>
                <ul className=' flex items-center justify-between gap-10 mt-5'>
                    <li className='text-[#c59d5f] tracking-widest font-light cursor-pointer' >All</li>
                    <li className='text-[#c59d5f] tracking-widest font-light cursor-pointer' >Breakfast</li>
                    <li className='text-[#c59d5f] tracking-widest font-light cursor-pointer' > Lunch</li>
                    <li className='text-[#c59d5f] tracking-widest font-light cursor-pointer' >Shakes</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
