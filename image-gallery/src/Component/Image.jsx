import React from 'react'

const Image = ({
  urls: { regular },
  alt_description,
  likes, 
  user: {
    name,
    porfolio_url,
    profile_image: { medium },
  }
}) => {
  return (
    <div className='image h-[17.5rem] relative overflow-hidden'>
      <img className='w-full h-full block object-cover' src={regular} alt={alt_description} />
      <div className='image-info absolute w-full p-4 bottom-0 left-0 bg-[rgba(0,0,0,0.4)] text-white translate-y-full flex justify-between items-center transition-all'>
        <div>
          <h2 className='font font-extrabold text-md tracking-widest'>{name}</h2>
          <p className='font font-medium'>{likes} likes</p>
        </div>
        <a href={porfolio_url}>
          <img className='rounded-full w-14' src={medium} alt="user-img" />
        </a>
      </div>
    </div>
  )
}

export default Image
