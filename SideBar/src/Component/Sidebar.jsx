import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone';
import FolderIcon from '@mui/icons-material/Folder';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import MenuIcon from '@mui/icons-material/Menu';


function Sidebar() {

  const [showNavbar, setShowNavbar] = useState(false)


  const handleClickAdd = () => {
    setShowNavbar(prev => !prev)
  }
  const handleClickRemove = () => {
    setShowNavbar(false)
  }

  return (

    <>


      <div>
        <div className='absolute left-10  cursor-pointer' onClick={handleClickAdd}>

          <MenuIcon />
        </div>
      </div>
      <div className={`bg-[crimson] absolute left-0 h-screen w-96 p-8 flex flex-col gap-10 ${showNavbar ? 'translate-x-[0]' : 'translate-x-[-100%]'}  delay-150 duration-300 ease-linear transition-transform`}>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl ' >Coding Addict</h1>
          <div onClick={handleClickAdd}>

            <CloseIcon />
          </div>
        </div>
        <div>

          <ul className='flex flex-col items-start justify-center gap-10 text-2xl font-medium'>
            <li className='flex items-start justify-center gap-2'>
              <HomeTwoToneIcon />Home
            </li>
            <li className='flex items-start justify-center gap-2'>
              <PeopleOutlineTwoToneIcon />Team
            </li>
            <li className='flex items-start justify-center gap-2'>
              <FolderIcon />Project
            </li>
            <li className='flex items-start justify-center gap-2'>
              <CalendarMonthIcon />Calender
            </li>
            <li className='flex items-start justify-center gap-2'>
              <ArticleIcon />Documents
            </li>
          </ul>
        </div>

      </div>
    </>

  )
}

export default Sidebar
