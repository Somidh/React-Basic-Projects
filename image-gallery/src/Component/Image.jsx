import React from 'react'

const Image = ({url, key}) => {
  return (
    <div>
      <img key={key} src={url} alt="" />
    </div>
  )
}

export default Image
