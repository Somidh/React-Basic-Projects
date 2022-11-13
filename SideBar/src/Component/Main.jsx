import React,{useState} from 'react'

function Main() {

const [showContent , setShowContent] = useState(false)

    const handleClick = () => {
        setShowContent(prev => !prev)
    }

    return (
        <div >
          
            <button>Show Modal</button>

        
        </div>
    )
}

export default Main
