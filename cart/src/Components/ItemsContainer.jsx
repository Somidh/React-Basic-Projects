import React, { useReducer } from 'react'
import data from '../data'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function ItemsContainer() {

  const items = data.map(item => {
    return (
      <div className='flex w-80 items-center justify-between'>
        <div className='flex' >
          <img className='w-16' src={item.image} alt="" />
          <div className='flex flex-col items-start justify-center'>
            <h3>{item.title}</h3>
            <span>${item.price}</span>
            <button>remove</button>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center cursor-pointer'>
          <KeyboardArrowUpIcon />
          <span className='cursor-default'>{item.amount}</span>
          <KeyboardArrowDownIcon />
        </div>
      </div>
    )
  })


  function reducer(state, action) {
    switch(action.type) {
      case 'Increment_item': {
        return {
          ...state,
          amount: state.amount + 1
        }
      }

      case 'Decrement_item' : {
        return {
          ...state,
          amount: state.amount - 1
        }
      }
      case 'Remove' : {
        return {
            ...state,
            state: state.filter(item => item.id != action.id)

        }
      }

      case 'Remove_all': {
        return {
          ...state,
          state: state.splice()
        }
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, items)  








  return (
    <div className='flex items-center justify-center flex-col mt-28 gap-8 w-80 m-auto'>
      <h1 className='uppercase'>your bag</h1>
      {items}
      <div className='w-full bg-black h-[2px]'></div>
      <div className='flex items-center justify-between w-full'>
        <p>Total</p>
        <span>$2199.96</span>
      </div>

      <button >Clear Cart</button>


    </div>
  )
}

export default ItemsContainer
