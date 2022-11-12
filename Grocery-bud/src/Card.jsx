import { PersonalVideo } from '@mui/icons-material';
import React, { useState, useEffect } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Card() {

    const [input, setInput] = useState('')
    const [items, setItems] = useState([])
    // const [message, setMessage] = useState('')

    console.log(items)


    function addItem(e) {
        e.preventDefault()
        input &&
            setItems([...items, input])
        setInput('')
    }

    const deleteAll = () => {
        setItems(prev => (
            { ...prev },
            prev.splice()
        ))
    }

    const deleteBtn = (idx) => {

        setItems(prev => (
            { ...prev },
            prev.filter((items, id) => id !== idx)
        ))

        //     const updatedItems= items.filter((item, id) => {
        //         return id !== idx
        //     })
        //    setItems(updatedItems)

    }
    const editBtn = (item, indx) => {
        setInput(item)

        setItems(prev => (
            { ...prev },
            prev.filter((items, id) => id !== indx)
        ))
        
    }

    //  let showMessage = useEffect(() => {
    //         setMessage("items added")   
    //         const timer = setTimeout(() => {
    //            <p>{message}</p>
    //           }, 1000);
    //           return () => clearTimeout(timer);

    //    },[addItem])


    return (
        <div className='bg-[#242424] p-10 w-[30em] rounded-lg'>
            {/* <p>{showMessage}</p> */}
            <h1 className='text-5xl font-bold mb-6'>Grocery Bud</h1>
            <form  className='flex items-center justify-center'>
                <input className='bg-[#ffffffde] h-8 px-2 focus:outline-none rounded-l-md text-black' value={input} type="text" placeholder='e.g.eggs' onChange={(e) => setInput(e.target.value)} />
                <button onClick={addItem} className="bg-[#a5d5f8] py-[3px] px-3 text-[#222] rounded-r-md  text-center">Submit</button>
            </form>

            <div>
                {
                    items.map((item, indx) => {
                        return (
                            <div className='flex items-center justify-between mt-5' key={indx}>
                                <p className='tracking-widest'> {item}</p>
                                <div className='flex items-center gap-1 '>
                                    <button className='bg-transparent' onClick={() => editBtn(item, indx)}><EditIcon /></button>
                                    <button className='bg-transparent' onClick={() => deleteBtn(indx)}><DeleteIcon /></button>
                                </div>
                            </div>

                        )
                    })
                }
                <button className='mt-5  bg-[#a5d5f8] text-[#222] py-1 px-2 text-center' onClick={deleteAll}>Delete All</button>

            </div>
        </div>
    )
}

export default Card




{/* <AddItems
input={item}
key={indx}
deleteBtn={deleteBtn(indx)}
editBtn={editBtn}
/> */}