import './App.css';
import Cards from './Components/Cards'
import Header from './Components/Header';
import data from './data';



function App() {

  const cards = data.map(item => {
    return(
      <Cards 
        key={item.id}
        title={item.title}
        category={item.category}
        price={item.price}
        img={item.img}
        detail={item.desc}
       />
    )

  })


  return (
    <div className="App my-20">
      <div className='flex flex-col items-center justify-center'>
        <Header />
        <div className='grid 2xl:grid-cols-2 grid-cols-1 w-[60em] '>

        {cards}
        </div>
      </div>
    </div>
  );
}

export default App;
