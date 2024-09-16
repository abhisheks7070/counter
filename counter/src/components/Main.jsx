import React, { useState } from 'react'

const Main = () => {

    const [count, setCount] = useState(0)
    const [value, setValue] = useState(1)

    const handleAdd = () => {
        setCount((c) => c + value)
    }
    const handleSub = () => {
        setCount((c) => c - value)
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-5xl'>{count}</h1>
            <button className='px-5 py-3 m-2 bg-red-400' onClick={handleAdd}>+</button>
            <button className='px-5 py-3 m-2 bg-red-400' onClick={handleSub}>-</button>
            <div>
                Increment/Decrement by: <input className='border-black border-2 w-10' type="number" onChange={(e) => { setValue(parseInt(e.target.value)) }} />
            </div>
        </div>
    )
}

export default Main
