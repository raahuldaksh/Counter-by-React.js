// counter practice using useState 

import React, { useState } from 'react'

const App = () => {
  

  let [count, setCount] = useState(0);
  return (
    
    <div className='flex flex-col gap-10 justify-center items-center h-screen w-screen '>
      <div className='  text-gray-200 flex justify-center items-center flex-col gap-4  border-10 border-red-500 bg-gradient-to-t from-violet-600 to-indigo-600 h-100 w-100 rounded-full drop-shadow-lg'>
      <div className='flex flex-col justify-center items-center'>
      <h1 className='text-9xl font-bold'> {count}</h1>
      <h1>Click button to change the count</h1>
      </div>
      <div className='flex gap-10'>
      <button className='bg-red-500 px-5 py-1 rounded-full' onClick={()=> {
        setCount(count--)
      }}>decrease -</button>
      <button className='bg-red-500 px-5 py-1 rounded-full' onClick={()=>{
        setCount(count++)
      }}>increase +</button>
      </div>
      </div>
      <div>
        <h1 className='bg-red-500 text-white px-10 py-3 rounded-full'>
        Counter App
        </h1>
      </div>
    </div>
  )
}

export default App