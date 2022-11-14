import React from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';

function Navbar() {
  return (
    <div className='flex items-center justify-around w-full bg-[#2680c0] h-20'>
      <div>
        <h1 className='text-4xl font-extrabold tracking-widest'>UseReducer</h1>
      </div>
      <div className='relative'>
        <LocalMallIcon fontSize="large" />
        <span className='absolute bg-[#85c6f4] text-[#ffffff] font-bold text-xl rounded-full w-7 h-7 flex items-center justify-center top-[-14px] right-[-14px] '>6</span>
      </div>
    </div>
  )
}

export default Navbar
