import Card from './Card'
import React from 'react'
import data from './data'
import { useState } from 'react'






function App() {

  const [users, setUsers] = useState(data)

  console.log(users)




  let cards = data.map(user => {
    return (
      <div className='mb-8' >
        <Card
          key={user.id}
          avatar={user.avatar}
          name={user.name}
          age={user.age}
        />
      </div>
    )
  })

  function handleClick() {
    return (
        setUsers('')

    )
  }

  return (

    <div className='bg-[#f28ab2] flex item-center h-screen justify-center align-center'>
      <div className= " bg-[white] w-[30em] h-[48em]  mt-20 p-8 flex flex-col item-center justify-start shadow-2xl rounded-lg">
        <h1 className='text-3xl tracking-wide mb-5'>{users.length} birthday today</h1>
        {users ? cards : ''}
        <button onClick={handleClick} className='bg-[#f28ab2] py-3 text-white text-xl cursor-pointer focus:outline-none'>Clear All</button>
      </div>
    </div>
  );
}

export default App;
