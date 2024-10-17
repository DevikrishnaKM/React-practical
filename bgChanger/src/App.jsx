import { useState } from 'react'

import Counter from './Counter'

import './App.css'

function App() {
 const [color, setColor] = useState('red')
  return (
     <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 rounded-xl'>
          <button
            onClick={() => setColor('red')}
            className='w-10 h-7 rounded-xl bg-red-500 hover:bg-red-600'
          ></button>
          <button
            onClick={() => setColor('blue')}
            className='w-10 h-7 rounded-xl bg-blue-500 hover:bg-blue-600'
          ></button>
          <button
            onClick={() => setColor('green')}
            className='w-10 h-7 rounded-xl bg-green-500 hover:bg-green-600'
          ></button>
          <button
            onClick={() => setColor('yellow')}
            className='w-10 h-7 rounded-xl bg-yellow-500 hover:bg-yellow-600'
          ></button>
          <button
            onClick={() => setColor('purple')}
            className='w-10 h-7 rounded-xl bg-purple-500 hover:bg-purple-600'
          ></button>
          <button
            onClick={() => setColor('orange')}
            className='w-10 h-7 rounded-xl bg-orange-500 hover:bg-orange-600'
          ></button>
          <button
            onClick={() => setColor('black')}
            className='w-10 h-7 rounded-xl bg-black hover:bg-gray-900'
          ></button>
          <button
            onClick={() => setColor('white')}
            className='w-10 h-7 rounded-xl bg-white outline outline-offset-2\1 outline-1 hover:bg-gray-400'
          ></button>
          </div>
      </div>
      <Counter />
     </div>
  )
}

export default App
