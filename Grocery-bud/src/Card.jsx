import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Items from './items';

function Card() {

    const [item, setItem] = useState('')
    const [addItem, setAddItem] = useState(false)

    function handleClick(e) {
        e.preventDefault()
        setAddItem(true)
    }


    function ShowItem() {

        return (
            addItem &&
            <div>
                <p>{item}</p>
                <div>
                    <EditIcon />
                    <DeleteIcon />
                </div>
            </div>

        )
    }



    return (
        <div>
            <h1>Grocery Bud</h1>
            <form >
                <input value={item} type="text" placeholder='e.g.eggs' onChange={(e) => setItem(e.target.value)} />
                <button onClick={handleClick}>Submit</button>
            </form>

            <ShowItem />

        </div>
    )
}

export default Card
