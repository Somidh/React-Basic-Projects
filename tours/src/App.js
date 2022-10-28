import React from 'react'
import Card from './Card'
import data from './data'

function App() {
    const cards = data.map(item => {
      return (
        <Card 
        key={item.key}
        img={item.img}
        about={item.about}
        text={item.text}
        price={item.price}
      />
      )
    })



  return (
    <div className="App  flex flex-col items-center justify-center">
      <h1 className='text-3xl'>Our Tour</h1>
      <hr className='w-40 h-10 ' />
      {cards}
    </div>
  );
}

export default App;
